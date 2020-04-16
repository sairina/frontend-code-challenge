import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="col text-center">
          <h1>Yodlr Design Challenge</h1>
        </div>
      </div>
      <div className="row row-cols-4">
        <div className="col"></div>
        <div className="col text-center">
          <Link to="/signup" className="btn btn-primary font-weight-bold">Register</Link>
        </div>
        <div className="col text-center">
          <Link to="/admin" className="btn btn-primary font-weight-bold">Admin Page</Link>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
export default Home;
