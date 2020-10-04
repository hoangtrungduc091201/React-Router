import React, { Component } from 'react';
import NewItems from './NewItems';
import dl from './data.json';
class News extends Component {
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                            <div className="header-content mx-auto">
                            <h1 className="mb-1 text-center">News list</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                </header>

                {/* begin tintuc */}
                    <div className="container mt-5 mb-3">
                        <div className="row">
                            {
                                dl.map((value, key) => {
                                    return (
                                        <NewItems key={key} newsId={value.id} img={value.img} title={value.title} content={value.content}></NewItems>
                                    )  
                                })
                            }
                        </div>
                    </div>
                 {/* end tintuc */}
            </div>
        );
    }
}

export default News;