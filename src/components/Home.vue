<template>
  <div class="container">
    <b-jumbotron
      header="Trivia Vue App"
      lead="Test your knowledge! Perfect for parties!"
      :class="Object.keys(this.$route.params).length !== 0 ? 'testing' : ''"
      class="jumbo"
    >
      <p>Choose any category</p>
      <router-link class="mybtn" to="/app/General/9" tag="b-button"
        >General Knowledge</router-link
      >
      <router-link class="mybtn" to="/app/Computer/18" tag="b-button"
        >Computer Science</router-link
      >
      <router-link class="mybtn" to="/app/Anime/31" tag="b-button"
        >Anime</router-link
      >
      <router-link class="mybtn" to="/app/Math/19" tag="b-button"
        >Math</router-link
      >
      <router-link class="mybtn" to="/app/Sports/21" tag="b-button"
        >Sports</router-link
      >
      <router-link class="mybtn" to="/app/Science/17" tag="b-button"
        >Science</router-link
      >
    </b-jumbotron>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mybtn {
  margin: 10px;
}

.testing {
  display: none;
}

.jumbo {
  margin-top: 100px;
}
</style>
