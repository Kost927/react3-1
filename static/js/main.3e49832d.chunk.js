(this["webpackJsonpreact3-1"]=this["webpackJsonpreact3-1"]||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(17),n(5)),u=n(9),i=n(6),m=n(7),s=n(11),d=n(10),f=(n(18),n(8)),b=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,t))},h=function(e){var t=e.filteredContacts,n=e.removePhone;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("li",{key:e.id,name:"name"},e.name,": ",e.number,r.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},"Delete"))})))},p=function(e){var t=e.handleSubmit,n=e.name,a=e.addContact,c=e.filter,l=e.chengeFilter,o=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("form",{onSubmit:t},r.a.createElement("label",null,"Name:"," ",r.a.createElement("input",{type:"text",value:n,name:"name",onChange:a})),r.a.createElement("label",null,"Number:"," ",r.a.createElement("input",{type:"tel",value:o,name:"number",onChange:a})),r.a.createElement("button",{type:"submit"},"Add contacts")),r.a.createElement("h2",null,"Contacts"),r.a.createElement("p",null,"Find contacts by name"),r.a.createElement("label",null,"Filter:"," ",r.a.createElement("input",{type:"text",value:c,name:"filter",onChange:l})))},v=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.chengeFilter=function(t){e.setState({filter:t})},e.findContacts=function(){var t=e.state,n=t.filter;return t.contacts.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;n.contacts.map((function(e){return e.name})).find((function(e){return e===a}))?alert("".concat(a," is already in your contacts")):e.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[{id:Object(f.v4)(),name:a,number:r}])}})),e.setState({name:"",number:""})},e.addContact=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.removePhone=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this,t=this.state,n=t.filter,a=t.name,c=t.number,l=t.contacts,o=this.findContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{handleSubmit:this.handleSubmit,name:a,number:c,addContact:this.addContact,filter:n,chengeFilter:function(t){return e.chengeFilter(t.target.value)}}),r.a.createElement(b,null,r.a.createElement(h,{filteredContacts:o,contacts:l,removePhone:this.removePhone})))}}]),n}(a.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3e49832d.chunk.js.map