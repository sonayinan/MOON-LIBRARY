import React, { useContext } from 'react'
import Card from './Card'
import "../style/cardlist.scss"
import { CiSearch } from "react-icons/ci";
import DataCotext from '../context/DataContex';
import Forms from './Forms';
const CardList = () => {
  const {state,dispatch}=useContext(DataCotext)
  return (
    <>
  <Forms/>
      <div className='kategori'>
        <span className='kat'>
          {state.secilenKategori?state.secilenKategori:"Tüm Kitaplar"}
          <div className="deneme">
            <input onChange={e=>dispatch({type:"search",payload:e.target.value})} type="text" className='ara'  />
            <span className='search'>
              {!state.search&&<CiSearch />}
              </span>
          </div>
        </span>
     
      </div>
      <div className='card-list'>
      {state.kitaplar.map((kitap,index)=>

        (
          kitap.kitapAdi.toLowerCase().includes(state.search.toLowerCase())
          ||
          kitap.yazar.toLowerCase().includes(state.search.toLowerCase())
        )
        &&
        <Card key={index} kitap={kitap} />
        )
      }
      
     
    </div>
    </>
  )
}

export default CardList