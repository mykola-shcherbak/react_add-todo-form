(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(1),l=a(7),c=a(5),m=a(6),u=a(9),d=a(8),h=a(2),p=(a(16),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),g=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=a(18),y=function(e){var t=e.list;return r.a.createElement("table",{className:"table",border:1,cellPadding:5},r.a.createElement("thead",{className:"thead"},r.a.createElement("tr",null,["id","user","title","status"].map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",{className:"tbody"},t.map((function(e){return r.a.createElement("tr",{key:Object(b.a)()},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.user),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.completed?"Done":"In process"))}))))},f=function(){return p.map((function(e){return r.a.createElement("option",{key:Object(b.a)(),value:e.name},e.name)}))},v=function(e){var t=e.person,a=e.change;return r.a.createElement("select",{className:"select",name:"user",value:t,onChange:a},r.a.createElement("option",{value:""},"Choose a user"),r.a.createElement(f,null))},E=function(e){var t=e.isCompleted,a=e.change;return r.a.createElement("div",{className:"radio"},r.a.createElement("label",{htmlFor:"completed_true"},"Completed"),r.a.createElement("input",{type:"radio",name:"completed",id:"completed_true",value:"true",checked:!0===t,onChange:a}),r.a.createElement("label",{htmlFor:"completed_false"},"In process"),r.a.createElement("input",{type:"radio",name:"completed",id:"completed_false",value:"false",checked:!1===t,onChange:a}))},C=function(e){var t=e.change,a=e.addTodo,n=e.value,o=e.person,i=e.length,s=e.onChange,l=e.isCompleted;return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),a({completed:l,user:o,title:n,id:i+1})}},r.a.createElement(v,{person:o,change:t}),r.a.createElement("input",{className:"title",type:"text",name:"title",placeholder:"write here",value:n,onChange:s}),r.a.createElement(E,{isCompleted:l,change:t}),r.a.createElement("button",{className:"button",type:"submit"},"Add"))},w=g.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{user:p.find((function(t){return e.userId===t.id})).name})})),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todosList:w,value:"",user:"",completed:!1},e.addTodo=function(t){return e.state.user&&e.state.value&&e.setState((function(e){return{todosList:[].concat(Object(l.a)(e.todosList),[t]),value:"",user:"",completed:!1}}))},e.onChange=function(t){e.setState({value:t.target.value})},e.handleChange=function(t){var a=t.target.value,n=t.target.name;"true"===a&&(a=!0),"false"===a&&(a=!1),e.setState(Object(s.a)({},n,a))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todosList,a=e.value,n=e.user;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("p",null,r.a.createElement("span",null,"Todos: "),t.length),r.a.createElement(y,{list:t}),r.a.createElement(C,{change:this.handleChange,addTodo:this.addTodo,onChange:this.onChange,value:a,person:n,length:t.length,isCompleted:this.state.completed}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.61db8aaa.chunk.js.map