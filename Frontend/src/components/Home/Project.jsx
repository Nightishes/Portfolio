import getProjects from './assets/data/Data';
import './assets/project.css'

function Project() {
  const projectList =getProjects().map((project)=>
  <div className='card-project' key={project.id}>
    <img className='image-project' key={project.image} src={project.image} alt=''></img>
    <div className='text-project'>
      <p key={project.name}>{project.name}</p>
      <p className='description-project' key={project.description}>{project.description}</p>
      <ul className="tags-project">
          {project.tags.map((tag)=>
          (<ol className="tag-project" key={tag}>{tag}</ol>))}
        </ul>
    </div>
    
  </div>
  )

    return (
        <>
        <ul className='projects-list'>{projectList}</ul>
        </>
    );
  }
  
export default Project;