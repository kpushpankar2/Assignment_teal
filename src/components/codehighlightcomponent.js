import React from 'react';
import { Highlight } from "prism-react-renderer";

const HighlightCode = ({ code }) => {
  return (
    <Highlight
      code={code}
      language="js"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="pre">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default HighlightCode;
