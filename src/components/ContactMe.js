export function ContactMe() {
  const style = {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  const buttonStyle = {
    backgroundColor: "#123412f",
    border: 0,
    marginTop: "2%",
    fontFamily: "'Roboto Mono', monospace",
    width: "100%",
    marginBottom: "5%"
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputs = [...event.target.parentElement.querySelectorAll("input")];
    const textarea = event.target.parentElement.querySelector("textarea");
    const response = await fetch(
      "https://stark-portfolio.herokuapp.com/api/messages/",
      {
        method: "POST",
        body: JSON.stringify({
          name: inputs[0].value,
          email: inputs[1].value,
          message: textarea.value
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    
    if(response.ok) {

      event.target.parentElement.style.display = "none";
    }
    
  };

  return (
    <div id="contactMe">
      <div style={style}>
        <span id="contactMeHeader"><span>Contact</span><p>Me</p></span>
        <form id="contactMeForm">
          <label for="name" className="formLabels">
            Name
          </label>
          <input type="text" id="nameInput" name="name" />
          <label for="email" className="formLabels">
            Email Address
          </label>
          <input type="text" id="emailInput" name="email" />
          <label for="message" className="formLabels">
            Message
          </label>
          <textarea id="messageInput" name="message" rows="4" cols="50" />
          <button onClick={handleSubmit} style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
}
