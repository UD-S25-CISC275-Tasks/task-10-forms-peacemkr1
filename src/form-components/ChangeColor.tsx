import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "pink",
        "cyan",
        "yellow"
    ];
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((clr: string) => (
                <Form.Check
                    key={clr}
                    inline
                    type="radio"
                    label={clr}
                    name="colorOptions"
                    id={`color-${clr}`}
                    value={clr}
                    checked={color === clr}
                    onChange={() => {
                        setColor(clr);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    width: "fit-content"
                }}
            >
                {color}
            </div>
        </div>
    );
}
