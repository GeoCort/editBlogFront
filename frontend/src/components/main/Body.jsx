import { useState } from "react"

export default function Body(props){
    const [visitors,setVisitors] = useState(0)
    return(<section>
        <p>Blog Post {visitors}</p>
        <div>Blog POst 2</div>
    </section>)
}