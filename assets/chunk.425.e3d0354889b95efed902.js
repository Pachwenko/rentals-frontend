/*! For license information please see chunk.425.e3d0354889b95efed902.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[425],{457:(t,e,n)=>{n.d(e,{d:()=>i,x:()=>r})
var i="finishReason",r=["heartbeatFailed","idleTimeout","documentHidden"]},98:(t,e,n)=>{n.d(e,{ro:()=>g,lb:()=>f})
var i=n(378),r=n(543),a=n(190),s=n(29),o=n(670),c=n(741)
function p(){var t=(0,c.x1)()
if(t){var e="internal_error"
a.k.log("[Tracing] Transaction: "+e+" -> Global error occured"),t.setStatus(e)}}var d=n(771),u=n(12)
function l(){var t=this.getScope()
if(t){var e=t.getSpan()
if(e)return{"sentry-trace":e.toTraceparent()}}return{}}function h(t,e,n){return(0,c.zu)(e)?void 0!==t.sampled?(t.setMetadata({transactionSampling:{method:"explicitly_set"}}),t):("function"==typeof e.tracesSampler?(r=e.tracesSampler(n),t.setMetadata({transactionSampling:{method:"client_sampler",rate:Number(r)}})):void 0!==n.parentSampled?(r=n.parentSampled,t.setMetadata({transactionSampling:{method:"inheritance"}})):(r=e.tracesSampleRate,t.setMetadata({transactionSampling:{method:"client_rate",rate:Number(r)}})),i=r,(isNaN(i)||"number"!=typeof i&&"boolean"!=typeof i?(a.k.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got "+JSON.stringify(i)+" of type "+JSON.stringify(typeof i)+"."),0):!(i<0||i>1)||(a.k.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got "+i+"."),0))?r?(t.sampled=Math.random()<r,t.sampled?(a.k.log("[Tracing] starting "+t.op+" transaction - "+t.name),t):(a.k.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = "+Number(r)+")"),t)):(a.k.log("[Tracing] Discarding transaction because "+("function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):(a.k.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)):(t.sampled=!1,t)
var i,r}function m(t,e){var n=this.getClient(),r=n&&n.getOptions()||{},a=new u.Y(t,this)
return(a=h(a,r,(0,i.pi)({parentSampled:t.parentSampled,transactionContext:t},e))).sampled&&a.initSpanRecorder(r._experiments&&r._experiments.maxSpans),a}function f(t,e,n,r,a){var s=t.getClient(),o=s&&s.getOptions()||{},c=new d.io(e,t,n,r)
return(c=h(c,o,(0,i.pi)({parentSampled:e.parentSampled,transactionContext:e},a))).sampled&&c.initSpanRecorder(o._experiments&&o._experiments.maxSpans),c}function g(){var e;(e=(0,r.cu)()).__SENTRY__&&(e.__SENTRY__.extensions=e.__SENTRY__.extensions||{},e.__SENTRY__.extensions.startTransaction||(e.__SENTRY__.extensions.startTransaction=m),e.__SENTRY__.extensions.traceHeaders||(e.__SENTRY__.extensions.traceHeaders=l)),(0,s.KV)()&&function(){var e=(0,r.cu)()
if(e.__SENTRY__){var n={mongodb:function(){return new((0,s.l$)(t,"./integrations/node/mongo").Mongo)},mongoose:function(){return new((0,s.l$)(t,"./integrations/node/mongo").Mongo)({mongoose:!0})},mysql:function(){return new((0,s.l$)(t,"./integrations/node/mysql").Mysql)},pg:function(){return new((0,s.l$)(t,"./integrations/node/postgres").Postgres)}},a=Object.keys(n).filter((function(t){return!!(0,s.$y)(t)})).map((function(t){try{return n[t]()}catch(t){return}})).filter((function(t){return t}))
a.length>0&&(e.__SENTRY__.integrations=(0,i.fl)(e.__SENTRY__.integrations||[],a))}}(),(0,o.o)("error",p),(0,o.o)("unhandledrejection",p)}t=n.hmd(t)},771:(t,e,n)=>{n.d(e,{nT:()=>p,io:()=>u})
var i=n(378),r=n(505),a=n(190),s=n(457),o=n(538),c=n(12),p=1e3,d=function(t){function e(e,n,i,r){void 0===i&&(i="")
var a=t.call(this,r)||this
return a._pushActivity=e,a._popActivity=n,a.transactionSpanId=i,a}return(0,i.ZT)(e,t),e.prototype.add=function(e){var n=this
e.spanId!==this.transactionSpanId&&(e.finish=function(t){e.endTimestamp="number"==typeof t?t:(0,r._I)(),n._popActivity(e.spanId)},void 0===e.endTimestamp&&this._pushActivity(e.spanId)),t.prototype.add.call(this,e)},e}(o.gB),u=function(t){function e(e,n,i,r){void 0===i&&(i=p),void 0===r&&(r=!1)
var s=t.call(this,e,n)||this
return s._idleHub=n,s._idleTimeout=i,s._onScope=r,s.activities={},s._heartbeatCounter=0,s._finished=!1,s._beforeFinishCallbacks=[],n&&r&&(l(n),a.k.log("Setting idle transaction on scope. Span ID: "+s.spanId),n.configureScope((function(t){return t.setSpan(s)}))),s._initTimeout=setTimeout((function(){s._finished||s.finish()}),s._idleTimeout),s}return(0,i.ZT)(e,t),e.prototype.finish=function(e){var n,s,o=this
if(void 0===e&&(e=(0,r._I)()),this._finished=!0,this.activities={},this.spanRecorder){a.k.log("[Tracing] finishing IdleTransaction",new Date(1e3*e).toISOString(),this.op)
try{for(var c=(0,i.XA)(this._beforeFinishCallbacks),p=c.next();!p.done;p=c.next())(0,p.value)(this,e)}catch(t){n={error:t}}finally{try{p&&!p.done&&(s=c.return)&&s.call(c)}finally{if(n)throw n.error}}this.spanRecorder.spans=this.spanRecorder.spans.filter((function(t){if(t.spanId===o.spanId)return!0
t.endTimestamp||(t.endTimestamp=e,t.setStatus("cancelled"),a.k.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(t,void 0,2)))
var n=t.startTimestamp<e
return n||a.k.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(t,void 0,2)),n})),a.k.log("[Tracing] flushing IdleTransaction")}else a.k.log("[Tracing] No active IdleTransaction")
return this._onScope&&l(this._idleHub),t.prototype.finish.call(this,e)},e.prototype.registerBeforeFinishCallback=function(t){this._beforeFinishCallbacks.push(t)},e.prototype.initSpanRecorder=function(t){var e=this
this.spanRecorder||(this.spanRecorder=new d((function(t){e._finished||e._pushActivity(t)}),(function(t){e._finished||e._popActivity(t)}),this.spanId,t),a.k.log("Starting heartbeat"),this._pingHeartbeat()),this.spanRecorder.add(this)},e.prototype._pushActivity=function(t){this._initTimeout&&(clearTimeout(this._initTimeout),this._initTimeout=void 0),a.k.log("[Tracing] pushActivity: "+t),this.activities[t]=!0,a.k.log("[Tracing] new activities count",Object.keys(this.activities).length)},e.prototype._popActivity=function(t){var e=this
if(this.activities[t]&&(a.k.log("[Tracing] popActivity "+t),delete this.activities[t],a.k.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){var n=this._idleTimeout,i=(0,r._I)()+n/1e3
setTimeout((function(){e._finished||(e.setTag(s.d,s.x[1]),e.finish(i))}),n)}},e.prototype._beat=function(){if(!this._finished){var t=Object.keys(this.activities).join("")
t===this._prevHeartbeatString?this._heartbeatCounter+=1:this._heartbeatCounter=1,this._prevHeartbeatString=t,this._heartbeatCounter>=3?(a.k.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this.setTag(s.d,s.x[0]),this.finish()):this._pingHeartbeat()}},e.prototype._pingHeartbeat=function(){var t=this
a.k.log("pinging Heartbeat -> current counter: "+this._heartbeatCounter),setTimeout((function(){t._beat()}),5e3)},e}(c.Y)
function l(t){if(t){var e=t.getScope()
e&&e.getTransaction()&&e.setSpan(void 0)}}},425:(t,e,n)=>{n.r(e),n.d(e,{BrowserTracing:()=>Y,IdleTransaction:()=>y.io,Integrations:()=>i,Span:()=>G.Dr,SpanStatus:()=>j,TRACEPARENT_REGEXP:()=>T.Ke,Transaction:()=>J.Y,addExtensionMethods:()=>r.ro,defaultRequestInstrumentationOptions:()=>F,extractTraceparentData:()=>T.qG,getActiveTransaction:()=>T.x1,hasTracingEnabled:()=>T.zu,registerRequestInstrumentation:()=>X,spanStatusfromHttpCode:()=>G.Zd,startIdleTransaction:()=>r.lb,stripUrlQueryAndFragment:()=>W.rt})
var i={}
n.r(i),n.d(i,{BrowserTracing:()=>Y,Express:()=>o,Mongo:()=>v,Mysql:()=>m,Postgres:()=>h})
var r=n(98),a=n(378),s=n(190),o=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._router=e.router||e.app,this._methods=(Array.isArray(e.methods)?e.methods:[]).concat("use")}return t.prototype.setupOnce=function(){var t,e
this._router?(t=this._router,void 0===(e=this._methods)&&(e=[]),e.forEach((function(e){return function(t,e){var n=t[e]
return t[e]=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i]
return n.call.apply(n,(0,a.fl)([this],p(t,e)))},t}(t,e)}))):s.k.error("ExpressIntegration is missing an Express instance")},t.id="Express",t}()
function c(t,e){var n=t.length
switch(n){case 2:return function(n,i){var r=i.__sentry_transaction
if(r){var a=r.startChild({description:t.name,op:"express.middleware."+e})
i.once("finish",(function(){a.finish()}))}return t.call(this,n,i)}
case 3:return function(n,i,r){var s,o=null===(s=i.__sentry_transaction)||void 0===s?void 0:s.startChild({description:t.name,op:"express.middleware."+e})
t.call(this,n,i,(function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
null===(t=o)||void 0===t||t.finish(),r.call.apply(r,(0,a.fl)([this],e))}))}
case 4:return function(n,i,r,s){var o,c=null===(o=r.__sentry_transaction)||void 0===o?void 0:o.startChild({description:t.name,op:"express.middleware."+e})
t.call(this,n,i,r,(function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
null===(t=c)||void 0===t||t.finish(),s.call.apply(s,(0,a.fl)([this],e))}))}
default:throw new Error("Express middleware takes 2-4 arguments. Got: "+n)}}function p(t,e){return t.map((function(t){return"function"==typeof t?c(t,e):Array.isArray(t)?t.map((function(t){return"function"==typeof t?c(t,e):t})):t}))}var d=n(29),u=n(927),l=n(146),h=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._usePgNative=!!e.usePgNative}return t.prototype.setupOnce=function(t,e){var n,i=(0,d.$y)("pg")
if(i)if(!this._usePgNative||(null===(n=i.native)||void 0===n?void 0:n.Client)){var r=(this._usePgNative?i.native:i).Client;(0,u.hl)(r.prototype,"query",(function(t){return function(n,i,r){var a,s,o,c=null===(s=null===(a=e().getScope())||void 0===a?void 0:a.getSpan())||void 0===s?void 0:s.startChild({description:"string"==typeof n?n:n.text,op:"db"})
if("function"==typeof r)return t.call(this,n,i,(function(t,e){var n
null===(n=c)||void 0===n||n.finish(),r(t,e)}))
if("function"==typeof i)return t.call(this,n,(function(t,e){var n
null===(n=c)||void 0===n||n.finish(),i(t,e)}))
var p=void 0!==i?t.call(this,n,i):t.call(this,n)
return(0,l.J8)(p)?p.then((function(t){var e
return null===(e=c)||void 0===e||e.finish(),t})):(null===(o=c)||void 0===o||o.finish(),p)}}))}else s.k.error("Postgres Integration was unable to access 'pg-native' bindings.")
else s.k.error("Postgres Integration was unable to require `pg` package.")},t.id="Postgres",t}(),m=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(t,e){var n=(0,d.$y)("mysql/lib/Connection.js")
n?(0,u.hl)(n,"createQuery",(function(t){return function(n,i,r){var a,s,o=null===(s=null===(a=e().getScope())||void 0===a?void 0:a.getSpan())||void 0===s?void 0:s.startChild({description:"string"==typeof n?n:n.sql,op:"db"})
return"function"==typeof r?t.call(this,n,i,(function(t,e,n){var i
null===(i=o)||void 0===i||i.finish(),r(t,e,n)})):"function"==typeof i?t.call(this,n,(function(t,e,n){var r
null===(r=o)||void 0===r||r.finish(),i(t,e,n)})):t.call(this,n,i,r)}})):s.k.error("Mysql Integration was unable to require `mysql` package.")},t.id="Mysql",t}(),f=["aggregate","bulkWrite","countDocuments","createIndex","createIndexes","deleteMany","deleteOne","distinct","drop","dropIndex","dropIndexes","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndReplace","findOneAndUpdate","indexes","indexExists","indexInformation","initializeOrderedBulkOp","insertMany","insertOne","isCapped","mapReduce","options","parallelCollectionScan","rename","replaceOne","stats","updateMany","updateOne"],g={bulkWrite:["operations"],countDocuments:["query"],createIndex:["fieldOrSpec"],createIndexes:["indexSpecs"],deleteMany:["filter"],deleteOne:["filter"],distinct:["key","query"],dropIndex:["indexName"],find:["query"],findOne:["query"],findOneAndDelete:["filter"],findOneAndReplace:["filter","replacement"],findOneAndUpdate:["filter","update"],indexExists:["indexes"],insertMany:["docs"],insertOne:["doc"],mapReduce:["map","reduce"],rename:["newName"],replaceOne:["filter","doc"],updateMany:["filter","update"],updateOne:["filter","update"]},v=function(){function t(e){void 0===e&&(e={}),this.name=t.id,this._operations=Array.isArray(e.operations)?e.operations:f,this._describeOperations=!("describeOperations"in e)||e.describeOperations,this._useMongoose=!!e.useMongoose}return t.prototype.setupOnce=function(t,e){var n=this._useMongoose?"mongoose":"mongodb",i=(0,d.$y)(n)
i?this._instrumentOperations(i.Collection,this._operations,e):s.k.error("Mongo Integration was unable to require `"+n+"` package.")},t.prototype._instrumentOperations=function(t,e,n){var i=this
e.forEach((function(e){return i._patchOperation(t,e,n)}))},t.prototype._patchOperation=function(t,e,n){if(e in t.prototype){var i=this._getSpanContextFromOperationArguments.bind(this);(0,u.hl)(t.prototype,e,(function(t){return function(){for(var r,s,o,c,p=[],d=0;d<arguments.length;d++)p[d]=arguments[d]
var u=p[p.length-1],h=n().getScope(),m=null===(r=h)||void 0===r?void 0:r.getSpan()
if("function"!=typeof u||"mapReduce"===e&&2===p.length){var f=null===(s=m)||void 0===s?void 0:s.startChild(i(this,e,p)),g=t.call.apply(t,(0,a.fl)([this],p))
return(0,l.J8)(g)?g.then((function(t){var e
return null===(e=f)||void 0===e||e.finish(),t})):(null===(o=f)||void 0===o||o.finish(),g)}var v=null===(c=m)||void 0===c?void 0:c.startChild(i(this,e,p.slice(0,-1)))
return t.call.apply(t,(0,a.fl)([this],p.slice(0,-1),[function(t,e){var n
null===(n=v)||void 0===n||n.finish(),u(t,e)}]))}}))}},t.prototype._getSpanContextFromOperationArguments=function(t,e,n){var i={collectionName:t.collectionName,dbName:t.dbName,namespace:t.namespace},r={op:"db",description:e,data:i},s=g[e],o=Array.isArray(this._describeOperations)?this._describeOperations.includes(e):this._describeOperations
if(!s||!o)return r
try{if("mapReduce"===e){var c=(0,a.CR)(n,2),p=c[0],d=c[1]
i[s[0]]="string"==typeof p?p:p.name||"<anonymous>",i[s[1]]="string"==typeof d?d:d.name||"<anonymous>"}else for(var u=0;u<s.length;u++)i[s[u]]=JSON.stringify(n[u])}catch(t){}return r},t.id="Mongo",t}(),_=n(387),y=n(771),T=n(741),b=n(457),S=(0,_.R)(),k=n(505),x=n(809),O=function(t,e,n){var i
return function(r){e.value>=0&&(r||n)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},I=function(t,e){return{name:t,value:null!=e?e:-1,delta:0,entries:[],id:"v2-"+Date.now()+"-"+(Math.floor(8999999999999*Math.random())+1e12)}},C=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return
var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}))
return n.observe({type:t,buffered:!0}),n}}catch(t){}},w=function(t,e){var n=function(i){"pagehide"!==i.type&&"hidden"!==(0,_.R)().document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))}
addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},E=-1,R=function(){return E<0&&(E="hidden"===(0,_.R)().document.visibilityState?0:1/0,w((function(t){var e=t.timeStamp
E=e}),!0)),{get firstHiddenTime(){return E}}},A={},L=(0,_.R)(),M=function(){function t(t){void 0===t&&(t=!1),this._reportAllChanges=t,this._measurements={},this._performanceCursor=0,!(0,d.KV)()&&L&&L.performance&&L.document&&(L.performance.mark&&L.performance.mark("sentry-tracing-init"),this._trackCLS(),this._trackLCP(),this._trackFID())}return t.prototype.addPerformanceEntries=function(t){var e=this
if(L&&L.performance&&L.performance.getEntries&&k.Z1){s.k.log("[Tracing] Adding & adjusting spans using Performance API")
var n,i,r=(0,T.XL)(k.Z1)
if(L.performance.getEntries().slice(this._performanceCursor).forEach((function(a){var o=(0,T.XL)(a.startTime),c=(0,T.XL)(a.duration)
if(!("navigation"===t.op&&r+o<t.startTimestamp))switch(a.entryType){case"navigation":!function(t,e,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach((function(i){N(t,e,i,n)})),N(t,e,"secureConnection",n,"TLS/SSL","connectEnd"),N(t,e,"fetch",n,"cache","domainLookupStart"),N(t,e,"domainLookup",n,"DNS"),function(t,e,n){D(t,{op:"browser",description:"request",startTimestamp:n+(0,T.XL)(e.requestStart),endTimestamp:n+(0,T.XL)(e.responseEnd)}),D(t,{op:"browser",description:"response",startTimestamp:n+(0,T.XL)(e.responseStart),endTimestamp:n+(0,T.XL)(e.responseEnd)})}(t,e,n)}(t,a,r),n=r+(0,T.XL)(a.responseStart),i=r+(0,T.XL)(a.requestStart)
break
case"mark":case"paint":case"measure":var p=function(t,e,n,i,r){var a=r+n,s=a+i
return D(t,{description:e.name,endTimestamp:s,op:e.entryType,startTimestamp:a}),a}(t,a,o,c,r),d=R(),u=a.startTime<d.firstHiddenTime
"first-paint"===a.name&&u&&(s.k.log("[Measurements] Adding FP"),e._measurements.fp={value:a.startTime},e._measurements["mark.fp"]={value:p}),"first-contentful-paint"===a.name&&u&&(s.k.log("[Measurements] Adding FCP"),e._measurements.fcp={value:a.startTime},e._measurements["mark.fcp"]={value:p})
break
case"resource":var l=a.name.replace(L.location.origin,"")
!function(t,e,n,i,r,a){if("xmlhttprequest"!==e.initiatorType&&"fetch"!==e.initiatorType){var s={}
"transferSize"in e&&(s["Transfer Size"]=e.transferSize),"encodedBodySize"in e&&(s["Encoded Body Size"]=e.encodedBodySize),"decodedBodySize"in e&&(s["Decoded Body Size"]=e.decodedBodySize)
var o=a+i
D(t,{description:n,endTimestamp:o+r,op:e.initiatorType?"resource."+e.initiatorType:"resource",startTimestamp:o,data:s})}}(t,a,l,o,c,r)}})),this._performanceCursor=Math.max(performance.getEntries().length-1,0),this._trackNavigator(t),"pageload"===t.op){var a=(0,T.XL)(k.Z1)
"number"==typeof n&&(s.k.log("[Measurements] Adding TTFB"),this._measurements.ttfb={value:1e3*(n-t.startTimestamp)},"number"==typeof i&&i<=n&&(this._measurements["ttfb.requestTime"]={value:1e3*(n-i)})),["fcp","fp","lcp"].forEach((function(n){if(e._measurements[n]&&!(a>=t.startTimestamp)){var i=e._measurements[n].value,r=a+(0,T.XL)(i),o=Math.abs(1e3*(r-t.startTimestamp)),c=o-i
s.k.log("[Measurements] Normalized "+n+" from "+i+" to "+o+" ("+c+")"),e._measurements[n].value=o}})),this._measurements["mark.fid"]&&this._measurements.fid&&D(t,{description:"first input delay",endTimestamp:this._measurements["mark.fid"].value+(0,T.XL)(this._measurements.fid.value),op:"web.vitals",startTimestamp:this._measurements["mark.fid"].value}),"fcp"in this._measurements||delete this._measurements.cls,t.setMeasurements(this._measurements),function(t,e,n){e&&(s.k.log("[Measurements] Adding LCP Data"),e.element&&t.setTag("lcp.element",(0,x.R)(e.element)),e.id&&t.setTag("lcp.id",e.id),e.url&&t.setTag("lcp.url",e.url.trim().slice(0,200)),t.setTag("lcp.size",e.size)),n&&n.sources&&(s.k.log("[Measurements] Adding CLS Data"),n.sources.forEach((function(e,n){return t.setTag("cls.source."+(n+1),(0,x.R)(e.node))})))}(t,this._lcpEntry,this._clsEntry),t.setTag("sentry_reportAllChanges",this._reportAllChanges)}}},t.prototype._trackNavigator=function(t){var e=L.navigator
if(e){var n=e.connection
n&&(n.effectiveType&&t.setTag("effectiveConnectionType",n.effectiveType),n.type&&t.setTag("connectionType",n.type),P(n.rtt)&&(this._measurements["connection.rtt"]={value:n.rtt}),P(n.downlink)&&(this._measurements["connection.downlink"]={value:n.downlink})),P(e.deviceMemory)&&t.setTag("deviceMemory",String(e.deviceMemory)),P(e.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}},t.prototype._trackCLS=function(){var t,e,n,i,r,a,o,c=this
t=function(t){var e=t.entries.pop()
e&&(s.k.log("[Measurements] Adding CLS"),c._measurements.cls={value:t.value},c._clsEntry=e)},n=I("CLS",0),i=0,r=[],(o=C("layout-shift",a=function(t){if(t&&!t.hadRecentInput){var a=r[0],s=r[r.length-1]
i&&0!==r.length&&t.startTime-s.startTime<1e3&&t.startTime-a.startTime<5e3?(i+=t.value,r.push(t)):(i=t.value,r=[t]),i>n.value&&(n.value=i,n.entries=r,e&&e())}}))&&(e=O(t,n,void 0),w((function(){o.takeRecords().map(a),e(!0)})))},t.prototype._trackLCP=function(){var t=this
!function(e,n){var i,r=R(),a=I("LCP"),o=function(t){var e=t.startTime
e<r.firstHiddenTime&&(a.value=e,a.entries.push(t)),i&&i()},c=C("largest-contentful-paint",o)
if(c){i=O((function(e){var n=e.entries.pop()
if(n){var i=(0,T.XL)(k.Z1),r=(0,T.XL)(n.startTime)
s.k.log("[Measurements] Adding LCP"),t._measurements.lcp={value:e.value},t._measurements["mark.lcp"]={value:i+r},t._lcpEntry=n}}),a,n)
var p=function(){A[a.id]||(c.takeRecords().map(o),c.disconnect(),A[a.id]=!0,i(!0))};["keydown","click"].forEach((function(t){addEventListener(t,p,{once:!0,capture:!0})})),w(p,!0)}}(0,this._reportAllChanges)},t.prototype._trackFID=function(){var t,e,n,i,r,a,o=this
t=function(t){var e=t.entries.pop()
if(e){var n=(0,T.XL)(k.Z1),i=(0,T.XL)(e.startTime)
s.k.log("[Measurements] Adding FID"),o._measurements.fid={value:t.value},o._measurements["mark.fid"]={value:n+i}}},n=R(),i=I("FID"),(a=C("first-input",r=function(t){e&&t.startTime<n.firstHiddenTime&&(i.value=t.processingStart-t.startTime,i.entries.push(t),e(!0))}))&&(e=O(t,i,void 0),w((function(){a.takeRecords().map(r),a.disconnect()}),!0))},t}()
function N(t,e,n,i,r,a){var s=a?e[a]:e[n+"End"],o=e[n+"Start"]
o&&s&&D(t,{op:"browser",description:null!=r?r:n,startTimestamp:i+(0,T.XL)(o),endTimestamp:i+(0,T.XL)(s)})}function D(t,e){var n=e.startTimestamp,i=(0,a._T)(e,["startTimestamp"])
return n&&t.startTimestamp>n&&(t.startTimestamp=n),t.startChild((0,a.pi)({startTimestamp:n},i))}function P(t){return"number"==typeof t&&isFinite(t)}var q=n(399),H=n(670),F={traceFetch:!0,traceXHR:!0,tracingOrigins:["localhost",/^\//]}
function X(t){var e=(0,a.pi)((0,a.pi)({},F),t),n=e.traceFetch,i=e.traceXHR,r=e.tracingOrigins,s=e.shouldCreateSpanForRequest,o={},c=function(t){if(o[t])return o[t]
var e=r
return o[t]=e.some((function(e){return(0,q.zC)(t,e)}))&&!(0,q.zC)(t,"sentry_key"),o[t]},p=c
"function"==typeof s&&(p=function(t){return c(t)&&s(t)})
var d={}
n&&(0,H.o)("fetch",(function(t){!function(t,e,n){if((0,T.zu)()&&t.fetchData&&e(t.fetchData.url))if(t.endTimestamp){var i=t.fetchData.__span
if(!i)return;(s=n[i])&&(t.response?s.setHttpStatus(t.response.status):t.error&&s.setStatus("internal_error"),s.finish(),delete n[i])}else{var r=(0,T.x1)()
if(r){var s=r.startChild({data:(0,a.pi)((0,a.pi)({},t.fetchData),{type:"fetch"}),description:t.fetchData.method+" "+t.fetchData.url,op:"http.client"})
t.fetchData.__span=s.spanId,n[s.spanId]=s
var o=t.args[0]=t.args[0],c=t.args[1]=t.args[1]||{},p=c.headers;(0,l.V9)(o,Request)&&(p=o.headers),p?"function"==typeof p.append?p.append("sentry-trace",s.toTraceparent()):p=Array.isArray(p)?(0,a.fl)(p,[["sentry-trace",s.toTraceparent()]]):(0,a.pi)((0,a.pi)({},p),{"sentry-trace":s.toTraceparent()}):p={"sentry-trace":s.toTraceparent()},c.headers=p}}}(t,p,d)})),i&&(0,H.o)("xhr",(function(t){!function(t,e,n){if(!(!(0,T.zu)()||t.xhr&&t.xhr.__sentry_own_request__)&&t.xhr&&t.xhr.__sentry_xhr__&&e(t.xhr.__sentry_xhr__.url)){var i=t.xhr.__sentry_xhr__
if(t.endTimestamp){var r=t.xhr.__sentry_xhr_span_id__
if(!r)return;(o=n[r])&&(o.setHttpStatus(i.status_code),o.finish(),delete n[r])}else{var s=(0,T.x1)()
if(s){var o=s.startChild({data:(0,a.pi)((0,a.pi)({},i.data),{type:"xhr",method:i.method,url:i.url}),description:i.method+" "+i.url,op:"http.client"})
if(t.xhr.__sentry_xhr_span_id__=o.spanId,n[t.xhr.__sentry_xhr_span_id__]=o,t.xhr.setRequestHeader)try{t.xhr.setRequestHeader("sentry-trace",o.toTraceparent())}catch(t){}}}}}(t,p,d)}))}var j,z=(0,_.R)(),B=(0,a.pi)({idleTimeout:y.nT,markBackgroundTransactions:!0,maxTransactionDuration:600,routingInstrumentation:function(t,e,n){if(void 0===e&&(e=!0),void 0===n&&(n=!0),z&&z.location){var i,r=z.location.href
e&&(i=t({name:z.location.pathname,op:"pageload"})),n&&(0,H.o)("history",(function(e){var n=e.to,a=e.from
void 0===a&&r&&-1!==r.indexOf(n)?r=void 0:a!==n&&(r=void 0,i&&(s.k.log("[Tracing] Finishing current transaction with op: "+i.op),i.finish()),i=t({name:z.location.pathname,op:"navigation"}))}))}else s.k.warn("Could not initialize routing instrumentation due to invalid location")},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0},F),Y=function(){function t(e){this.name=t.id,this._emitOptionsWarning=!1,this._configuredIdleTimeout=void 0
var n=F.tracingOrigins
e&&(this._configuredIdleTimeout=e.idleTimeout,e.tracingOrigins&&Array.isArray(e.tracingOrigins)&&0!==e.tracingOrigins.length?n=e.tracingOrigins:this._emitOptionsWarning=!0),this.options=(0,a.pi)((0,a.pi)((0,a.pi)({},B),e),{tracingOrigins:n})
var i=this.options._metricOptions
this._metrics=new M(i&&i._reportAllChanges)}return t.prototype.setupOnce=function(t,e){var n=this
this._getCurrentHub=e,this._emitOptionsWarning&&(s.k.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),s.k.warn("[Tracing] We added a reasonable default for you: "+F.tracingOrigins))
var i=this.options,r=i.routingInstrumentation,a=i.startTransactionOnLocationChange,o=i.startTransactionOnPageLoad,c=i.markBackgroundTransactions,p=i.traceFetch,d=i.traceXHR,u=i.tracingOrigins,l=i.shouldCreateSpanForRequest
r((function(t){return n._createRouteTransaction(t)}),o,a),c&&(S&&S.document?S.document.addEventListener("visibilitychange",(function(){var t=(0,T.x1)()
S.document.hidden&&t&&(s.k.log("[Tracing] Transaction: cancelled -> since tab moved to the background, op: "+t.op),t.status||t.setStatus("cancelled"),t.setTag("visibilitychange","document.hidden"),t.setTag(b.d,b.x[2]),t.finish())})):s.k.warn("[Tracing] Could not set up background tab detection due to lack of global document")),X({traceFetch:p,traceXHR:d,tracingOrigins:u,shouldCreateSpanForRequest:l})},t.prototype._createRouteTransaction=function(t){var e=this
if(this._getCurrentHub){var n=this.options,i=n.beforeNavigate,o=n.idleTimeout,c=n.maxTransactionDuration,p="pageload"===t.op?function(){var t,e=(t=(0,_.R)().document.querySelector("meta[name=sentry-trace]"))?t.getAttribute("content"):null
if(e)return(0,T.qG)(e)}():void 0,d=(0,a.pi)((0,a.pi)((0,a.pi)({},t),p),{trimEnd:!0}),u="function"==typeof i?i(d):d,l=void 0===u?(0,a.pi)((0,a.pi)({},d),{sampled:!1}):u
!1===l.sampled&&s.k.log("[Tracing] Will not send "+l.op+" transaction because of beforeNavigate."),s.k.log("[Tracing] Starting "+l.op+" transaction on scope")
var h=this._getCurrentHub(),m=(0,_.R)().location,f=(0,r.lb)(h,l,o,!0,{location:m})
return f.registerBeforeFinishCallback((function(t,n){e._metrics.addPerformanceEntries(t),function(t,e,n){var i=n-e.startTimestamp
n&&(i>t||i<0)&&(e.setStatus("deadline_exceeded"),e.setTag("maxTransactionDurationExceeded","true"))}((0,T.WB)(c),t,n)})),f.setTag("idleTimeout",this._configuredIdleTimeout),f}s.k.warn("[Tracing] Did not create "+t.op+" transaction because _getCurrentHub is invalid.")},t.id="BrowserTracing",t}(),G=n(538)
!function(t){t.Ok="ok",t.DeadlineExceeded="deadline_exceeded",t.Unauthenticated="unauthenticated",t.PermissionDenied="permission_denied",t.NotFound="not_found",t.ResourceExhausted="resource_exhausted",t.InvalidArgument="invalid_argument",t.Unimplemented="unimplemented",t.Unavailable="unavailable",t.InternalError="internal_error",t.UnknownError="unknown_error",t.Cancelled="cancelled",t.AlreadyExists="already_exists",t.FailedPrecondition="failed_precondition",t.Aborted="aborted",t.OutOfRange="out_of_range",t.DataLoss="data_loss"}(j||(j={}))
var J=n(12),W=n(438);(0,r.ro)()},538:(t,e,n)=>{n.d(e,{gB:()=>o,Dr:()=>c,Zd:()=>p})
var i=n(378),r=n(438),a=n(505),s=n(927),o=function(){function t(t){void 0===t&&(t=1e3),this.spans=[],this._maxlen=t}return t.prototype.add=function(t){this.spans.length>this._maxlen?t.spanRecorder=void 0:this.spans.push(t)},t}(),c=function(){function t(t){if(this.traceId=(0,r.DM)(),this.spanId=(0,r.DM)().substring(16),this.startTimestamp=(0,a._I)(),this.tags={},this.data={},!t)return this
t.traceId&&(this.traceId=t.traceId),t.spanId&&(this.spanId=t.spanId),t.parentSpanId&&(this.parentSpanId=t.parentSpanId),"sampled"in t&&(this.sampled=t.sampled),t.op&&(this.op=t.op),t.description&&(this.description=t.description),t.data&&(this.data=t.data),t.tags&&(this.tags=t.tags),t.status&&(this.status=t.status),t.startTimestamp&&(this.startTimestamp=t.startTimestamp),t.endTimestamp&&(this.endTimestamp=t.endTimestamp)}return t.prototype.child=function(t){return this.startChild(t)},t.prototype.startChild=function(e){var n=new t((0,i.pi)((0,i.pi)({},e),{parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId}))
return n.spanRecorder=this.spanRecorder,n.spanRecorder&&n.spanRecorder.add(n),n.transaction=this.transaction,n},t.prototype.setTag=function(t,e){var n
return this.tags=(0,i.pi)((0,i.pi)({},this.tags),((n={})[t]=e,n)),this},t.prototype.setData=function(t,e){var n
return this.data=(0,i.pi)((0,i.pi)({},this.data),((n={})[t]=e,n)),this},t.prototype.setStatus=function(t){return this.status=t,this},t.prototype.setHttpStatus=function(t){this.setTag("http.status_code",String(t))
var e=p(t)
return"unknown_error"!==e&&this.setStatus(e),this},t.prototype.isSuccess=function(){return"ok"===this.status},t.prototype.finish=function(t){this.endTimestamp="number"==typeof t?t:(0,a._I)()},t.prototype.toTraceparent=function(){var t=""
return void 0!==this.sampled&&(t=this.sampled?"-1":"-0"),this.traceId+"-"+this.spanId+t},t.prototype.toContext=function(){return(0,s.Jr)({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})},t.prototype.updateWithContext=function(t){var e,n,i,r,a
return this.data=null!=(e=t.data)?e:{},this.description=t.description,this.endTimestamp=t.endTimestamp,this.op=t.op,this.parentSpanId=t.parentSpanId,this.sampled=t.sampled,this.spanId=null!=(n=t.spanId)?n:this.spanId,this.startTimestamp=null!=(i=t.startTimestamp)?i:this.startTimestamp,this.status=t.status,this.tags=null!=(r=t.tags)?r:{},this.traceId=null!=(a=t.traceId)?a:this.traceId,this},t.prototype.getTraceContext=function(){return(0,s.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})},t.prototype.toJSON=function(){return(0,s.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})},t}()
function p(t){if(t<400&&t>=100)return"ok"
if(t>=400&&t<500)switch(t){case 401:return"unauthenticated"
case 403:return"permission_denied"
case 404:return"not_found"
case 409:return"already_exists"
case 413:return"failed_precondition"
case 429:return"resource_exhausted"
default:return"invalid_argument"}if(t>=500&&t<600)switch(t){case 501:return"unimplemented"
case 503:return"unavailable"
case 504:return"deadline_exceeded"
default:return"internal_error"}return"unknown_error"}},12:(t,e,n)=>{n.d(e,{Y:()=>p})
var i=n(378),r=n(543),a=n(146),s=n(190),o=n(927),c=n(538),p=function(t){function e(e,n){var i=t.call(this,e)||this
return i._measurements={},i._hub=(0,r.Gd)(),(0,a.V9)(n,r.Xb)&&(i._hub=n),i.name=e.name||"",i.metadata=e.metadata||{},i._trimEnd=e.trimEnd,i.transaction=i,i}return(0,i.ZT)(e,t),e.prototype.setName=function(t){this.name=t},e.prototype.initSpanRecorder=function(t){void 0===t&&(t=1e3),this.spanRecorder||(this.spanRecorder=new c.gB(t)),this.spanRecorder.add(this)},e.prototype.setMeasurements=function(t){this._measurements=(0,i.pi)({},t)},e.prototype.setMetadata=function(t){this.metadata=(0,i.pi)((0,i.pi)({},this.metadata),t)},e.prototype.finish=function(e){var n=this
if(void 0===this.endTimestamp){if(this.name||(s.k.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),t.prototype.finish.call(this,e),!0===this.sampled){var i=this.spanRecorder?this.spanRecorder.spans.filter((function(t){return t!==n&&t.endTimestamp})):[]
this._trimEnd&&i.length>0&&(this.endTimestamp=i.reduce((function(t,e){return t.endTimestamp&&e.endTimestamp?t.endTimestamp>e.endTimestamp?t:e:t})).endTimestamp)
var r={contexts:{trace:this.getTraceContext()},spans:i,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:this.metadata}
return Object.keys(this._measurements).length>0&&(s.k.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),r.measurements=this._measurements),s.k.log("[Tracing] Finishing "+this.op+" transaction: "+this.name+"."),this._hub.captureEvent(r)}s.k.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
var a=this._hub.getClient(),o=a&&a.getTransport&&a.getTransport()
o&&o.recordLostEvent&&o.recordLostEvent("sample_rate","transaction")}},e.prototype.toContext=function(){var e=t.prototype.toContext.call(this)
return(0,o.Jr)((0,i.pi)((0,i.pi)({},e),{name:this.name,trimEnd:this._trimEnd}))},e.prototype.updateWithContext=function(e){var n
return t.prototype.updateWithContext.call(this,e),this.name=null!=(n=e.name)?n:"",this._trimEnd=e.trimEnd,this},e}(c.Dr)},741:(t,e,n)=>{n.d(e,{Ke:()=>r,zu:()=>a,qG:()=>s,x1:()=>o,XL:()=>c,WB:()=>p})
var i=n(543),r=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$")
function a(t){var e=(0,i.Gd)().getClient(),n=t||e&&e.getOptions()
return!!n&&("tracesSampleRate"in n||"tracesSampler"in n)}function s(t){var e=t.match(r)
if(e){var n=void 0
return"1"===e[3]?n=!0:"0"===e[3]&&(n=!1),{traceId:e[1],parentSampled:n,parentSpanId:e[2]}}}function o(t){var e=(t||(0,i.Gd)()).getScope()
return e&&e.getTransaction()}function c(t){return t/1e3}function p(t){return 1e3*t}},378:(t,e,n)=>{n.d(e,{ZT:()=>r,pi:()=>a,_T:()=>s,XA:()=>o,CR:()=>c,fl:()=>p})
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}
function r(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return(a=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t}).apply(this,arguments)}
function s(t,e){var n={}
for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0
for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0
if(n)return n.call(t)
if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var i,r,a=n.call(t),s=[]
try{for(;(void 0===e||e-- >0)&&!(i=a.next()).done;)s.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return s}function p(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(c(arguments[e]))
return t}}}])

//# sourceMappingURL=chunk.425.e3d0354889b95efed902.map