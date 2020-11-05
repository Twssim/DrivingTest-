import { Empty, CountDown ,Circle,Progress , NavBar, Tabbar, TabbarItem ,Search, List, Image as VanImage, Popup, DatetimePicker, ShareSheet, Tab, Tabs, SwipeCell, PullRefresh, Notify, Icon, Skeleton, Toast, Form, field, button, swipe, swipeItem, cell, popup, Dialog, Loading } from 'vant'

const vants = [Empty,CountDown ,Circle ,Progress ,Tabbar, TabbarItem , NavBar, Search, List, VanImage, Tab, Popup, DatetimePicker, Tabs, SwipeCell, ShareSheet, PullRefresh, Notify, Icon, Skeleton, Toast, Form, field, button, swipe, swipeItem, cell, popup, Dialog, Loading]


export default {
    /**
     * Vue.use 方法会自动调用install函数
     * Install Vant Component plugin
     * @param Vue
     */
    install(Vue) {
        vants.forEach(Component => {
            Vue.use(Component)
        })
    }
}