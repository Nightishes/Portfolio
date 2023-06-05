import getProjects from './assets/data/Data';
import Github from './assets/images/cat-github.webp'
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
      <div className='links-project'>
        <a href={project.weblink} key={project.weblink} target='_blank' rel="noreferrer noopener"><button className='live-project'>Live server</button></a>
        <a href={project.github} key={project.github} target='_blank' rel="noreferrer noopener"><img src={Github} alt=''></img></a>
      </div>
     
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