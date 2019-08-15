import React from "react";
import ReactDOM from "react-dom";
import Time from "./Time/Time";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: "#2e5f73",
      selected: null,
      clicks: 0,
      show: true,
      timeCards: [
        { time: "06:30", isAvailable: false },
        { time: "07:00", isAvailable: false },
        { time: "07:30", isAvailable: false },
        { time: "08:00", isAvailable: false },
        { time: "08:30", isAvailable: false },
        { time: "09:00", isAvailable: false },
        { time: "09:30", isAvailable: true },
        { time: "10:00", isAvailable: true },
        { time: "10:30", isAvailable: true },
        { time: "11:00", isAvailable: true },
        { time: "11:30", isAvailable: true },
        { time: "12:00", isAvailable: true },
        { time: "12:30", isAvailable: true },
        { time: "13:00", isAvailable: true },
        { time: "13:30", isAvailable: true },
        { time: "14:00", isAvailable: true },
        { time: "14:30", isAvailable: true },
        { time: "15:00", isAvailable: true },
        { time: "15:30", isAvailable: true },
        { time: "16:00", isAvailable: true },
        { time: "16:30", isAvailable: true },
        { time: "17:00", isAvailable: true },
        { time: "17:30", isAvailable: true },
        { time: "18:00", isAvailable: true },
        { time: "18:30", isAvailable: true },
        { time: "19:00", isAvailable: true },
        { time: "19:30", isAvailable: true },
        { time: "20:00", isAvailable: true },
        { time: "20:30", isAvailable: true },
        { time: "21:00", isAvailable: false },
        { time: "21:30", isAvailable: false },
        { time: "22:00", isAvailable: false },
        { time: "22:30", isAvailable: false },
        { time: "23:00", isAvailable: false },
        { time: "23:30", isAvailable: false }
      ]
    };
  }

  render() {
    return (
      <div className="timeCards">
        <div className="col">
          {this.state.timeCards.map((value, key) => {
            return <Time key={key} item={value} />;
          })}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
