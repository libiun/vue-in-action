<template>
<div class="test">
  <h1>{{ msg }}</h1>

</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to test Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  width: 400px;
  height: 400px;
/*text-align: center;*/
}
</style>
