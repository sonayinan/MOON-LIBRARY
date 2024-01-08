import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { initialState, reducer } from "../reducer/reducer";

//context oluşturma
const DataCotext =createContext()

//contexte bir sağlayıcı oluşturulmalıdır.
export const DataProvider=({children})=>{
    //yapıdaki tüm state func...etc buraya taşınacak
    //usestateleri  getirdik app ten tüm stateleri sildik. reducera farklı bir tanım yaptık
  
 const [state,dispatch]=useReducer(reducer,initialState)
 
    //------------------------------------------------------
    //app deki veriler

 const kitaplariGetir= async ()=>{
    let url="http://localhost:3001/kitaplar"
    if(state.secilenKategori && state.secilenKategori!=="Tüm Kitaplar"){
    url+=`?tur=${state.secilenKategori}`
  }
    const response= await fetch(url)
    const kitaplar=await response.json()
    
    //case1
    dispatch({type:"kitaplariGetir",payload:kitaplar})
   }
   const kategorileriGetir= async ()=>{
    let url="http://localhost:3001/kategoriler"
    const response= await fetch(url)
    const kategoriler=await response.json()
    //case2
    dispatch({type:"kategorileriGetir",payload:kategoriler})
   }
   const yeniKitapEkleDuzenle=async(yeniKitap)=>{
    if(!state.secilenKitap){
      //kitap ekleme bçlümü
      dispatch({type:"kitapEkle",yeni:yeniKitap})
      let url="http://localhost:3001/kitaplar"
      const response= await axios.post(url,yeniKitap)
      //ön yüze eklemeyi eski yöntem ile yaptık dataya eklemeyi eski yöntem ile çağırıyoruz.
      console.log(response);
      //toast ekleme
      toast.success('📖 Yeni Kitap Eklendi', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      //kitap düzenleme bölümü
      let url=`http://localhost:3001/kitaplar/${state.secilenKitap.id}`
      const response=await axios.put(url,yeniKitap)
      dispatch({type:"kitapDuzenle"})
      //toast ekleme
      toast.warn('📖 Kitap Düzenlendi', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
       
    }
   }
   const kitapSil= async(id)=>{
    const onay=confirm("Kitabı silmek istediğinizden emin misiniz?")
    if(onay){
  
      dispatch({type:"kitapSil",id})//burada id diyerek oto çektik daha kolay. id:id anlamında kullandık.
      let url=`http://localhost:3001/kitaplar/${id}`//buraya boşluk bırakmadan yaz
      //const response=await axios.delete(url) çok tehlikeli olduğu için put veya patch kullanılır. ama patch daha sapğlıklı ondan patch kullanacağız
      const response=await axios.patch(url,{isDeleted:true}) 
    }
    //toast ekleme
    toast.error('📖 Kitap Sİlindi', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
   }
   const cardDuzenle=async(id)=>{
    const url=`http://localhost:3001/kitaplar/${id}`
    const response=await axios.get(url)
    const duzenlenecekKitap=response.data
    dispatch({type:"cardDuzenle",payload:duzenlenecekKitap})
   
   }
  useEffect(()=>{
  
    kitaplariGetir()
  },[state.secilenKategori,state.secilenKitap])
  useEffect(()=>{
  kategorileriGetir()
  },[])//sadece bir kereliği,ne çalışır ve bir kere get atar. sonsuz döngüye girmez
   

  //formdaki diğer veriler
  const handleSubmit = (e) => {
    e.preventDefault();
    yeniKitapEkleDuzenle({
      id:state.kitaplar[state.kitaplar.length-1]===undefined?1: state.kitaplar[state.kitaplar.length-1].id+1,//burada biz en son indexi baz alarak gelecek olan verimizin idsini bir arttırarak veriyoruz. buraya bir short if yapısı getirdik ki tüm veriler silinirse yenisini 1 den başlatıp eklesin. eğer id hata verirse başka bir bilgisayarda çalıştırınca burayı yoruma alıyoruz cardlistte kitap.id yazdığımız yeri index yeazıyoruz key i yani. map içine kitap yanına şindex ekliyoruz.
      kitapAdi: state.kitapAdi,//ilki objedeki key ikincisi ise statetimiz.
      yazar: state.yazar,
      tur: state.tur,
      sayfa: state.sayfa,
      resim: state.resim,
      aciklama: state.aciklama
    })
    //caase3
    dispatch({type:"formReset" })
  }
  // useEffect(()=>{
  //   if(secilenKitap){
  //     setkitapAdi(secilenKitap.kitapAdi)
  //   setAciklama(secilenKitap.aciklama)
  //   setResim(secilenKitap.resim)
  //   setTur(secilenKitap.tur)
  //   setSayfa(secilenKitap.sayfa)
  //   setYazar(secilenKitap.yazar)
  //   }
    
  // },[secilenKitap])
   

    return <DataCotext.Provider value={
        {
             state,
             dispatch,
             handleSubmit,  
             kitapSil,
             cardDuzenle

            }//tüm complara çekiliuor.
    }>
        {children}
    </DataCotext.Provider>
}
export default DataCotext;