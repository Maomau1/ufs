import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({name, id}) {
  console.log("ProjectCard rendering")
  console.log(name,id)
  return (
    <article>
      <h2>{name}</h2>
      {<Link to={`/project/${id}`}>View Details</Link>}
    </article>
  )
}

export default ProjectCard