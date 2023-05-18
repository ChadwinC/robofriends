import { render } from "@testing-library/react";
import React from "react";

class ErrorBoundry extends React.Component{ //create a class with changing state
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
componentDidCatch(error,info){
    this.setState({hasError:true}) 
}

render(){// render info on DOM
    if (this.state.hasError){
     return <h1>Apologies for the inconvience, our IT team is looking into the issue.</h1>
    }
    
    return this.props.children;

 }
}

export default ErrorBoundry;
