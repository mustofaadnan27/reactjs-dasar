import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabel from "./Tabel";
import Formulir from "./Formulir";
const title = "add";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [
        {
          name: "Mie Ayam",
          deskripsi: "Mie Ayam Halal & Lezat",
          harga: 12000,
          id: 1,
        },
      ],
      name: "",
      desc: "",
      harga: '',
      id: "",
    };
  }

  // handleChange = (event) => {
  //   // const {name, value} =  event.target;
  //   this.setState({
  //     // [name] : value
  //     [event.target.name] : event.target.value
  //   });
  // };

  // setState bersifat asinkron, sehingga ketika di console mungkin tidak menampilkan data terbaru secara langsung
  // penggunaan ...prevState membuat salinan dari state sebelumnya, ini digunakan untuk memastikan bahwa anda tidak merubah langsung state sebelumnya,
  // ini bisa mempertahankan nilai dari state sebelumnya dan hanya mengganti nilai yang berubah,Ini adalah pendekatan yang umum digunakan untuk memastikan imutabilitas dalam pembaruan state React.

  handleChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
      // id: prevState.id + 1
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            name: this.state.name,
            deskripsi: this.state.desc,
            harga: this.state.harga,
          },
        ],
      });
      // berfungsi untuk membersihkan data dari inputan setelah berhasil
      this.setState({
        id: "",
        name: "",
        desc: "",
        harga: '',
      });
    } else {
      const makanans = this.state.makanans;
      const makananYangSelainDipilih = makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });
      this.setState({
        makanans: [
          ...makananYangSelainDipilih,
          {
            id: this.state.makanans.length,
            name: this.state.name,
            deskripsi: this.state.desc,
            harga: this.state.harga,
          },
        ],
        // Berfungsi untuk membersihkan data dari inputan setelah berhasil
        name: "",
        desc:'',
        id:'',
        harga:''
      });
    }
  };

  // handleSubmit =(event)=> {
  //   event.preventDefault();
  //   const {name, desc, harga, id, makanan} = this.state
  //   const newItem = {
  //     name:name,
  //     desc:desc,
  //     harga:harga,
  //     id:id
  //   }
  //   this.setState((prevState => ({
  //     ...prevState,
  //     makanan:[...makanan, newItem],
  //     name: "",
  //     desc: "",
  //     harga: 0,
  //     id: id + 1
  //   })))
  //   console.log('data:',this.state)
  // }

  handleEditMakanan = (id) => {
    const makanans = this.state.makanans;
    // const findItem = makanans.filter((makanan) => makanan.id === id)
    // // metode filter selalu mengembalikan array walaupun kosong sekalipun,
    // if (findItem.length > 0) {
    //   const firstItem = findItem[0];
    //   this.setState({
    //     name: firstItem.name,
    //     id: firstItem.id,
    //     desc: firstItem.deskripsi,
    //     harga: firstItem.harga
    //   });
    // }

    // const findItem = makanans.filter((makanan) => makanan.id == id).map((makanan) => (
    //   this.setState({
    //     name:makanan.name,
    //     id:makanan.id,
    //     desc:makanan.deskripsi,
    //     harga:makanan.harga
    //   })
    // ));

    const makananYangDipilih = makanans.find((makanan) => makanan.id === id);
    if (makananYangDipilih) {
      this.setState({
        id: makananYangDipilih.id,
        name: makananYangDipilih.name,
        desc: makananYangDipilih.deskripsi,
        harga: makananYangDipilih.harga,
      });
    }
  };

  handeDeleteMakanan = (id) => {
    const makananBaru = this.state.makanans
    .filter((makanan)  => makanan.id !== id)
    .map((filterMakanan) => {
      return filterMakanan
    })
       this.setState({
      makanans:makananBaru
    })
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <NavbarComponent
          color="primary"
          expand="sm"
          dark={true}
          container="md"
          fixed="top"
          full="true"
        />
        <div className="container" style={{ marginTop: "70px" }}>
          <h2>Crud ReactJS</h2>
          <Tabel {...this.state} handleEditMakanan={this.handleEditMakanan} handleDeleteMakanan={this.handeDeleteMakanan} />
          <Formulir
            {...this.state}
            title={title}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
