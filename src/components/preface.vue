<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .preface {
    height: 100%;
    background: url("../assets/img/head.jpg") no-repeat;
    overflow: hidden;


  }

  .main {
    height: 100%;
    padding: 20px;
    width: 800px;
    box-sizing: border-box;
    background: rgba(23, 20, 20, 0.58);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  .info-space {
    flex: 0 0 1;
  }
  .info-img {
    width: 300px;
  }

  .info-img img{
    width: 100%;
  }

  .info-space h1{
    font-size: 22px;
    color: #FFF;
    background: #00a78e;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .info-space h4{
    color: #C7C7C7;
    letter-spacing: 3px;
  }

  ul {
    margin-top: 20px;
    width: 100%;
    border-top: 1px solid #c7c7c7;
  }
  ul li {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    display: flex;
  }
  ul li label{
    width: 100px;
    font-weight: bold;

  }

</style>

<template>
  <div>

    <div class="preface">
      <div class="main">
        <div class="info-space">
          <h1>Hi</h1>
          <h4>web前端工程师</h4>
          <ul>
            <li>
              <label>NAME</label>
              <span>DamonLv</span>
            </li>
            <li>
              <label>D.O.B</label>
              <span>10-12-1991</span>
            </li>
            <li>
              <label>PHONE</label>
              <span>13063786591</span>
            </li>
            <li>
              <label>E-MAIL</label>
              <span>532711255@qq.com</span>
            </li>

          </ul>
        </div>
        <div class="info-img">
          <img src="../assets/img/head.jpg"/>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'preface',
  data () {
    return {
    }
  }
}
</script>


