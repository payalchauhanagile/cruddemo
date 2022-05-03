import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://624fc73957186bb955691940.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, Name, Email) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
  };

  const getData = () => {
    axios
      .get(`https://624fc73957186bb955691940.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://624fc73957186bb955691940.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.Name}</Table.Cell>
                <Table.Cell>{data.Email}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button
                      color="green"
                      onClick={() => setData(data.id, data.Name, data.Email)}
                    >
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
