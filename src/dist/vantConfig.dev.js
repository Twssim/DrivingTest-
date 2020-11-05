"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vant = require("vant");

var vants = [_vant.Empty, _vant.CountDown, _vant.Circle, _vant.Progress, _vant.Tabbar, _vant.TabbarItem, _vant.NavBar, _vant.Search, _vant.List, _vant.Image, _vant.Tab, _vant.Popup, _vant.DatetimePicker, _vant.Tabs, _vant.SwipeCell, _vant.ShareSheet, _vant.PullRefresh, _vant.Notify, _vant.Icon, _vant.Skeleton, _vant.Toast, _vant.Form, _vant.field, _vant.button, _vant.swipe, _vant.swipeItem, _vant.cell, _vant.popup, _vant.Dialog, _vant.Loading];
var _default = {
  /**
   * Vue.use 方法会自动调用install函数
   * Install Vant Component plugin
   * @param Vue
   */
  install: function install(Vue) {
    vants.forEach(function (Component) {
      Vue.use(Component);
    });
  }
};
exports["default"] = _default;