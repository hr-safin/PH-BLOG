import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = ({handleAddToMark,handleMinToMark}) => {
    const [blogs,setBlogs] = useState([])
    



    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    })
    return (
        <div className=" lg:w-[880px] grid grid-cols-1 gap-10">
            {blogs.map(blog => <Blog handleMinToMark={handleMinToMark} handleAddToMark={handleAddToMark} key={blog.id} blog={blog} />)}
        </div>
    );
};

export default Blogs;