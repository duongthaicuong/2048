import React, {useEffect, useState} from 'react'
import GameCell from './../game-cell'
import styles from './styles.module.css'

const getRandomInt = (max: number) : number => {
    return Math.floor(Math.random() * max)
}

const randomTwoNumber = (max: number) => {
    const first = getRandomInt(max)
    let last;
    do {
        last = getRandomInt(max)
    } while (last === first)
    return [first, last]
}

const randomBoard = (length: number): number[] => {
    const [first, last] = randomTwoNumber(length)

    return Array(length).fill(0).map((value, index) => {
        if (index === first || index === last) {
            return (getRandomInt(2) + 1) * 2
        }
        return value
    })
}

const GameBoard = (): JSX.Element => {

    const [boards, setBoards] = useState<number[]>(randomBoard(16))

    useEffect(() => {
        console.log({boards})
    }, [boards])

    const resetGame = () => {
        setBoards(randomBoard(16))
    }

    return (
        <>
            <div className={styles.container}>
                {boards.map(cell => <GameCell value={cell}/>)}
            </div>
            <div>
                <button onClick={resetGame}>New Game</button>
            </div>
        </>
        
    )
}

export default GameBoard