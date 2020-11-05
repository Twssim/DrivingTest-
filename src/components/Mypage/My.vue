<template>
  <div class="my">
    <div class="header">
      <ul>
        <li>
          <span>
            <img src="./images/head.jpg" alt="" />
            <p>立即登录</p>
          </span>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="option">
        <ul>
          <li>科一</li>
          <li>科四</li>
        </ul>
      </div>
      <div class="ExerciseContain">
        <ul>
          <li>
            <span>
              <p>5</p>
              <p>已做题</p>
              <p>共500道题</p>
            </span>
          </li>
          <li>
            <span>
              <p>5</p>
              <p>考试平均分</p>
              <p>完成考试0次</p>
            </span>
          </li>
          <li>
            <span>
              <p>5</p>
              <p>考试平均分</p>
              <p>完成考试0次</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="about">
      <ul>
        <li>
          <img src="./images/我的 (1).png" />
          <p>关于我们</p>
          <p>></p>
        </li>
        <li>
          <img src="./images/我的 (1).png" />
          <p>意见反馈</p>
          <p>></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  created() {},
  mounted() {
    this.deliver();
  },
  methods: {
    deliver() {
      this.$emit("from-MyPage", false); //select事件触发后，自动触发showCityName事件
      console.log("传送完毕");
    },
  },
};
</script>
<style lang="scss" scoped>
.my {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 5rem;
    background: url("./images/backgourndImg.jpg");
    ul {
      width: 90%;
      margin: 0 auto;
      height: 100%;
      li {
        height: 100%;
        display: flex;
        align-items: center;
        span {
          display: flex;

          img {
            border-radius: 50%;
            width: 1.7rem;
            height: 1.7rem;
            margin-right: 0.5rem;
          }
          p {
            color: white;
          }
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    background-color: white;

    .option {
      width: 25%;
      height: 0.5rem;
      border: 1px black solid;
      border-radius: 10%;
      margin-left: 0.5rem;
      top: 0.2rem;
      position: relative;
      background-color: grey;
      ul {
        height: 100%;
        li {
          width: 50%;
          height: 100%;
                    text-align: center;
        }
        li:nth-child(1) {
          float: left;
          background-color: white;
          border-radius: 20%;
        }
        li:nth-child(2) {
          float: right;
        }
      }
    }
    .ExerciseContain {
      width: 100%;
      ul {
        width: 80%;
        height: 4rem;
        margin: 0 auto;
      }
      li {
        width: 2.2rem;
        height: 1rem;
        float: left;
        text-align: center;
        float: left;
        line-height: 0.3rem;
        span {
          p:nth-child(1) {
            font-weight: 600;
            font-size: 0.5rem;
          }
          p:nth-child(2) {
            font-size: 0.1rem;
            margin-bottom: 0.2rem;
          }
          p:nth-child(3) {
            font-size: 0.1rem;
            margin-bottom: 0.2rem;
            color: grey;
          }
        }
      }
      li:nth-child(2) {
        margin-left: 0.7rem;
      }
      li:nth-child(3) {
        float: right;
      }
    }
  }
  .about {
    height: 10.1rem;
    overflow: hidden;
    ul {
      width: 100%;
      height: 100%;
    }
    li {
      position: relative;
      padding: 0.1rem 0;
      padding-left: 1rem;
      border-bottom: 1px rgba(176, 176, 176, 0.5) solid;
      img {
        width: 0.6rem;
        height: 0.6rem;
        vertical-align: middle;
        margin-right: 0.5rem;
      }
      p {
        display: inline-block;
        font-size: 0.1rem;
        font-size: 0.3rem;
      }
      p:nth-child(3) {
        position: absolute;
        right: 0.6rem;
        color: rgba(176, 176, 176, 0.5);
        font-weight: 600;
      }
    }
  }
}
</style>