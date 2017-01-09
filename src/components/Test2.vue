<template>
  <div class="test2">
    <h2>说:{{say}}</h2>
  </div>
</template>

<script>
export default {
  name: 'test2',
  props: ['say']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
