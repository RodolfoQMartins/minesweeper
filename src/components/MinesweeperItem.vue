<template>
  <div :class="'minesweeper-grid-item' +  ` color-${value} ${item}` + (isGameOver ? (item === types.Bomb ? ` actived-bomb ` : ` ${types.Checked} ` ) : '') " v-on:click="updateBoard(i)">
    {{(isGameOver || isWinner) && item === types.Bomb ? '&#128163;' : ''}}
    {{isGameOver && value && item !== types.Bomb ? value : ''}}
    {{!isGameOver && value && item === types.Checked ? value : ''}}
  </div>
</template>

<script>
import { checkItemValue, BoardItemTypes } from '../helpers/index.ts'

export default {
  name: 'MinesweeperItem',
  data () {
    return {
      value: checkItemValue(this.minesweeperBoard, this.i),
      types: BoardItemTypes
    }
  },
  props: {
    item: String,
    i: Number,
    minesweeperBoard: Array,
    updateBoard: Function,
    isGameOver: Boolean,
    isWinner: Boolean
  }
}
</script>

<style scoped>
.minesweeper-grid-item {
  width: 36px;
  height: 36px;
  background-color: lightgray;
  border: 2px outset darkgrey;
  color: lightcoral;
  font-weight: solid;
  font-size: 26px;
}

.minesweeper-grid-item.color-1 {
  color: cyan;
}

.minesweeper-grid-item.color-2 {
  color: lightgreen;
}

.minesweeper-grid-item.actived-bomb{
  background-color: red;
}

.minesweeper-grid-item.checked{
  background-color: gray;
  border-style: inset;
}
</style>
