/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useData } from "../context/DataContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ReviewModal({ isOpen, closeModal, restaurentID }) {
  const { addReview } = useData();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleRatingChange(e) {
    setRating(parseInt(e.target.value));
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const review = {
      rating,
      comment,
      revName: name,
    };

    addReview(restaurentID, review);

    closeModal();
    setName("");
    setComment("");
    setRating(1);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md overflow-hidden rounded-2xl bg-red-500 text-white p-6 shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-bold mb-4">
                  Add Review
                </Dialog.Title>

                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2"
                >
                  <AiOutlineCloseCircle size={25} />
                </button>

                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <label className="mb-2 text-sm font-medium flex justify-between items-center">
                      Name
                      <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="rounded-md py-2 px-3 text-black w-48"
                        required
                      />
                    </label>
                  </div>

                  <div className="mt-4">
                    <label className="mb-2 text-sm font-medium flex justify-between items-center">
                      Rating
                      <select
                        value={rating}
                        onChange={handleRatingChange}
                        className="rounded-md py-2 px-3 text-black w-48"
                        required
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-4">
                    <label className="mb-2 text-sm font-medium flex justify-between items-center">
                      Comment
                      <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        className="rounded-md py-2 px-3 text-black w-48"
                        required
                      />
                    </label>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full tracking-wide justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-red-100"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ReviewModal;
