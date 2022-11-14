import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const RecetaCard = () => {
  const [recetas, setRecetas] = useState([]);
  const [inputSearch,setInputSearch]=useState("")

  useEffect(() => {
    getRecetas();
  }, []);

  const getRecetas = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/recetas`);

      console.log(data.data);
      setRecetas(data.data);
    } catch (error) {
      console.log("Error al Obtener las Recetas");
    }
  };

  return (



    <div>
      {/* Recetas */}
      <section className="row">
        {recetas ?( recetas.map((receta) => (
          <Link
            to={`/${receta.id}`}
            key={receta.id}
            className="col-md-4 my-3 text-decoration-none text-center"
          >
            <div className="card bg-dark">
              <div className="card-header">
                {receta.img === null ? (
                  <img
                    src="./img/foodd.png"
                    className="card-img-top mt-2 rounded-circle"
                    alt="img"
                  />
                ) : (
                  <img
                    src={receta.img}
                    className="card-img-top mt-2 rounded-circle"
                    alt="img"
                  />
                )}
                <div className="card-body">
                  <div className="btn btn-outline-warning btn-rounded">
                    {receta.categoria.nombreCategoria}
                  </div>
                </div>
                <footer className=" text-warning">
                  <h3>{receta.nombreReceta}</h3>
                </footer>
              </div>
            </div>
          </Link>
       
        ))
      
        ):(
          <div className="text-center text-white mt-5">
            <h1>No hay resultados en la busqueda {inputSearch}</h1>
          </div>
        )}
      </section>
    </div>
  );
};
