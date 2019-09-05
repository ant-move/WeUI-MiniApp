const _swan = require("./__antmove/__antmove_baidu/api/index.js")(swan);
const _App = require("./__antmove/component/componentClass.js")("App");

_App({
    onLaunch: function() {
        console.log("App Launch");
    },
    onShow: function() {
        console.log("App Show");
    },
    onHide: function() {
        console.log("App Hide");
    },
    globalData: {
        hasLogin: false
    }
});
