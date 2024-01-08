import React, { useContext } from 'react'
import "../style/forms.scss"
import { Outlet } from 'react-router';
import DataCotext from '../context/DataContex';
const Forms = () => {
 const {
  handleSubmit,
  state,
  dispatch
 
}=useContext(DataCotext)


  return (
    <>
    <form onSubmit={handleSubmit}>
      <h3>{state.secilenKitap?"Kitap Düzenle":"Kitap Ekle"}</h3>
      <input type="text" value={state.kitapAdi} onChange={e => dispatch({type:"kitapAdi",payload:e.target.value})} placeholder='Kitap adı' />
      {/* keyup keypress yerine onChange kullanıyoruz ki içindede callback alıp yazılanı çeksin */}
      <input type="text" value={state.yazar} onChange={e => dispatch({type:"yazar",payload:e.target.value})} placeholder='Kitap yazarı' />
      <select value={state.tur} onChange={e => dispatch({type:"tur",payload:e.target.value})}>
        <option>------</option>
        <option>Yazılım</option>
        <option>Edebiyat</option>
        <option>Finans</option>
        <option>Tarih</option>
        <option>Fantastik</option>
      </select>
      <input type="number" value={state.sayfa} onChange={e => dispatch({type:"sayfa",payload:e.target.value})} placeholder='Kitap sayfa sayısı' />
      <input type="text" value={state.resim} onChange={e => dispatch({type:"resim",payload:e.target.value})} placeholder='Kitap Resmi(URL)' />
      <textarea value={state.aciklama} onChange={e => dispatch({type:"aciklama",payload:e.target.value})} placeholder='Kitap Açıklaması'></textarea>
      <input disabled={state.kitapAdi===""||state.yazar===""||state.tur==="------"||state.sayfa===""||state.aciklama===""} type="submit" value={state.secilenKitap?"Düzenle":"Ekle"}/>
      {/* <input type="submit" value={"düzenle"} /> */}
    </form>
    <Outlet/>
  </>
  )
}

export default Forms