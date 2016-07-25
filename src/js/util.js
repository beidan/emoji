/*
 *   element  对象
 *   eType   click……
 *   handle  处理函数
 *   bol   是否冒泡  格式true,false
 * */


// 事件绑定
function addEvent(element, eType, handle, bol) {
    if (element.addEventListener) {
        element.addEventListener(eType, handle, bol);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eType, handle);
    } else {
        element['on' + eType] = handle;
    }
}
// 事件解绑
function removeEvent(element, eType, handle, bol) {
    if (element.addEventListener) {
        element.removeEventListener(eType, handle, bol);
    } else if (element.attachEvent) {
        element.detachEvent("on" + eType, handle);
    } else {
        element["on" + eType] = null;
    }
}
//事件代理
//function on(ele,eType,handle,bol){
//    addEvent(ele,eType,function(e){
//        var e = e||window.event;   //IE8及IE8以下只支持window.event，不支持参数传人
//        var target = e.target||e.srcElement;    //IE没有e.target，有e.srcElement
//        if(target.tagName.toLowerCase()=="td"){
//            changeStyle(target);
//        }
//    },bol);
//}

function onttt(ele, inner, eType, handle) {
    console.log('xxxxyyyx');
    addEvent(ele, eType, function (e) {
        var e = e || window.event;   //IE8及IE8以下只支持window.event，不支持参数传人
        var target = e.target || e.srcElement;    //IE没有e.target，有e.srcElement
        //if (target)
        console.log(inner);
        console.log(target);
        //if(target.tagName.toLowerCase()=="td"){
        //    changeStyle(tar   get);
        //}
    }, true);
}

var o = $('#out'),
    inx = o.find('td');
onttt($('#out'), inx, 'click');

addEvent($('#out'), 'click', function(){
    console.log('test');
}, true);

console.log('xx');

