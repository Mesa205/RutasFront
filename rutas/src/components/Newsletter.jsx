import React, { useState } from 'react'
import axios, { Axios } from "axios"
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

export const Newsletter = () => {

  const navigate = useNavigate()
  const [recetas,setRecetas]=useState([])
  const [inputSearch,setInputSearch]=useState("")

  useEffect(()=>{
    getRecetas()
  },[])


  // Funcion para obtener las recetas

  const getRecetas = async(q)=>{
    try {
      const {data}= await axios.get(`http://localhost:8080/recetas/search?nom=${q}` )
      setRecetas(data)
    } catch (error) {
      console.log("Error en getrecetas", error.message)
    }
  }


  const search=(e)=>{
    setInputSearch(e.target.value)
    getRecetas(e.target.value)
    navigate(`?q=${e.target.value}`)
  }


  return (

    
    // <!-- START NEWSLETTER -->


    <section className="bg-warning text-light p-5">
  <div className="container">
    <div className="d-md-flex justify-content-between align-items-center">
      <h3 className="mb-3 mb-md-0">Buscar recetas</h3>
      <div className="input-group mt-2 news-input">
        <input type="text" className="form-control" placeholder="Busque aqui" onChange={(e)=>search(e)} />
        <button className="btn btn-dark btn-lh">buscar</button>
      </div>
    </div>
  </div>
</section>






/* <!--END NEWSLETTER  --> */

  )
}
