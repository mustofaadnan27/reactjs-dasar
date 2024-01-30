import React, { Component } from 'react'

export default class Sublifecycle extends Component {
    // untuk sekarang ini componentWillUnmount sudah usang 
    componentWillUnmount(){
        this.props.ubahMakanan('sate')
    }
  render() {
    return (
      <div>
        <h2>Component Sub Lifecycyle</h2>
      </div>
    )
  }
}
