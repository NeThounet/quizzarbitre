(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},19:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/logo.05a3e30f.svg"},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(4),o=n.n(r),i=(n(19),n(9)),u=n(10),l=n(12),c=n(11),p=n(13),d=n(1),m=[{numero:1.1,question:"Selon la proc\xe9dure de remplacement, un joueur amen\xe9 \xe0 \xeatre remplac\xe9 quitte Ce terrain",answers:[{type:"No3",content:"Imp\xe9rativement par le point le plus proche de l'endroit o\xf9 il se trouve"},{type:"No1",content:"Par le point le plus proche de l'endroit o\xf9 il se trouve sauf s'il est bless\xe9."},{type:"No2",content:"Par le point le plus proche de l'endroit o\xf9 il se trouve ou bien par la ligne m\xe9diane"},{type:"Yes",content:"Par le point te plus proche de l'endroit o\xf9 il se trouve, \xe0 moins d'une autorisation de l'arbitre pour sortir \xe0 un autre endroit"}]},{numero:1.2,question:"Dans quel cas un officiel d'\xe9quipe se verra infliger une mise en garde (rappel \xe0 l'ordre) et non un avertissement ?",answers:[{type:"No2",content:"manifester sa d\xe9sapprobation par la parole ou par des gestes en jetant ou donnant des coups de pied dans une bouteille"},{type:"No1",content:"retarder la reprise du jeu de son \xe9quipe"},{type:"Yes",content:"p\xe9n\xe9trer sur le terrain de mani\xe8re respectueuse, sans chercher la confrontation"},{type:"No3",content:"manifester sa d\xe9sapprobation par la parole ou par des gestes en faisant des gestes montrant clairement un manque de respect envers le corps arbitral"}]},{numero:1.3,question:"L'arbitre s'aper\xe7oit qu'un joueur est au sol et arr\xeate imm\xe9diatement le jeu alors que le ballon se trouve dans une des surfaces de r\xe9paration. Quelle sera la reprise du jeu ?",answers:[{type:"No1",content:"Balle \xe0 terre pour l'\xe9quipe qui a touch\xe9 le ballon en dernier lieu \xe0 l'endroit o\xf9 se trouvait le ballon quand le jeu a \xe9t\xe9 arr\xeat\xe9 par l'arbitre"},{type:"Yes",content:"Balle \xe0 terre pour le gardien de but dans sa surface de r\xe9paration"},{type:"No2",content:"Balle \xe0 terre \xe0 l'endroit o\xf9 \xe9tait le ballon au moment de l'arr\xeat sous r\xe9serve de la proc\xe9dure de la loi 8"},{type:"No3",content:"Balle \xe0 terre pour l'\xe9quipe du joueur bless\xe9 \xe0 l'endroit o\xf9 se trouvait le ballon quand le jeu a \xe9t\xe9 arr\xeat\xe9 par l'arbitre"}]},{numero:1.4,question:"Il y a, en g\xe9n\xe9ral, faute de main si un joueur touche le ballon du bras ou de la main :",answers:[{type:"Yes",content:"Lorsque la position de la main ou du bras a artificiellement augment\xe9 la surface couverte par son corps"},{type:"No1",content:"Directement depuis la t\xeate, le tronc ou la jambe d'un autre joueur"},{type:"No2",content:"Lorsqu'il se trouve \xe0 plus de deux m\xe8tres du joueur adverse"},{type:"No3",content:"Directement depuis sa t\xeate, son tronc ou sa jambe"}]},{numero:1.6,question:"Selon la Loi 9. quelle affirmation est fausse ? Une balle \xe0 terre ne sera pas accord\xe9 quand l'arbitre touche le ballon et :",answers:[{type:"Yes",content:"le ballon sort du terrain"},{type:"No1",content:"le ballon entre directement dans le but"},{type:"No2",content:"une \xe9quipe peut entamer une attaque prometteuse"},{type:"No3",content:"le ballon est r\xe9cup\xe9r\xe9 par l'\xe9quipe adverse"}]},{numero:1.7,question:"Un joueur a besoin de soins sur le terrain. Dans quel cas le joueur peut-il rester sur le terrain ?",answers:[{type:"No2",content:"Le joueur subit une faute et l'adversaire est rappel\xe9 \xe0 l'ordre"},{type:"No1",content:"Le joueur se blesse tout seul"},{type:"Yes",content:"Un penalty est accord\xe9 et le joueur bless\xe9 est le tireur identifi\xe9"},{type:"No3",content:"Le joueur est le capitaine de son \xe9quipe"}]},{numero:1.8,question:"A quelle distance doit se trouver les autres joueurs lors d'une balle \xe0 terre ?",answers:[{type:"No2",content:"A au moins 1 m\xe8tre du ballon"},{type:"No1",content:"A au moins 2 m\xe8tres du ballon"},{type:"Yes",content:"A au moins 4 m\xe8tres du ballon"},{type:"No3",content:"A au moins 9,15 m\xe8tres du ballon"}]}],w=n(3);var h=function(e){return s.a.createElement("h2",{className:"question"},e.content)};var f=function(e){return s.a.createElement("div",{className:"questionCount"},"Evalbox ",s.a.createElement("span",null,e.counter))};var q=function(e){return s.a.createElement("li",{className:"false"===e.isQuestion?e.answerType===e.answer?"Yes"!==e.answerType?"answerOption + No":"answerOption Yes":"Yes"===e.answerType?"answerOption + Yes":"answerOption":"answerOption"},s.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerType===e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),s.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.answerType},e.answerContent))};var y=function(e){return s.a.createElement(w.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},s.a.createElement("div",{key:e.questionId},s.a.createElement(f,{counter:e.questionId,total:e.questionTotal}),s.a.createElement(h,{content:e.question}),s.a.createElement("ul",{className:"answerOptions"},e.answerOptions.map(function(t){return s.a.createElement(q,{isQuestion:e.isQuestion,key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected})}))))};var v=function(e){return s.a.createElement(w.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},s.a.createElement("div",null,s.a.createElement(f,{counter:e.questionNumero}),s.a.createElement(h,{content:e.question}),e.answerOptions.map(function(t){return s.a.createElement("ul",{className:"answerOptions"},s.a.createElement(q,{isQuestion:e.isQuestion,key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected}))}),"false"===e.isQuestion&&s.a.createElement("button",{name:"button",onClick:e.onHandleClickNext},"Question suivante")))},b=(n(33),n(34),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={isQuestion:"true",counter:0,questionNumero:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},result:""},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(d.a)(Object(d.a)(n))),n.handleClickNext=n.handleClickNext.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=m.map(function(t){return e.shuffleArray(t.answers)});this.setState({question:m[0].question,questionNumero:m[0].numero,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}},{key:"handleAnswerSelected",value:function(e){this.setUserAnswer(e.currentTarget.value)}},{key:"handleClickNext",value:function(e){var t=this;setTimeout(function(){return t.setNextQuestion()},300),this.setState(function(e,t){return{isQuestion:"true"}})}},{key:"setUserAnswer",value:function(e){this.setState(function(t,n){return{answer:e,isQuestion:"false"}})}},{key:"setNextQuestion",value:function(){var e=Math.floor(Math.random()*m.length),t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:m[e].question,answerOptions:m[e].answers,answer:"",questionNumero:m[e].numero})}},{key:"getGoodAnswer",value:function(e){for(var t=0;t<e.length;t++)if("Yes"===e[t].type)return t}},{key:"getResults",value:function(){return console.log(this.state.answerOptions),console.log(this.getGoodAnswer(this.state.answerOptions)),this.state.answerOptions[this.getGoodAnswer(this.state.answerOptions)].content}},{key:"setResults",value:function(e){this.setState({result:e})}},{key:"renderQuiz",value:function(){return s.a.createElement(y,{isQuestion:this.state.isQuestion,answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:m.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return s.a.createElement(v,{isQuestion:this.state.isQuestion,answer:this.state.answer,questionNumero:this.state.questionNumero,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:m.length,onAnswerSelected:this.handleAnswerSelected,onHandleClickNext:this.handleClickNext})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App-header"},s.a.createElement("h2",null,"Quizz arbitre district de la gironde, \xe9valbox LFNA")),this.renderResult())}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.c54a7d87.chunk.js.map