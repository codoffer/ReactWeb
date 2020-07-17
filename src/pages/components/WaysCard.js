import React from 'react'
import "../../style.css"
const WaysCard =({line1,line2,line3,line4,line5,title,link}) => {
    return (
        <div className="card h-100">
            <div className="card-header p-1 text-center" id="cardheader">
                <h5>{title}</h5>
            </div>
            <div className="card-body">
                <p className="card-title">{line1}</p>
                <p className="card-text">{line2}</p>
                <p className="card-text">{line3}</p>
                <p className="card-text">{line4}</p>
                <p className="card-text">{line5}</p>
                
            </div>
        </div>
    )
}

export default WaysCard