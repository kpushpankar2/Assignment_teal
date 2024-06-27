import React from 'react';

const Editor = ({ setCode, code }) => {
    return (
        <div className=''>
            <textarea
                className="text-area-code-editor"
                value={code}
                spellCheck={false}
                onChange={(e) => setCode(e.target.value)}
            />
        </div>
    );
}

export default Editor;
