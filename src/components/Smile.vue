<template>
  <div class="smile-grid">
    <div v-on:click="boardReset()">
      {{isGameOver ? '&#128565;' : (isWinner ? '&#128526;' : '&#128512;')}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Smile',
  props: {
    isGameOver: Boolean,
    isWinner: Boolean,
    boardReset: Function
  }
}
</script>

<style scoped>
.smile-grid {
  width: 396px;
  height: auto;
  margin: 0 auto;
  border: 2px outset darkgrey;
  background-color: lightgray;
}

.smile-grid > div{
  width: 42px;
  height: 42px;
  margin: 10px auto;
  background-color: lightgray;
  border: 2px inset darkgrey;
  color: lightcoral;
  font-weight: solid;
  font-size: 32px;
}
</style>
