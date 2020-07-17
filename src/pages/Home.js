import React from 'react'
import "../style.css"
import { Button } from 'reactstrap'
import home_banner from '../images/home_banner.jpg'
const Home = () => {
    return(
        <div className="container mt-5 pt-4">
            <h1>Ranakpur Jain Temple</h1>
            <img src={home_banner}
            alt="banner" className="img-fluid">
            </img>
            
            <p className="mt-4">
            Rajasthan is famous for its rich and prolific art treasures. Some of its architectural monuments are 
            considered among the best in the world. The Ranakpur Jain Temple excels them all as an exquisite work 
            of art and architecture. There are a number of beautiful and delicately carved sculptures in this 
            shrine which defy comparison. The temple is an eloquent testimony to India's cultural heritage, her 
            unique architecture and the vision and acumen of her past master artists.
            This temple is the realiation of the vision and endeavours of four great and devout seekers They 
            were Acharya Somasundatsuri Dharanashah, the Minister to Kumbha Rana, Rana Kumbha himself, and above
             all, Depa or Depaa, the architect who made the realisation of the dream possible.
            </p>
            <div className="text-right">
                <Button className="btn btn-light mb-4">More About Ranakpur Temple</Button>
            </div>
        </div>
    );
}


export default Home