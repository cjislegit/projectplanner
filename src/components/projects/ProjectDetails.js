import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id} </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo,
            excepturi voluptates assumenda odio architecto, cupiditate iure
            aspernatur laborum officiis, consequatur enim ducimus vel dolores
            quo! Rerum quidem aperiam officiis.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by CJ</div>
          <div>23rd of May</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
