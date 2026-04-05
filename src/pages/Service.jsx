import '../css/service.css';
import imageservice1 from '../assets/image-service/image-service1.jpeg';
import imageservice2 from '../assets/image-service/image-service2.jpeg';
import imageservice3 from '../assets/image-service/image-service3.jpeg';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Service() {

    useEffect(() => {
        AOS.init({
            duration : 1000, //Durasi Animasi
            once : true
        });
    },[]);

    return(
        <div>
            <div className="container-servicesection">
                <h5 className="smalltitle-servicesection">Our Service</h5>
                <h1 className="maintitle-servicesection">How Does It Work ?</h1>
                <div className="container-mainservice">
                    <div className="service1">
                        <div className="container-imageservice1" data-aos="flip-left">
                            <img src={imageservice1} alt="Image-service1" className="image-service1" />
                        </div>
                        <h2 className="title-service1">Easy To Order</h2>
                        <div className="container-paragrafservice1">
                            <p className="paragraf-service1">You only need a few steps in ordering food.</p>
                        </div>
                    </div>

                    <div className="service2">
                        <div className="container-imageservice2" data-aos="flip-left">
                            <img src={imageservice2} alt="Image-service2" className="image-service2"/>
                        </div>
                        <h2 className="title-service2">Fastest Delivery</h2>
                        <div className="container-paragrafservice2">
                            <p className="paragraf-service2">Delivery that is always ontime even faster.</p>
                        </div>
                    </div>

                    <div className="service3">
                        <div className="container-imageservice3" data-aos="flip-left">
                            <img src={imageservice3} alt="Image-service3" className="image-service3" />
                        </div>
                        <h2 className="title-service3">Best Quality</h2>
                        <div className="container-paragrafservice3">
                            <p className="paragraf-service3">Not only fast for us quality is also number one.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}