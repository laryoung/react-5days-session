import React, { Component } from 'react'

export default class Counter extends Component {
   
    state = {
        price: 40,
    }
//     constructor(props){
//        super(props);
//        this.state = {
//            price: 40,
//        }

//    }
   
    //     state = {
    //         count : 42
    //     }

    
    // handleIncrement(){
    //     this.setState({count: this.state.count+1})
    // }
    
    
   

    render() {
    
        return (
            <div>
               {/* <h2>{this.state.count}</h2> */}
                {/* <button onClick={()=> this.handleIncrement()}>Click</button> */}

                <h1>{this.state.price}</h1>                    
            </div>
        )
    }
}

