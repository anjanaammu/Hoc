import React from 'react'

function Auth(props) {
    const pass='12345';
    if(pass != '12345'){

    
  return <h4>You are not Authorized</h4>
    
    }else{
        return props.children
    }
}
export default Auth;