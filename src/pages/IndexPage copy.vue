<template>
  <q-page padding>
    <button style="position: absolute; right: 10px" @click="addCounter">
      {{ counter }}
    </button>
    <button style="position: absolute; right: 40px" @click="minusCounter">
      {{ counter }}
    </button>
    <input
      v-model="message"
      @keyup.esc="clearText"
      @keyup.enter="alertMessage"
    />
    <button @click="clearText">Clear</button>
    <h1 v-if="message.length" class="border-grey">{{ message }}</h1>
    <h2 v-else>No message entered</h2>
    <hr />
    <p>Uppercase message: {{ messageUppercase() }}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, Quasar World",
      counter: 0,
    };
  },
  methods: {
    clearText() {
      this.message = "";
    },
    handleKeyup(e) {
      console.log(e);
      if (e.key === "Enter") {
        this.clearText();
      } else if (e.key === "Escape") {
        this.alertMessage();
      }
    },
    alertMessage() {
      alert(this.message);
    },
    messageUppercase() {
      return this.message.toUpperCase();
    },
    addCounter() {
      this.counter++;
    },
    minusCounter() {
      this.counter--;
    },
  },
};
</script>

<style>
.border-grey {
  border: 1px solid grey;
}
</style>
