"use strict";function Pipe(e,r){r.add();const n=e.length;let t=0,s="name";for(;t<n;){const n=e[t++],a=n.charCodeAt(0);58===a||44===a?(s="arg",r.shiftValue()):124===a?(s="name",r.add()):"arg"===s?r.appendValue(n):r.appendKey(n,a)}return r.toJSON()}function Qs(e,r){r.add();const n=e.length;let t=0,s="name",a=!1;for(;t<n;){const n=e[t++],o=n.charCodeAt(0);91===o?a=!0:93===o?a=!1:61===o||44===o&&a?(s="arg",r.shiftValue()):44===o?(s="name",r.add()):"arg"===s?r.appendValue(n):r.appendKey(n,o)}return r.toJSON()}function ArrayPresenter(){return{nodes:[],currentNode:null,add(){this.currentNode={name:"",args:[]},this.nodes.push(this.currentNode)},appendKey(e,r){32!==r&&(this.currentNode.name+=e)},appendValue(e){this.currentNode.args[this.currentNode.args.length-1]+=e},shiftValue(){this.currentNode.args.push("")},toJSON(){return this.nodes}}}function JsonPresenter(){return{nodes:[],currentNode:null,add(){this.currentNode={name:"",args:[]},this.nodes.push(this.currentNode)},appendKey(e,r){32!==r&&(this.currentNode.name+=e)},appendValue(e){this.currentNode.args[this.currentNode.args.length-1]+=e},shiftValue(){this.currentNode.args.push("")},toJSON(){return this.nodes.reduce((e,r)=>(e[r.name]=r.args,e),{})}}}var index={fromPipe:e=>({toArray:()=>Pipe(e,new ArrayPresenter),toJSON:()=>Pipe(e,new JsonPresenter)}),fromQS:e=>({toArray:()=>Qs(e,new ArrayPresenter),toJSON:()=>Qs(e,new JsonPresenter)})};module.exports=index;
