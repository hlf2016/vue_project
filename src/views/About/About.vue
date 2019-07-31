<template>
  <div class="about">
    <div class="slider">
      <cube-slide :data="items" />
    </div>
    <div class="radioList">
      <p class="radioTitle">
        <span class="iconfont icon-diantai"></span>
      </p>
      <div class="radioWrapper">
        <div v-for="(radio, index) in radioList" :key="index" :id="radio.id" class="radioBox">
          <div class="radio">
            <div class="radioImg">
              <img :src="radio.picUrl" />
            </div>
            <p class="radioTitle">{{ radio.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="topList">
      <p class="topListTitle">
        <span class="iconfont icon-paihangbang"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  created () {},
  mounted () {
    this.onLoad()
  },
  data: function () {
    return {
      items: [],
      radioList: []
    }
  },
  methods: {
    // 获取数据
    onLoad () {
      // 推荐信息
      this.$api.about.recommend().then(res => {
        // 获取数据成功后的操作
        const slider = res.data.data.slider
        for (let i of slider) {
          this.items.push({ image: i })
        }
        const radioList = res.data.data.radioList
        for (let r of radioList) {
          this.radioList.push(r)
        }
      })
      // 排行榜信息
      this.$api.about.topList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.about
  .slider
    overflow hidden
    width 100%
    height 40vw
    background #ccc
    .cube-slide >>> img
      width 100%
  .topList
    .topListTitle
      padding 10px 2px
  .radioList
    .radioTitle
      padding 10px 2px
    .radioWrapper
      width 100%
      height 25vw
      display flex
      flex-flow row
      justify-content center
      position relative
      .radioBox
        width 45%
        margin 0 2%
        .radio
          width 100%
          height 100%
          position relative
          border-radius 1vw
          display flex
          align-items center
          justify-content center
          &:before
            content ''
            position absolute
            top 0
            right 0
            bottom 0
            left 0
            background inherit
            background-attachment fixed
            filter blur(4px)
          &:after
            content ''
            position absolute
            top 0
            right 0
            bottom 0
            left 0
            background rgba(0, 0, 0, 0.25)
            border-radius 2vw
          .radioImg
            width 50%
            img
              width 80%
          .radioTitle
            width 50%
</style>
