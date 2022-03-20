import React, { useEffect, useState } from "react";
import GameCell from "./../game-cell";
import styles from "./styles.module.css";

const LENGTH = 16;

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const randomTwoNumber = (max: number) => {
  const first = getRandomInt(max);
  let last;
  do {
    last = getRandomInt(max);
  } while (last === first);
  return [first, last];
};

const randomBoard = (length: number): number[] => {
  const [first, last] = randomTwoNumber(length);

  return Array(length)
    .fill(0)
    .map((value, index) => {
      if (index === first || index === last) {
        return (getRandomInt(2) + 1) * 2;
      }
      return value;
    });
};

export const mergeCell = (a: number, b: number): number[] => {
  if (a === 0 && b === 0) return [a, b]
  if (a === 0 || b === 0 || a === b) return [0, a + b]
  return [a, b];
};

export const moveDown = (array: number[]) : number[] => {
    for(let i =0; i <= 11; i++) {
        console.log(mergeCell(array[i], array[i+4]))
        const [a, b] = mergeCell(array[i], array[i+4])
        array[i] = a;
        array[i+4] = b 
    }
    return array
}

export const moveUp = (array: number[]) : number[] => {
    for(let i = 15; i >= 4; i--) {
        console.log(mergeCell(array[i], array[i-4]))
        const [a, b] = mergeCell(array[i], array[i-4])
        array[i] = a;
        array[i-4] = b 
    }
    return array
}

export const moveRight = (array: number[]) : number[] => {
  for(let i = 0; i <= 3; i++) {
    for(let j = 0; j <= 2; j++) {
      const [a, b] = mergeCell(array[i * 4 + j], array[i * 4 + j + 1])
      array[i * 4 + j] = a;
      array[i * 4 + j + 1] = b 
    }
  }
  return array
}

export const moveLeft = (array: number[]) : number[] => {
  for(let i = 0; i <= 3; i++) {
    for(let j = 0; j <= 2; j++) {
      const [a, b] = mergeCell(array[i * 4 + j], array[i * 4 + j + 1])
      array[i * 4 + j] = b;
      array[i * 4 + j + 1] = a
    }
  }
  return array
}


const GameBoard = (): JSX.Element => {
  const [boards, setBoards] = useState<number[]>(randomBoard(LENGTH));

  useEffect(() => {
    // console.log({boards})
  }, [boards]);

  const resetGame = () => {
    setBoards(randomBoard(LENGTH));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === "ArrowUp") {
      onMoveUp()
      onMoveUp()
      onMoveUp()
      onMoveUp()
    }
    if (e.code === "ArrowDown") {
      onMoveDown();
      onMoveDown();
      onMoveDown();
      onMoveDown();
    }
    if (e.code === "ArrowLeft") {
      onMoveLeft()
      onMoveLeft()
      onMoveLeft()
      onMoveLeft()
    }
    if (e.code === "ArrowRight") {
      onMoveRight()
      onMoveRight()
      onMoveRight()
      onMoveRight()
    }
  };

  const onMoveDown = () => {
    setBoards([...moveDown(boards)])
  };

  const onMoveUp = () => {
    setBoards([...moveUp(boards)])
  };

  const onMoveRight = () => {
    setBoards([...moveRight(boards)])
  };

  const onMoveLeft = () => {
    setBoards([...moveLeft(boards)])
  };

  return (
    <>
      <div tabIndex={0} className={styles.container} onKeyDown={handleKeyDown}>
        {boards.map((cell, index) => (
          <GameCell key={index} index={index} value={cell} />
        ))}
      </div>
      <div>
        <button onClick={resetGame}>New Game</button>
      </div>
    </>
  );
};

export default GameBoard;
