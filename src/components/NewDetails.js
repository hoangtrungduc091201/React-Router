import React, { Component } from 'react';

class NewDetails extends Component {
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-1 text-center">News details</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin tintuc */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <img src="http://placehold.it/1600x700" className="img-fluid" alt="" />
                    <p className="lead text-center mt-5 mb-3">Major news</p>
                    <hr className="my-2"/>
                    <div className="mr-3 ml-3 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto dignissimos odit reiciendis cum! Incidunt architecto voluptates aspernatur dolorum mollitia saepe porro quia velit, nemo voluptatum, quaerat non eum quibusdam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto dignissimos odit reiciendis cum! Incidunt architecto voluptates aspernatur dolorum mollitia saepe porro quia velit, nemo voluptatum, quaerat non eum quibusdam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto dignissimos odit reiciendis cum! Incidunt architecto voluptates aspernatur dolorum mollitia saepe porro quia velit, nemo voluptatum, quaerat non eum quibusdam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto dignissimos odit reiciendis cum! Incidunt architecto voluptates aspernatur dolorum mollitia saepe porro quia velit, nemo voluptatum, quaerat non eum quibusdam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto dignissimos odit reiciendis cum! Incidunt architecto voluptates aspernatur dolorum mollitia saepe porro quia velit, nemo voluptatum, quaerat non eum quibusdam?</p> 
                    </div>
                    
                    </div>
                </div>
                <div className="container">
                    <div className="card border-primary mb-5">
                        <img className="card-img-top" src="http://placehold.it/900x300" alt="" />
                        <div className="card-body">
                            <h4 className="card-title text-center">Related news</h4>
                        </div>
                    </div>
                    <div className="card-deck">
                    <div className="card">
                        <a href="chitiettin.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
                        <div className="card-body">
                        <h4 className="card-title text-center">Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est, harum hic reiciendis provident laudantium. Magni dolor iusto reprehenderit iure illo illum impedit harum ut, perspiciatis, voluptatibus quam! Molestias, iure.</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href="chitiettin.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
                        <div className="card-body ">
                        <h4 className="card-title text-center">Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque, magnam vero eos provident autem saepe maiores consequuntur nam. Rerum quis enim adipisci esse nisi culpa, modi ducimus ut molestias.</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href="chitiettin.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
                        <div className="card-body">
                        <h4 className="card-title text-center">Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus soluta fuga tenetur error modi odio repellat esse voluptas ullam vel, eaque rerum! Consectetur odit praesentium eligendi minus excepturi! Eligendi.</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href="chitiettin.html"><img className="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
                        <div className="card-body">
                        <h4 className="card-title text-center">Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus soluta fuga tenetur error modi odio repellat esse voluptas ullam vel, eaque rerum! Consectetur odit praesentium eligendi minus excepturi! Eligendi.</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end tintuc */}
            </div>

        );
    }
}

export default NewDetails;