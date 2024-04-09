import React from "react";

const ArchitectureSelection = ({
  selectedArchitecture,
  setselectedArchitecture,
}) => {
  return (
    <div className="py-8 px-3 rounded-2xl mt-4">
      <h3 className="mb-5 text-2xl font-bold text-white">
        Choose Architecture:
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-3">
        <li>
          <input
            type="radio"
            id="visionarynet-option"
            name="architecture"
            value="visionarynet"
            className="hidden"
            checked={selectedArchitecture === "visionarynet"}
            onChange={(e) => setselectedArchitecture(e.target.value)}
          />
          <label
            htmlFor="visionarynet-option"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-50 relative"
          >
            <div className="block w-full text-center">
              <div className="w-full text-lg font-semibold">VisionaryNet</div>
              <div className="w-full text-sm mb-2">
                A lightweight model with 200k parameters.
              </div>
            </div>
            {selectedArchitecture === "visionarynet" && (
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
            id="pixelsiftnet-option"
            name="architecture"
            value="pixelsiftnet"
            className="hidden"
            checked={selectedArchitecture === "pixelsiftnet"}
            onChange={(e) => setselectedArchitecture(e.target.value)}
          />
          <label
            htmlFor="pixelsiftnet-option"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-50 relative"
          >
            <div className="block w-full text-center">
              <div className="w-full text-lg font-semibold">PixelSiftNet</div>
              <div className="w-full text-sm mb-2">
                An intermediate model with 1.2M parameters.
              </div>
            </div>
            {selectedArchitecture === "pixelsiftnet" && (
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
            id="deepvisionx-option"
            name="architecture"
            value="deepvisionx"
            className="hidden"
            checked={selectedArchitecture === "deepvisionx"}
            onChange={(e) => setselectedArchitecture(e.target.value)}
          />
          <label
            htmlFor="deepvisionx-option"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-50 relative"
          >
            <div className="block w-full text-center">
              <div className="w-full text-lg font-semibold">DeepVisionX</div>
              <div className="w-full text-sm mb-2">
                A complex model with 5.6M parameters.
              </div>
            </div>
            {selectedArchitecture === "deepvisionx" && (
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

export default ArchitectureSelection;
