import React from 'react'

const Card = ({title,desc,imgsrc}) => {
    return(
        <div className="row mt-3 p-3">
            <div className="col col-lg-3">
                <img src={imgsrc} className="img-thumbnail"></img>
            </div>        
            <div className="col col-lg-9">
                <h3 className="card-title">{title}</h3>
                <h6 className="card-description">{desc}</h6>
                <div className="text-right mr-5 mt-5">  
                    <button className="btn btn-light">More Info</button>
                </div>
            </div>
            <hr></hr>
             
            
                  
        </div>
    )
}

export default Card