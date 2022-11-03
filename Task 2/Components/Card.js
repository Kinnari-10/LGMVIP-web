import React from "react";
import "./Home.css";

export default function Card(props) {
  return (
    <div className="users">
      {props.users.map((user, id) => {
        const { avatar, first_name, last_name, email } = user;
        return (
          <div className="card" key={id}>
            <img src={avatar} alt="" className="avatar" />
            <div className="details">
              <h2>
                Name: {first_name} {last_name}
              </h2>
              <p>Email:{email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
