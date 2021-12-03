import {Bubble} from "./Bubble";

const bubbles = [
    {
        type: "gifBubbleLeft",
        gif: "./vids/gameWatchDemo.gif",
        title: "Game Watch",
        roles: ["Backend", "Database"],
        tech: ["Node.js", "Sequelize", "Handlebars.js", "Axios", "Bcrypt"],
        liveSite: "https://lazy-afternoon-game-watch.herokuapp.com/",
        gitHub: "https://github.com/Revivedaniel/GameWatch",
        id: 1
    },
    {
        type: "gifBubbleRight",
        gif: "./vids/ESportsRoastDemo.gif",
        title: "E-Sports Roast",
        roles: ["Frontend Javascript", "Database"],
        tech: ["Materialize","FireBase","FireStore"],
        liveSite: "https://revivedaniel.github.io/ESportsRoast/",
        gitHub: "https://github.com/Revivedaniel/ESportsRoast",
        id: 2
    },
]

export function Work() {

    const handleWorkLink = (event) => {
        window.open(event.target.dataset.livesite, '_blank');
    }

    const handleGithub = (event) => {
        window.open(event.target.dataset.github, '_blank')
    }
    
    return <div id="work">
        <Bubble bubble={bubbles} handleWorkLink={handleWorkLink} handleGithub={handleGithub}/>
    </div>
};