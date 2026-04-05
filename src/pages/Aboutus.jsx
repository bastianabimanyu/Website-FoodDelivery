import "../css/aboutus.css";
import imageaboutus1 from "../assets/image-aboutus/image-aboutussection.png";
import imageaboutus2 from "../assets/image-aboutus/image-aboutus2.png";
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function Aboutus() {
    useEffect(() => {
        AOS.init({
            duration : 1000, //Durasi Animasi
            once : true
        });
    },[]);

    const [index,setIndex] = useState(0);

    const nextSlide = () => {
        if (index < 1) {
            setIndex(index + 1);
        }
    }

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

  return (
    <>
        <div className="container-aboutussection1">
        <h3 className="title-aboutsection">Our Reviews</h3>
        <div className="container-aboutussection">
            <div className="container-aboutusleft">
            <div className="container-imageaboutus" data-aos="zoom-in-up">
                <img
                src={imageaboutus1}
                alt="image-aboutus"
                className="imageaboutus"
                />
                <div className="background-imageaboutsus"></div>
            </div>
            </div>

            <div className="container-aboutusright" data-aos="fade-left">
            <h1 className="title-testimony">What They Say ?</h1>
            <div className="maincontainer-testimony">
                <div className="maincontainer-testimony2" style={{ transform:`translateX(-${index * 100}%)` }}>
                    <div className="container-testimony">
                        <div className="header-testimony">
                            <h3 className="title-headertestimony">Gu Hawkins</h3>
                            <div className="header-testimony2">
                                <div className="containerstar-testimony">
                                <button className="button-rating">
                                    <i class="fa-solid fa-star" style={{ color:'yellow' }}></i>
                                </button>
                                <button className="button-rating">
                                    <i class="fa-solid fa-star" style={{ color:'yellow' }}></i>
                                </button>
                                <button className="button-rating">
                                    <i class="fa-solid fa-star" style={{ color:'yellow' }}></i>
                                </button>
                                <button className="button-rating">
                                    <i class="fa-solid fa-star" style={{ color:'yellow' }}></i>
                                </button>
                                <button className="button-rating">
                                    <i class="fa-solid fa-star"></i>
                                </button>
                                </div>
                                <p className="rating-testimony">4</p>
                            </div>
                        </div>
                        <div className="container-texttestimony">
                            <p className="text-testimony">
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                            repellendus tenetur nihil porro beatae et eaque molestias neque
                            incidunt quae?"
                            </p>
                        </div>
                    </div>

                    <div className="container-testimony">
                        <div className="header-testimony">
                            <h3 className="title-headertestimony">Bambang Pamungkas</h3>
                            <div className="header-testimony2">
                                <div className="containerstar-testimony">
                                <button className="button-rating">
                                    <i class="fa-solid fa-star" style={{ color:'yellow' }}></i>
                                </button>
                                <button className="button-rating">
                                    <i class="fa-solid fa-star" style={{ color:'yellow' }}></i>
                                </button>
                                <button className="button-rating">
                                    <i class="fa-solid fa-star" style={{ color:'yellow' }}></i>
                                </button>
                                <button className="button-rating">
                                    <i class="fa-solid fa-star" style={{ color:'yellow' }}></i>
                                </button>
                                <button className="button-rating">
                                    <i class="fa-solid fa-star" style={{ color:'yellow' }}   ></i>
                                </button>
                                </div>
                                <p className="rating-testimony">5</p>
                            </div>
                        </div>
                        <div className="container-texttestimony">
                            <p className="text-testimony">
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                            repellendus tenetur nihil porro beatae et eaque molestias neque
                            incidunt quae?"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="button-lefttestimony" onClick={prevSlide}>
                <i class="fa-solid fa-angle-left"></i>
            </button>
            <button className="button-righttestimony" onClick={nextSlide}>
                <i class="fa-solid fa-angle-right"></i>
            </button>
            </div>
        </div>
        </div>


        <div className="container-aboutus2">
            <div className="container-aboutussection2">
                <div className="container-aboutussection22">
                    <div className="container-aboutus22left"  data-aos="fade-up-right">
                        <h3 className="minititle-aboutus2">Our Application</h3>
                        <h1 className="title-aboutus2">Simple Way To Order Your Food</h1>
                        <p className="paragraf-aboutus2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, delectus optio. Perspiciatis sint veritatis et distinctio quod. Quae, velit accusamus!</p>

                        <button className="button-aboutus2">Get The App</button>
                    </div>

                    
                    <img src={imageaboutus2} alt="image-aboutus2" className="image-aboutus2" />
                </div>
            </div>
        </div>
    </>
  );
}
