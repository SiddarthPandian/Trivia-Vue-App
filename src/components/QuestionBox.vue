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
          <b-button @click="next" variant="success" href="#" :disabled="!submitted">Next</b-button>
          <span v-if="submitted">
            <div id="arrowAnim">
              <div class="arrowSliding">
                <div class="arrow"></div>
              </div>
              <div class="arrowSliding delay1">
                <div class="arrow"></div>
              </div>
              <div class="arrowSliding delay2">
                <div class="arrow"></div>
              </div>
              <div class="arrowSliding delay3">
                <div class="arrow"></div>
              </div>
            </div>
          </span>
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
      submitted: false
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

#arrowAnim {
  width: 80vw;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  width: 3vh;
  height: 3vh;
  border: 0.5vw solid;
  border-color: black transparent transparent black;
  transform: rotate(-45deg);
}

.arrowSliding {
  position: absolute;
  top: 55px;
  left: 400px;
  -webkit-animation: slide 1s linear infinite;
  animation: slide 2s linear infinite;
}

.delay1 {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.delay2 {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.delay3 {
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}

@-webkit-keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(6vw);
  }
  20% {
    opacity: 1;
    transform: translateX(4vw);
  }
  80% {
    opacity: 1;
    transform: translateX(-4vw);
  }
  100% {
    opacity: 0;
    transform: translateX(-6vw);
  }
}
@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(6vw);
  }
  20% {
    opacity: 1;
    transform: translateX(4vw);
  }
  80% {
    opacity: 1;
    transform: translateX(-4vw);
  }
  100% {
    opacity: 0;
    transform: translateX(-6vw);
  }
}
</style>
