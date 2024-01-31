import React, { Component } from "react";


// Class Component

export default class Navbar extends Component {
    render() {
        return(
            <div className="navbar__">
                <h1>Ini Navbar Adnan developer</h1>
            </div>
        )
    }
}

// Functional Component

// function Navbar() {
//     return(
//         <div>
//             Ini functional Component
//         </div>
//     )
// }
// export default Navbar;


// Arrow Component

// const Navbar = () => {
//     return(
//         <div>

//         </div>
//     )
// }
// export default Navbar;



// dan juga cara meng-export ada 2 yang pertama => export, yang kedua => export default, perbedaannya kalau export pas diimport harus menggunakan kurung kurawal {}

// export function Navbar() {
//     return(
//         <div>harus menggunanakan krung kurawal pas import {}</div>
//     )
// }