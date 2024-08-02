import { AiFillStar } from "react-icons/ai";

const FoodCard = () => {
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={"https://avatars.githubusercontent.com/u/101738635?v=4&size=64"}
        alt=""
        className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between">
        <h2>Onion Pizza</h2>
        <span className="text-green-500 ">₹45</span>
      </div>
      <p className="text-sm font-normal">It si cheesze with tommato sauce</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> 5
        </span>
        <button className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
