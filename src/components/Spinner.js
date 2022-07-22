import React, { Component } from 'react'
import Loading from './Loading.gif'
export default class spinner extends Component {
  render() {
    return (
      <div className='text-center my-5'>
            <img src={Loading} alt="Its Loading" />
      </div>
    )
  }
}
