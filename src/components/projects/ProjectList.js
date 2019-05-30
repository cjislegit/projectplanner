import React from 'react';
import { Link } from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          //projects && checks to see if there is any projects before running the codes
          return (
            <Link to={'/project/' + project.id}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
};
export default ProjectList;
