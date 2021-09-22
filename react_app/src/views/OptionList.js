import React, { Component } from 'react';
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Options = [
    {
        name: 'Activités',
        key: 'activity',
        options: [
            {
                input: 'select',
                name: 'Activité',
                key: 'activity',
                dataProvider: 'cmList',
                required: true,
                getOption: function(input){
                    if (input.value.length > 0){
                        return "/"+ input.value;
                    }
                }
            },
            {
                input: 'text',
                name: 'Texte du lien',
                key: 'linktext',
                getOption: function(input){
                    if (input.value.length > 0){
                        return "/desc:\""+ input.value+"\"";
                    }
                }
            },
            {
                group: 'action',
                input: 'radio',
                default: true,
                name: 'Ouvrir dans le même onglet',
                key: 'oldtab',
                getOption: function(input){
                    if (input.checked){
                        return "";
                    }
                }
            },
            {
                input: 'radio',
                group: 'action',
                name: 'Ouvrir dans un nouvel onglet',
                key: 'newtab',
                getOption: function(input){
                    if (input.checked){
                        return "/b";
                    }
                }
            },
            {
                group: 'action',
                input: 'radio',
                name: 'Ouvrir dans un modal',
                key: 'modal',
                getOption: function(input){
                    if (input.checked){
                        return "/p";
                    }
                }
            },
            {
                input: 'separator',
            },
            {
                input: 'checkbox',
                name: 'Afficher icône',
                key: 'icon',
                getOption: function(input){
                    if (input.checked){
                        return "/i";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Afficher case à cocher pour completion',
                key: 'completion',
                getOption: function(input){
                    if (input.checked){
                        return "/c";
                    }
                }
            },
            {
                input: 'separator',
            },
            {
                input: 'checkbox',
                name: <span>Bouton <a href="https://getbootstrap.com/docs/4.0/components/buttons/" target="_blank"><FontAwesomeIcon icon={faQuestionCircle}/></a></span>,
                key: 'btn',
                getOption: function(input){
                    if (input.checked){
                        return "";
                    }
                }
            },
            {
                input: 'text',
                name: 'Classe CSS',
                key: 'css',
                getOption: function(input){
                    if (input.value.length > 0){
                        return "/class:\""+ input.value+"\"";
                    }
                }
            },
        ]
    },
    {
        name: 'Sections',
        key: 'section',
        options: [
            {
                input: 'select',
                name: 'Section',
                key: 'section',
                dataProvider: 'sectionList',
                required: true,
                getOption: function(input){
                    if (input.value.length > 0){
                        return "/s/"+ input.value;
                    }
                }
            },
            {
                input: 'text',
                name: 'Texte du lien',
                key: 'linktext',
                getOption: function(input){
                    if (input.value.length > 0){
                        return "/desc:\""+ input.value+"\"";
                    }
                }
            },
            {
                group: 'action',
                input: 'radio',
                default: true,
                name: 'Ouvrir dans le même onglet',
                key: 'oldtab',
                getOption: function(input){
                    if (input.checked){
                        return "";
                    }
                }
            },
            {
                group: 'action',
                input: 'radio',
                name: 'Ouvrir dans un nouvel onglet',
                key: 'newtab',
                getOption: function(input){
                    if (input.checked){
                        return "/b";
                    }
                }
            },
            {
                group: 'action',
                input: 'radio',
                name: 'Ouvrir dans un modal',
                key: 'modal',
                getOption: function(input){
                    if (input.checked){
                        return "/p";
                    }
                }
            },
            {
                input: 'separator',
            },
            {
                input: 'checkbox',
                name: <span>Bouton <a href="https://getbootstrap.com/docs/4.0/components/buttons/" target="_blank"><FontAwesomeIcon icon={faQuestionCircle}/></a></span>,
                key: 'btn',
                getOption: function(input){
                    if (input.checked){
                        return "";
                    }
                }
            },
            {
                input: 'text',
                name: 'Classe CSS',
                key: 'css',
                getOption: function(input){
                    if (input.value.length > 0){
                        return "/class:\""+ input.value+"\"";
                    }
                }
            },
        ]
    },
    {
        name: 'H5P',
        key: 'h5p',
        options: [
            {
                input: 'select',
                name: 'H5P',
                key: 'h5p',
                dataProvider: 'h5pList',
                required: true,
                getOption: function(input){
                    if (input.value.length > 0){
                        //return "/h5p/"+input.value.substr(0, input.value.length -4); //Remove .h5p
                        return "/h5p/"+input.value; 
                    }
                }
            },
        ]
    },
    {
        name: 'Information',
        key: 'info',
        singleInput: true,
        options: [
            {
                input: 'checkbox',
                name: 'Nom du cours',
                key: 'info1',
                getOption: function(input){
                    if (input.checked){
                        return "/d/course.fullname";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Nom court du cours',
                key: 'info2',
                getOption: function(input){
                    if (input.checked){
                        return "/d/course.shortname";
                    }
                }
            },

            {
                input: 'separator',
            },

            {
                input: 'checkbox',
                name: 'Prénom de l\'élève',
                key: 'info3',
                getOption: function(input){
                    if (input.checked){
                        return "/d/user.firstname";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Nom de l\'élève',
                key: 'info4',
                getOption: function(input){
                    if (input.checked){
                        return "/d/user.lastname";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Email de l\'élève',
                key: 'info5',
                getOption: function(input){
                    if (input.checked){
                        return "/d/user.email";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Avatar de l\'élève',
                key: 'info6',
                getOption: function(input){
                    if (input.checked){
                        return "/d/user.picture";
                    }
                }
            },

            {
                input: 'separator',
            },

            {
                input: 'checkbox',
                name: 'Prénom de l\'enseignant #1',
                key: 'info7',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher1.firstname";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Nom de l\'enseignant #1',
                key: 'info8',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher1.lastname";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Email de l\'enseignant #1',
                key: 'info9',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher1.email";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Avatar de l\'enseignant #1',
                key: 'info18',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher1.picture";
                    }
                }
            },

            {
                input: 'separator',
            },

            {
                input: 'checkbox',
                name: 'Prénom de l\'enseignant #2',
                key: 'info10',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher2.firstname";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Nom de l\'enseignant #2',
                key: 'info11',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher2.lastname";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Email de l\'enseignant #2',
                key: 'info12',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher2.email";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Avatar de l\'enseignant #2',
                key: 'info17',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher2.picture";
                    }
                }
            },

            {
                input: 'separator',
            },

            {
                input: 'checkbox',
                name: 'Prénom de l\'enseignant #3',
                key: 'info13',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher3.firstname";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Nom de l\'enseignant #3',
                key: 'info14',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher3.lastname";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Email de l\'enseignant #3',
                key: 'info15',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher3.email";
                    }
                }
            },
            {
                input: 'checkbox',
                name: 'Avatar de l\'enseignant #3',
                key: 'info16',
                getOption: function(input){
                    if (input.checked){
                        return "/d/teacher3.picture";
                    }
                }
            },
        ]
    },
]