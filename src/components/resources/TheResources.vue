<template>
  <div>
    <BaseCard>
      <button v-on:click="setSelectedtab('storedResource')">
        Stored Resources
      </button>
      <button @click="setSelectedtab('Addresource')">Add Resources</button>
    </BaseCard>
    <component :is="selectedtab"> </component>
  </div>
</template>
<script>
import storedResource from "./storedResource.vue";
import Addresource from "./Addresource.vue";
export default {
  components: {
    storedResource: storedResource,
    Addresource: Addresource,
  },
  data() {
    return {
      selectedtab: "storedResource",
      storedResource: [{}],
    };
  },
  provide() {
    return {
      resources: this.storedResource,
      addresource: this.addresource,
    };
  },
  methods: {
    setSelectedtab(tab) {
      this.selectedtab = tab;
    },
    addresource(title, description, url) {
      const newresource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResource.unshift(newresource);
      this.selectedtab = "storedResource";
    },
  },
};
</script>
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}
</style>
