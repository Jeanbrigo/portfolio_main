import about from "../json/about.json";

export default function Header(props) {
  return (
      <links>
        <a class="link" target="_blank" href={about.github}>
          Github
        </a>
        <a class="link" target="_blank" href="https://www.linkedin.com/in/jean-brigonnet/">
          LinkedIn
        </a>
        <a class="link" target="_blank" href={`mailto:jeanbrigo@gmail.com?subject=${encodeURIComponent("Job Request for (Job Title & Company Here) ")}&body=${encodeURIComponent("Paste over with job description")}`}>Jeanbrigo@gmail.com</a>
        <a class="link" target="_blank" href="https://docs.google.com/document/d/1CLk3iCPIjFFHTLlfcWo_bA0oNm4mA8pXZ_LiN32N_Lg/edit?usp=sharing" download>
          Download Resume
        </a>
      </links>
  );
}
