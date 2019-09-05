const _swan = require("../../__antmove/__antmove_baidu/api/index.js")(swan);
const _Page = require("../../__antmove/component/componentClass.js")("Page");

const _my = require("../../__antmove/api/index.js")(_swan);

_Page({
    openToast: function() {
        _my.showToast({
            title: "已完成",
            icon: "success",
            duration: 3000
        });
    },
    openLoading: function() {
        _my.showToast({
            title: "数据加载中",
            icon: "loading",
            duration: 3000
        });
    }
});
