import about from "../json/about.json";

export default function Bio(props){
    return <div class="bio">
        <div class="logoAndName">
        <img class="logo" src={about.image}/>
        <h1>{about.name}</h1>
        </div>
        <div class="biontech">
            <p class="about">{about.bio}</p>
            <img class="technologies" src={about.techstackline}/>
            <img class="technologiescube" src={about.techstack}/>
        </div>
    </div>
}