<template>
  <div id="app">
    <keep-alive>
      <router-view  
    /></keep-alive>
    <!-- <div v-show="jumpMyPage"></div>
    <div v-show="JumpSonPage">
      <van-tabbar v-model="bottom">
        <van-tabbar-item @click="jumpHome" icon="records">
          首页
        </van-tabbar-item>
        <van-tabbar-item @click="change" icon="smile-o"> 我的 </van-tabbar-item>
      </van-tabbar> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   active: 0, //选项卡高亮
    //   bottom: 0, //底部选项卡高亮
    //   jumpMyPage: true, //跳转页面,
    //   icon: {
    //     active: "https://img.yzcdn.cn/vant/user-active.png",
    //     inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
    //   },
    //   JumpSonPage: true, //跳转子页面时候隐藏主页面
     };
  },
  beforeCreate() {
    // this.JumpSonPage = true;
    // console.log("创建前");
  },
  mounted() {
    // this.JumpSonPage = true;
  },
  created() {
    // const Page = this.$toast.loading({
    //   message: "加载中...",
    //   forbidClick: true,
    //   loadingType: "spinner",
    // });
    // this.JumpSonPage = true;
    // console.log(this.JumpSonPage);
    // this.getMyMessage();
  },
  methods: {
    // getMyMessage(data) {
    //   this.bottom = data;
    // },
    // getMyMessageFromTestPage(data) {
    //   console.log(data);
    //   this.JumpSonPage = data;
    // },
    // jumpHome() {
    //   this.jumpMyPage = true;
    //   if (this.$route.path == "/") {
    //     console.log("重复跳转");
    //   } else {
    //     this.$router.push({
    //       path: "/",
    //     });
    //   }
    // },
    // change() {
    //   this.jumpMyPage = false;
    //   if (this.$route.path == "/My") {
    //     console.log("重复跳转");
    //   } else {
    //     this.$router.push({
    //       path: "/My",
    //     });
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  max-height: 100%;
  overflow: hidden;
}
</style>