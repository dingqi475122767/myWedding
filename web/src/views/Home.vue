<template>
  <div class="home">
    <section class="main" id="main">
       <button class="DMbtn" @click="DMbtn()">发送弹幕</button>
    </section>
    <footer>
      <div class="code"></div>
      <p>扫描二维码加入</p>
    </footer>
  </div>
</template>

<script>
// import { getSomething } from '@/api/api'

function randomNum(n, m) {
  return Math.floor(Math.random()*(n-m+1))+m
}
export default {
  data() {
    return {
      message:['百年好合！早生贵子','白头偕老！永结同心！','生活幸福！家庭和睦！','新娘好漂亮！','鲜花插在了牛粪上....','我也想结婚了55555~~~~~~~','好幸福啊！要永远幸福下去哦！~~~','生个白白胖胖的大胖小(女)子','感觉我给的份子钱给少了，可以补吗？','在线求偶！有没有单身的小姐姐，我们共结连理啊？']
    }
  },
  mounted() {
    // getSomething().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   alert(err)
    // })
  },
  methods: {
    DMbtn() {
      const main = document.getElementById('main')
      let newDiv = document.createElement('div')
      newDiv.innerHTML = this.message[randomNum(0,9)]
      let right = 0
      let top = randomNum(10,500)
      const ti = setInterval(()=>{
        right += 5
        Object.assign(newDiv.style,{
          width: '200px',
          color:'#fff',
          background: '#87d857',
          position: 'absolute',
          boxShadow: '2px 2px 1px 1px rgba(0,0,0,.1)',
          borderRadius: '4px 4px 4px 4px',
          padding: '4px',
          top: top+'px',
          right: right+'px'
        })
        if (right >= 10000) {
          clearInterval(ti)
        }
      },20)
      main.appendChild(newDiv)
      console.log('什么', ti)
    }
  }
}
</script>

<style lang="scss">
.home{
  height: 97vh;
  .main{
    position: relative;
    height: 100%;
    overflow: hidden;
    .DMbtn{
      position: absolute;
      width: 100px;
      height: 50px;
      bottom: 50px;
      left: 0;
      right: 0;
      margin: auto;
      z-index:2;
    }
  }
  footer{
    position: absolute;
    text-align: center;
    bottom: 10px;
    right: 10px;
    .code{
      width: 200px;
      height: 200px;
      border: 1px solid;
    }
  }
}
</style>
