"use strict";function Qs(e,t){t.add();const a=e.length;let n=0,d="name",o=!1;for(;n<a;){const a=e[n++],r=a.charCodeAt(0);91===r?o=!0:93===r?o=!1:61===r||44===r&&o?(d="arg",t.shiftValue()):44===r?(d="name",t.add()):"arg"===d?t.appendValue(a):t.appendKey(a,r)}return t.toJSON()}module.exports=Qs;
