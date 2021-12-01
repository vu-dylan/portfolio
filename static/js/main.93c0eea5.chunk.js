(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c(2),r=c.n(n),s=c(9),a=c.n(s),i=(c(17),c(3)),l=(c(18),function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){fetch(e.textPath).then((function(e){return e.text()})).then((function(e){s(e.split("\n"))}))}),[]),Object(o.jsxs)("div",{className:"project-content",children:[Object(o.jsxs)("h4",{style:{color:"".concat(e.color)},children:[" ",e.hook,": "]}),Object(o.jsxs)("h3",{style:{color:"".concat(e.color)},children:[" ",e.title," "]}),r.map((function(e){return function(e){for(var t=[".jpg",".png",".jpeg",".svg",".webp"],c=0;c<t.length;c++)if(e.includes(t[c]))return!0;return!1}(e)?Object(o.jsx)("img",{src:""+e,alt:e},e):(t=e).includes("github.com/")||t.includes("devpost.com/software")||t.includes("https://")?Object(o.jsx)("p",{className:"text",children:Object(o.jsx)("a",{className:"collapsible-link",href:e,target:"_blank",rel:"noreferrer",children:e})},e):"*"===e[0]?Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:e.slice(2)})}):Object(o.jsx)("p",{className:"text",children:e});var t})),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}),u=function(e){return Object(o.jsxs)("div",{className:"ProjectGroup",children:[Object(o.jsx)("button",{type:"button",className:"project-group-title",id:e.scroll,style:{borderColor:"".concat(e.color)},children:e.group}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),e.projects.map((function(t){return Object(o.jsx)(l,{hook:t.projectHook,title:t.projectName,id:t.projectName,textPath:t.textPath,color:e.color},t.projectName)}))]})},j=c(6),d=c(5),b=c(10),p=function(){var e=Object(n.useState)("inactive"),t=Object(i.a)(e,2),c=t[0],r=t[1];function s(e){"is-responsive"===c&&r("inactive"),document.getElementById(e).scrollIntoView({behavior:"smooth"})}return Object(o.jsxs)("nav",{className:"navbar ".concat(c),id:"navbar",children:[Object(o.jsx)("a",{className:"nav-link",onClick:function(){return s("About")},children:Object(o.jsx)("span",{className:"name",children:"Dylan Vu"})}),Object(o.jsx)("a",{className:"nav-link",style:{color:"#c0392b"},onClick:function(){return s("JS")},children:Object(o.jsx)("span",{children:"JavaScript/NodeJS"})}),Object(o.jsx)("a",{className:"nav-link",style:{color:"#2081C3"},onClick:function(){return s("Python")},children:Object(o.jsx)("span",{children:"Python"})}),Object(o.jsx)("a",{className:"nav-link",style:{color:"#6DA34D"},onClick:function(){return s("Other")},children:Object(o.jsx)("span",{children:"Other"})}),Object(o.jsx)("a",{className:"nav-link",style:{color:"#FE5D26"},href:"/about/Dylan Vu Resume.pdf",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("span",{children:"Resume"})}),Object(o.jsx)("a",{href:"https://github.com/vu-dylan",target:"_blank",rel:"noreferrer",style:{color:"#f2f2f2"},children:Object(o.jsx)(j.a,{icon:d.a,id:"github",className:"icon"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/dylanvu9/",target:"_blank",rel:"noreferrer",style:{color:"#f2f2f2"},children:Object(o.jsx)(j.a,{icon:d.b,className:"icon"})}),Object(o.jsx)("a",{href:"mailto:dylanvu@ucsb.edu",target:"_blank",rel:"noreferrer",style:{color:"#f2f2f2"},children:Object(o.jsx)(j.a,{icon:b.a,className:"icon"})}),Object(o.jsxs)("div",{className:"hamburger ".concat(c),id:"hamburger",onClick:function(){r("inactive"===c?"is-responsive":"inactive")},children:[Object(o.jsx)("span",{className:"line"}),Object(o.jsx)("span",{className:"line"}),Object(o.jsx)("span",{className:"line"})]})]})},h=c(11),f=function e(t,c,o){Object(h.a)(this,e),this.projectHook=t,this.projectName=c,this.textPath=o},m=[new f("My name is Dylan Vu","","/about/about.txt"),new f("Resume at a Glance","","/about/Glance.txt")],x=[new f("Convert your Spotify playlist to a YouTube playlist","You-tify","/projectgroup/python/youtify/youtify.txt"),new f("Record the current UCSB course availability with the click of a button","GoldWebscraper","/projectgroup/python/goldwebscraper/goldwebscraper.txt"),new f("Draw on a projector and a computer for a seamless hybrid learning experience","GRIP Board","/projectgroup/python/gripboard/gripboard.txt")],v=[new f("Add and save your favorite movies through a social media app","SeenIt","/projectgroup/javascript/seenit/seenit.txt"),new f("Draw with your friends in a collaborative whiteboard","SketchedOut","/projectgroup/javascript/sketchedout/sketchedout.txt"),new f("Increase engagement in your Discord server","Discord Question of the Day","/projectgroup/javascript/discordqotd/discordqotd.txt"),new f("Modernize your club website","UCSB Robotics Website","/projectgroup/javascript/ucsbrobotics/ucsbrobotics.txt"),new f("Cut Retail Waste with Global Inventory Management","F\u2022sync","/projectgroup/javascript/fsync/fsync.txt")],O=[new f("Use a VR controller that gives tactile feedback","GRIP Controller","/projectgroup/clangs/grip/grip.txt"),new f("Get fit through a mobile fitness AI-generated text-adventure game","Geoverse","/projectgroup/flutter/geoverse/geoverse.txt")];var g=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){document.addEventListener("DOMContentLoaded",(function(){document.getElementById("video").muted=!0})),document.getElementById("video").play(),function(){var e="Hi, I'm Dylan Vu. Welcome to my site!",t=e[0],c=0;setTimeout((function(){var o=setInterval((function(){r(t),c++,t+=e[c],c>=e.length&&(setTimeout((function(){document.documentElement.scrollTop||document.body.scrollTop||(document.getElementById("header").style.height="85vh")}),500),clearInterval(o))}),60)}),600)}()}),[]),window.onbeforeunload=function(){window.scrollTo(0,0)},Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"header",id:"header",children:[Object(o.jsx)("div",{className:"welcome",children:c}),Object(o.jsxs)("video",{className:"video",preload:"auto",id:"video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[Object(o.jsx)("source",{src:"/header.mp4",type:"video/mp4"}),"Video tag not supported"]})]}),Object(o.jsx)(p,{}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(u,{projects:m,color:"#36393f",group:"About",scroll:"About"}),Object(o.jsx)(u,{projects:v,color:"#c0392b",group:"NodeJS",scroll:"JS"}),Object(o.jsx)(u,{projects:x,color:"#2081C3",group:"Python",scroll:"Python"}),Object(o.jsx)(u,{projects:O,color:"#6DA34D",group:"C# and Flutter",scroll:"Other"})]})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),o(e),n(e),r(e),s(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),y()}},[[24,1,2]]]);
//# sourceMappingURL=main.93c0eea5.chunk.js.map