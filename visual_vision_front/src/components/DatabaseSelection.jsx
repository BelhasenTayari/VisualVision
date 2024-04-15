import React from "react";

const DatabaseSelection = ({ selectedDataBase, setselectedDataBase }) => {
  return (
    <div className="px-3 rounded-2xl">
      <h3 className="mb-5 text-2xl font-bold text-white">Choose Database:</h3>
      <ul className="grid w-full gap-6 lg:grid-cols-3">
        <li>
          <input
            type="radio"
            id="clothing-option"
            name="database"
            value="clothing"
            className="hidden"
            checked={selectedDataBase === "clothing"}
            onChange={(e) => setselectedDataBase(e.target.value)}
          />
          <label
            htmlFor="clothing-option"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-50 relative"
          >
            <div className="block w-full text-center">
              <div className="w-full text-lg font-semibold">Clothes</div>
              <div className="w-full text-sm mb-2">
                Fashion MNIST dataset from TensorFlow for clothing
                classification.
              </div>
              <div className="flex justify-center space-x-3">
                <img
                  src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/03df5e4f25bb96c0b1b6f56a4b5f3312.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
                  alt="Example 1"
                  className="w-12 h-16"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFA4ghAFjMjFJoq8rmvwswjGN0Rm_eg25j0bEoL9WF3A&s"
                  alt="Example 2"
                  className="w-12 h-16"
                />
                <img
                  src="https://static.pullandbear.net/2/photos//2024/V/1/1/p/1727/140/040/1727140040_2_2_8.jpg?t=1711455450626&imwidth=1125"
                  alt="Example 3"
                  className="w-12 h-14"
                />
              </div>
            </div>
            {selectedDataBase === "clothing" && (
              <div className="absolute top-0 right-0 p-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </label>
        </li>

        <li>
          <input
            type="radio"
            id="animals-option"
            name="database"
            value="animals"
            className="hidden"
            checked={selectedDataBase === "animals"}
            onChange={(e) => setselectedDataBase(e.target.value)}
          />
          <label
            htmlFor="animals-option"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-50 relative"
          >
            <div className="block w-full text-center">
              <div className="w-full text-lg font-semibold">Animals</div>
              <div className="w-full text-sm mb-2">
                CIFAR-10 dataset from TensorFlow for animal and object
                classification.
              </div>
              <div className="flex justify-center space-x-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/640px-Cat_November_2010-1a.jpg"
                  alt="Example 1"
                  className="w-12 h-16"
                />
                <img
                  src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*"
                  alt="Example 2"
                  className="w-12 h-16"
                />
                <img
                  src="https://cdn.britannica.com/20/194520-050-DCAE62F1/New-World-Sylvilagus-cottontail-rabbits.jpg"
                  alt="Example 3"
                  className="w-12 h-16"
                />
              </div>
            </div>
            {selectedDataBase === "animals" && (
              <div className="absolute top-0 right-0 p-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DatabaseSelection;
