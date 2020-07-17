import React from 'react'
import Card from './components/Card'
import imgsrc from '../images/parshuram-mahadev.jpg'
import imgsrc1 from '../images/golden-temple-falna.jpg'
import imgsrc2 from '../images/nimbo-ka-nath-falna.jpg'

const NearByAttraction = () => {
    return(
        <div className="mt-5 pt-4 mb-3 container">
            <h1>Near by Attraction Places</h1><hr></hr>
            <Card title="Parshuram Mahadev Temple" 
                imgsrc={imgsrc}
                desc="Parshuram Mahadev Temple is a Shiva temple in Desuri tehsil in Pali district of Rajasthan state in India.">
            </Card>
            <hr></hr>
            <Card title="Golden Temple - Falna" 
                imgsrc={imgsrc1}
                desc="Falna Ranakpur: The Jain Golden Temple in Falna, a small town in Rajasthan has a unique attraction worldwide.">
            </Card>
            <hr></hr>
            <Card title="Parshuram Mahadev Temple" 
                imgsrc={imgsrc2}
                desc="Parshuram Mahadev Temple is a Shiva temple in Desuri tehsil in Pali district of Rajasthan state in India.">
            </Card>
            
        </div>
        
    )
}

export default NearByAttraction