<template>
  <div>
  <Header></Header>
  <TheResources></TheResources>
  </div>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import TheResources from "./components/resources/TheResources.vue";
export default {
  components: {
    'Header': Header,
    'TheResources':TheResources
  },
  data() {
    return {
      
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
