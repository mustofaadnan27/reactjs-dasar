import React from 'react'

const makanans = [
    {
        nama:'soto',
        harga:15000
    },
    {
        nama:'kentaki',
        harga:5000
    },
    {
        nama:'juice halal',
        harga:7000
    },
    {
        nama:'ayam gerperk',
        harga:25000
    },
]
// harus menggunakan key karena REACT membutuhkan kunci unik untuk setiap element
const Map = () => {
  // 0 untuk parameter penampung
    const total_bayar = makanans.filter((makanan) => makanan.harga>10000).reduce((total_harga, makanan) => {
        return total_harga+makanan.harga;
    }, 0)

  return (
    <div>
      <h2>Map</h2>
      {
        makanans.map((makanan, index) => (
            <div key={index+1}>
            <p>{makanan.nama}</p>
            <p>{makanan.harga}</p>
            </div>
        ))
      }
      <h2>Map Filter harga yang lebih besar dari 10ribu</h2>
      {
        makanans.filter((makan) => (makan.harga>10000)) .map((makan, index) => (
            <p key={index+1}>{index+1}. {makan.nama} : {makan.harga}</p>
        ))     
      }
      <h2>Reduce</h2>
      {
        <p>total bayar : {total_bayar}</p>
      }
    </div>
  )
}

export default Map
