<template>
  <div class="home">
    <keep-alive> <router-view @from-MyPage="getMyMessage" /></keep-alive>
    <div v-show="JumpSonPage">
      <van-nav-bar
        @click-left="onClickLeft"
        @click-right="onClickRight"
        title="驾考一点通极速版"
        left-arrow
      >
        <template #left>
          <van-icon name="sign" size="22" />
        </template>
        <template #right>
          <van-icon name="chat-o" size="22" />
        </template>
      </van-nav-bar>
      <van-tabs v-model="active" animated>
        <van-tab title="科目 1">
          <div class="exercise">
            <ul>
              <li>顺序练习</li>
              <li>
                <span>
                  <p>497</p>
                  <p>未做题</p>
                </span>
                <span>
                  <p>3</p>
                  <p>错题</p>
                </span>
              </li>
              <li @click="jumpAnswer">
                <p>开始练习</p>
              </li>
            </ul>
          </div>
          <div class="exercise">
            <ul>
              <li>仿真模拟考试</li>
              <li>
                <span>
                  <p>497</p>
                  <p>本次成绩</p>
                </span>
                <span>
                  <p>3</p>
                  <p>最好成绩</p>
                </span>
              </li>
              <li @click="JumpPackToTest">
                <p>开始考试</p>
              </li>
            </ul>
          </div>
          <div class="instrument">
            <ul>
              <li>
                <span>
                  <img src="./images/练习 (1).png" />
                  <p>练习50题</p>
                </span>
              </li>
              <li>
                <span>
                  <img src="./images/错小图标.png" />
                  <p>错题本</p>
                </span>
              </li>
              <li>
                <span>
                  <img src="./images/收藏 (1).png" />
                  <p>收藏</p>
                </span>
              </li>
              <li>
                <span>
                  <img src="./images/成绩.png" />
                  <p>我的成绩</p>
                </span>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="科目 4">
          <div class="exercise">
            <ul>
              <li>顺序练习</li>
              <li>
                <span>
                  <p>497</p>
                  <p>未做题</p>
                </span>
                <span>
                  <p>3</p>
                  <p>错题</p>
                </span>
              </li>
              <li @click="jumpAnswer">
                <p>开始练习</p>
              </li>
            </ul>
          </div>
          <div class="exercise">
            <ul>
              <li>仿真模拟考试</li>
              <li>
                <span>
                  <p>497</p>
                  <p>本次成绩</p>
                </span>
                <span>
                  <p>3</p>
                  <p>最好成绩</p>
                </span>
              </li>
              <li>
                <p>开始考试</p>
              </li>
            </ul>
          </div>
          <div class="instrument">
            <ul>
              <li>
                <span>
                  <img src="./images/错.png" />
                  <p>练习50题</p>
                </span>
              </li>
              <li>
                <span>
                  <img src="./images/错小图标.png" />
                  <p>错题本</p>
                </span>
              </li>
              <li>
                <span>
                  <img src="./images/收藏 (1).png" />
                  <p>收藏</p>
                </span>
              </li>
              <li>
                <span>
                  <img src="./images/成绩.png" />
                  <p>我的成绩</p>
                </span>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="footer">
      <ul>
        <li>
          <span @click="jumpHome">
            <img src="./images/首页 (1).png" />
            <p>首页</p>
          </span>
        </li>
        <li>
          <span @click="My">
            <img src="./images/我的 (1).png" />
            <p>我的</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      active: 0,
      currentRate: 0,
      bottom: 0,
      JumpSonPage: true, //跳转我的页面
      index: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6",
      }, //环形进度条颜色
    };
  },
  computed: {
    // text() {
    //   return this.currentRate.toFixed(0) + "%";
    // },
  },
  created() {
    if (this.$route.path == "/") {
      this.JumpSonPage = true;
      console.log("出发");
      console.log(this.JumpSonPage);
    }
  },
  methods: {
    getMyMessage(data) {
      this.bottom = data;
      this.JumpSonPage = data;
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    jumpAnswer() {
      this.index++;
      this.$router.push({
        path: "/Exercise",
        query: this.index,
      });
    },
    jumpHome() {
      this.jumpMyPage = true;
      if (this.$route.path == "/") {
        console.log("重复跳转");
      } else {
        this.$router.push({
          path: "/",
        });
      }
      this.JumpSonPage = true;
    },
    My() {
      this.jumpMyPage = false;
      this.JumpSonPage = false;
      if (this.$route.path == "/My") {
        console.log("重复跳转");
      } else {
        this.$router.push({
          path: "/My",
        });
      }
    },
    JumpPackToTest(){
       this.$router.push({
          path: "/Review",
        });
    }
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  width: 100%;
  max-height: 100%;
  background-color: #f7f7f7;
  overflow: hidden;
}
.home .exercise:nth-child(1) {
  background: url("./images/backgourndImg.jpg") no-repeat;
}
.home .exercise:nth-child(2) {
  background: url("./images/u=3242894028,212013700&fm=26&gp=0.jpg") no-repeat;
}
.home .exercise {
  position: relative;
  bottom: 0;
  width: 92%;
  height: 5.5rem;
  margin: 0 auto;
  border-radius: 0.6rem;
  ul {
    margin-top: 0.3rem;
    li {
      width: 100%;
      height: 30%;
    }
    li:nth-child(1) {
      text-align: center;
      line-height: 2rem;
      color: white;
      font-size: 0.5rem;
    }
    li:nth-child(2) {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 0.3rem;
      span:nth-child(1) {
        display: inline-block;
        width: 30%;
        text-align: center;
        margin-right: 1rem;
        p:nth-child(1) {
          color: white;
          font-size: 1rem;
        }
        p:nth-child(2) {
          color: white;
          font-size: 0.5rem;
          font-weight: 300;
        }
      }
      span:nth-child(2) {
        text-align: center;
        display: inline-block;
        width: 30%;
        margin-left: 1rem;
        p:nth-child(1) {
          color: white;
          font-size: 1rem;
        }
        p:nth-child(2) {
          color: white;
          font-size: 0.5rem;
          font-weight: 300;
        }
      }
    }
    li:nth-child(3) {
      text-align: center;
      color: white;
      font-size: 0.5rem;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 3rem;

        background: white;
        color: green;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
      }
    }
  }
}
.home .instrument {
  position: relative;
  margin-top: 0.3rem;
  padding: .3rem 0;
  height: 1.5rem;
  background-color: white;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      span {
        vertical-align: middle;
        text-align: center;
        display: inline-block;
        font-size: 0.8rem;
      }
      img {
        width: 0.5rem;
      }
      p {
        font-size: 0.2rem;
      }
    }
  }
}
.home .footer {
  width: 100%;
  height: 1rem;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  padding-top: 0.2rem;
  border-top: 1px rgba(176, 176, 176, 0.5) solid;
  background-color: white;
  ul {
    width: 100%;
    display: flex;
    li {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 0.5rem;
      text-align: center;
      span {
        display: inline-block;
        img {
          width: 0.5rem;
        }
        p {
          color: black;
          font-size: 0.1rem;
        }
      }
    }
  }
}
</style> 
