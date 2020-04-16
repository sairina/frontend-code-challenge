import React, { useState, useEffect } from 'react';
// import YodlrApi from "./YodlrApi";
// import User from './User';

function Admin() {
  const [users, setUsers] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getUsers() {
      // let response = await YodlrApi.getUsers();
      // setUsers(response);
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getUsers();
  }, [users]);

  if (!infoLoaded) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="Admin">
      {/* <div className="Users">
        {users.map(u => <User key={u.id} user={u} />)}
      </div> */}
    </div>
  );
}

export default Admin;