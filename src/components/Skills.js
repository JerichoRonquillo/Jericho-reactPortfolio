import {Stack} from "./Stack"
import {Languages} from "./Languages"

const stack = [
    {
        text: "MongoDB",
        id: 1
    },
    {
        text: "Express",
        id: 2
    },
    {
        text: "React",
        id: 3
    },
    {
        text: "Node",
        id: 4,
        last: true
    },
];

const languages = [
    {
        text: "HTML 5",
        id: 1
    },
    {
        text: "CSS 3",
        id: 2
    },
    {
        text: "JavaScript ES6+",
        id: 3
    },
    {
        text: "NoSQL",
        id: 4
    },
    {
        text: "SQL",
        id: 5
    },
    {
        text: "GIT",
        id: 6,
        last: true
    },
]

export function Skills() {
    return <div id="skills">
        <Languages langs={languages}/>
        <Stack stack={stack}/>
    </div>
};