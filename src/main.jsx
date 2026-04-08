import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Service from './pages/Service.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Contacts from './pages/Contacts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about-us' element={<Aboutus/>}/>
            <Route path='/contact' element={<Contacts/>}/>
          </Route>
      </Routes>
    </HashRouter> 
  </StrictMode>,
)
