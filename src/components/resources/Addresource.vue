<template>
  <div>
    <BaseCard>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" ref="inputtitle"/>
        </div>
        <div class="form-control">
          <label for="decription">Description</label>
          <textarea id="description" name="description" rows="3" ref="inputdesc"></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input id="title" name="link" type="url" ref="inputurl"/>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </BaseCard>
  </div>
</template>
<script>

export default{
    inject:['addresource'],
    methods:{
      submitData()
      {
        const enteredTitle = this.$refs.inputtitle.value;
        const enteredDesc = this.$refs.inputdesc.value;
        const enteredlink = this.$refs.inputurl.value;
         this.addresource(enteredTitle,enteredDesc,enteredlink)
      },
    }
}
</script>
<style scoped>


label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
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
