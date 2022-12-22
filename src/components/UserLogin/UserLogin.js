import React, { Component } from 'react'
import './UserLogin.css'
export default class UserLogin extends Component {
clickHandler = (e) => {
    e.preventDefault()
    if(e.target.type === 'email'){
        console.log('Yalnız .ru domenlərinə icazə verilir.');
    }else if(e.target.type === 'password'){
        console.log('Ən azı 8 simvol');
    }
} 
  render() {
    return (
      <>
        <form action="">
            <input onFocus={this.clickHandler} type="email" placeholder='Email' />
            <input onFocus={this.clickHandler} type="password" placeholder='Password' />
            <button>Submit</button>
        </form>
      </>
    )
  }
}
