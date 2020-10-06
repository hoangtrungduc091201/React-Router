import React, { Component } from 'react';
import { Redirect   } from "react-router-dom";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            day:"friday",
        }
    }
    isChange =(event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
            [name]:value
        });
    }
    isFileChange = (event) => {
        const file = event.target.files[0].name;
    
        this.setState({
            file:file
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        })
    }
    setValue = () =>{
        var values = "";
        values+="name :"+this.state.name;
        values+="/email :"+this.state.email;
        values+="/phone :"+this.state.phone;
        values+="/mess :"+this.state.mess;
        values+="/day :"+this.state.day;
        values+="/file :"+this.state.file;
        return values;
    }
    render() {
        if(this.state.isRedirect === true){
            console.log( this.setValue());
            return <Redirect to="/home" ></Redirect>
        }
        return (
            <div>
                <header className="masthead tintuc">
                <div className="container h-100">
                    <div className="row h-100">
                    <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                        <h1 className="mb-1 text-center">Contact page</h1>
                        </div>
                    </div>
                    </div>
                </div>
                </header>
                {/* begin contact */}
                <section className="page-section" id="contact">
                    <div className="container">
                        {/* Contact Section Heading*/}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                        {/* Icon Divider*/}
                        <hr />
                        {/* Contact Section Form*/}
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Name</label>
                                        <input onChange={(event) =>this.isChange(event)} name="name" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email Address</label>
                                        <input onChange={(event) =>this.isChange(event)} name="email" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label>
                                        <input onChange={(event) =>this.isChange(event)} name="phone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Message</label>
                                        <textarea onChange={(event) =>this.isChange(event)} name="mess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false" defaultValue={""} />
                                        <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group"  >
                                        <div className="form-group">
                                        <label >Days</label>
                                        <select value={this.state.day} className="form-control" name="day" id="day" onChange ={(event) => this.isChange(event)}>   
                                            <option value="monday">    monday</option>
                                            <option value="tuesday">    tuesday</option>
                                            <option value="wednesday">    wednesday</option>
                                            <option value="thursday">    thursday</option>
                                            <option value="friday">    friday</option>
                                            <option value="saturday">    saturday</option>
                                            <option value="sunday">    sunday</option>
                                            
                                        </select>
                                        </div>
                                        <div className="form-group">
                                          <label >File</label>
                                          <input onChange={(event) =>this.isFileChange(event)} type="file" className="form-control-file" name="file" id="file" placeholder="" aria-describedby="fileHelpId"/>

                                        </div>
                                    </div>
                                    <br />
                                    <div id="success" />
                                        <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" onClick={(event)=>this.submitForm(event )}>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end contact */}
            </div>
          
        );
    }
}

export default Contact;