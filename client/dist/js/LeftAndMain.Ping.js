webpackJsonp([6],{15:function(n,e,t){"use strict";var i=void 0!==window.jQuery?window.jQuery:null;n.exports=i},896:function(n,e,t){"use strict";var i=t(15);(function(n){return n&&n.__esModule?n:{default:n}})(i).default.entwine("ss.ping",function(n){n(".cms-container").entwine({PingIntervalSeconds:300,onadd:function(){this._setupPinging(),this._super()},_setupPinging:function(){var e=function(n,e){(n.status>400||0==n.responseText)&&(window.open("Security/login")?alert("Please log in and then try again"):alert("Please enable pop-ups for this site"))};setInterval(function(){n.ajax({url:"Security/ping",global:!1,type:"POST",complete:e})},1e3*this.getPingIntervalSeconds())}})})}},[896]);