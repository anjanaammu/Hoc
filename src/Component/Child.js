import React from 'react'

function Child(props) {
    const newstyle={
        background:'lightgrey'
    }
  return (
    <div style={newstyle}>
        {props.children}
    </div>
  )
}

export default Child;