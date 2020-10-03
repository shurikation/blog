!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){i(2),e.exports=i(1)},function(e,t,i){},function(e,t,i){"use strict";i.r(t),i.d(t,"header",(function(){return r}));class s{constructor(){this.distanceFromBorder=200,this.isScrolling=!1,this.init()}init(){window.addEventListener("scroll",this.throttleScroll.bind(this))}throttleScroll(){!1===this.isScrolling&&window.requestAnimationFrame(()=>{r.fixingHandler(),this.isScrolling=!1}),this.isScrolling=!0}static isElemScrolledDown(e){return e.getBoundingClientRect().bottom<=200}}class n{constructor(e){this.chars=null,this.ruChars=e.ruText.split(""),this.engChars=e.engText.split(""),this.languageToggle=!1,this.$elem=document.querySelector(e.elem),this.slowTypingSpeed=400,this.fastTypingSpeed=100,this.slowTypingLength=3,this.fastTypingLength=6,this.pause=3e3,this.removingSpeed=75,this.init()}init(){this.languageSwitch(),this.typeText()}languageSwitch(){this.languageToggle?this.chars=this.engChars:this.chars=this.ruChars}typeText(e=this.slowTypingSpeed,t=this.slowTypingLength,i=0){let s=i,n=0;const r=setInterval(()=>{this.addChar(this.chars[s]),s++,n++,s<this.chars.length&&n>=t&&this.slowTypingLength===t?(clearInterval(r),this.typeText(this.fastTypingSpeed,this.fastTypingLength,s)):s<this.chars.length&&n>=t&&this.fastTypingLength===t&&(clearInterval(r),this.typeText(this.slowTypingSpeed,this.slowTypingLength,s)),s>=this.chars.length&&(this.languageToggle=!this.languageToggle,clearInterval(r),setTimeout(()=>this.removeText(),this.pause))},e)}addChar(e){this.$elem.insertAdjacentText("beforeEnd",e)}removeText(){let e=this.chars.length;const t=setInterval(()=>{e--,e<=0&&(clearInterval(t),setTimeout(()=>this.init(),this.pause)),this.deleteChar()},this.removingSpeed)}deleteChar(){this.$elem.lastChild.remove()}}new class{constructor(){this.init()}init(){window.onload=()=>{document.body.classList.add("loaded_hiding"),window.setTimeout(()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)}}},new s;const r=new class{constructor(e){this.$header=document.querySelector(e.header),this.$nav=document.querySelector(e.nav),this.$links=document.querySelectorAll(e.links),this.$logo=document.querySelector(e.logo),this.$menu=document.querySelector(e.menu),this.$button=document.querySelector(e.button),this.$animationTriggerElem=document.querySelector(e.animationTriggerElem),this.active=e.active,this.open=e.open,this.fixed=e.fixed,this.unfixed=e.unfixed,this.white=e.white,this.black=e.black,this.elemIsScrolled=!1,this.headerIsFixed=!1,this.screenWidth=768,this.menuHandler()}menuHandler(){this.$button.addEventListener("click",()=>{this.navbarDisplayToggler(),this.innerElemsClickHandler(),this.headerColorToggler(this.white)})}fixingHandler(){s.isElemScrolledDown(this.$animationTriggerElem)?this.elemIsScrolled=!0:this.elemIsScrolled=!1,this.elemIsScrolled&&!this.headerIsFixed&&this.fixHeader(),!this.elemIsScrolled&&this.headerIsFixed&&this.unfixHeader()}fixHeader(){this.headerIsFixed=!0,this.$header.classList.add(this.fixed),this.$header.classList.remove(this.unfixed),this.$button.style.backgroundColor=this.black,this.$logo.style.color=this.black,this.isNavbarOpen()&&(this.$button.style.backgroundColor="transparent"),this.headerColorToggler(this.white),this.linksColorToggler()}unfixHeader(){this.headerIsFixed=!1,this.$header.classList.remove(this.fixed),this.isNavbarOpen()||(this.headerColorToggler("transparent"),this.$header.classList.add(this.unfixed),this.$button.style.backgroundColor=null,this.$logo.style.color=null),this.linksColorToggler()}navbarDisplayToggler(){this.$button.classList.toggle(this.active),this.$menu.classList.toggle(this.open)}headerColorToggler(e){this.$header.style.backgroundColor=e,this.$nav.style.backgroundColor=e,this.isHeaderUnfix()&&this.$header.classList.remove(this.unfixed)}innerElemsClickHandler(){this.isNavbarOpen()&&(this.$logo.style.color=this.black,this.$button.style.backgroundColor="transparent"),this.isNavbarOpen()||(this.$button.style.backgroundColor=this.black)}linksColorToggler(){this.headerIsFixed&&document.documentElement.clientWidth>this.screenWidth&&this.$links.forEach(e=>e.style.color=this.black),this.headerIsFixed||this.$links.forEach(e=>e.style.color=null)}isNavbarOpen(){return this.$button.classList.contains(this.active)}isHeaderUnfix(){return this.$header.classList.contains(this.unfixed)}}({header:".main-header",nav:".main-header__nav",logo:".main-header__logo",menu:".menu",links:".menu__link",button:".header__toggler",active:"toggler--active",open:"menu--opened",fixed:"header--fixed",unfixed:"header--unfixed",black:"#1e1e1e",white:"#fff",animationTriggerElem:".about__title"});if(document.querySelector(".main-page")){new n({ruText:"фронтенд-разработчик",engText:"front-end developer",elem:".intro__subtitle--autoText"})}}]);