<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hobby {
    height: 100%;
    /*background: #1b242f;*/
    background-image: linear-gradient(45deg, #726193 20%, #e37b7c 60%, #ffe4b4);
  }

  .main {
    height: 100%;
    padding: 20px;
    width: 500px;
    box-sizing: border-box;
    /*background: rgba(23, 20, 20, 0.58);*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }


</style>

<template>
  <div>

    <div class="hobby">
      <div class="main">
        爱好
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'hobby',
  data () {
    return {
    }
  }
}
</script>


