/*! For license information please see main.js.LICENSE.txt */
"use strict";(self.webpackChunktodo_lists=self.webpackChunktodo_lists||[]).push([[179],{426:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),o=n.n(a),r=n(645),i=n.n(r)()(o());i.push([e.id,"* {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n  color: #545862;\n}\n\nbody {\n  padding: 10% 20% 10% 20%;\n}\n\n.input {\n  display: flex;\n  align-items: center;\n  height: 3rem;\n  padding-left: 0.2rem;\n  border: 1px solid #ddd;\n  justify-content: space-between;\n}\n\n.input2 {\n  padding-right: 5px;\n}\n\nh1 {\n  margin-top: 3rem;\n  margin-bottom: 5rem;\n  display: flex;\n  justify-content: center;\n}\n\nh2 {\n  font-size: 20px;\n}\n\n#inputText {\n  width: 90%;\n  border: none;\n  font-size: 16px;\n  font-style: italic;\n  align-items: center;\n}\n\n.edit-class {\n  width: 80%;\n  border: none;\n  font-size: 16px;\n  font-style: italic;\n  align-items: center;\n}\n\ninput[type='image'] {\n  background-repeat: no-repeat;\n  width: 1rem;\n}\n\ninput:focus {\n  outline: none !important;\n}\n\n#clear_complete {\n  height: 50px;\n  background: #ddd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 5px 20px 0 rgb(0 0 0 / 0%);\n}\n\nform {\n  width: 100%;\n}\n\nh3 {\n  margin-right: 5px;\n  flex-basis: 90%;\n  font-size: 15px;\n  font-weight: 200;\n  padding: 15px;\n}\n\nli {\n  font-size: 16px;\n  border: 1px solid #b5b7bb;\n  padding: 7px;\n  color: black;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nul li {\n  text-decoration: none;\n  list-style-type: none;\n  margin: 0;\n}\n\n#addButton {\n  background: url('https://img.icons8.com/ios/20/000000/enter-2.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 35px;\n  border: none;\n  height: 35px;\n}\n\n.line {\n  text-decoration: line-through;\n}\n\n.editButton {\n  background-image: url('https://img.icons8.com/ios/25/000000/edit-column.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 35px;\n  border: none;\n  height: 35px;\n  background-color: #fff;\n}\n\n.deleteButton {\n  background-image: url('https://img.icons8.com/fluency-systems-regular/30/000000/delete.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 35px;\n  border: none;\n  height: 35px;\n  background-color: rgb(184, 7, 7);\n  box-shadow: 5px 5px 5px rgb(153, 16, 16);\n}\n\n#task_container {\n  box-shadow: 10px 10px 5px rgb(69, 69, 69);\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=n(p),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(g);else{var f=o(g,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=n(r[i]);t[s].references--}for(var c=a(e,o),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},909:(e,t,n)=>{var a=n(379),o=n.n(a),r=n(795),i=n.n(r),s=n(569),c=n.n(s),l=n(565),d=n.n(l),p=n(216),u=n.n(p),g=n(589),f=n.n(g),h=n(426),m={};m.styleTagTransform=f(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),o()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;class x{static createTask(){const e=document.getElementById("inputText").value,t=document.getElementById("form_Text"),n=this.getAllTasks().length+1,a=[{description:e,completed:!1,index:parseInt(n,10)}];this.saveTask(a),this.showTask(),t.reset()}static showTask(){const e=document.querySelector("#todo_container");e.innerHTML="",this.getAllTasks().forEach((t=>{let n="",a="",o="";t.completed&&(o='style="text-decoration: line-through"',n="checked",a='class="line"'),e.innerHTML+=`<li><input class="checkbox-class" type="checkbox" id="checkbox-${t.index}" ${n} /> <h3  id="d${t.index}" ${a} ${o} >${t.description}</h3><input class="edit-class" type="text" value="${t.description}" id="edit-${t.index}" style="display:none"/><button type="button" id="editBttn-${t.index}" class="editButton"></button><button type="button" class="deleteButton" id="delete-${t.index}"></button></li>`}))}static removeTask(e){if(e>-1){const t=this.getAllTasks();t.splice(e,1);for(let n=e;n<this.getAllTasks().length-1;n+=1)t[n].index=n+1;this.updateTask(t),this.showTask()}}static saveTask(e){0!==this.getAllTasks().length?localStorage.setItem("data",JSON.stringify(this.getAllTasks().concat(e))):localStorage.setItem("data",JSON.stringify(e))}static getAllTasks(){return localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]}static updateTask=e=>{localStorage.clear(),localStorage.setItem("data",JSON.stringify(e))}}const y=document.getElementById("task_container"),b=document.getElementById("addButton"),k=document.getElementById("clear_complete");let v=!1;window.onload=function(){x.showTask(),b.onclick=()=>{x.createTask()},y.addEventListener("click",(e=>{if(null!==e.target&&"NaN"!==e.target&&""!==e.target&&"checkbox-class"===e.target.className){const t=e.target.id.replace("checkbox-",""),n=document.getElementById(`d${t}`),a=x.getAllTasks(),o=parseInt(t-1,10);a!==[]&&(a[o].completed?(a[o].completed=!1,n.style.textDecoration="none"):(a[o].completed=!0,n.style.textDecoration="line-through"),x.updateTask(a))}})),y.addEventListener("click",(e=>{if(null!==e.target&&"NaN"!==e.target&&""!==e.target&&"editButton"===e.target.className){const t=e.target.id.replace("editBttn-",""),n=document.getElementById(`d${t}`),a=x.getAllTasks(),o=parseInt(t,10),r=document.getElementById(`edit-${t}`);n.style.display="none",r.style.display="block",!1!==v?(a[o-1].description=r.value,n.style.display="block",r.style.display="none",x.updateTask(a),x.showTask(),v=!1):v=!0}})),x.showTask(),y.addEventListener("click",(e=>{if(null!==e.target&&"NaN"!==e.target&&""!==e.target&&"deleteButton"===e.target.className){const t=e.target.id.replace("delete-",""),n=x.getAllTasks(),a=parseInt(t,10);n!==[]&&x.removeTask(a-1)}})),k.addEventListener("click",(()=>{const e=x.getAllTasks().filter((e=>!1===e.completed));for(let t=0;t<e.length;t++)e[t].index=t+1;x.updateTask(e),x.showTask()}))}}},e=>{e(e.s=909)}]);