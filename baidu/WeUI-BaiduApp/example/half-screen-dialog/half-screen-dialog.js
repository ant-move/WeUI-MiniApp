const _swan = require("../../__antmove/__antmove_baidu/api/index.js")(swan);
const _Page = require("../../__antmove/component/componentClass.js")("Page");

_Page({
    data: {
        showDialog: false
    },
    openDialog: function() {
        this.setData({
            istrue: true
        });
    },
    closeDialog: function() {
        this.setData({
            istrue: false
        });
    }
});
