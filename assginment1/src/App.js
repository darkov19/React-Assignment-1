import React, { Component } from "react";
import "./App.css";
import Box from "./Box/Box";

class App extends Component {
    state = {
        "First Name": "Viral",
        "Last Name": "Shastri",
        Age: 20,
        Gender: "Male",
    };

    setNewValue = event => {
        if (event.target.id === "1") {
            this.setState({
                "First Name": event.target.value,
            });
        } else if (event.target.id === "2") {
            this.setState({
                "Last Name": event.target.value,
            });
        } else if (event.target.id === "3") {
            this.setState({
                Age: event.target.value,
            });
        } else if (event.target.id === "4") {
            this.setState({
                Gender: event.target.value,
            });
        }
    };

    changeName = newName => {
        this.setState({
            "First Name": newName,
        });
    };

    changeGender = newGender => {
        this.setState({
            Gender: newGender,
        });
    };

    render() {
        return (
            <div className="App">
                <button
                    className="btn"
                    onClick={() => this.changeName("Viral S")}
                >
                    Change Name!
                </button>
                <button
                    className="btn"
                    onClick={this.changeGender.bind(this, "Female")}
                >
                    Change Gender!
                </button>
                <Box
                    content={Object.keys(this.state)[0]}
                    input={Object.values(this.state)[0]}
                    changed={this.setNewValue}
                    id="1"
                />
                <Box
                    content={Object.keys(this.state)[1]}
                    input={Object.values(this.state)[1]}
                    changed={this.setNewValue}
                    id="2"
                />
                <Box
                    content={Object.keys(this.state)[2]}
                    input={Object.values(this.state)[2]}
                    changed={this.setNewValue}
                    id="3"
                />
                <Box
                    content={Object.keys(this.state)[3]}
                    input={Object.values(this.state)[3]}
                    changed={this.setNewValue}
                    id="4"
                />
            </div>
        );
    }
}

export default App;
