import { useState } from "react"
import Blogs from "./components/Blogs"
import BookMark from "./components/BookMark"
import Header from "./components/Header"


function App() {

  const [bookMark, setBookMark] = useState([])
  const [min, setMin] = useState(0)

  const handleAddToMark = (blog) => {
    const newBlog = [...bookMark, blog]
    setBookMark(newBlog)
  }

  const handleMinToMark = (id,time) => {
    setMin(min + time)
    console.log("remove book Mark id", id)
    const removeItem = bookMark.filter(remove => remove.id !== id)
    setBookMark(removeItem)
  }
  

  return (
    <>
      <Header />
      <div className=" flex flex-col  md:flex-row lg:px-32 px-6 py-10 justify-between lg:gap-2 gap-8">
        <Blogs handleAddToMark={handleAddToMark} handleMinToMark={handleMinToMark}  />
        <BookMark min={min} bookMark={bookMark} />
      </div>
      
    </>
  )
}

export default App
