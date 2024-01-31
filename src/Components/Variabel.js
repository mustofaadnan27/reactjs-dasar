import React from "react";
// Const => scope
// const harga = 3000;
// harga = 1000; Tidak bisa karena const

// Var => global
// var harga = 3000;
// if(true) {
//  var harga = 5000;
// }

// let => scope
let harga = 3000;
if(true) {
   let harga = 5000;
}

const Variabel = () => {
    return(
        <div>
            <h2>Harganya adalah {harga}</h2>
        </div>
    )
}

export default Variabel;