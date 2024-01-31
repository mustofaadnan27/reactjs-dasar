import React, { Component } from 'react'

export default class Operand extends Component {
  render() {
    const {makanan, gantiMakanan, handleSetMakanan} = this.props;
    return (
      <div>
        {/* Untuk menampilkan */}
        <h2>Operan state yang menjadi props : {this.props.makanan}</h2>
        {/* Mengubah state di props */}
        <button onClick={()=>this.props.gantiMakanan('mie kari ayam')}>Ganti di props</button>
        <button onClick={this.props.handleSetMakanan}>Ganti di props</button>

        <h2>mempersingkat</h2>
        <h2>Operan state yang menjadi props : {makanan}</h2>
        <button onClick={()=>gantiMakanan('mie kari ayam')}>Ganti di props</button>
        <button onClick={handleSetMakanan}>Ganti di props</button>

      </div>
    )
  }
}
