import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(e) => {
                    setEditMode(e.target.checked);
                }}
            />
            {editMode ? (
                <Form.Group>
                    <Form.Label htmlFor="name-input">Name:</Form.Label>
                    <Form.Control
                        id="name-input"
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={(e) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                </Form.Group>
            ) : (
                <p>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            )}
        </div>
    );
}
