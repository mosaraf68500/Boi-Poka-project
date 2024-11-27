import { IoMdStarOutline } from "react-icons/io";

const Book = ({book}) => {
    
    const { image, bookName, author,tags,category,rating} =book;
    return (
        <div className="pt-10">
        <div className="card  shadow-xl p-6 border">
  <figure className="py-6 rounded-2xl bg-blue-200">
    <img className="h-[170px] w-[150px] rounded"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className="flex justify-start items-center gap-5">
    {
        tags.map(tag =><button className="btn btn-xs bg-green-200 text-green-600">{tag}
        </button>
        )


    }
  </div>
    <h2 className="card-title">
     {bookName}
     
    </h2>
    <p className="border-b-2 border-dashed border-gray-500 p-4">By:{author}</p>
    
    <div className="card-actions justify-between items-center">
      <div className="">{category}</div>
      <div className="flex items-center gap-3 ">
      <p>
      {rating}
      </p>
      <IoMdStarOutline className="text-2xl "></IoMdStarOutline>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Book;