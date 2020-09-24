export enum BoardItemTypes {
  Bomb = 'bomb',
  Valid = 'valid',
  Checked = 'checked'
}

export const boardWidth = 10

export const createBoard = (bombAmount: number): Array<BoardItemTypes> => {
  const bombsArray = Array(bombAmount).fill(BoardItemTypes.Bomb)
  const emptyArray = Array(boardWidth * boardWidth - bombAmount).fill(BoardItemTypes.Valid)
  const gameArray = emptyArray.concat(bombsArray)
  const board = gameArray.sort(() => Math.random() - 0.5)

  return board
}

export const checkItemValue = (boardList: Array<BoardItemTypes>, i:number): number => {
  let value = 0
  const isLeftEdge = (i % boardWidth === 0)
  const isRightEdge = (i % boardWidth === boardWidth - 1)
  if (boardList[i] === BoardItemTypes.Valid || boardList[i] === BoardItemTypes.Checked) {
    if (i > 0 && !isLeftEdge && boardList[i - 1] === BoardItemTypes.Bomb) value++
    if (i > 9 && !isRightEdge && boardList[(i + 1) - boardWidth] === BoardItemTypes.Bomb) value++
    if (i > 10 && boardList[i - boardWidth] === BoardItemTypes.Bomb) value++
    if (i > 11 && !isLeftEdge && boardList[(i - 1) - boardWidth] === BoardItemTypes.Bomb) value++
    if (i < 98 && !isRightEdge && boardList[i + 1] === BoardItemTypes.Bomb) value++
    if (i < 90 && !isLeftEdge && boardList[(i - 1) + boardWidth] === BoardItemTypes.Bomb) value++
    if (i < 88 && !isRightEdge && boardList[i + 1 + boardWidth] === BoardItemTypes.Bomb) value++
    if (i < 89 && boardList[i + boardWidth] === BoardItemTypes.Bomb) value++
  }
  return value
}
