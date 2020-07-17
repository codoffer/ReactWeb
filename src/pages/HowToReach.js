import React from 'react'
import WaysCard from './components/WaysCard';

const HowToReach = () => {
    return(
        <div className="mt-5 pt-4 mb-3 container">
            <h1>How to reach ranakpur</h1><hr />
            <iframe  width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Ranakpur+Jain+Temple,+Ranakpur,+Rajasthan&amp;aq=1&amp;oq=ranak&amp;sll=25.116106,73.472314&amp;sspn=0.0211,0.027595&amp;ie=UTF8&amp;hq=&amp;hnear=Ranakpur,+Pali,+Rajasthan&amp;ll=25.116106,73.472314&amp;spn=0.0211,0.027595&amp;t=m&amp;z=10&amp;output=embed"></iframe>
            <div className="row mt-5">
                <div className="col-sm">
                    <WaysCard title="By Train" line1="There is not direct train available for ranakpur,
                        You can reach here choosing nearest station."
                        line2="Nearest station is Falna (Pali)"
                        line3="Distance to Falna from"
                        line4="Jodhpur - 170 kms || 
                        Jaipur - 341 kms"
                        line5="By Road Falna to Ranakpur Temple is 34kms(36mins)"
                        >
                    </WaysCard>
                </div>
                <div className="col-sm">
                    <WaysCard title="By Air" line1="Near by Airport - Maharana Pratap Airport, Udaipur."
                        line2="Daily Indian Airlines flights connect Udaipur with Jodhpur, Jaipur, Mumbai and Delhi."
                        line3="Udaipur to Ranakpur Jain Temple Distance is 93kms (1hrs 51min)"
                    
                        >
                     </WaysCard>
                </div>
                <div className="col-sm">
                    <WaysCard title="By Road" line1="Road Distance from"
                        line2="Udaipur City to Ranakpur Temple is 93kms ( 2hrs )"
                        line3="Jodhpur City to Ranakpur Temple is 156kms ( 3hrs )"
                        line4="Jaipur to Ranakpur Temple is 357kms ( 5hrs )"
                    
                        >
                    </WaysCard>
                </div>
            </div>
        </div>
    );
}


export default HowToReach