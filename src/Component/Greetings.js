import React from 'react'
import { UserContext } from './UserContext'

function Greetings() {
  return (
    <div>
        <UserContext.Consumer>
            {value=> <h1>Hello,{value}</h1>}
        </UserContext.Consumer>
    </div>
  )
}

export default Greetings