<template>
  <div>
    <div v-if="numTotal === 10 && submitted">
      <b-jumbotron>
        You Scored {{ numCorrect }} / {{ numTotal }}
        <div>
          <b-button @click="reload" variant="primary">Retry</b-button>
        </div>
      </b-jumbotron>
    </div>

    <div v-else>
      <b-jumbotron>
        <template v-slot:lead>
          <b>
            <u>Question {{ myCounter }} / 10</u>
          </b>
          <div v-html="currentQuestion.question"></div>
        </template>

        <hr class="my-4" />
        <b-list-group>
          <b-list-group-item
            v-for="(answer, index) in answers"
            :key="index"
            @click.prevent="[!submitted ? selectAnswer(index) : void 0]"
            :class="[
            !submitted && selectedIndex === index
              ? 'selected'
              : submitted && correctIndex === index
              ? 'correct'
              : submitted && correctIndex !== index && selectedIndex === index
              ? 'incorrect'
              : '',
            submitted ? 'noHover' : '',
          ]"
          >
            <div v-html="answer"></div>
          </b-list-group-item>
        </b-list-group>
        <div class="btncontainer">
          <b-button
            @click="submitAnswer"
            :disabled="selectedIndex === null || submitted"
            variant="primary"
            href="#"
          >Submit</b-button>
          <b-button @click="next(); incMyCount();" variant="success" href="#" :disabled="!submitted">
            Next
            <i v-if="submitted" class="fa fa-arrow-circle-o-right" style="font-size:20px"></i>
          </b-button>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
    numCorrect: Number,
    numTotal: Number
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      submitted: false,
      myCounter: 1
    };
  },
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    selectAnswer(index) {
      this.selectedIndex = index;
      console.log(index);
    },
    submitAnswer() {
      let isCorrect = false;
      this.correctIndex = this.answers.indexOf(
        this.currentQuestion.correct_answer
      );
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.increment(isCorrect);
      this.submitted = true;
    },
    reload() {
      location.reload();
    },
    incMyCount() {
      this.myCounter += 1;
    }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      answers = this.shuffle(answers);
      return answers;
    }
  },

  watch: {
    currentQuestion() {
      this.selectedIndex = null;
      this.correctIndex = null;
      this.submitted = false;
    }
  }
};
</script>

<style scoped>
.btn {
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
}

.list-group-item:hover {
  background: #eeeeee;
  cursor: pointer;
}

.list-group-item:hover.selected {
  background-color: lightblue;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: lightcoral;
}

.noHover {
  pointer-events: none;
}

.btncontainer {
  position: relative;
}
</style>
