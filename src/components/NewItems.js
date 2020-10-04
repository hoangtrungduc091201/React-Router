import React, { Component } from 'react';

class NewItems extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-4">
                <div className="card-deck">
                    <div className="card">
                        <a href="chitiettin.html"><img className="card-img-top" src={this.props.img} alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.title}</h4>
                            <p className="card-text">{this.props.content}</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default NewItems;