import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    const handleGain = () => {
        const parsed = parseInt(attemptsRequested);
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    };

    const handleUse = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={attemptsRequested}
                onChange={(e) => {
                    setAttemptsRequested(e.target.value);
                }}
            />
            <button onClick={handleUse} disabled={attemptsLeft === 0}>
                use
            </button>
            <button onClick={handleGain}>gain</button>
        </div>
    );
}
