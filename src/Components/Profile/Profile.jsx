import React from "react";
import Card from "react-bootstrap/Card";

export default function Profile({ userData }) {
  return (
    <>
      {userData ? (
        <Card className='bg-secondary text-center m-auto py-5 my-5 '>
          <i className='fa-solid fa-user fa-9x'></i>
          <Card.Body>
            <Card.Title>Profile</Card.Title>

            <h2>
              Name: {userData.first_name} {userData.last_name}
            </h2>
            <h2>Age: {userData.age}</h2>
            <h2> Email: {userData.email}</h2>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </>
  );
}
