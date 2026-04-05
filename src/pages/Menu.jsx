import { useState } from "react";
import "../css/menu.css";
import { burger } from "../js/menu";
import { pizza } from "../js/menu";
import { fruit } from "../js/menu";
import { salad } from "../js/menu";
import { drink } from "../js/menu";
import { friedrice } from "../js/menu";
import { useOutletContext } from "react-router-dom";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("burger");
  const allProducts = {
    burger,
    pizza,
    fruit,
    salad,
    drink,
    friedrice,
  };
  const currentProducts = allProducts[activeCategory];

  // State Tambah Atau Kurang Product //
  // State jumlah per product
  const [productCount, setProductCount] = useState({});
  const { totalCount, setTotalCount }   = useOutletContext();
  const [pesananUser,setPesananUser]    = useState({});

  // ➕ Tambah
  function plusProduct(id,title) {
    setProductCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));

    setTotalCount((prev) => prev + 1);
    setPesananUser((prev) => ({...prev,[title]:(prev[title] || 0) + 1}));
  }

  console.log(pesananUser);

  // ➖ Kurang
  function minusProduct(id,title) {
    setProductCount((prev) => {
      const current = prev[id] || 0;

      if (current === 0) return prev;

      return {
        ...prev,
        [id]: current - 1,
      };  
    });

    setTotalCount((prev) => (prev > 0 ? prev - 1 : 0));

    setPesananUser((prev) => {
      const currentQty = prev[title] || 0;
    
      // kalau belum ada / sudah 0 → tidak usah ubah
      if (currentQty === 0) return prev;
    
      // kalau tinggal 1 → hapus dari object
      if (currentQty === 1) {
        const newData = { ...prev };
        delete newData[title];
        return newData;
      }
    
      // kalau masih lebih dari 1 → kurangi
      return {
        ...prev,
        [title]: currentQty - 1
      };
    });
  }

  const { listOpen }    = useContext(AppContext);
  const { setListOpen } = useContext(AppContext);

  
  function closelistmenu() {
      if (listOpen) {
        setListOpen(false);
        return;
      }  
  }


  return (
    <div className="container-menusection">
      <div className={listOpen ? 'container-listpesanan' : 'container-listpesanan2'}>
        <h2 className="title-listmenu">Menu Pesanan :</h2>
        <div style={{ marginTop:'1rem' }}>
          {
            Object.entries(pesananUser).map(([nama,qty]) => (
              <ul className="list-menu">
                <li key={nama}>{nama}.............................................{qty}x</li>
              </ul>
            ))
            
          }
        </div>
        <button className="close-listmenu" onClick={closelistmenu}><i className="fa-solid fa-xmark croos-sign"></i></button>
      </div>
      <div className="container-menu">
        <h3 className="minititle-menu">Our Menu</h3>
        <h1 className="title-menu">The Most Popular</h1>
        <div className="container-navbarmenu">
          <div className="navbar-menu">
            <button
              className="button-burger"
              onClick={() => setActiveCategory("burger")}
            >
              <div className="container-burger" style={activeCategory === 'burger' ? {backgroundColor:'orange',color:'white'} : {}}>
                <i className="fa-solid fa-burger icon-burger"></i>
                <h2 className="title-burger">Burgers</h2>
              </div>
            </button>

            <button
              className="button-pizza"
              onClick={() => setActiveCategory("pizza")}
            >
              <div className="container-pizza" style={activeCategory === 'pizza' ? {backgroundColor:'orange',color:'white'} : {}}>
                <i className="fa-solid fa-pizza-slice"></i>
                <h2 className="title-pizza">Pizza</h2>
              </div>
            </button>

            <button
              className="button-fruit"
              onClick={() => setActiveCategory("fruit")}
            >
              <div className="container-fruit" style={activeCategory === 'fruit' ? {backgroundColor:'orange',color:'white'} : {}}>
                <i className="fa-solid fa-apple-whole"></i>
                <h2 className="title-fruit">Fruit</h2>
              </div>
            </button>

            <button
              className="button-salad"
              onClick={() => setActiveCategory("salad")}
            >
              <div className="container-salad" style={activeCategory === 'salad' ? {backgroundColor:'orange',color:'white'} : {}}>
                <i className="fa-solid fa-carrot"></i>
                <h2 className="title-salad">Salad</h2>
              </div>
            </button>

            <button
              className="button-drink"
              onClick={() => setActiveCategory("drink")}
            >
              <div className="container-drinks" style={activeCategory === 'drink' ? {backgroundColor:'orange',color:'white'} : {}}>
                <i className="fa-solid fa-beer-mug-empty"></i>
                <h2 className="title-drink">Drink</h2>
              </div>
            </button>

            <button
              className="button-friedrice"
              onClick={() => setActiveCategory("friedrice")}
            >
              <div className="container-friedrice" style={activeCategory === 'friedrice' ? {backgroundColor:'orange',color:'white'} : {}}>
                <i className="fa-solid fa-bowl-food"></i>
                <h2 className="title-friedrice">Fried Rice</h2>
              </div>
            </button>
          </div>
        </div>

        <div className="container-cardproduct">
          <div className="container-product">
            {currentProducts.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <img src={item.image} alt="Image-Menu" className="image-product" />
                  <h1 className="title-product">{item.title}</h1>
                  <p className="deskripsi-product">{item.berat}</p>
                  <h2 className="harga-product">{item.harga}</h2>
                  <div className="container-jumlah">
                    <div className="container-jumlah2">
                      <button className="button-kurang" onClick={() => minusProduct(item.id,item.title)}>
                        -
                      </button>
                      <p className="jumlah-product">{productCount[item.id] || 0}</p>
                      <button className="button-tambah" onClick={() => plusProduct(item.id,item.title)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
