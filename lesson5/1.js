const board = document.querySelector('.chessboard')
generateBoard(8, board)

function generateBoard(N, place) {
    cords = 'ABCDEFGH'
    limit = N + 1
    for (let i = 0; i < limit; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        for (let j = 0; j < limit; j++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            if (i && j) {
                cell.classList.add(i % 2 == j % 2 ? 'cell_white' : 'cell_black')
            }
            if (!i && j) {
                cell.textContent = cords[j - 1]
            }
            if (i && !j) {
                cell.textContent = i
            }
            row.append(cell)
        }
        place.append(row)
    }
}