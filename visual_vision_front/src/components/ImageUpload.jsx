import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the ApexChart component with SSR disabled
const ApexChart = dynamic(() => import("../components/ApexChart"), {
  ssr: false,
});

const ImageUpload = ({ selectedDataBase, selectedArchitecture }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const getModelId = () => {
    const mapping = {
      "clothing-visionarynet": 1,
      "clothing-pixelsiftnet": 2,
      "clothing-deepvisionx": 3,
      "animals-visionarynet": 4,
      "animals-pixelsiftnet": 5,
    };
    return mapping[`${selectedDataBase}-${selectedArchitecture}`] || 1;
  };

  const handleSubmit = () => {
    if (selectedFile) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("model_id", getModelId());
      console.log(getModelId());

      fetch(`http://127.0.0.1:8000/api/predict/`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setResult(data);
          console.log("File uploaded successfully:", data);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Error uploading file:", error);
        });
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="px-3 rounded-2xl w-full">
        <h3 className="mb-5 text-2xl font-bold text-white">
          Upload your image:
        </h3>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-800 border-gray-600 hover:border-gray-500 hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  className="w-24 h-24 object-cover"
                />
              ) : (
                <>
                  <svg
                    className="w-8 h-8 mb-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-400">
                    PNG, JPG (MAX. 800x400px)
                  </p>
                </>
              )}
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="px-3 rounded-2xl w-full">
        {isLoading ? (
          <div className="flex items-center justify-center w-56 h-56 border rounded-lg bg-gray-800 border-gray-700">
            <div className="px-3 py-1 text-sm font-medium leading-none text-center rounded-full animate-pulse bg-blue-900 text-blue-200">
              Loading...
            </div>
          </div>
        ) : (
          <div className="h-full border rounded-lg bg-gray-800 border-gray-700 p-8 flex flex-col items-center justify-center">
            {result ? (
              <>
                <div className="text-white">
                  <div className="font-bold underline font-oswald text-lg mb-3 ">
                    Predicted Label:
                  </div>
                  <div className="flex justify-center items-center mb-3">
                    {result.predicted_class}
                  </div>
                  <div className="font-bold underline font-oswald text-lg mb-3 ">
                    Confidence:
                  </div>
                  <ApexChart confidence={result.confidence} />
                </div>
              </>
            ) : (
              <p className="text-gray-400">
                Your result will be displayed here!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
