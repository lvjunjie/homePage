<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>

    <div class="wrapper-space" v-wrapper>
      <div class="wrapper">
        <preface></preface>
        <about></about>
        <skill></skill>
        <ability></ability>
        <hobby></hobby>
        <photo></photo>
        <experience></experience>
        <contact></contact>
        <hobby></hobby>
      </div>

    </div>

  </div>
</template>

<script>

  import preface from "./preface";
  import about from "./about";
  import hobby from "./hobby";
  import ability from "./ability";
  import experience from "./experience";
  import photo from "./photo";
  import skill from "./skill";
  import contact from "./contact";

  export default {
    components: {preface,about,hobby,ability,experience,photo,skill,contact},
    name: 'home',
    data () {
      return {
      }
    }
  }
</script>


