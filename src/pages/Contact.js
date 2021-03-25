import React from "react";
import Container from "../components/Container";

function Contact() {
    return (
        <div className="contact" style={{ minHeight: '650px', textAlign: 'center'}}>
            <h1 className="jumbotron text-center">Feel free to contact me: </h1>
            <Container>
                    <li className="lin">Message me on <a href="https://www.linkedin.com/in/muhammad-a-932888153/">Linkedin</a></li>
                    <li className="git">Find me on <a href="https://github.com/anasm23">GitHub</a></li>
                    <li className="eeml">Send me an <a href="mailto: muhammadanas112@gmail.com">Email</a></li>
            </Container> </div>
        
    );
}

export default Contact;