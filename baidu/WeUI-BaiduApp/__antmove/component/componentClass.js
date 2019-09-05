const {
    baiduApp,
    baiduPage,
    baiduComponent
} = require("../__antmove_baidu/component/componentClass.js");
const _swan = require("../__antmove_baidu/api/index.js")(swan);
/**
 * type:0 missing
 * type:1 diff
 *
 */
const appTransformation = require("./classSubdirectory/app");

const pageTransformation = require("./classSubdirectory/page");

const componentTransformation = require("./classSubdirectory/component");

module.exports = function processComponent(type = "Component") {
    const core = {
        App: function(options = {}) {
            let _opts = {};
            appTransformation.processTransformationApp(_opts, options);
            baiduApp(_opts);
        },
        Page: function(options = {}) {
            let _opts = {};
            pageTransformation.processTransformationPage(_opts, options);
            baiduPage(_opts);
        },
        Component: function(options = {}) {
            let _opts = {};
            componentTransformation.processTransformationComponent(
                _opts,
                options
            );
            baiduComponent(_opts);
        }
    };
    return core[type];
};
