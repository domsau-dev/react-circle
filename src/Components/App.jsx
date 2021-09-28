import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {color: "green"}
    }
    render() {
        return (<div className="circle" style={{backgroundColor:this.state.color}}>
        <button onClick={this.changeColor}>Change color</button>
        </div>);
    }

    changeColor = () => {
        if (this.state.color === "green") {
            this.setState( {
                color: "red",
            });
        } else {
            this.setState( {
                color: "green",
            });
        }
    }
}


export default App;