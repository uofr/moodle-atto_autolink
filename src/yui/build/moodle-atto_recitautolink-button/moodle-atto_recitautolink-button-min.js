YUI.add("moodle-atto_recitautolink-button",function(t,e){t.namespace("M.atto_recitautolink").Button=t.Base.create("button",t.M.editor_atto.EditorPlugin,[],{initializer:function(){this.get("courseid")&&this.addButton({title:"pluginname",icon:"html",iconComponent:"atto_recitautolink",callback:this.openModal,buttonName:"recitautolink"})},openModal:function(t){var e;t.preventDefault(),e=M.cfg.wwwroot+"/lib/editor/atto/plugins/recitautolink/react/build/index.js",(t=document.createElement("div")).setAttribute("id","recitautolink_container"),this.createPopup(t),document.getElementById("recitautolink")?this.loadUi():((t=document.createElement("script")).onload=this.loadUi.bind(this),t.setAttribute("src",e),t.setAttribute("id","recitautolink"),t.setAttribute("type","text/javascript"),document.getElementsByTagName("head")[0].appendChild(t))},createPopup:function(t){let e=document.createElement("div");e.classList.add("modal","fade","autolink_popup"),e.setAttribute("style","overflow-y: hidden;");let i=document.createElement("div");i.classList.add("modal-dialog"),e.appendChild(i);let o=document.createElement("div");o.classList.add("modal-content"),o.setAttribute("style","width:600px;padding:10px"),i.appendChild(o);let d=document.createElement("div");d.classList.add("modal-header"),d.innerHTML="<h2>"+M.util.get_string("pluginname","atto_recitautolink")+"</h2>",o.appendChild(d);let n=document.createElement("button");n.classList.add("close"),n.innerHTML='<span aria-hidden="true">&times;</span>',n.setAttribute("data-dismiss","modal"),d.appendChild(n);let a=document.createElement("div");a.classList.add("modal-body"),o.appendChild(a),a.appendChild(t),document.body.appendChild(e),this.popup=e,$(e).modal({show:!0,backdrop:!0});let l=this;$(".modal-backdrop").click(()=>$(this.popup).modal("hide")),$(e).on("hidden.bs.modal",function(t){l.destroy()})},destroy:function(){$(this.popup).modal("hide"),this.popup.remove()},update:function(){$(this.popup).modal("handleUpdate")},loadUi:function(){window.openRecitAutolinkUI&&(window.openRecitAutolinkUI(this),this.update())},close:function(e){if(this.destroy(),e){let t=this.get("host");t.focus(),t.insertContentAtFocusPoint(e)}}},{ATTRS:{courseid:{value:!1}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});