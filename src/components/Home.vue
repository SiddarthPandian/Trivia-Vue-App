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
        <router-link class="mybtn" :to="url()" tag="b-button" style="background-color: green;">Play!</router-link>
      </div>
      <div>
        <b-button v-b-toggle.collapse-1 style="margin-top: 50px;">View Scores</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <div style="border: 2px solid white; border-radius: 6px;">
            <b-card class="scores" border-variant="light">
              <h2>
                <u>Average Scores</u>
              </h2>
              <h4
                :class="dispGK >= 7 ? 'green' : dispGK >= 4 ? 'yellow' : 'red'"
              >General Knowledge: {{ dispGK }}</h4>
              <h4
                :class="dispCS >= 7 ? 'green' : dispCS >= 4 ? 'yellow' : 'red'"
              >Computer Science: {{ dispCS }}</h4>
              <h4
                :class="dispAnime >= 7 ? 'green' : dispAnime >= 4 ? 'yellow' : 'red'"
              >Anime: {{ dispAnime }}</h4>
              <h4
                :class="dispSports >= 7 ? 'green' : dispSports >= 4 ? 'yellow' : 'red'"
              >Sports: {{ dispSports }}</h4>
              <h4
                :class="dispScience >= 7 ? 'green' : dispScience >= 4 ? 'yellow' : 'red'"
              >Science: {{ dispScience }}</h4>
              <h4
                :class="dispHistory >= 7 ? 'green' : dispHistory >= 4 ? 'yellow' : 'red'"
              >History: {{ dispHistory }}</h4>
              <h4
                :class="dispGeography >= 7 ? 'green' : dispGeography >= 4 ? 'yellow' : 'red'"
              >Geography: {{ dispGeography }}</h4>
              <h4
                :class="dispMusic >= 7 ? 'green' : dispMusic >= 4 ? 'yellow' : 'red'"
              >Music: {{ dispMusic }}</h4>
              <h4
                :class="dispVideogames >= 7 ? 'green' : dispVideogames >= 4 ? 'yellow' : 'red'"
              >Videogames: {{ dispVideogames }}</h4>
              <h4
                :class="dispTV >= 7 ? 'green' : dispTV >= 4 ? 'yellow' : 'red'"
              >Television: {{ dispTV }}</h4>
            </b-card>
          </div>
        </b-collapse>
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
  computed: {
    dispGK() {
      let obj = JSON.parse(localStorage.getItem("General"));
      return obj !== null ? Math.round(obj.avg * 100) / 100 : "N/A";
    },
    dispCS() {
      let obj = JSON.parse(localStorage.getItem("Computer"));
      return obj !== null ? Math.round(obj.avg * 100) / 100  : "N/A";
    },
    dispAnime() {
      let obj = JSON.parse(localStorage.getItem("Anime"));
      return obj !== null ? Math.round(obj.avg * 100) / 100  : "N/A";
    },
    dispSports() {
      let obj = JSON.parse(localStorage.getItem("Sports"));
      return obj !== null ? Math.round(obj.avg * 100) / 100  : "N/A";
    },
    dispScience() {
      let obj = JSON.parse(localStorage.getItem("Science"));
      return obj !== null ? Math.round(obj.avg * 100) / 100  : "N/A";
    },
    dispHistory() {
      let obj = JSON.parse(localStorage.getItem("History"));
      return obj !== null ? Math.round(obj.avg * 100) / 100  : "N/A";
    },
    dispGeography() {
      let obj = JSON.parse(localStorage.getItem("Geography"));
      return obj !== null ? Math.round(obj.avg * 100) / 100  : "N/A";
    },
    dispMusic() {
      let obj = JSON.parse(localStorage.getItem("Music"));
      return obj !== null ? Math.round(obj.avg * 100) / 100  : "N/A";
    },
    dispVideogames() {
      let obj = JSON.parse(localStorage.getItem("Videogames"));
      return obj !== null ? Math.round(obj.avg * 100) / 100  : "N/A";
    },
    dispTV() {
      let obj = JSON.parse(localStorage.getItem("Television"));
      return obj !== null ? Math.round(obj.avg * 100) / 100  : "N/A";
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

.scores {
  background: none;
}

.green {
  color: green;
}

.yellow {
  color: yellow;
}

.red {
  color: maroon;
}
</style>
