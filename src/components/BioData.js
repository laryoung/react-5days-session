import React from 'react';

const BioData = (props) => {
        
        return(
            <div>
                <h1>Enter bio Data</h1>
                <div>
               <h2>Bio form</h2> 
              <button onClick={props.increaseStep}>Click</button>
                            
            </div>
            </div>
        )
    

}

export default BioData;
