import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
<<<<<<< HEAD
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
=======
    return <div>Reveal Answer</div>;
>>>>>>> origin/task-forms
}
