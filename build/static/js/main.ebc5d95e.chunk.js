(this.webpackJsonpstarwarclient=this.webpackJsonpstarwarclient||[]).push([[0],[,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.0a12a758.svg"},,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),r=a.n(c),i=(a(15),a(4)),l=a.n(i),o=(a(2),a(5)),m=a(6),u=a(8),h=a(7),p=a(9),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(){a.state.click?(a.setState({activeName:"activeButton"}),a.setState({click:!1}),a.apiCalls()):(a.setState({activeName:"button"}),a.setState({click:!0}))},a.apiCalls=function(){fetch(a.state.baseurl+"/api/Films/getLongestCrawl").then((function(e){return e.json()})).then((function(e){a.setState({answer1:e})})),fetch(a.state.baseurl+"/api/Persons/getMostActedPerson").then((function(e){return e.json()})).then((function(e){a.setState({answer2:e})})),fetch(a.state.baseurl+"/api/Species/getMostNumberOfSpecies").then((function(e){return e.json()})).then((function(e){a.setState({answer3:e})})),fetch(a.state.baseurl+"/api/Vechicle/getLargestNumberOfVechiclePilots").then((function(e){return e.json()})).then((function(e){a.setState({answer4:e})}))},a.state={activeName:"button",click:!0,answer1:"",answer2:"",answer3:[],answer4:[],baseurl:"https://master.d139kze7isi5si.amplifyapp.com/"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"form-control",onClick:function(t){return e.handleClick()}},s.a.createElement("button",{className:this.state.activeName},s.a.createElement("span",{className:"fa fa-star leftAlign starSize"}),s.a.createElement("span",{className:"centerText"},"Do. Or do not. There is no try"),s.a.createElement("span",{className:"fa fa-star rightAlign starSize"})),s.a.createElement("p",{className:this.state.click?"hidden":"questionClass"},"Which of all StarWars movies has longest opening crawl?"),s.a.createElement("p",{className:this.state.click?"hidden":"answerClass"},this.state.answer1),s.a.createElement("p",{className:this.state.click?"hidden":"questionClass"},"What character (person) appeared in the most of StarWars films?"),s.a.createElement("p",{className:this.state.click?"hidden":"answerClass"},this.state.answer2),s.a.createElement("p",{className:this.state.click?"hidden":"questionClass"},"Which species appeared in the most number of StarWars films?"),s.a.createElement("p",{className:this.state.click?"hidden":"answerClass"},this.state.answer3.map((function(e){return s.a.createElement("p",null,e.Name," (",e.Count,")")}))),s.a.createElement("p",{className:this.state.click?"hidden":"questionClass"},"What planet in StarWars universe provided largest number of vehicle pilots?"),s.a.createElement("p",{className:this.state.click?"hidden":"answerClass"},this.state.answer4.map((function(e){return s.a.createElement("p",null,"Planet: ",e.PlanetName," - Pilots: (",e.Count,")",e.PilotNames.map((function(e){return s.a.createElement("span",null," ",e.PilotName," - ",e.SpeciesName,", ")})))})))))}}]),t}(s.a.Component);var d=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),s.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.ebc5d95e.chunk.js.map