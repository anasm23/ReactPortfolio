import React from "react";
import "./style.css";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {
    return (
        <div className="row row-cols-1 row-cols-sm-3 g-4">
            {props.projects.map(project => (
                <div className="card" key={project.id}>
                    <img src={project.image} className="card-img-top" alt="placeholder"></img>
                    <div className="card-body">
                        <h3 className="card-title">
                            {project.title}
                        </h3>
                        <p class="card-text">{project.desc}</p>
                    </div>
                    <div className="card-footer">
                    <div className="button-group">
                                <a href={project.launch} target="_blank" rel="noreferrer"><i
                                    class="fas fa-link fa-2x float-left"></i></a>
                                <a href={project.github} target="_blank" rel="noreferrer"><i
                                    class="fab fa-github fa-2x float-right"></i></a>
                    </div>

                    <div className="justify-content-between align-items-center">
                            <div className="button-group">
                                <a href={project.launch} target="_blank" rel="noreferrer"><i
                                    class="fas fa-link fa-2x float-left"></i></a>
                                <a href={project.github} target="_blank" rel="noreferrer"><i
                                    class="fab fa-github fa-2x float-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;