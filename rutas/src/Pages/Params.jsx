import React from "react";
import { useParams } from "react-router-dom";

export const Params = () => {

    const{nombre}=useParams()

  return (
    <div>
      <h1>params mi parametro es : <strong className="text-warning">{nombre}</strong></h1>
    </div>
  );
};
