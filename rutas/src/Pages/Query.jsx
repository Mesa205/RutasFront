import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Query = () => {
    let [params] = useSearchParams()

    const [q,setQ]= useState("")

    useEffect(()=>{
        setQ(params.get("q")|| "")
    },[])

  return (
    <div>
        <h1>
            hola desde query la query es : <strong className='text-success'>{q}</strong>
         </h1>
    </div>
  )
}
