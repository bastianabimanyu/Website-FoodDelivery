import '../css/contact.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Contacts() {
    useEffect(() => {
        AOS.init({
            duration : 1000, //Durasi Animasi
            once : true
        });
    },[]);
    
    return(
        <div className='container-contactsection'>
            <div className="container-contact" data-aos="zoom-in">
                <h3 className='minititle-contact'>Our Subscribe</h3>
                <h1 className='title-contact'>Subscribe To Our Newsletter</h1>
                <div className="container-paragrafcontact">
                    <p className='paragraf-contact'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eaque quia suscipit veniam laudantium enim cupiditate odit magni consequuntur explicabo?</p>
                </div>
                
                <div className="container-inputcontact">
                    <div className="container-input">
                        <div className="container-input2">
                            <input type="email" name="inputemail" className='inputemail' id="inputemail" placeholder='Input Your Email Address'/>
                        </div>
                        <a href="#" className='button-contact'><button>Subscribe</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}