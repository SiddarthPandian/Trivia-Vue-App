<template>
  <div class="container">
    <b-jumbotron
      header="Trivia Vue App"
      lead="Test your knowledge! Improve your brain!"
      :class="Object.keys(this.$route.params).length !== 0 ? 'testing' : ''"
      class="jumbo"
      text-variant="white"
    >
      <b-form-select
        v-model="category.cat_selected"
        :options="category.cat_options"
        style="max-width: 300px; margin-right: 30px; margin-top: 10px;"
      ></b-form-select>

      <b-form-select
        v-model="difficulty.dif_selected"
        :options="difficulty.dif_options"
        style="max-width: 300px; margin-right: 30px; margin-top: 10px;"
      ></b-form-select>

      <div
        v-if="
          category.cat_selected !== null && difficulty.dif_selected !== null
        "
        style="margin-bottom: -25px; margin-top: 30px"
      >
        <router-link
          class="mybtn"
          :to="url()"
          tag="b-button"
          style="background-color: green;"
          >Play!</router-link
        >
      </div>
    </b-jumbotron>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: {
        cat_selected: null,
        cat_options: [
          { value: null, text: "Please select a category" },
          { value: "/app/General/9", text: "General Knowledge" },
          { value: "/app/Computer/18", text: "Computer Science" },
          { value: "/app/Anime/31", text: "Anime" },
          { value: "/app/Sports/21", text: "Sports" },
          { value: "/app/Science/17", text: "Science" },
          { value: "/app/History/23", text: "History" },
          { value: "/app/Geography/22", text: "Geography" },
          { value: "/app/Music/12", text: "Music" },
          { value: "/app/Videogames/15", text: "Video Games" },
          { value: "/app/Television/14", text: "Television" },
        ],
      },
      difficulty: {
        dif_selected: null,
        dif_options: [
          { value: null, text: "Please select an option" },
          { value: "/easy", text: "Easy" },
          { value: "/medium", text: "Medium" },
          { value: "/hard", text: "Hard" },
          { value: "/any", text: "Any Difficulty" },
        ],
      },
    };
  },
  methods: {
    url() {
      return this.category.cat_selected.concat(this.difficulty.dif_selected);
    },
  },
};
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
  text-align: center;
  background: none;
  border: solid white;
}
</style>
