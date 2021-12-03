export function Bubble(props) {
  return (
    <div className="bubbles">
      {props.bubble.map((bub) => {
        return (
          <div className="workBubble" key={bub.id} id={bub.type}>
            <div
              className={bub.type}
              style={{
                backgroundImage: `url(${bub.gif})`,
                borderRadius: "50%",
                backgroundPosition: "center",
              }}
              data-livesite={bub.liveSite}
              onClick={props.handleWorkLink}
            >
              {bub.text}
            </div>
            <div className="titleRoles">
              <span className="workTitle">{bub.title}</span>
              <span>
                Role:
                <span>
                  {bub.roles.map((role, i) => {
                    return <li key={i}>{role}</li>;
                  })}
                </span>
              </span>
            </div>
            <div
              className="gitHubBubble"
              data-github={bub.gitHub}
              onClick={props.handleGithub}
              style={{ backgroundImage: "url(./githubLogo.png)" }}
            ></div>
            <div className="tech">
              {bub.tech.map((tech, i) => {
                return <li key={i}>{tech}</li>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
