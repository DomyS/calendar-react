import React from "react";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      clicks: 0,
      show: true
    };
  }

  boxClick = e => {
    e.preventDefault(e);

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <div className="container">
        <li>
          <div
            className="col1"
            ref={div => {
              this.cel1 = div;
            }}
            style={
              this.state.isToggleOn
                ? {
                    backgroundColor: "#FFFFFF",
                    borderColor: "#949494",
                    color: "#2e5f73"
                  }
                : this.state.selected === this.cel1 &&
                  this.props.item.isAvailable
                ? {
                    backgroundColor: "#FFFFFF",
                    borderColor: "#949494",
                    color: "#2e5f73"
                  }
                : this.props.item.isAvailable
                ? { backgroundColor: "#2e5f73" }
                : { backgroundColor: null }
            }
            onClick={e => this.boxClick(e, this.cel1, this.state.isToggleOn)}
          >
            {this.props.item.time}
          </div>
        </li>
      </div>
    );
  }
}

export default Time;
