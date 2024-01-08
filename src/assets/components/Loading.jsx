import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Loading = () => {
  const navigate=useNavigate()


  useEffect(()=>{
    setTimeout(() => {
      navigate("moonlibrary/main")
    }, 3000);

  })


  return (
    <div className='loading'>
        <img src="https://media2.giphy.com/media/MEF1VadKbQBdmd8LCn/giphy.gif?cid=ecf05e47eucmzem1b4xsrm7uglnicm0zr7gymqto8fk4yynu&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="load" />
    </div>
  )
}

export default Loading