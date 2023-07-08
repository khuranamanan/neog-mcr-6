import { useParams } from "react-router";
import { useData } from "../context/DataContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Review from "../components/Review";
import { useState } from "react";
import ReviewModal from "../components/ReviewModal";

function SingleRestaurent() {
  const { resID } = useParams();
  const { restaurentData } = useData();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const currRes = restaurentData.find((res) => res.id === Number(resID));
  console.log(currRes, restaurentData, resID);
  const avgRating =
    currRes.ratings.reduce((result, review) => result + review?.rating, 0) /
    currRes.ratings.length;

  const menuItems = currRes.menu.map((item) => item.name).join(", ");

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto items-center my-2">
      <Link to={-1} className="text-gray-600 hover:text-gray-900 self-start">
        <AiOutlineArrowLeft size={20} />
      </Link>

      <div className="flex gap-4 justify-between w-full items-center flex-wrap">
        <div>
          <h1 className="text-4xl font-medium mb-2">{currRes.name}</h1>
          <p className="text-gray-500 text-sm">{`Menu: ${menuItems}`}</p>
          <p className="text-gray-500 text-sm">{`Address: ${currRes.address}`}</p>
          <p className="text-gray-500 text-sm">{`Average Rating: ${avgRating.toFixed(
            1
          )}`}</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md text-white"
          onClick={openModal}
        >
          Add Review
        </button>
        <ReviewModal
          isOpen={isOpen}
          closeModal={closeModal}
          restaurentID={resID}
        />
      </div>
      <hr className="w-full" />
      <div className="w-full flex flex-col">
        <h2 className="text-2xl font-medium mb-2">Reviews</h2>
        {currRes.ratings.map((review) => (
          <div key={review.id}>
            <Review review={review} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleRestaurent;
