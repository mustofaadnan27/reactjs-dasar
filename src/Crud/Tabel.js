import React from "react";
import { Table } from "reactstrap";

const Tabel = ({id,name,makanans, handleEditMakanan, handleDeleteMakanan}) => {
  // console.log(makanan)
  return (
    <div>
      <Table className="table-bordered table-striped table-hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Makanan</th>
            <th>Desc</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
         {
          makanans.map((makanan) => (
            <tr key={makanan.id}>
            <th scope="row">{makanan.id}</th>
            <td>{makanan.name}</td>
            <td>{makanan.deskripsi}</td>
            <td>{makanan.harga}</td>
            <td>
              <button type="button" className="btn btn-success me-2" onClick={()=>handleEditMakanan(makanan.id)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={()=>handleDeleteMakanan(makanan.id)}>Delete</button>
            </td>
          </tr>
          ))
         }
       
        
          
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
