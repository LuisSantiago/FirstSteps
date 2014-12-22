/*
* jQuery Cookie Plugin v1.4.1
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2006, 2014 Klaus Hartl
* Released under the MIT license
*/
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(arguments.length>1&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}})



/*
* First Steps JS
*
* Copyright 2014 Nico Knoll
* Released under the Smiley license
*/
$(document).ready(function() {
	$('#openTutorialButton').click(function(){
		//tutorialData is a json object which is genereated in the php part of this module
		if(!tutorialData) return false;

		var intro = introJs();

		intro.setOptions({
			steps: tutorialData,
			showProgress:true,
			showBullets:false,
			showStepNumbers:false
		});

		intro.start();
	});	
});


// if the first login ever and on pagelist (id: 3) autodisplay the tutorial
$(window).load(function() {
	if(!($.cookie('wire_firsttime')) && $('body').hasClass('id-3')) {
		setTimeout(function () {
		   $('#openTutorialButton').trigger('click');
		}, 500);
		$.cookie('wire_firsttime', '1', { expires: 1000, path: '/' });
	}
});
