import about from "../json/about.json";

export default function Header(props) {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        <a href={about.github}>
          <div>Github</div>
        </a>
        <a href="https://www.linkedin.com/in/jean-brigonnet/">
          <div>LinkedIn</div>
        </a>
        <a href="">
          <div>CodeWars</div>
        </a>
        <a href="">
          <div>StackOverflow</div>
        </a>
      </div>
    </div>
  );
}
