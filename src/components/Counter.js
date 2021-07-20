import React from 'react'
import BioData from './BioData'
import EduData from './EduData';

export default class Counter extends React.Component {
  
    state = {
        step: 1
    }
    
    //  getEmail = (e) => {
   //     this.setState({email:e.target.value})
    // }

    // const [price, setPrice] = useState(0);
//     constructor(props){
//        super(props);
//        this.state = {
//            price: 40,
//        }

//    }
   
    //     state = {
    //         count : 42
    //     }

    // Arrow function to increase the state property 
    // which is step by 1
    handleIncrement = () => (
        this.setState({step: this.state.step + 1})
    )
    
   
    

    render() {
        switch (this.state.step){
        case 1:
            return <BioData increaseStep={this.handleIncrement}/>;
        case 2:
            return <EduData />;
        default:
            return null;
        }
    }
}

