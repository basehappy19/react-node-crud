/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");
  const [newWage, setNewWage] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
    });
  };

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage
        }
      ])
      })
    }


    const updateEmployeeWage = (id) => {
      Axios.put('http://localhost:3001/update', { wage: newWage, id: id}).then((response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id ? {
              id: val.id,
              name: val.name,
              age: val.age,
              country: val.country,
              position: val.position,
              wage: newWage
            } : val;
          })
        )
      })
    }

    const deleteEmployee = (id) => {
      Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
        setEmployeeList(
          employeeList.filter((val) => {
            return val.id != id;
          })
        )
      })
    }

  return (
    <>
      <div className="container">
        <h1>Employee Information</h1>
        <div className="information">
          <form action="">
            <div className="text-start">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  className="form-control"
                  placeholder="Enter Age"
                  onChange={(event) => {
                    setAge(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  placeholder="Enter country"
                  onChange={(event) => {
                    setCountry(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="position" className="form-label">
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  className="form-control"
                  placeholder="Enter position"
                  onChange={(event) => {
                    setPosition(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="wage" className="form-label">
                  Wage
                </label>
                <input
                  type="number"
                  name="wage"
                  className="form-control"
                  placeholder="Enter wage"
                  onChange={(event) => {
                    setWage(event.target.value);
                  }}
                />
              </div>
            </div>
            <button className="btn btn-success" onClick={addEmployee}>Add Employee</button>
          </form>
        </div>
        <hr />
        <div className="employees">
          <button className="btn btn-primary" onClick={getEmployees}>
            Show employees
          </button>
          <br />
          <br />
          {employeeList.map((val, key) => {
            return (
              <div className="employee card text-start">
                <div className="card-body">
                  <p className="card-text">Name: {val.name}</p>
                  <p className="card-text">Age: {val.age}</p>
                  <p className="card-text">Country: {val.country}</p>
                  <p className="card-text">Position: {val.position}</p>
                  <p className="card-text">Wage: {val.wage}</p>
                  <div className="d-flex">
                    <input type="number" className="form-control" style={{width: "300px"}}
                    placeholder="...." onChange={(event) => {
                      setNewWage(event.target.value)
                    }} />
                    <button className="btn btn-warning" onClick={() => { updateEmployeeWage(val.id) }}>Update</button>
                    <button className="btn btn-danger" onClick={() => { deleteEmployee(val.id) }}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
