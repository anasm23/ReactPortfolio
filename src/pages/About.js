import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Picture from "../img/picture.jpg";


function About() {
    return (
        <div className="about">
            <h1 className="jumbotron text-center">Get to know me:</h1>
            <Container>
                <Row>
                    <Col size="md-4">
                    <img className="avi" src={Picture}alt="placeholder"></img>
                    </Col>

                    <Col size="md-8">
                        <h1>Im Muhammad Anas. </h1>
                        <p>I am a full stack developer located in Northern Virginia. I have lived most of my life in NOVA but spent significant time in the Richmond and Norfolk areas.</p>
                        <p>As a student, I have indulged in Math and Science and spent some time taking Business courses. I earned my Bachelors of Science from Virginia Commonwealth University. </p>
                        <p>As a professional, I take great pride in my resourcefulness and Problem Solving. Leveraging my Full Stack Web Development certificate from George Washington University, to pursue a career in coding.</p>
                        <p>In my free time I keep up with sports, mainly basketball and football.</p>
                        <p>Otherwise, I keep myself entertained in different ways. Usually I stay up to date on the newest techonologies, laugh till my sides hurt watching funny videos, or hit the gym.</p>
            <p></p>
            <br></br>
        
                </Col>
                </Row>
                <Row>
                    <Col size="md-4">
                    <h3>Take a look at my Resume:</h3>
                    <p><a href="https://docs.google.com/document/d/1g4mkXaQ4mNd2Kb4721JL-mE50l340YV0BGg-_dG_fOw/edit?usp=sharing">Here</a></p>
                    
                        
                    </Col>
                    <Col size="md-4">
                    <h3>Programming Languages:</h3>
                    <p>HTML, CSS, JavaScript, C++</p>
                    <h3>Libraries and Databases:</h3>
                    <p>Node, React, JQuery, Express, mySQL, MongoDB, Mongoose, Bootstrap, Handlebars</p>
                    </Col>
                    <Col size="md-4">
                    <h3>Development Tools:</h3>
                    <p>GitHub, VS Code, Heroku, Agile</p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default About;