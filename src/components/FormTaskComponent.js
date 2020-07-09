import React, { Component } from 'react';

class FormTaskComponent extends Component {


    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }

        this.handleInput =  this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput = (event) => {      
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onAdd(this.state);
    }

    render(){
        return (
            <div className="card"> 
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" 
                            className="form-control" placeholder="Title"
                            onChange={this.handleInput}
                                 />
                    </div>
                    <div className="form-group">
                        <label>Responsible</label>
                        <input type="text" name="responsible" 
                            className="form-control" placeholder="Responsible"
                            onChange={this.handleInput}
                             />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" name="description" 
                            className="form-control" placeholder="Description"
                            onChange={this.handleInput}
                             />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <select id="inputState" className="form-control" onChange={this.handleInput}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button className="btn btn-success">Save</button>
                </form>
            </div>
            
        )
    }

}

export default FormTaskComponent;