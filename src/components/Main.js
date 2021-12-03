import {AboutMe} from "./AboutMe";
import {Skills} from "./Skills";
import {Work} from "./Work";
import {ContactMe} from "./ContactMe";

export function Main() {
    return <main style={{zIndex: 1, fontFamily: "'Roboto Mono', monospace"}}>
        <AboutMe />
        <Skills />
        <ContactMe />
    </main>
};