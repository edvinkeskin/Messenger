import * as React from "react";
import FirebaseHandler from "./backend/firebase";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        if(event.target.value.length === 700) {
            alert("maximum message length reached");
        }
    }

    handleSubmit(event) {
        const fire = new FirebaseHandler();
        fire.writeUserData("xxx", "edvin", "email", this.state.value);
        this.setState({value: ""});
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div style={{display: "flex", 'flex-direction': "row" }}>
                        <label>
                        <textarea maxLength= "700"
                                  cols= "50"
                                  rows= "2"
                                  style={{'word-wrap': 'break-word', 'border-radius': "25px", margin: "0px 25px 0px 0px", padding: "10px 20px 0px 20px",
                                      resize: "none", fontSize: "25px", outline: "none"}}
                                  autoComplete="off"
                                  id="inputField" value={this.state.value}
                                  onChange={this.handleChange} />
                        </label>
                        <input type="submit" style={{'border-radius': "25px",
                            height: "5.7vh", width: "30vh", fontSize: "25px", wrap:"hard"}} value="Send" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Input;