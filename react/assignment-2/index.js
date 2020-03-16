/*global React*/
/*global ReactDOM*/

import React from 'react'

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: "Stopped", speed: 0 };
    }

    onStartOrStop = () => {
        this.setState(state => state.status === "Stopped" ? state.status = "Running" : state.status = "Stopped");
    }

    onAccelerate = () => {
        if (this.state.status !== "Stopped") {
            this.setState(state => state.speed += 10);
            this.displayStatusText();
        }
    }

    onApplyBrake = () => {
        if (this.state.speed >= 10) {
            this.setState(state => state.speed -= 10);
            this.displayStatusText();
        }
        if (this.state.speed === 10)
            this.setState(state => state.status = "Running");
    }

    displayStatusText = (input) => {
        this.setState(state => state.status = `Running with ${state.speed}kmph`);
    }


    render() {
        return (
            <div className="wrapper">
                <div className="header-buttons">
                    <span className="car-name">Car:{this.props.carId}</span>
                    <button onClick={CarsList.removeCarFromCarsList} className="cross-button">X</button>
                </div>
                <button onClick={this.onStartOrStop} className={this.state.status === "Stopped"?"start-button":"stop-button"}>{this.state.status === "Stopped"?"Start":"Stop"}</button>
                <p className="running-status">Status : {this.state.status}</p>
                <div className="footer-buttons">
                    <button onClick={this.onAccelerate} className="accelerate-button">Accelerate</button>
                    <button onClick={this.onApplyBrake} className="apply-break-button">Apply Break</button>
                </div>
            </div>
        );
    }
}

class CarsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsList: [],
            carIdsList: []
        };
    }

    addCarToCarsList = () => {
        this.state.carIdsList.push(carId);
    }

    removeCarFromCarsList = () => {
        alert(1);
    }

    renderCarsList = () => {
        carId = carId + 1;
        this.addCarToCarsList();
        this.state.carsList.push(<Car/>);
        console.log(this.state.carsList);
        return (
            <div className="new-car">
            {this.state.carsList}
            </div>);
    }

    render() {
        return (
            <div>
                <div className="add-car-button-container">
                    <button onClick={this.renderCarsList} id="addCarButton" className="add-car-button">Add Car</button>
                </div>
                {this.renderCarsList()}
            </div>
        );
    }
}

let carId = 1;

ReactDOM.render(<CarsList />, document.getElementById("root"));

export { CarsList, Car };
