import React from 'react';
import ProjectInfo from './ProjectInfo'
import {useParams} from "react-router";

function ProjectsInfo() {
  let {id} = useParams();
  return (
    <div  className="d-flex flex-column">
      <ProjectInfo id={id} />
    </div >
  );
}

export default ProjectsInfo;