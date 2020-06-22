<template>
  <div class="header-container">
    <b-nav vertical tabs>
      <b-nav-item disabled class="header"
        ><b>Test Your Computer Science Knowledge</b></b-nav-item
      >
      <b-nav-item disabled class="counter"
        >Counter: {{ numCorrect }} / {{ numTotal }}</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.header-container {
  font-family: "Roboto", sans-serif;
  color: white;
}

.header {
  font-size: 40px;
}

.counter {
}
</style>
