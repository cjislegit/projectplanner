import React from 'react';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          //projects && checks to see if there is any projects before running the codes
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};
export default ProjectList;
