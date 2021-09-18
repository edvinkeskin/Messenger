import * as React from "react";
import Firebase from "./backend/firebase";

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
        const fire = new Firebase();
        let code = fire.send(this.state.value);
        this.setState({value: ""});
        alert(code);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <textarea maxLength= "700" cols= "40" wrap="hard"
                                  style={{ margin: "50px 15px 15px 0px",
                                      resize: "none", height: '15vh', fontSize: "25px"}} autoComplete="off"
                                  id="inputField" value={this.state.value}
                                  onChange={this.handleChange} />
                    </label>
                    <input type="submit" style={{ margin: "40px 8px 12px 16px",
                        height: "6.4vh", width: "20vh", fontSize: "20px"}} value="Send message" />
                </form>
            </div>
        );
    }
}

export default Input;