import CardList from "./assets/components/CardList"
import Navi from "./assets/components/Navi"
import "../src/assets/style/app.scss"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Loading from "./assets/components/Loading";


function App() {




  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/*" element={<Loading />} />
          <Route path="moonlibrary" element={<Navi />}>
            <Route path="main" element={<CardList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
