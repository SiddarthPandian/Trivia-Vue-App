<template>
  <div id="app">
    <Header :quizType="this.$route.params.type" :numCorrect="numCorrect" :numTotal="numTotal" />

    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col md="8" style="text-align: center;">
          <QuestionBox
            v-if="questions.length > 0"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
            :numCorrect="numCorrect"
            :numTotal="numTotal"
          />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";
export default {
  name: "App",
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    };
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    }
  },
  mounted: function() {
    fetch(`https://opentdb.com/api.php?amount=10&category=${this.$route.params.id}&type=multiple`, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        this.questions = jsonResponse.results;
      });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

body {
  background: url("./assets/newComputer.jpg");
  background-size: 100%;
}
</style>
