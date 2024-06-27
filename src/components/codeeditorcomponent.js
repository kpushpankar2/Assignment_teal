import React, { useState } from 'react';
import Editor from './textareacomponent';
import Header from './headercomponent';
import HighlightCode from './codehighlightcomponent';

const CodeEditor = () => {
    const initialCode = `
  import React from "react";
  import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello Pushpankar</h1>
    <h1>Email:pushpankarsingh786@gmail.com</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
    `;
    const [code, setCode] = useState(initialCode);

    return (
        <>
            <Header />
            <div className="code-container">
                <HighlightCode code={code} />
                <Editor 
                    code={code}
                    setCode={setCode}
                />
            </div>
        </>
    );
}

export default CodeEditor;
