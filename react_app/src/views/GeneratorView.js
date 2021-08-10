import React, { Component } from 'react';
import {Tabs, Tab, Button, Form} from 'react-bootstrap';
import {faArrowLeft, faArrowRight, faPencilAlt, faPlusCircle, faWrench, faTrashAlt, faBars, faTv, faEye, faAngleRight, faGripVertical} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {JsNx} from '../libs/utils/Utils';
import { Options } from './OptionList';
import {$glVars} from '../common/common';
import { FeedbackCtrl } from '../libs/components/Feedback';
import { ComboBox } from '../libs/components/ComboBox';


export class GeneratorView extends Component {
    constructor(props) {
        super(props);
        this.state = {cmList: [], sectionList: [], h5pList: [], activeTab: 'activity', data: [], values: {}, validated: false, initialized: false};
        this.setTab = this.setTab.bind(this);
        this.onChange = this.onChange.bind(this);
        this.generateCode = this.generateCode.bind(this);
    }

    render() {       
        if (!this.state.initialized) return null;
        let main = 
        <Tabs activeKey={this.state.activeTab} onSelect={this.setTab} className="mb-3">
            {Options.map((p, index) => (
                <Tab title={p.name} eventKey={p.key} key={index}>
                    {p.options.map((o, i) => {
                        return this.getInput(o, i);
                    })}
                    <Button onClick={this.generateCode}>Insérer</Button>
                    <Button variant="danger" onClick={this.props.onClose}>Annuler</Button>
                </Tab>
            ))}
        </Tabs>;
        

        return (main);
    }

    getTab(k){
        for (let i in Options){
            if (Options[i].key == k){
                return Options[i];
            }
        }
    }

    setTab(k){
        let validated = false;
        this.currentTab = this.getTab(k);
        if (this.currentTab.singleInput) validated = true;
        this.setState({activeTab: k, data: {}, validated: validated});
        this.resetValues();
    }

    resetValues(){
        let values = this.state.values;
        for (let i in Options){
            for (let v of Options[i].options){
                values[v.key] = "";
            }
        }

        this.setState({values:values});
        return values;
    }

    onChange(e, option){
        let data = this.state.data;
        let values = this.state.values;
        let opt = option.getOption(e.target);
        if (option.required){
            this.setState({validated: true});
        }
        if (this.currentTab.singleInput){
            data = {};
            values = this.resetValues();
        }
        values[e.target.name] = e.target.value || e.target.checked;
        data[e.target.name] = {opt: opt, required: option.required};
        this.setState({data: data, values: values});
    }

    getInput(option, key){
        let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); //Generate a random id for form id

        if (option.input == 'checkbox'){
            return <Form.Group className="mb-3" key={key} controlId={"item"+id}><Form.Check type="checkbox" label={option.name} name={option.key} onChange={(e) => this.onChange(e, option)} checked={this.state.values[option.key]}/></Form.Group>;
        }
        
        if (option.input == 'text'){
            return <Form.Group className="mb-3" key={key} controlId={"item"+id}><Form.Label>{option.name}</Form.Label><Form.Control type="text" name={option.key} onChange={(e) => this.onChange(e, option)} value={this.state.values[option.key]}/></Form.Group>;
        }
        
        if (option.input == 'select'){
            let dataProvider = [];
            if (this.state[option.dataProvider]){
                dataProvider = this.state[option.dataProvider];
            }
            return <Form.Group className="mb-3" key={key} controlId={"item"+id}><Form.Label>{option.name}</Form.Label><ComboBox options={dataProvider} name={option.key} onChange={(e) => this.onChange(e, option)} value={this.state.values[option.key]}/></Form.Group>;
        }
        
        
        if (option.input == 'separator'){
            return <Form.Group className="mb-3" key={key}><hr/></Form.Group>;
        }
    }

    generateCode(){
        if(!this.state.validated){
            FeedbackCtrl.instance.showError($glVars.i18n.appName, "Champs manquant");
            return;
        }
        let data = this.state.data;
        let code = "";
        for (let i in data){
            if (!data[i].required && data[i].opt){//Options first, then required data last
                code += data[i].opt;
            }
        }
        for (let i in data){
            if (data[i].required && data[i].opt){
                code += data[i].opt;
            }
        }
        code = "[[" + code.substr(1) + "]]"; //Remove first slash
        this.props.onClose(code);
    }

    componentDidMount(){
        this.setTab(this.state.activeTab);
        let that = this;
        
        $glVars.webApi.getCmList($glVars.classHandler.get("courseid"), function(result){
            if(!result.success){
                FeedbackCtrl.instance.showError($glVars.i18n.appName, result.msg);
                return;
            }

            let list = [];
            for (let e of result.data){
                list.push({value: e.name, text: e.name + " [" + e.modname + "]"});
            }
            that.setState({cmList: list});
        });
        
        $glVars.webApi.getSectionList($glVars.classHandler.get("courseid"), function(result){
            if(!result.success){
                FeedbackCtrl.instance.showError($glVars.i18n.appName, result.msg);
                return;
            }

            let list = [];
            for (let e of result.data){
                list.push({value: e.name, text: e.name});
            }
            that.setState({sectionList: list});
        });
        
        $glVars.webApi.getH5PList($glVars.classHandler.get("courseid"), function(result){
            if(!result.success){
                FeedbackCtrl.instance.showError($glVars.i18n.appName, result.msg);
                return;
            }

            let list = [];
            for (let e of result.data){
                list.push({value: e.name, text: e.name});
            }
            that.setState({h5pList: list});
        });

        this.setState({initialized: true});
    }
}