import Header from './component/Layouts/Header'
import Sidebar from './component/Layouts/Sidebar'
import Home from './component/Home'
import Footer from './component/Layouts/Footer'
import { Routes, Route} from 'react-router-dom'
import DisplayUser from './component/user/DisplayUser'
import AddUser from './component/user/AddUser'
import { Toaster } from "react-hot-toast";
import ViewTender from './component/user/ViewTender'
import EditTender from './component/user/EditTender'


function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userDisplay' element={<DisplayUser />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/ViewTender/:id' element= {<ViewTender />}/>
        <Route path='/edittender/:id' element= {<EditTender />}/>
      </Routes>
      <Footer />
      <Toaster/>
    </>
  )
}

export default App