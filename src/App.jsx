import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  function onClicksigin() {
    alert("Maaf Fitur Sigin Belum Aktif🙏🙏");
  }

  function handlegemboknavbar() {
    if (!listOpen) {
      setListOpen(true);
      return;
    }
    
  }

  return (
    <div>
      <div className="container-navbar">
        <div className="navbar">
          <h1 className="title-navbar">Foody</h1>

          <ul className={menuOpen ? "active-menu" : ""}>
            <li className="menu-navbar">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="menu-navbar">
              <NavLink to="/service">Service</NavLink>
            </li>
            <li className="menu-navbar">
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li className="menu-navbar">
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li className="menu-navbar">
              <NavLink to="/contact">Contacts</NavLink>
            </li>
          </ul>

          <div className="containernavbar-right">
            <div className="container-keranjang">
              <button className="buttonnavbar-gembok" onClick={handlegemboknavbar}>
                <i className="fa-solid fa-bag-shopping lockicoin"></i>
                <div className="totalcount">{totalCount}</div>
              </button>
            </div>

            <div className="container-signin">
              <button className="button-navbar" onClick={onClicksigin}>
                Sign in <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </button>
            </div>
          </div>

          <button
            className="button-bars"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa-solid fa-bars icon-bars"></i>
          </button>
        </div>
      </div>

      <AppContext.Provider value={{ listOpen, setListOpen }}>
        <div>
          <Outlet context={{ totalCount, setTotalCount }} />
        </div>
      </AppContext.Provider>

      <div className="containerfooter">
        <div className="footer">
          <div className="container-footer1">
            <h1 className="title-footer1">Foody</h1>
            <p className="paragraf-footer1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Pariatur, dolore?
            </p>
            <div className="container-medsosfooter1">
              <i className="fa-brands fa-twitter twitter"></i>
              <i className="fa-brands fa-square-instagram instagram"></i>
              <i className="fa-brands fa-facebook-f facebook"></i>
              <i className="fa-brands fa-google-plus googleplus"></i>
            </div>
          </div>

          <div className="container-footer2">
            <h1 className="title-footer2">Company</h1>
            <ul className="ulfooter2">
              <li>Why Me?</li>
              <li>Partner With Us</li>
              <li>About Us</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="container-footer3">
            <h1 className="title-footer3">Support</h1>
            <ul className="ulfooter3">
              <li>Why Me?</li>
              <li>Partner With Us</li>
              <li>About Us</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="container-footer4">
            <h1 className="title-footer4">Stay Connected</h1>
            <p className="paragraf-footer4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <input
              type="text"
              placeholder="Email Address"
              className="input-footer4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
