(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),c=a.n(r),l=(a(14),a(15),a(3)),s=a(4),o=a(6),m=a(5),u=a(7),d=(a(16),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={fullDate:"",hours:0,minutes:"",seconds:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"updateDate",value:function(){var e=(new Date).toLocaleDateString("en-EN",{weekday:"long",month:"long",day:"numeric"});this.setState({fullDate:e})}},{key:"updateTime",value:function(){var e=new Date,t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();t<10?t="0"+t.toString():t.toString(),a<10?a="0"+a.toString():a.toString(),n<10?n="0"+n.toString():n.toString(),this.setState({hours:t,minutes:a,seconds:n})}},{key:"currentTime",value:function(){var e=this;this.updateDate(),this.updateTime(),this.timerID=setInterval(function(){e.updateTime()},1e3)}},{key:"componentDidMount",value:function(){this.currentTime()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state,t=e.hours,a=e.minutes,n=e.seconds;return i.a.createElement("div",{className:"timedate"},i.a.createElement("div",{className:"caption"},"Today is"),i.a.createElement("div",{className:"full-date"},this.state.fullDate),i.a.createElement("hr",null),i.a.createElement("div",{className:"time"},i.a.createElement("div",{className:"hours"},t),i.a.createElement("div",{className:"minutes"},a),i.a.createElement("div",{className:"seconds"},n)))}}]),t}(n.Component)),v=(a(17),[{url:"https://t.me/zagladin",text:"Telegram"},{url:"mailto:georgii@zagladin.pro",text:"Email"},{url:"https://www.linkedin.com/in/georgii-zagladin/",text:"LinkedIn"}]),h=function(){return i.a.createElement("div",{className:"contacts-card"},i.a.createElement("div",{className:"header"},"Contact me"),i.a.createElement("div",{className:"links"},v.map(function(e,t){return i.a.createElement("a",{key:t,className:"link",href:e.url},e.text)})))},g=(a(18),function(){return i.a.createElement("div",{className:"poster-wrapper"},i.a.createElement("div",{className:"poster-header"},"Georgii Zagladin"),i.a.createElement("div",{className:"poster-subheader"},"Front-end developer"),i.a.createElement("hr",null),i.a.createElement("div",{className:"poster-city-caption"},"Saint Petersburg"))}),E=function(){return i.a.createElement("div",{className:"background"},i.a.createElement("div",{className:"grid-container"},i.a.createElement("div",{className:"weather"},i.a.createElement(g,null)),i.a.createElement("div",{className:"clock"},i.a.createElement(d,null)),i.a.createElement("div",{className:"contacts"},i.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.8ba37db7.chunk.js.map