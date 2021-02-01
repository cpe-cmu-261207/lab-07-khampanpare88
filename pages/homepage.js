import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link';
import Home from '.';
const baseURL = 'https://dummyapi.io/data/api'
const homepage = () => {
    return(
        <body>
            <table style = {{width:" 100%;", padding: "20px", margin:"5px"}}>
            <tr align="center">
                        <td><Link href={"/homepage"}>Home</Link></td>
                        <td><Link href={"/gallery"}>Gallery</Link></td>
                        <td><Link href={"/contact"}>Contact</Link></td>
                        <td><Link href={"/gpa"}>GPACalc</Link></td>
                        <td><Link href={"/post"}>Post</Link></td>
                        </tr>
            </table>
            <table style = {{width:" 100%;", padding: "20px", margin:"4px"}}>
                <th><h1>Kantika Khampan</h1>
                    <p>Student</p>
                    <p>kantika_khampan@cmu.ac.th</p>
                    <p>090 8933398</p>
                </th> 
                <th> <img src="pare.jpg" width="300"/></th>
            </table>
            <h1 style={{textAlign: "center"}}>Homepage</h1>
            <table style={{width:"100%"}}>
                <th>
                    <h2>Profile</h2>
                </th>
                <td>
                    <p>Graduated form The Prince Royal's College</p>
                    <p>My hobbys are sleeping , reading a book , listen to k-pop music , and dancing.</p>
                    <p>Facebook : Pare khampan</p>
                    <p>Instargram : _ppparepare</p>
                </td>
                    
            </table>
            

        </body>
        )
}

export default homepage