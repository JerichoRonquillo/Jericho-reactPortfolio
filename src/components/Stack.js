export function Stack(props) {
    return <div id="stack">
        {props.stack.map((stackItem) => {
            return <h2 key={stackItem.id} className="stackWord" id={stackItem.last ? "last": ""}><span className="stackCap">{stackItem.text.charAt(0)}</span>{stackItem.text.substring(1)}</h2>
        })}
    </div>
};