import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ProfileContext from "./ProfileContext";

export default function CreateProfile(props) {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [office, SetOffice] = useState("");
  const [age, SetAge] = useState("");
  const [startDate, SetStartDate] = useState("");
  const [salery, SetSalery] = useState("");

  const profileContext = useContext(ProfileContext);
  const history = useHistory();

  let handleSubmit = (e) => {
    e.preventDefault();
    let profileData = { username, email, office, age, startDate, salery };
    profileContext.setProfileList([...profileContext.profileList, profileData]);
    history.push("/profile");
  };
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
        <h1 class="h3 mb-0 text-gray-800">Create Profile</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => {
                  SetUsername(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type="text"
                className="form-control"
                value={office}
                onChange={(e) => {
                  SetOffice(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                type="text"
                className="form-control"
                value={age}
                onChange={(e) => {
                  SetAge(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label>Start Date</label>
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => {
                  SetStartDate(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label>Salery</label>
              <input
                type="number"
                className="form-control"
                value={salery}
                onChange={(e) => {
                  SetSalery(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12 my-2">
              <input
                type="submit"
                value="Submit"
                className="btn-primary btn-block"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
