import React, { Component } from 'react'
import Operand from './Operand';


export class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan : 'bakso'
        }
    }
    handleSetMakanan = () => {
        this.setState({makanan: 'ikan'});
       };

    gantiMakanan = (new_makanan) => {
        this.setState({makanan: new_makanan})
    }
    
  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        {/* bebas ada banyak cara */}
        {/* dalam contoh button 1&2 sama saja hasilnya pun sama namun perbedaanya di performa memori, membungkus pemanggilan fungsi dalam fungsi panah menyebabkan fungsi tsb dibuat setiap kali render komponen. ini dapat mengakibatkan alokasi memori tambahan dan sedikit pengurangan performa, dan sebaliknya di buuton 2 => Memasukkan referensi langsung ke fungsi tidak memerlukan pembuatan fungsi panah baru setiap kali render. Ini dapat mengoptimalkan kinerja karena tidak ada alokasi memori tambahan. */}
        <button onClick={this.handleSetMakanan}>Button1</button>
        <button onClick={()=>this.handleSetMakanan()}>Button2</button>
        {/* namun jika kita ingin membawa data tambahan atau parameter ke dalam fungsi yang dipanggil oleh onClick,, kita bisa menggunakan fungsi pahah untuk membungkus pemanggilan fungsi tsb seperti buuton 3 */}
        <button onClick={()=> this.gantiMakanan('soto')}>Button3</button>
        {/* button4 langsung ubah state tanpa membuat fungsi */}
        <button onClick={()=> this.setState({makanan:'kentang goreng'})}>Button4</button>
        {/* send this.state to props operand */}
        <Operand makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}  handleSetMakanan={this.handleSetMakanan} />
      </div>
    )
  }
}



export default StateProps