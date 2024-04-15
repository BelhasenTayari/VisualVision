"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import data from "./models.json";

const Page = () => {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [data, setData] = useState([]);
    const handleAlgorithmChange = (event) => {
        setSelectedAlgorithm(event.target.value);
    };

    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
    };
    useEffect(() => {
        const fetchModels = async () => {
            const rsp = await fetch("http://127.0.0.1:8000/api/models");
            const response = await rsp.json();
            console.log(response);
            setData(response);
        };
        fetchModels();
    }, []);

    return (
        <div className="min-h-screen bg-deep-900 ">
            <Navbar />
            <h3 className="m-10 mb-2 text-2xl font-bold text-white">
                Documentation :
            </h3>

            <div className="inline-flex ml-8 items-center justify-center py-2.5 px-4 text-sm font-medium text-gray-700">
                <label htmlFor="algos" className="sr-only">
                    Choose Dataset
                </label>
                <select
                    id="algos"
                    value={selectedAlgorithm}
                    onChange={handleAlgorithmChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg border-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-max p-2.5 mr-3"
                >
                    <option value="" disabled>
                        Choose Dataset
                    </option>

                    <option value="Fashion">Fashion</option>
                    <option value="CIFAR-10">CIFAR-10</option>
                </select>

                <label htmlFor="models" className="sr-only">
                    Choose a model
                </label>
                <select
                    id="models"
                    value={selectedModel}
                    onChange={handleModelChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg border-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-max p-2.5"
                >
                    <option value="" disabled>
                        Choose a model
                    </option>
                    {data && selectedAlgorithm && selectedAlgorithm == "Fashion"
                        ? data
                              .filter(
                                  (datum) =>
                                      datum.id == 1 ||
                                      datum.id == 2 ||
                                      datum.id == 3
                              )
                              .map((opt, index) => (
                                  <option key={index} value={opt.name}>
                                      {opt.name}
                                  </option>
                              ))
                        : data
                              .filter(
                                  (datum) =>
                                      datum.id == 4 ||
                                      datum.id == 5 ||
                                      datum.id == 6
                              )
                              .map((opt, index) => (
                                  <option key={index} value={opt.name}>
                                      {opt.name}
                                  </option>
                              ))}
                </select>
            </div>

            <section className=" p-3 sm:p-5">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    {selectedModel && (
                        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                            <div className="flex flex-col text-white font-bold md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                Model: {selectedModel}
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3"
                                            >
                                                Layer (Type)
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3"
                                            >
                                                Output Shape
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3"
                                            >
                                                Param #
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.find(
                                                (model) =>
                                                    model.name === selectedModel
                                            )
                                            .architecture.table.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b dark:border-gray-700"
                                                >
                                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {item.layer}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {item.shape}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        {item.param}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    Total params:
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        {
                                            data.find(
                                                (model) =>
                                                    model.name === selectedModel
                                            ).architecture.summary.params
                                        }
                                    </span>
                                </span>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    Trainable params:
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        {
                                            data.find(
                                                (model) =>
                                                    model.name === selectedModel
                                            ).architecture.summary.trainable
                                        }
                                    </span>
                                </span>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    Non-trainable params:
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        {
                                            data.find(
                                                (model) =>
                                                    model.name === selectedModel
                                            ).architecture.summary['non-trainable']
                                        }
                                    </span>
                                </span>
                            </nav>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Page;
