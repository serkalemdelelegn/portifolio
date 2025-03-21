import React from 'react'
import emailjs from "@emailjs/browser";
import { RiBuilding2Line, RiHeadphoneLine, RiMailLine, RiMailOpenLine } from '@remixicon/react'
const ContactForm = () => {
    return (
        <section id="contact" className="contact-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        {/* <!-- START CONTACT FORM DESIGN AREA --> */}
                        <div className="col-lg-12">
                            <ul className="extra-skills wow fadeInUp delay-0-2s pb-30">
                                <li><i><RiBuilding2Line size={16} /></i>Addis Ababa, Ethiopia</li>
                                <li><i><RiHeadphoneLine size={16} /></i>Number:+251962042225</li>
                                <li><i><RiMailOpenLine size={16} /></i>Email:serkalemhailu16@gmail.com</li>
                            </ul>
                            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                                <form id="contactForm" className="contactForm" name="contactForm" action="assets/php/form-process.php" method="post">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Your name" required="" data-error="Please enter your Name" />
                                                <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="hello@email.com" required="" data-error="Please enter your Email" />
                                                <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Your Message</label>
                                                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message" required="" data-error="Please Write your Message"></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-0">
                                                <button type="submit" className="theme-btn">
                                                    Send Me Message <i><RiMailLine size={16} /></i>
                                                </button>
                                                <div id="msgSubmit" className="hidden"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- / END CONTACT FORM DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm