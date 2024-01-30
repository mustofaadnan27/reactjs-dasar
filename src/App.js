import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    // tidak perlu digunakan jika mengguanakan arrow function
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick() {
  //   // Ini mungkin menyebabkan masalah jika beberapa perubahan state terjadi secara bersamaan, kita berharap count akan meningkat2x, namun karena pembaruan state adalah asinkron , maka peningkatannya hanya sekali karena belum diperbarui, maka gunakan callback prevState
  //   this.setState({ count: this.state.count + 1 });
  //   this.setState({ count: this.state.count + 1 });
  // }

  // oleh karena itu kita harus menggunakan fungsi callback pada setState yang menerima prevState
  // Ini disarankan karena pembaruan state dapat menjadi asinkron dalam React, dan menggunakan callback memastikan Anda mendapatkan nilai state yang terbaru.
  
  // LALU KEUNGGULAN ARROW FUNCTION DISINI KITA TIDAK PERLU MELAKUKAN BINDING SECARA MANUAL, KARENA ARROW FUNCTION SECARA OTOMATIS MENANGKAP NILAI THIS DARI KONTEKS SEKITARNYA
  
  handleClick = () => {
    // ini akan meningkat 2x
   this.setState((prevState => ({
    count: prevState.count+1
   })))
   this.setState((prevState => ({
    count: prevState.count+1
   })))
  
  // console.log(this.state.count);

  }
  
  render() {
  console.log(this.state.count);
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Tambah</button>
      </div>
    )
  }
}
