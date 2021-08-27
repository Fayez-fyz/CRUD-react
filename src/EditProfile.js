import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProfileContext from "./ProfileContext";

export default function EditProfile(props) {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [office, SetOffice] = useState("");
  const [age, SetAge] = useState("");
  const [startDate, SetStartDate] = useState("");
  const [salery, SetSalery] = useState("");

  const profileContext = useContext(ProfileContext);
  const history = useHistory();

  useEffect(() => {
    console.log(props);
    let ProfileData = profileContext.profileList[props.match.params.id - 1];

    SetUsername(ProfileData.username);
    SetEmail(ProfileData.email);
    SetOffice(ProfileData.office);
    SetAge(ProfileData.age);
    SetStartDate(ProfileData.startDate);
    SetSalery(ProfileData.salery);
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    let ProfileData = { username, email, office, age, startDate, salery };
    profileContext.profileList[props.match.params.id - 1] = ProfileData;
    profileContext.setProfileList([...profileContext.profileList]);
    history.push("/profile");
  };
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
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
                value="Update"
                className="btn-primary btn-block"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
