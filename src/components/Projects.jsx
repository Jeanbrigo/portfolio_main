import projects from "../json/projects.json";

export default function Projects() {
  return (
    <div class="project-container">
      {projects.map((project) => (
        <div class="project" key={project.name}>
          <h3>{project.name}</h3>
          <img src={project.image}/>
          <p>{project.description}</p>
          <p>{project.techUsed}</p>
          <div>
            <a target="_blank" href={project.github}>Github</a>
            <a target="_blank" href={project.live}>Live Site</a>
          </div>
        </div>
      ))}
    </div>
  );
}
