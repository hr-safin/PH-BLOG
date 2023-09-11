import SingleBookMark from "./SingleBookMark";


const BookMark = ({bookMark,min}) => {
    return (
        <div className=" lg:w-[350px]">
            <div className=" mb-7 p-4 lg:p-5 bg-gray-200 rounded-lg">
            <h2 className=" text-blue-700 lg:text-xl font-semibold">Spent time on read : {min} min</h2>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg">
                <h2 className=" text-xl lg:text-2xl font-semibold mb-4">Bookmarked Blogs : {bookMark.length}</h2>
                
                    
                    {bookMark.map(singleMark => <SingleBookMark key={singleMark.id} singleMark={singleMark} />)}

                
            </div>
            
        </div>
    );
};

export default BookMark;