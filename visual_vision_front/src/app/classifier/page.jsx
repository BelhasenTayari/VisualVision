"use client";
import React from "react";
import Navbar from "@/components/Navbar";

import Form from "./Form";

const page = () => {
  return (
    <div className="min-h-screen bg-deep-900 ">
      <Navbar />
      <Form />
    </div>
  );
};

export default page;
