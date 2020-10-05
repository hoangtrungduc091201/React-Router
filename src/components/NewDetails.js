import React, { Component } from 'react';
import dl from './data.json'
import NewsRelated from './NewsRelated';
class NewDetails extends Component {
    render() {    
        let count=0;
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
                {
                    dl.map((value, key) => {
                        if(value.id == this.props.match.params.id){
                            return (
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <img src={value.img} className="img-fluid full-width" alt="" />
                                        <h3 className="lead text-center mt-5 mb-3">{value.title}</h3>
                                        <hr className="my-2"/>
                                        <div className="mr-3 ml-3 text-center">
                                            <p>{value.content}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
               
                <div className="container">
                    <div className="card border-primary mb-5">
                        
                        <div className="card-body">
                            <h4 className="card-title text-center">Related news</h4>
                        </div>
                    </div>
                    <div className="card-deck">
                        {dl.map((value, key ) => {
                            if(value.id != this.props.match.params.id){
                                if(count <=3 ){
                                    count++;
                                    return (
                                        <NewsRelated key ={key} newsId={value.id} img={value.img} title={value.title} content={value.content} />
                                    )
                                }
                            }
                        })}
                    </div>
                </div>
                {/* end tintuc */}
            </div>

        );
    }
}

export default NewDetails;