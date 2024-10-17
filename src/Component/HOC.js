import React from 'react'
import Child from './Child';
import Auth from './Auth';
//higher order component(HOC)
function HOC() {
  return (
    <Auth>
    <Child>
       
    
    <div>
        <p>Hello</p>
        <p>Authorization successful</p>
    </div>
    </Child>
    </Auth>
  )
}

export default HOC;
