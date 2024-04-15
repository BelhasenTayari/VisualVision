import ArchitectureSelection from "@/components/ArchitectureSelection";
import DatabaseSelection from "@/components/DatabaseSelection";
import ImageUpload from "@/components/ImageUpload";
import React, { useState } from "react";

const Form = () => {
  const [selectedDataBase, setselectedDataBase] = useState("clothing");
  const [selectedArchitecture, setselectedArchitecture] =
    useState("visionarynet");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 mt-10">
      <div>
        <DatabaseSelection
          selectedDataBase={selectedDataBase}
          setselectedDataBase={setselectedDataBase}
        />
        <ArchitectureSelection
          selectedArchitecture={selectedArchitecture}
          setselectedArchitecture={setselectedArchitecture}
        />
      </div>

      <div>
        <ImageUpload
          selectedDataBase={selectedDataBase}
          selectedArchitecture={selectedArchitecture}
        />
        <div className="bg-slate-200 border hidden border-gray-800 py-8 px-3 rounded-2xl shadow-xl mt-4">
          <h1 className="font-bold text-2xl mb-4">Result</h1>
          <p>Predict: </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
