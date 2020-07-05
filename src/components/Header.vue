<template>
  <div class="header-container">
    <b-nav vertical tabs>
      <div class="header">212 you can do it skid</div>
      <div class="counter">Score: {{ numCorrect }} / {{ numTotal }}</div>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal"]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.header-container {
  font-family: "Roboto", sans-serif;
  color: white;
  margin-bottom: 20px;
}

.header {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.counter {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
