import React from 'react'
import "../style/content.scss"
import { useParams } from 'react-router'
const Content = () => {
    const params=useParams()
    // const bookPath=params.book
  return (
    <>
    <div className="icerik">
        <img src="" alt="kitap resmi" />
        <h2>kitap adı</h2>
        <h3>yazar adı</h3>
        <h4>tür</h4>
        <h5>sayfa sayısı</h5>
        <Link to={"cards"}>geri dön</Link>

    </div>
    </>
  )
}

export default Content