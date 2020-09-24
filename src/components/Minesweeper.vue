<template>
  <section>
    <Smile :isGameOver="isGameOver" :isWinner="isWinner" :boardReset="boardReset"/>
    <div class="minesweeper-grid">
      <div v-for="(item, i) in minesweeperBoard" :key="i">
        <MinesweeperItem :item="item" :i="i" :minesweeperBoard="minesweeperBoard" :updateBoard="updateBoard" :isGameOver="isGameOver" :isWinner="isWinner"/>
      </div>
    </div>
  </section>
</template>

<script>
import { createBoard, checkItemValue, BoardItemTypes, boardWidth } from '../helpers/index.ts'
import MinesweeperItem from './MinesweeperItem.vue'
import Smile from './Smile.vue'
export default {
  name: 'Minesweeper',
  components: {
    MinesweeperItem, Smile
  },
  data () {
    return {
      minesweeperBoard: createBoard(20),
      isGameOver: false,
      isWinner: false
    }
  },
  props: {
    msg: String
  },
  methods: {
    boardReset () {
      this.minesweeperBoard = []
      this.isGameOver = false
      this.isWinner = false
      setTimeout(() => {
        this.minesweeperBoard = createBoard(20)
      }, 100)
    },
    updateBoard (i, newBoard) {
      if (this.minesweeperBoard[i] === BoardItemTypes.Checked || this.isGameOver || this.isWinner) {
        return
      }

      if (this.minesweeperBoard[i] === BoardItemTypes.Bomb) {
        this.isGameOver = true
        return
      }

      const updatedBoard = [...this.minesweeperBoard]
      updatedBoard[i] = BoardItemTypes.Checked
      const boardItemValue = checkItemValue(updatedBoard, i)
      if (boardItemValue === 0) {
        this.minesweeperBoard = updatedBoard
        const isLeftEdge = Boolean(i % boardWidth === 0)
        const isRightEdge = Boolean(i % boardWidth === boardWidth - 1)

        setTimeout(() => {
          if (i > 0 && !isLeftEdge) {
            const newIndex = i - 1
            this.updateBoard(newIndex)
          }
          if (i > 9 && !isRightEdge) {
            const newIndex = (i + 1) - boardWidth
            this.updateBoard(newIndex)
          }
          if (i > 10) {
            const newIndex = i - boardWidth
            this.updateBoard(newIndex)
          }
          if (i > 11 && !isLeftEdge) {
            const newIndex = i - 1 - boardWidth
            this.updateBoard(newIndex)
          }
          if (i < 99 && !isRightEdge) {
            const newIndex = i + 1
            this.updateBoard(newIndex)
          }
          if (i < 90 && !isLeftEdge) {
            const newIndex = (i - 1) + boardWidth
            this.updateBoard(newIndex)
          }
          if (i < 88 && !isRightEdge) {
            const newIndex = i + 1 + boardWidth
            this.updateBoard(newIndex)
          }
          if (i < 89) {
            const newIndex = i + boardWidth
            this.updateBoard(newIndex)
          }
        }, 10)
      } else {
        this.minesweeperBoard = updatedBoard
        if (!updatedBoard.includes(BoardItemTypes.Valid)) {
          this.isWinner = true
        }
      }
    }
  }
}
</script>

<style scoped>
.minesweeper-grid {
  display: flex;
  width: 400px;
  height: 400px;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>
