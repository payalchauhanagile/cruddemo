import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Create() {
  let history = useHistory();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const sendDataToAPI = () => {
    axios
      .post(`https://624fc73957186bb955691940.mockapi.io/crud`, {
        Name,
        Email,
      })
      .then(() => {
        history.push("/read");
      });
  };
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
