<template>
  <div class="review">
    <keep-alive><router-view /></keep-alive>
    <!-- 头部 -->
    <div class="title">
      <ul>
        <li @click="goback">
          <img src="../images/左箭头.png" />
        </li>
        <li>
          <van-count-down :format="type" :time="time" />
        </li>
        <li>设置</li>
      </ul>
    </div>
    <!-- 头部层结束 -->
    <!-- 轮播图层  -->
    <div class="banner"><img src="../images/TestPageBanner.jpg" /></div>
    <!-- 轮播图层结束  -->

    <!-- 题目层 -->
    <div class="question">
      <ul>
        <li v-show="index === i" v-for="(k, i) in questionAll" :key="i">
          <span v-show="k.choice" class="question_type">单选</span>
          <span v-show="!k.choice" class="question_type">判断</span>
          <span class="questiontitle">{{ k.question }}</span>
          <div v-show="k.img" class="questionImg">
            <img :src="k.img" />
          </div>
          <div class="item">
            <!-- 单选题 -->
            <ul @ v-show="k.choice">
              <li
                @click="judege(k.answertrue, index, k.id)"
                v-for="(r, index) in k.choice"
                :key="index"
              >
                <span>
                  <img
                    v-show="k.answertrue == index + 1 && k.show"
                    src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/b52ae0cf7d2d3a3cf4d1e0dff9bcad69.png"
                  />
                  <img
                    v-show="
                      index + 1 === k.chooice &&
                      index + 1 != k.answertrue &&
                      k.show
                    "
                    src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png"
                  />
                </span>
                {{ r }}
              </li>
            </ul>
            <!-- 单选题结束 -->

            <!-- 判断题 -->
            <ul v-show="!k.choice">
              <li
                @click="judege(k.answertrue, index, k.id)"
                v-for="(r, index) in k.estimate"
                :key="index"
              >
                <span>
                  <img
                    v-show="k.answertrue == index + 1 && k.show"
                    src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/b52ae0cf7d2d3a3cf4d1e0dff9bcad69.png"
                  />
                  <img
                    v-show="
                      index + 1 === k.chooice &&
                      index + 1 != k.answertrue &&
                      index + 1 != k.answertrue &&
                      k.show
                    "
                    src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png"
                  />
                </span>
                {{ r }}
              </li>
            </ul>
            <!-- 判断题结束 -->

            <!-- 题目注释 -->

            <!-- 题目注释结束-->
            <div @click="Paper(k.id)" class="collect">
              <img src="../images/成绩.png" />
              <p>交卷</p>
            </div>
            <div @click="collect($event, k.id)" class="updata">
              <img v-show="!k.collect" src="../images/shoucang.png" />
              <img v-show="k.collect" src="../images/收藏 (4).png" />
              <p>{{ k.collect ? "已收藏" : "收藏" }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 题目层结束 -->
    <van-popup position="bottom" :style="{ height: '70%' }" v-model="showMask">
      <div class="Maskfooter">
        <ul>
          <li></li>
          <li>
            <span>
              <img
                src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/b52ae0cf7d2d3a3cf4d1e0dff9bcad69.png"
              />
              <p>{{ trueNum > 0 ? trueNum : 0 }}</p>
            </span>
            <span>
              <img
                src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png"
              />
              <p>{{ falseNum > 0 ? falseNum : 0 }}</p>
            </span>
            <span @click="showPopup">
              <img src="../images/功能.png" />
              <p>{{ questionNum }}</p>
            </span>
          </li>
        </ul>
      </div>
      <div class="radius">
        <ul>
          <li
            class="normal"
            :class="k.style"
            @click="JumpQuestionIndex(k.num)"
            v-for="(k, i) in SeeTitle"
            :key="i"
          >
            {{ k.num }}
          </li>
        </ul>
      </div>
    </van-popup>
    <!-- 题目进度条开始 -->
    <div class="bar">
      <van-progress
        :percentage="answerNum"
        stroke-width="2px"
        :show-pivot="false"
      />
    </div>
    <!-- 题目进度条结束 -->
    <!-- Mask层结束-->
    <div class="btn">
      <p class="type" @click="prev">上一题</p>
      <p class="type" @click="next">下一题</p>
    </div>
    <!-- 底部层 -->
    <div class="footer">
      <ul>
        <li></li>
        <li>
          <span>
            <img
              src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/b52ae0cf7d2d3a3cf4d1e0dff9bcad69.png"
            />
            <p>{{ trueNum > 0 ? trueNum : 0 }}</p>
          </span>
          <span>
            <img
              src="https://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png"
            />
            <p>{{ falseNum > 0 ? falseNum : 0 }}</p>
          </span>
          <span @click="showPopup">
            <img src="../images/功能.png" />
            <p>{{ currentIndex }}/{{ questionNum }}</p>
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
      questionAll: [], //问题内容
      index: 0, //问题起步数量
      choice: [], //选择题
      estimate: [], //判断
      first: false, //是否为第一题
      last: false, //是否为最后一题
      questionNum: 0, //题目数量
      active: "", //当前点击选项显示图片
      trueNum: 0, //做对的题目数量
      falseNum: 0, //做错的题目数量
      answeredAll: [], //答过的题目
      i: 0, //当前题目索引值
      showMask: false,
      SeeTitle: [], //查看题目索引值
      LoadingMask: false,
      trueNumAll: [], //对的题目数组
      falseNumAll: [], //错的题目数组
      currentIndex: 1, //当前是第几题
      currentId: 0, //当前题目id
      collectTitle: "收藏",
      pattern: true, //点击背题
      answerNum: 0, //答题的数量
      time: 30 * 60 * 1000, //倒计时
      type: "mm:ss",
      timer: 0, //定时器
      btn: true, //定时器防抖
      Clickconfirm: false, //点击了继续考试
      collectAll: [], //收藏题目
    };
  },
  beforedestroy() {
    console.log("页面被摧毁");
  },
  watch: {
    $route: function (to, from) {
      console.log(to, "tp");
      console.log(from, "from");
      if (to) {
        location.reload();
      }
    },
    index(to, from) {
      console.log(to, "tp");
      console.log(from, "from");
      if (to) {
        clearInterval(this.timer);
        this.btn = true;
      }
    },
  },
  created() {
    this.getQuestion();
  },
  mounted() {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    onClickLeft() {},
    onClickRight() {},
    getQuestion() {
      if (this.index == 0) {
        this.grey = true;
      }
      for (let i = 1030; i < 1130; i++) {
        this.axios
          .get("http://m.jxedt.com/mnksnew/g.asp?id=" + i + "")

          .then((res) => {
            //判断题
            if (res.data.type == 1) {
              this.questionAll.push({
                question: res.data.question, //问题
                explain: res.data.explain, //讲解
                id: res.data.id, //问题id
                answertrue: res.data.answertrue, //答案索引值
                estimate: ["A:" + "对", "B:" + "错"], //判断题概括
                show: false, //是否显示正确选项
                chooice: 0, //当前选项
                answered: false, //当前问题是否回答过
                right: false, //答对了吗?
                collect: false, //被收藏了吗
              });
            }
            if (res.data.type == 2) {
              // this.questionAll.push({
              //   img:res.data[i].imageurl
              // })
              if (res.data.imageurl) {
                this.questionAll.push({
                  img: res.data.imageurl,
                  question: res.data.question,
                  explain: res.data.explain,
                  id: res.data.id,
                  answertrue: res.data.answertrue,
                  choice: [
                    "A" + res.data.an1,
                    "B" + res.data.an2,
                    "C" + res.data.an3,
                    "D" + res.data.an4,
                  ],
                  show: false, //是否显示正确选项
                  chooice: 0, //当前选项
                  answered: false, //当前问题是否回答过
                  right: false, //答对了吗?
                  collect: false, //被收藏了吗
                });
              } else {
                this.questionAll.push({
                  question: res.data.question,
                  A: res.data.an1,
                  B: res.data.an2,
                  C: res.data.an3,
                  D: res.data.an4,
                  explain: res.data.explain,
                  id: res.data.id,
                  answertrue: res.data.answertrue,
                  choice: [
                    "A:" + res.data.an1,
                    "B:" + res.data.an2,
                    "C:" + res.data.an3,
                    "D:" + res.data.an4,
                  ],
                  show: false, //是否显示正确选项
                  chooice: 0, //当前选项
                  answered: false, //当前问题是否回答过
                  right: false, //答对了吗?
                  collect: false, //被收藏了吗
                });
              }
            }
            this.questionNum = this.questionAll.length;
            this.getQuestionCollect();
          });
      }
    },
    getQuestionCollect() {
      if (localStorage.getItem("收藏的题目")) {
        this.collectAll = JSON.parse(localStorage.getItem("收藏的题目"));
      }
      for (let i = 0; i < this.questionAll.length; i++) {
        for (let j = 0; j < this.collectAll.length; j++) {
          if (this.questionAll[i].id == this.collectAll[j]) {
            this.questionAll[i].collect = true;
          }
        }
      }
    },
    prev() {
      if (this.index == 0) {
        this.first = true;
        Toast("当前为第一题");
      } else {
        this.index--;
        this.first = false;
        this.last = false;
        this.currentIndex = this.index + 1;
      }
    },
    next() {
      if (this.index == this.questionAll.length - 1) {
        Toast("题目已刷完");
        this.last = true;
      } else {
        this.index++;
        this.currentIndex = this.index + 1;
      }
    },
    judege(answer, index, id) {
      this.answerNum++;
      console.log(this.answerNum);
      if (this.pattern) {
        for (let j = 0; j < this.questionAll.length; j++) {
          if (this.questionAll[j].answered == false) {
            if (id == this.questionAll[j].id) {
              console.log("当前问题匹配吗？", id == this.questionAll[j].id);
              this.questionAll[j].show = true;
              this.questionAll[j].chooice = index + 1;
              console.log(this.questionAll[j].chooice);
              this.questionAll[j].answered = true;
              if (answer == this.questionAll[j].chooice) {
                this.trueNum++;
                this.questionAll[j].right = true;
                this.trueNumAll.push({
                  num: this.index + 1,
                  type: true,
                  style: "right",
                });
              } else {
                this.falseNum++;
                this.questionAll[j].right = false;
                this.trueNumAll.push({
                  num: this.index + 1,
                  type: false,
                  style: "mistake",
                });
              }
            }
          } else {
            console.log("这个问题回答过了");
          }
        }
        // console.log("当前 show的状态", i + 1);
        // console.log("正确答案索引值", answer);
        // console.log("选卡索引值", index + 1);
        // console.log("当前选项选对了吗？", answer == index + 1);
        console.log("当前是第几题？", this.index + 1);
        console.log("做对了！", this.trueNumAll);
        console.log("做错了！", this.falseNumAll);
        // this.answeredAll.push(i + 1);
        // console.log("answerdALl", this.answeredAll);
        console.log("题目id是多少？", id);
        this.currentId = id;
        // if (answer == index + 1) {
        //   this.trueNum++;
        // } else {
        //   this.falseNum++;
        // }
        localStorage.setItem("做题的记录表", JSON.stringify(this.questionAll));
        localStorage.setItem("答过的题目", JSON.stringify(this.trueNumAll));
        localStorage.setItem("当前的题目索引值", this.currentIndex);
        localStorage.setItem("题目数量", this.questionNum);
        localStorage.setItem("答对的题目数量", this.trueNum);
        localStorage.setItem("答错的题目数量", this.falseNum);
      }
      // for (let j = 0; j < this.questionAll.length - 1; j++) {
      //   this.questionAll[i].i = index;
      //   if (id == this.questionAll[j].id) {
      //     console.log('当前问题匹配吗？',id == this.questionAll[j].id);
      //     if (index + 1 == this.questionAll[i].answertrue) {
      //       this.questionAll[j].show = true;
      //       console.log("正确");
      //     } else {
      //       this.questionAll[j].mistake = true;
      //     }
      //   }
      // }
      if (this.falseNum > 10) {
        if (this.Clickconfirm == false) {
          this.updata();
        } else {
          if (this.btn == true) {
            this.timer = setInterval(() => {
              this.next();
            }, 1000);
            this.btn = false;
          }
        }
      } else {
        if (this.btn == true) {
          this.timer = setInterval(() => {
            this.next();
          }, 1000);
          this.btn = false;
        }
      }
    },
    showPopup() {
      this.showMask = true;
      if (this.LoadingMask == false) {
        for (let j = 0; j < this.questionAll.length; j++) {
          this.SeeTitle.push({
            num: j + 1,
            type: "",
          });
          this.LoadingMask = true;
        }
      }
      for (let i = 0; i < this.SeeTitle.length; i++) {
        //  console.log(this.trueNumAll[i].num)
        // console.log(this.trueNumAll[i].type)
        for (let j = 0; j < this.trueNumAll.length; j++) {
          if (this.SeeTitle[i].num == this.trueNumAll[j].num) {
            this.SeeTitle[i].style = this.trueNumAll[j].style;
          }
        }
      }
    },
    JumpQuestionIndex(k) {
      this.index = k - 1;
      this.currentIndex = k;
      this.first = false;
      this.last = false;
      this.showMask = false;
    },
    showAll() {
      for (let j = 0; j < this.questionAll.length; j++) {
        this.questionAll[j].show = true;
      }
      this.pattern = false;
    },
    answerAll() {
      for (let j = 0; j < this.questionAll.length; j++) {
        this.questionAll[j].show = false;
      }
      this.pattern = true;
    },
    collect(e, id) {
      if (e.target.innerHTML == "收藏") {
        for (let i = 0; i < this.collectAll.length; i++) {
          if (id == this.collectAll[i]) {
            this.collectAll.splice(i, 1);
          }
        }
        this.collectAll.push(id);
        localStorage.setItem("收藏的题目", JSON.stringify(this.collectAll));
        console.log("1");
        for (let i = 0; i < this.questionAll.length - 1; i++) {
          if (id == this.questionAll[i].id) {
            this.questionAll[i].collect = true;
          }
        }
      } else {
        for (let i = 0; i < this.collectAll.length; i++) {
          if (id == this.collectAll[i]) {
            this.collectAll.splice(i, 1);
            localStorage.setItem("收藏的题目", JSON.stringify(this.collectAll));
          }
        }
        for (let i = 0; i < this.questionAll.length - 1; i++) {
          if (id == this.questionAll[i].id) {
            this.questionAll[i].collect = false;
          }
        }
      }
      console.log("点击了收藏按钮");
    },
    updata() {
      this.$dialog
        .confirm({
          title: "成绩不合格",
          message: "当前考试超过10个题目错误，",
          confirmButtonText: "结束考试",
          cancelButtonText: "继续考试",
        })
        .then(() => {
          console.log("结束考试");
        })
        .catch(() => {
          console.log("继续考试");
          this.Clickconfirm = true;
          if (this.btn == true) {
            this.timer = setInterval(() => {
              this.next();
            }, 1000);
            this.btn = false;
          }
        });
    },
    Paper(id) {
      let num = this.falseNum + this.trueNum;
      let hundred = 100;
      let lastNum = hundred - num;
      if (lastNum > 0) {
        this.$dialog
          .confirm({
            title: "你还有" + lastNum + "道题目没做",
            message: "是否要提交试卷，",
            confirmButtonText: "结束考试",
            cancelButtonText: "继续考试",
          })
          .then(() => {
            console.log("结束考试");
          })
          .catch(() => {
            console.log("继续考试");
            for (let j = 0; j < this.questionAll.length; j++) {
              if (id == this.questionAll[j].id) {
                if (this.questionAll[j].answered == true) {
                  if (this.btn == true) {
                    this.timer = setInterval(() => {
                      this.next();
                    }, 1000);
                    this.btn = false;
                  }
                } else {
                  console.log("这个问题回答过了");
                }
              }
            }
          });
      } else {
        console.log("已做完");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.review {
  width: 100%;
  max-height: 100%;
}
.title {
  width: 100%;
  height: 100%;
  .type {
    color: white;
    background-color: #323332;
  }
  ul {
    width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 100%;
      height: 100%;
      p {
        font-size: 0.2rem;
        width: 1.51rem;
        height: 1rem;

        text-align: center;
        line-height: 1rem;
      }
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
}

.title ul li:nth-child(2) {
  display: flex;
  justify-content: space-around;
}

.title ul li:last-child {
  text-align: end;
  line-height: 2rem;
  font-size: 0.2rem;
}
.banner {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
}

.question {
  width: 100%;
  height: 100%;
  ul {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    li {
      width: 100%;
      .question_type {
        width: 0.1rem;
        height: 0.1rem;
        text-align: center;
        line-height: 0.1rem;
        display: inline-block;
        color: #fff;
        font-size: 12px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAiCAMAAADYiy+9AAAANlBMVEUAAAAkwn0kw30kwnwkwn0kw30ixH4jxH0hwXwkwnwkw34lwnwhwH0jxH0jw3wkw34lwn4kwn06OdIGAAAAEXRSTlMA+rPz62FaIRagy309PMuAoG3ulrYAAACeSURBVEjHpdVJDgIxDETRsjOnB6j7Xxah3nQEQiT19vXlnXFT07NH408Wz5Yqvtnd+Cfz/WNenFO8YJADJ4WMmwcXbMNeKmQuyte+BC4KBW/OZQ4ABwXHdYB0QjUKrCJRktAoaTgp6YiURBglpgaIqAa6GmhqIKmBamIArgYONQBXAyWIAWQ1gE0JqIXhtQkBFOea4b1rAaCm1uNs5QVeB4LE5MsVVQAAAABJRU5ErkJggg==)
          no-repeat 50%;
        background-size: 100%;
        margin-right: 4px;
        vertical-align: text-bottom;
        transform: scale(0.83);
      }
    }
  }
}
.question .questiontitle {
  font-size: 0.4rem;
}
.question .questionImg {
  width: 80%;
  height: 10%;
  margin: 0 auto;
  margin-top: 0.3rem;
  display: flex;
  justify-content: center;
}
.question .questionImg img {
  max-width: 200px;
  height: 100%;
  max-height: 120px;
}
.question ul li .title {
  color: #333;
  font-size: 20px;
  line-height: 28px;
}
.item {
  margin-top: 0.5rem;
  font-size: 0.1rem;
  ul li {
    margin-bottom: 0.5rem;
    font-size: 0.4rem;
    position: relative;
  }
  ul span img {
    width: 100%;
    height: 100%;
  }
  .strong {
    font-weight: 600;
    height: 0.5rem;
  }
  span:last-child {
    width: 50%;
    height: 100%;
    img {
      width: 0.5rem;
      height: 0.5rem;
      position: absolute;
      left: -0.7rem;
    }
  }
  .composing {
    padding-left: 0.1rem;
    height: 1rem;
    overflow: hidden;
    overflow-y: scroll;
  }
}
.bar {
  position: fixed;
  bottom: 1rem;
  width: 100%;
}
.btn {
  position: fixed;
  bottom: 1rem;
  right: 0;
  .type {
    float: left;
    width: 2rem;
    background: #24c27d;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    box-shadow: 0 2px 4px 0 rgba(36, 194, 125, 0.2);
    border-radius: 0.5px;
    margin-right: 0.1rem;
  }
  .grey {
    background-color: #323332;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  ul {
    width: 95%;
    margin: 0 auto;

    li:nth-child(1) {
      float: left;
    }
    li:nth-child(2) {
      float: right;
      span:nth-child(1) {
        margin-right: 0.5rem;
      }
      span:nth-child(2) {
        margin-right: 0.5rem;
      }
    }
    img {
      width: 0.5rem;
      vertical-align: middle;
    }
    p {
      display: inline-block;
      font-size: 0.2rem;
    }
  }
}
.radius {
  width: 100%;
  height: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li {
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    border-radius: 50%;
    box-sizing: border-box;
    margin: 0 10px 20px;
    font-size: 0.4rem;
  }
  .normal {
    border: 1px solid #e6e6e6;
    color: #b2b2b2;
    background: #fff;
  }
  .mistake {
    color: #fb6e52;
    border: 1px solid #fb6e52;
    background: rgba(251, 110, 82, 0.2);
  }
  .right {
    color: #00bb7e;
    border: 0;
    background: rgba(0, 187, 126, 0.2);
  }
}
.collect {
  width: 1.3rem;
  position: fixed;
  z-index: 999;
  bottom: 0.1rem;
  left: 0.55rem;
  right: 0;
  img {
    width: 0.4rem;
    height: 0.4rem;
    vertical-align: middle;
    padding-right: 0.2rem;
  }
  p {
    font-size: 0.1rem;
    display: inline-block;
    color: green;
  }
}
.updata {
  width: 2rem;
  position: fixed;
  z-index: 999;
  bottom: 0.1rem;
  left: 2rem;
  right: 0;
  img {
    width: 0.4rem;
    height: 0.4rem;
    vertical-align: middle;
    padding-right: 0.2rem;
  }
  p {
    font-size: 0.1rem;
    display: inline-block;
    color: black;
  }
}
.Maskfooter {
  top: 0;
  width: 100%;
  margin-bottom: 1rem;
  ul {
    width: 95%;
    margin: 0 auto;
    li:nth-child(1) {
      float: left;
    }
    li:nth-child(2) {
      float: right;
      span:nth-child(1) {
        margin-right: 0.5rem;
      }
      span:nth-child(2) {
        margin-right: 0.5rem;
      }
    }
    img {
      width: 0.5rem;
      vertical-align: middle;
    }
    p {
      display: inline-block;
      font-size: 0.2rem;
    }
  }
}
</style>