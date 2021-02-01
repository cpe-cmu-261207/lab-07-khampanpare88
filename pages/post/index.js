import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const password = '6017eec2fee80c3433f2e259'
const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get(baseURL+"/post", { headers: { "app-id": password }}).then((respond)=>{
            console.log(respond)
            setPosts(respond.data.data)
        })
    },[] )
    return (
        <>
        <table style= {{width:" 100%;"}}>
        <tr align="center">
            <td><Link href={"/homepage"}>Home</Link></td>
            <td><Link href={"/gallery"}>Gallery</Link></td>
            <td><Link href={"/contact"}>Contact</Link></td>
            <td><Link href={"/gpa"}>GPACalc</Link></td>
            <td><Link href={"/post"}>Post</Link></td>
        </tr>
    </table>
            <h1 className="bg-red-500 text-center text-4xl p-3 tracking-widest">All Posts</h1>
            {posts.map((item)=>{
                return <div key={item.id}>
                    <h4>{"Post : "+item.text}</h4>
                    <p>
                        <Link href={"/post/"+item.id}>
                        <img className="imgflame" src={item.image}></img>
                        </Link>
                        <p>{"Likes : "+item.likes}</p>  
                    </p>
                </div>
            })}
        </>
    )
}

export default  Posts