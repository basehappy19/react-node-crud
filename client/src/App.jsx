import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Employee Information</h1>
        <div className="information">
          <form action="">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" name="name" className="form-control" placeholder="Enter Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input type="text" name="age" className="form-control" placeholder="Enter Age" />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input type="text" name="country" className="form-control" placeholder="Enter country" />
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position
              </label>
              <input type="text" name="position" className="form-control" placeholder="Enter position" />
            </div>
            <div className="mb-3">
              <label htmlFor="wage" className="form-label">
                Wage
              </label>
              <input type="number" name="wage" className="form-control" placeholder="Enter wage" />
            </div>
            <button className="btn btn-success">Add Employee</button>
          </form>
        </div>
        <hr />
        <div className="employees">
          <button className="btn btn-primary">Show employees</button>
        </div>
      </div>
    </>
  );
}

export default App;
