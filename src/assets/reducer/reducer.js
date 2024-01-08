export const initialState = {
    kitaplar: [],
    kategoriler: [],
    secilenKategori: "",
    secilenKitap: "",
    search: "",
    kitapAdi: "",
    tur: "------",
    sayfa: "",
    yazar: "",
    resim: "",
    aciklama: ""
}
export const reducer = (state, action) => {
    switch (action.type) {
        //case1
        case "kitaplariGetir":
            return {
                ...state,
                kitaplar: action.payload
            }
        //case2
        case "kategorileriGetir":
            return {
                ...state,
                kategoriler: action.payload
            }
        //case3
        case "formReset":
            return {
                ...state,
                kitapAdi: "",
                tur: "------",
                sayfa: "",
                yazar: "",
                resim: "",
                aciklama: ""
            }
        //case forms 4 ile 9 arası
        case "kitapAdi":
            return {
                ...state,
                kitapAdi: action.payload
            }
        case "yazar":
            return {
                ...state,
                yazar: action.payload
            }
        case "tur":
            return {
                ...state,
                tur: action.payload
            }
        case "resim":
            return {
                ...state,
                resim: action.payload
            }
        case "aciklama":
            return {
                ...state,
                aciklama: action.payload
            }
        case "sayfa":
            return {
                ...state,
                sayfa: action.payload
            }
        //case 10
        case "search":
            return {
                ...state,
                search: action.payload
            }
        //case 11
        case "secilenKategori":
            return {
                ...state,
                secilenKategori: action.payload
            }
        //case 12
        case "kitapEkle":
            const yeniKitap = [...state.kitaplar, action.yeni]  //eskileri al yeniyi ekle mantığı var .. ile eskiyi alıp actionda yeni ekliyoruz.
            return {
                ...state,
                kitaplar: yeniKitap
            }
        //case13
        case "kitapDuzenle":
            return {
                ...state,
                secilenKitap: ""
            }
        //case14
        case "kitapSil":
            const kitapSil = state.kitaplar.filter(statedenGelen => statedenGelen.id !== action.id)
            return {
                ...state,
                kitaplar: kitapSil
            }
        //case15
        case "cardDuzenle":
            return {
                ...state,
                //seçilen kitabı true false olmasına göre buton değişikliği yapıyorduk o yüzden seçilen kitabı burada almamız lazım.
                secilenKitap: action.payload,
                kitapAdi: action.payload.kitapAdi,
                yazar: action.payload.yazar,
                resim: action.payload.resim,
                tur: action.payload.tur,
                sayfa: action.payload.sayfa,
                aciklama: action.payload.aciklama
            }
        default:
            return state
    }
}
