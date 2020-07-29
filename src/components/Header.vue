<template>
  <div>
    <!-- <router-link
      class="mybtn"
      to="/"
      tag="b-button"
      style="float: left; background: none; border: solid white; position: absolute; left: 50px; top: 10px;"
      ><i class="fa fa-arrow-circle-o-left" style="font-size:20px"></i>
      Home</router-link
    >-->
    <a href="/">
      <b-button
        class="mybtn"
        style="float: left; background: none; border: solid white; position: absolute; left: 50px; top: 10px;"
      >Home</b-button>
    </a>
    <div class="header-container">
      <b-nav vertical tabs>
        <div class="header">{{ quizType }} Trivia</div>
        <div class="counter">Score: {{ numCorrect }} / {{ numTotal }}</div>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal", "quizType"],
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
