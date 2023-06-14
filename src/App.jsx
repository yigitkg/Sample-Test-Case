import { useState } from 'react'
/**
 * A react component that renders a screen with points that can be clicked on, and undo/redo functionality.
 * @return {JSX.Element} A JSX element representing the component.
 */
function App() {
  // Declare state variables for points and checkPoints
  const [points, setPoints] = useState([])
  const [checkPoints, setCheckPoints] = useState([])

  /**
   * Click event handler for the screen. Adds a new point to the points state, and clears the checkPoints state.
   * @param {MouseEvent} e - The click event.
   */
  const clickHandle = (e) => {
    setPoints((points) => [
      ...points,
      {
        x: e.clientX,
        y: e.clientY,
      },
    ])
    setCheckPoints([])
  }

  /**
   * Click event handler for the redo button. Moves the last point from points to checkPoints.
   * @param {MouseEvent} e - The click event.
   */
  const redoHandle = (e) => {
    e.stopPropagation()
    const data = [...points]
    const item = data.pop()
    setCheckPoints((data) => [...data, item])
    setPoints(data)
  }

  /**
   * Click event handler for the undo button. Moves the last point from checkPoints to points.
   * @param {MouseEvent} e - The click event.
   */
  const undoHandle = (e) => {
    e.stopPropagation()
    const cPoints = [...checkPoints]
    const item = cPoints.pop()
    setPoints((points) => [...points, item])
    setCheckPoints(cPoints)
  }

  // Render the screen with points and undo/redo buttons.
  return (
    <div className="screen" onClick={clickHandle}>
      <header className="header">
        <button disabled={points.length === 0} onClick={redoHandle}>
          Redo
        </button>
        <button disabled={checkPoints.length === 0} onClick={undoHandle}>
          Undo
        </button>
      </header>
      {points.map((point, key) => (
        <div
          className="point"
          key={key}
          style={{ '--left': point.x + 'px', '--top': point.y + 'px' }}
        />
      ))}
    </div>
  )
}

export default App
