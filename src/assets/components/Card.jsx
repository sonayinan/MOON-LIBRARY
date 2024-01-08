import React, { useContext } from 'react'
import "../style/card.scss"
import book from "../img/kitap4.jpg"
import { GoTrash } from "react-icons/go";
import { FiEdit3 } from "react-icons/fi";
import DataCotext from '../context/DataContex';
const Card = ({kitap}) => {//kitap cardlistten geldiği için burada bıraktık.
  const { kitapSil,cardDuzenle}=useContext(DataCotext)
  return (
    kitap.isDeleted!==true&&(
    <div className='card'>
      <img src={kitap.resim?kitap.resim:book} alt="book" />
      <div className="card-body">
        <p>Kitap Adı:{kitap.kitapAdi}</p>
        <p>Kitap Yazarı:{kitap.yazar}</p>
        <p>{kitap.tur}</p>
        <p>Sayfa Sayısı:{kitap.sayfa}</p>
        <p className='yazi'>Kitap Açıklaması: {kitap.aciklama.substring(0,50)+"..."} <a href="#"><i>devamı için tıklayın</i></a></p>
        <button onClick={()=>kitapSil(kitap.id)} className='delete'><GoTrash /></button>
        <button onClick={()=>cardDuzenle(kitap.id)} className='edit'><FiEdit3 /></button>
      </div>
    </div>
    
)
   
  )
}

export default Card