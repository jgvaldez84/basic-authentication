(this["webpackJsonpbasic-authentication"]=this["webpackJsonpbasic-authentication"]||[]).push([[9],{354:function(t,e,r){"use strict";r.r(e),r.d(e,"amplify_s3_album",(function(){return I}));var n,i=r(17),o=r(51),a=r(31),c=r(14),s=r(129),u=r(11),l=r(23),f=r(117),p=r(401),d=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function a(t){try{s(n.next(t))}catch(e){o(e)}}function c(t){try{s(n.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,c)}s((n=n.apply(t,e||[])).next())}))},h=function(t,e){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},y=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],a=0,c=o.length;a<c;a++,i++)n[i]=o[a];return n},b=new Uint8Array(16);function m(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(b)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function v(t){return"string"===typeof t&&g.test(t)}for(var w=[],k=0;k<256;++k)w.push((k+256).toString(16).substr(1));function x(t,e,r){var n=(t=t||{}).random||(t.rng||m)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var i=0;i<16;++i)e[r+i]=n[i];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(w[t[e+0]]+w[t[e+1]]+w[t[e+2]]+w[t[e+3]]+"-"+w[t[e+4]]+w[t[e+5]]+"-"+w[t[e+6]]+w[t[e+7]]+"-"+w[t[e+8]]+w[t[e+9]]+"-"+w[t[e+10]]+w[t[e+11]]+w[t[e+12]]+w[t[e+13]]+w[t[e+14]]+w[t[e+15]]).toLowerCase();if(!v(r))throw TypeError("Stringified UUID is invalid");return r}(n)}var j=new o.a("S3Album"),I=function(){function t(t){var e=this;Object(i.k)(this,t),this.contentType="binary/octet-stream",this.level=s.a.Public,this.picker=!0,this.pickerText=u.a.PICKER_TEXT,this.albumItems=[],this.imgArr={},this.list=function(){return d(e,void 0,void 0,(function(){var t,e,r,n,i,o,a,c;return h(this,(function(s){switch(s.label){case 0:if(e=(t=this).path,r=void 0===e?"":e,n=t.level,i=t.track,o=t.identityId,j.debug("Album path: "+r),!f.a||"function"!==typeof f.a.list)throw new Error(l.k);s.label=1;case 1:return s.trys.push([1,3,,4]),[4,f.a.list(r,{level:n,track:i,identityId:o})];case 2:return a=s.sent(),this.marshal(a),[3,4];case 3:return c=s.sent(),j.warn(c),[3,4];case 4:return[2]}}))}))},this.marshal=function(t){t.forEach((function(t){var r=t.key.toLowerCase().split(".")[1];p.d.has(r)&&(!t.contentType||t.contentType&&"binary/octet-stream"===t.contentType)&&(t.contentType=e.getContentType(t))}));var r=t.filter((function(t){return t.contentType&&t.contentType.startsWith("image/")})),n=e.filter?e.filter(r):r;n=e.sort?e.sort(n):n,e.albumItems=n,j.debug("album items",e.albumItems),e.constructImgArray(e.albumItems)},this.constructImgArray=function(t){t.map((function(t){e.imgArr[""+t.key]=t.key}))},this.handlePick=function(t){return d(e,void 0,void 0,(function(){var e,r,n,i,o,a,c,s,u,l;return h(this,(function(f){switch(f.label){case 0:e=t.target.files[0],n=(r=this).path,i=void 0===n?"":n,o=r.level,a=r.track,c=r.fileToKey,s=i+Object(p.b)(e,c),f.label=1;case 1:return f.trys.push([1,3,,4]),[4,Object(p.e)(s,e,o,a,e.type,j)];case 2:return f.sent(),[3,4];case 3:throw u=f.sent(),j.error(u),new Error(u);case 4:return Object.keys(this.imgArr).includes(s)?(this.albumItems=y(this.albumItems),this.imgArr[s]=s+"-"+x()):(l=y(this.albumItems,this.filter?this.filter([{key:s}]):[{key:s}]),this.albumItems=this.sort?this.sort(l):l),[2]}}))}))}}return t.prototype.getContentType=function(t){return Object(a.c)(t.key,"image/*")},t.prototype.componentWillLoad=function(){this.list()},t.prototype.render=function(){var t=this;return Object(i.i)("div",null,Object(i.i)("div",{class:"album-container"},Object(i.i)("div",{class:"grid-row"},this.albumItems.map((function(e){return Object(i.i)("div",{class:"grid-item",key:"key-"+e.key},Object(i.i)("amplify-s3-image",{key:t.imgArr[e.key],imgKey:e.key,level:t.level,path:t.path,identityId:t.identityId,track:t.track,handleOnError:t.handleOnError,handleOnLoad:t.handleOnLoad}),Object(i.i)("span",{class:"img-overlay"}))})))),this.picker&&Object(i.i)("amplify-picker",{pickerText:c.a.get(this.pickerText),inputHandler:function(e){return t.handlePick(e)},acceptValue:"image/*"}))},t}();I.style=":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}"},401:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return u})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return f}));var n=r(23),i=r(117),o=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function a(t){try{s(n.next(t))}catch(e){o(e)}}function c(t){try{s(n.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,c)}s((n=n.apply(t,e||[])).next())}))},a=function(t,e){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),s=function(t,e){var r=t.name,n=t.size,i=t.type,o=encodeURI(r);return e&&((o="string"===typeof e?e:"function"===typeof e?e({name:r,size:n,type:i}):encodeURI(JSON.stringify(e)))||(o="empty_key")),o.replace(/\s/g,"_")},u=function(t,e,r,c,s){return o(void 0,void 0,void 0,(function(){var o,u;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.get)throw new Error(n.k);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.a.get(t,{level:e,track:r,identityId:c})];case 2:return o=a.sent(),s.debug("Storage image get",o),[2,o];case 3:throw u=a.sent(),new Error(u);case 4:return[2]}}))}))},l=function(t,e,r,c,s){return o(void 0,void 0,void 0,(function(){var o,u;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.get)throw new Error(n.k);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,i.a.get(t,{download:!0,level:e,track:r,identityId:c})];case 2:return o=a.sent(),s.debug(o),[4,(l=o.Body,new Promise((function(t,e){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){e("Failed to read file!"),r.abort()},r.readAsText(l)})))];case 3:return[2,a.sent()];case 4:throw u=a.sent(),new Error(u);case 5:return[2]}var l}))}))},f=function(t,e,r,c,s,u){return o(void 0,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.put)throw new Error(n.k);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.a.put(t,e,{contentType:s,level:r,track:c})];case 2:return o=a.sent(),u.debug("Upload data",o),[3,4];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=9.41bf1a2e.chunk.js.map