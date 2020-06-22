<template>
  <div class="question-box-container">
    <b-nav vertical tabs>
      <b-nav-item disabled
        ><b>Test Your Computer Science Knowledge</b></b-nav-item
      >
      <b-nav-item disabled
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
