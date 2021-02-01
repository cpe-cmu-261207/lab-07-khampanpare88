import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link';
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <body>
          <table style = {{width:" 100%;", padding: "50px", margin:"5px"}}>
            <tr align="center">
                      <td><Link href={"/homepage"}>Home</Link></td>
                      <td><Link href={"/gallery"}>Gallery</Link></td>
                      <td><Link href={"/contact"}>Contact</Link></td>
                      <td><Link href={"/gpa"}>GPACalc</Link></td>
                      <td><Link href={"/post"}>Post</Link></td>
                      </tr>
          </table>
      </body>
  )
}

export default Home
