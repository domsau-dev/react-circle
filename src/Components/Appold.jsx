import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {buttonNumber: Number(localStorage.getItem("number")) > 0  ? Number(localStorage.getItem("number")) : 3};
    }
    render() {
        return (<button onClick={this.changeNumber}>{this.state.buttonNumber + "X"}</button>);
    }

    changeNumber = () => {
        if (this.state.buttonNumber === 3) {
            this.setState({
                buttonNumber: 6
            });
            
        } else {
            this.setState({
                buttonNumber: Number(localStorage.getItem("number")) + 3
            });
            localStorage.setItem("number", this.state.buttonNumber);
        }        
        
    }
}

export default App;