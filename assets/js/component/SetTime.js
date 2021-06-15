import React, { Component } from "react";

class SetTime extends Component {
    state = {
        start: null,
        end: null,
        fields: {},
        errors: {}
    };


    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Start
        if (!fields["timeStart"]) {
            formIsValid = false;
            errors["timeStart"] = "Cannot be empty";
        }
        //Start
        if (!fields["timeEnd"]) {
            formIsValid = false;
            errors["timeEnd"] = "Cannot be empty";
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(new Date(this.state.fields["timeStart"]).getTime() <=  new Date(this.state.fields["timeEnd"]).getTime()) {
            if (this.handleValidation()) {
                this.props.handleTime(this.state);
            } else {
                alert("Form has errors");
            }
        } else {
            alert("Start Date can not be greater than the end date. Please choose again!")
        }
    };

    handleChange = ( field,e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    };

    render() {
        return (
            <div className="form-filter mb-3">
                <form action="" id="form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-item">
                        <label htmlFor="start">Start</label>
                        <span className="error">{this.state.errors["timeStart"]}</span>
                        <input
                            type="date"
                            id="start"
                            className="form-control"
                            onChange={this.handleChange.bind(this, "timeStart")}
                            value={this.state.fields["timeStart"]}
                        />
                        
                    </div>
                    <div className="form-item">
                        <label htmlFor="end">End</label>
                        <span className="error">{this.state.errors["timeEnd"]}</span>
                        <input
                            type="date"
                            id="end"
                            className="form-control"
                            onChange={this.handleChange.bind(this, "timeEnd")}
                            value={this.state.fields["timeEnd"]}
                        />
                        
                    </div>
                    <div className="form-item">
                        <button className="btn btn-success" type="submit">
                            Sort
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SetTime;
