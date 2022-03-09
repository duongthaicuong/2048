import React from 'react'
import GameCell from './../game-cell'
import styles from './styles.module.css'

const GameBoard = (): JSX.Element => {

    return (
        <div className={styles.container}>
            <GameCell value={2}/>
            <GameCell value={4}/>
            <GameCell value={6}/>
            <GameCell value={8}/>
            <GameCell value={256}/>
            <GameCell value={2048}/>
            <GameCell value={48}/>
            <GameCell value={2}/>
            <GameCell />
            <GameCell />
            <GameCell />
            <GameCell />
            <GameCell />
            <GameCell />
            <GameCell />
            <GameCell />
        </div>
    )
}

export default GameBoard