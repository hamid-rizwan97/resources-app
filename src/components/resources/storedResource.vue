<template>
    <ul>
      <Resource
        v-for="res in resources"
        :key="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
      ></Resource>
    </ul>
  </template>
  <script>
  import Resource from './Resource.vue';
  export default {
    inject:['resources'],
    components:{
        'Resource':Resource
    },
  
  }
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>