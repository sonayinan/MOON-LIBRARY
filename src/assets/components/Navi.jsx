import React, { useContext } from 'react'
import "../style/navi.scss"
import logo from "../img/kitap3.png"
import { Outlet } from 'react-router'
import DataCotext from '../context/DataContex'
const Navi = () => {
const {state,dispatch} = useContext(DataCotext)
  return (
    <>
    <nav>
      <ul>
        <img className='pulse' src={logo} alt="logo" />
        <span>Moon Library</span>
      </ul>
      <ul>
      {state.kategoriler.map((eleman,index)=>
      <li onClick={(e)=>dispatch({type:"secilenKategori",payload:e.target.innerText})} key={index}>{eleman.kategoriAdi}</li>
      )}
        
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navi