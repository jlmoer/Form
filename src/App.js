import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="p-5">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}






export default App;
