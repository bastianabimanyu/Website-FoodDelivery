import { useEffect } from 'react';
import imagehero from '../assets/image-home/image-herosection.png'; 
import '../css/home.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function Home() {

    useEffect(() => {
        AOS.init({
            duration : 1000, //Durasi Animasi
            once : true
        });
    },[]);

    return(
        <div>
            <div className="container-herosection">
                <div className="container-heroleft" data-aos="fade-right">
                    <h1 className='title-herosection'>Enjoy Your Delicious <span style={{ color:'orange' }}>Food</span></h1>
                    <p className='paragraf-herosection'>We will fill your tummy with delicious food with fast delivery</p>
                    <div className="container-buttonhero">
                        <button>Order Now</button>
                    </div>

                    <div className="container-medsoshero">
                        <i className="fa-brands fa-twitter twitter-hero"></i>
                        <i className="fa-brands fa-square-instagram instagram-hero"></i>
                        <i className="fa-brands fa-facebook-f facebook-hero"></i>
                        <i className="fa-brands fa-google-plus-g googleplus-hero"></i>
                    </div>
                </div>

                <div className="container-heroright" data-aos="fade-left">
                    <div className="container-heroright2">
                        <div className="container-imagehero">
                            <div className="container-imagehero2">
                                <img src={imagehero} alt="Image-hero" className='image-hero' />
                            </div>
                            <div className="containerphonenumber" data-aos="zoom-out-right">
                                <i className="fa-solid fa-phone phonenumber"></i>
                                <div className="container-number">
                                    <p className='paragraf1-number'>Phone Number :</p>
                                    <p className='paragraf2-number'>+6285898758675</p>
                                </div>
                            </div>
                            <div className="container-commenthero" data-aos="zoom-out-left">
                                <p className='paragraf-commenthero'><span style={{ color:'orange' }}>"</span> Fast Delivery And Friendly Staff.The Food Was Hot And Very Tasty<span style={{ color:'orange' }}>"</span></p>
                            </div>
                            <div className="container-backgroundimagehero"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}