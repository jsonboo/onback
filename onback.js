// 监听浏览器回退，包括浏览器自带后退按键
//传入回调函数，多用于页面包含双重含义，需要回退重定义
onBtnBackClick = function(opt){
    var STATE = "un-back";
    //window.onpopstate = function(event) {
    //    alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
    //};
    //history.pushState({page: 1}, "title 1", "?page=1");
    //history.pushState({page: 2}, "title 2", "?page=2");
    history.replaceState(STATE, null, location.href);
    history.pushState({}, null, location.href);
    window.onpopstate = function(event) {
        if (event.state == STATE) {
            opt.callback();
        }
    };
};
