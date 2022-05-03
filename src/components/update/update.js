import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Update() {
  let history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [ID, setID] = useState(null);
  const sendDataToAPI = () => {
    axios
      .put(`https://624fc73957186bb955691940.mockapi.io/crud/${ID}`, {
        Name,
        Email,
      })
      .then(() => {
        history.push("/read");
      });
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={Email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Update
        </Button>
      </Form>
    </div>
  );
}
