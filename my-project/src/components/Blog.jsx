/* eslint-disable react/prop-types */

const Blog = ({ blog,handleAddToMark,handleMinToMark }) => {
    
    
  return (
    <div className="card lg:h-[680px] bg-base-100 shadow-xl">
      <figure>
        <img className=" lg:h-[600px] w-full" src={blog.cover_img} alt={blog.id} />
      </figure>
      <div className="card-body">
        <div className=" flex">
          <div className="avatar">
            <div className="w-14 h-14 rounded-full">
              <img className=" " src={blog.author_img} />
            </div>
          </div>
          <div className=" pl-3">
            <h2 className=" text-xl font-bold">{blog.authorName}</h2>
            <p className=" text-gray-400">{blog.posted_date}</p>
          </div>
        </div>
        <div onClick={() =>handleAddToMark(blog)} className=" text-right cursor-pointer lg:absolute  lg:right-0 lg:pr-6 lg:pt-0 pt-2">
          <p className=" text-gray-600 flex gap-2">
            {blog.reading_time} min read{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z"
                  stroke="#111111"
                  stroke-opacity="0.6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
          </p>
        </div>
        <h2 className=" text-2xl lg:text-4xl font-bold pt-3">{blog.title}</h2>
        <p className=" text-gray-500 text-md">
          <span className=" pr-3">#{blog.hashtags[0]}</span> #{blog.hashtags[1]}
        </p>
        <div className=" flex justify-start pt-4 ">
          <button onClick={() =>handleMinToMark(blog.id,blog.reading_time)}  className=" underline underline-offset-2 text-blue-700">
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
