import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const contact = () => {
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
            
            <h1 style={{textAlign: "center"}}>Contact</h1>
            <table style = {{width:" 100%;", padding: "20px", margin:"5px"}}>
                <tr align="center">
                    <td>
                            <form>
                            <label for="fname">Subject:</label>
                            <input type="text" id="fname" name="fname" value=""/><br></br>
                            <label for="lname">Massage:</label>
                            <input type="text" id="lname" name="lname" value=""/><br></br>
                            <label for="fname">Name:</label> 
                            <input type="text" id="fname" name="fname" value=""/><br></br>
                            <label for="lname">Gender:</label>
                            <input type="radio" id="male" name="gender" value="male"/>
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female"/>
                            <label for="female">Female</label>
                            <input type="radio" id="other" name="gender" value="other"/>
                            <label for="other">Other</label><br></br>
                            <label for="lname">Phone:</label>
                            <input type="text" id="lname" name="lname" value=""/><br></br>
                            <label for="fname">Email:</label>
                            <input type="text" id="fname" name="fname" value=""/><br></br>
                            <input type="submit" value="Submit"/><br></br>
                            </form>
                    </td>
                </tr>
            </table>
            </body>
        )
}
    
        

export default contact