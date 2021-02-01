import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const gallery = () => {
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
        <h1 style={{textAlign: "center"}}>Gallery</h1>

        <table style={{width : "100%"}}>
        <tr>
            <td>
                <img src="1.jpg" width="495"/>
                <img src="2.jpg" width="495"/>
                <img src="3.jpg" width="495"/>
            </td>
        </tr>
        <tr>
            <td>
                <img src="4.jpg" width="495"/>
                <img src="5.jpg" width="495"/>
                <img src="6.jpg" width="495"/>
            </td>
        </tr>
        <tr>
            <td>
                <img src="wooseok.jpg" width="495"/>
                <img src="wooseok2.jpg" width="495"/>
                <img src="jaemin.jpg" width="495"/>
            </td>
        </tr>
        <tr>
            <td>
                <img src="nct.jpg" width="1495"/>
            </td>
        </tr>
        </table>
        </body>

        )
}

export default gallery