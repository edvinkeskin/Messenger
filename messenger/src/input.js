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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <textarea maxLength= "700" cols= "50" wrap="hard"
                                  style={{ margin: "60px 15px 15px 0px",
                                      resize: "none", height: '10vh', fontSize: "25px"}} autoComplete="off"
                                  id="inputField" value={this.state.value}
                                  onChange={this.handleChange} />
                    </label>
                    <input type="submit" style={{
                        height: "4vh", width: "20vh", fontSize: "20px"}} value="Send message" />
                </form>
            </div>
        );
    }
}

export default Input;