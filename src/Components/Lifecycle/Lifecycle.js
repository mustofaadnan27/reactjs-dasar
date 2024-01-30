import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        makanan:'bakso',
        name:'Adnan Developer',
        data:{},
        tampilHalaman:false
     }
   }
//    biasanya componentDidMount => get API
   componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((json) => (
            this.setState({data:json})
        ))
    //    console.log(this.state.data)
   }

   ubahMakanan =(value)=> {
    this.setState({
        makanan:value
    })
   }
    
   

  render() {
    // console.log(this.state.tampilHalaman)
    return (
      <div>
        {/* <h2>Hallo nama saya {this.state.name} Developer</h2> */}
        <h2>{this.state.makanan}</h2>
        {this.state.tampilHalaman && <Sublifecycle ubahMakanan={(value)=>this.ubahMakanan(value)} />}
        <h1>{this.state.tampilHalaman.toString()}</h1>
        <button onClick={()=>this.setState({tampilHalaman: !this.state.tampilHalaman})}>Tampilkan Halaman Sub</button>
      </div>
    )
  }
}
