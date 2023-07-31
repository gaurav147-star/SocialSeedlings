import React from "react";
import loading from "../data/loading.gif";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className="text-center">
      <Image src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
