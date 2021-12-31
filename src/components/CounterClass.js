import React from "react";

class CounterClass extends React.Components{
    constructor(){
        super()
        this.state={
            count:1,
        }
    }
    printText() {
    let newCount=this.state.count+1;
        this.setState({count: newCount});
    }
    render(){
        return(
            <>
            <hi>{count}</hi>
            <button onClick={this.printText} className="btn btn-success">
                Inc Count
            </button>
                
            </>
        );


    }
}