import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const gpa = () => {
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
                <h1 style={{width:" 100%;", padding: "20px", margin:"4px"}}>GPA Calculator</h1>  
                <form>
                    <table style = {{width:" 100%;", padding: "20px", margin:"5px"}}>
                        <tr>
                            <td>
                                <input type="text" class="text" placeholder="ID ex 261xxx , 001101" id="subID"/>
                                <select name="semester" class="text" id="semester">
                                    <option value="1-2562">1/2562</option>
                                    <option value="2-2562">2/2562</option>
                                    <option value="1-2563">1/2563</option>
                                    <option value="2-2563">2/2563</option>
                                    <option value="1-2564">1/2564</option>
                                    <option value="2-2564">2/2564</option>
                                    <option value="1-2565">1/2565</option>
                                    <option value="2-2565">2/2565</option>
                                </select>
                            </td>
                            <td>
                                <input type="text" class="text" placeholder="weigth ex 3 , 1.5" id="weight"/>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                <select name="gpa" class="text" id="gpa">
                                    <option value="4" >A</option>
                                    <option value="3.5" >B+</option>
                                    <option value="3" >B</option>
                                    <option value="2.5" >C+</option>
                                    <option value="2" >C</option>
                                    <option value="1.5" >D+</option>
                                    <option value="1" >D</option>
                                    <option value="0" >F</option>
                                </select>
                            </td>
                            <td>
                                <input type="submit" name="Add"/><button></button>
                            </td>
                        </tr>
                        
                        <tr>
                            <table class="t1"  border="1px">
                                <tr><td><th>1/2562</th></td></tr>
                                <tbody id = "1-2562">
                                    <tr>
                                        <td>Subject</td>
                                        <td>Weight</td>
                                        <td>Grade</td>
                                    </tr>
                                </tbody>
                                <tr>
                                    <td>GPA : </td>
                                    <td><p id = "gpa1-2562">0.00</p></td>
                                    <td><p id = "w1-2562">0</p></td>
                                </tr>
                            </table>
                        </tr>
                        <tr>
                            <table class="t2"  border="1px">
                                <tr><td><th>2/2562</th></td></tr>
                                <tbody id = "2-2562">
                                    <tr>
                                        <td>Subject</td>
                                        <td>Weight</td>
                                        <td>Grade</td>
                                    </tr>
                                </tbody>
                                <tr>
                                    <td>GPA : </td>
                                    <td><p id = "gpa2-2562">0.00</p></td>
                                    <td><p id = "w2-2562">0</p></td>
                                </tr>
                            </table>
                        </tr>
                        <tr>
                            <table class="t1"  border="1px">
                                <tr><td><th>1/2563</th></td></tr>
                                <tbody  id = "1-2563">
                                    <tr>
                                        <td>Subject</td>
                                        <td>Weight</td>
                                        <td>Grade</td>
                                    </tr>
                                </tbody>
                                <tr>
                                    <td>GPA : </td>
                                    <td><p id = "gpa1-2563">0.00</p></td>
                                    <td><p id = "w1-2563">0</p></td>
                                </tr>
                            </table>
                        </tr>
                        <tr>
                            <table class="t2"  border="1px">
                                <tr><td><th>2/2563</th></td></tr>
                                <tbody id = "2-2563">
                                    <tr>
                                        <td>Subject</td>
                                        <td>Weight</td>
                                        <td>Grade</td>
                                    </tr>
                                </tbody>
                                <tr>
                                    <td>GPA : </td>
                                    <td><p id = "gpa2-2563">0.00</p></td>
                                    <td><p id = "w2-2563">0</p></td>
                                </tr>
                            </table>
                        </tr>
                        <tr>
                            <table  class="t1"  border="1px">

                                <tr><td><th>1/2564</th></td></tr>
                                <tbody id = "1-2564">
                                    <tr>
                                        <td>Subject</td>
                                        <td>Weight</td>
                                        <td>Grade</td>
                                    </tr>
                                </tbody>
                                <tr>
                                    <td>GPA : </td>
                                    <td><p id= "gpa1-2564">0.00</p></td>
                                    <td><p id= "w1-2564">0</p></td>
                                </tr>
                            </table>
                        </tr>
                        <tr>
                            <table class="t2"  border="1px">
                                <tr><td></td><th>2/2564</th></tr>
                                <tbody  id = "2-2564">
                                    <tr>
                                        <td>Subject</td>
                                        <td>Weight</td>
                                        <td>Grade</td>
                                    </tr>
                                </tbody>
                                <tr>
                                    <td>GPA : </td>
                                    <td><p id = "gpa2-2564">0.00</p></td>
                                    <td><p id = "w2-2564">0</p></td>
                                </tr>
                            </table>
                        </tr>
                        <tr>
                            <table class="t1"  border="1px">
                                <tr><td><th>1/2565</th></td></tr>
                                <tbody id = "1-2565">
                                    <tr>
                                        <td>Subject</td>
                                        <td>Weight</td>
                                        <td>Grade</td>
                                    </tr>
                                </tbody>
                                <tr>
                                    <td>GPA : </td>
                                    <td><p id = "gpa1-2565"> 0.00</p></td>
                                    <td><p id = "w1-2565">0</p></td>
                                </tr>
                            </table>
                        </tr>
                        <tr>
                            <table class="t2"  border="1px">
                                <tr><td><th>2/2565</th></td></tr>
                                <tbody id = "2-2565">
                                    <tr>
                                        <td>Subject</td>
                                        <td>Weight</td>
                                        <td>Grade</td>
                                    </tr>
                                </tbody>
                                <tr>
                                    <td>GPA : </td>
                                    <td><p id = "gpa2-2565">0.00</p></td>
                                    <td><p id = "w2-2565">0</p></td>
                                </tr>
                            </table>
                        </tr>
                        <tr >
                            <td>GPAX : </td>
                            <td><p id="gpax">0.00</p></td>
                            <td><p id="wx">0</p></td>
                        </tr>
                        <tr>
                            <td>GPA(CPE) : </td>
                            <td><p id="gpacpe">0.00</p></td>
                            <td><p id="wcpe">0</p></td>
                        </tr>
                    </table>
                </form>      
            </body>
    )
}

export default gpa