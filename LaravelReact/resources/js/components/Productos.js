import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Productos extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Productos en Stock</div>

                            <div className="card-body">Nuevos Productos</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('productos')) {
    ReactDOM.render(<Productos />, document.getElementById('productos'));
}
