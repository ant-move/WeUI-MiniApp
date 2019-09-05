if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../example/index');
require('../../example/button/button');
require('../../example/list/list');
require('../../example/slideview/slideview');
require('../../example/input/input');
require('../../example/slider/slider');
require('../../example/uploader/uploader');
require('../../example/article/article');
require('../../example/badge/badge');
require('../../example/flex/flex');
require('../../example/footer/footer');
require('../../example/gallery/gallery');
require('../../example/grid/grid');
require('../../example/icons/icons');
require('../../example/loading/loading');
require('../../example/loadmore/loadmore');
require('../../example/panel/panel');
require('../../example/preview/preview');
require('../../example/progress/progress');
require('../../example/actionsheet/actionsheet');
require('../../example/half-screen-dialog/half-screen-dialog');
require('../../example/dialog/dialog');
require('../../example/msg/msg');
require('../../example/msg/msg_text');
require('../../example/msg/msg_text_primary');
require('../../example/msg/msg_success');
require('../../example/msg/msg_fail');
require('../../example/picker/picker');
require('../../example/toast/toast');
require('../../example/navigation-bar/navigation-bar');
require('../../example/tabbar/tabbar');
require('../../example/searchbar/searchbar');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}