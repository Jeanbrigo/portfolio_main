import about from "../json/about.json";

export default function Header(props) {
  return (
      <links>
        <a class="link" href={about.github}>
          Github
        </a>
        <a class="link" href="https://www.linkedin.com/in/jean-brigonnet/">
          LinkedIn
        </a>
        <a class="link" href="mailto:jeanbrigo@gmail.com">
          Jeanbrigo@gmail.com
        </a>
        <a class="link" href="https://docs.google.com/document/d/1i0n53WSqUKMZKFKia7cXQcLDBMZhnse58n1NgdaXbCg/edit?usp=sharing" download>
          Download Resume
        </a>
      </links>
  );
}
