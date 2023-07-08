/* eslint-disable react/prop-types */
import { MdStarOutline } from "react-icons/md";

function Review({ review }) {
  return (
    <div className="flex gap-4 justify-between flex-wrap items-center w-full py-2">
      <div className="flex gap-3 items-center">
        <img
          src={review.pp || "https://picsum.photos/200"}
          alt={review.revName}
          className="aspect-square h-8 rounded-full"
        />
        <div>
          <h3 className="text-xl font-medium">{review.revName}</h3>
          <p>{review.comment}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold py-2 px-3 rounded-md bg-green-600">
        {review.rating}
        <MdStarOutline size={20} className="stroke-1" />
      </div>
    </div>
  );
}

export default Review;
