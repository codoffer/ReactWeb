import React from 'react'
import ImgCard from './components/ImgCard';
import img2 from '../../src/images/2.jpg'
import img3 from '../../src/images/3.jpg'
import img4 from '../../src/images/4.jpg'
import img5 from '../../src/images/5.jpg'
import img6 from '../../src/images/6.jpg'
import img7 from '../../src/images/7.jpg'
import img8 from '../../src/images/8.jpg'
import img9 from '../../src/images/9.jpg'
import img10 from '../../src/images/10.jpg'
import img11 from '../../src/images/11.jpg'
import img12 from '../../src/images/12.jpg'
import img13 from '../../src/images/13.jpg'

const Gallery = () => {
    return(
        <div className="mt-5 pt-4 container">
            <h1>Photos</h1><hr />
            <div className="row">
                <div className="col-xs-2">
                    <ImgCard image={img5}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img2}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img3}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img4}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img6}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img7}></ImgCard>
                </div>           
                
            </div>
            <div className="row">
                <div className="col-xs-2">
                    <ImgCard image={img8}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img9}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img10}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img11}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img12}></ImgCard>
                </div>
                <div className="col-xs-2">
                     <ImgCard image={img13}></ImgCard>
                </div>           
                
            </div>
        </div>
    );
}


export default Gallery