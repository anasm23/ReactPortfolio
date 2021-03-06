import React from "react";
import Project from "../components/Project";
import Container from "../components/Container";


const projects = [
    {
        id: 1,
        title: "Employee Directory",
        desc: "Using React, a sample database was created using the RandomUserGenerator API to create an employee database.",
        launch: 'https://enigmatic-island-98485.herokuapp.com/',
        github: 'https://github.com/anasm23/empdirect/tree/master',
        image: "https://raw.githubusercontent.com/anasm23/EmployeeDirectory/main/empdirect/Assets/ReactApp.gif"
    
    },
    {
        id: 2,
        title: "Fitness Tracker",
        desc: "Using MongoDB and Express routes, the Fitness Tracker app creates a workout dashboard visulaizing progress made from workouts.",
        launch: 'https://sheltered-citadel-62771.herokuapp.com/exercise',
        github: 'https://github.com/anasm23/FitnessTracker',
        image: "https://github.com/anasm23/FitnessTracker/raw/main/assets/gif.gif"
    },
    {
        id: 3,
        title: "Google Books Search",
        desc: "Google books search is an app used to find any book on google. Use this app to find your next favorite title!",
        launch: 'https://fathomless-falls-28848.herokuapp.com/',
        github: 'https://github.com/anasm23/GoogleBooksSearch',
        image: "https://github.com/anasm23/GoogleBooksSearch/blob/main/assets/Googlebooks.gif?raw=true"
    },
    {
        id: 4,
        title: "Covid Tracker",
        desc: "The covid tracker app is used to find Covid statistics such as positive cases, hospitalizations, and more! ",
        launch: 'https://project2gwu.herokuapp.com/',
        github: 'https://github.com/anasm23/CovidTracker',
        image: "https://raw.githubusercontent.com/anasm23/CovidTracker/master/Assets/Screenshot3.PNG"
    },
    {
        id: 5,
        title: "Budget App",
        desc: "Progressive web application enabling users to manage expenses by adding or subtracting funds, both offline and online.",
        launch: '​pacific-cove-59943.herokuapp.com',
        github: 'https://github.com/anasm23/BudgetApp',
        image: "https://github.com/anasm23/BudgetApp/blob/main/assets/gif.gif?raw=true"
    },
    {
        id: 6,
        title: "Meet The New Neighbors!",
        desc: "The ‘Meet The New Neighbors’ App allows each participant to introduce themselves, and their family members to others within their community.",
        launch: 'murmuring-shore-40796.herokuapp.com/',
        github: 'https://github.com/anasm23/MeetTheNewNeighbors',
        image: "https://github.com/anasm23/MeetTheNewNeighbors/raw/master/client/public/images/main-new1.png"
    }
];

function Portfolio() {
    return (
        <div className="portfolio">
            <h1 className="jumbotron text-center">Heres a few of my Projects!</h1>
            <Container>
                <Project projects={projects} />
            </Container>
        </div>
    );
}

export default Portfolio;
