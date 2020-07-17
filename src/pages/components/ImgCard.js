import React from 'react'

const ImgCard = ({image}) => {
    return(
        
            <div >
                <img className="img-thumbnail" src={image} alt="Lights" style={{width:"150px",width:"90%"}} />
            </div>
            
        
    )
}

export default ImgCard