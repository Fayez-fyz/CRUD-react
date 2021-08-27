import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProfileContext from "./ProfileContext";

export default function Profile() {
  const profileContext = useContext(ProfileContext);

  let handleDelete = (index) => {
    let confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      profileContext.profileList.splice(index - 1, 1);
      profileContext.setProfileList([...profileContext.profileList]);
    }
  };

  return (
    <>
      <h1 class="h3 mb-2 text-gray-800 my-4" >Profile</h1>
     
      <Link
        to="/create-profile"
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm my-2 "
      >
        <i class="fas fa-download fa-sm text--50 " ></i> Create Profile
      </Link>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Table</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {profileContext.profileList.map((obj, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{obj.username}</td>
                      <td>{obj.email}</td>
                      <td>{obj.office}</td>
                      <td>{obj.age}</td>
                      <td>{obj.startDate}</td>
                      <td>{obj.salery}</td>

                      <td>
                        <Link
                          to={`/profile/edit/${index + 1}`}
                          className=" btn-sm btn-primary mx-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            handleDelete(index + 1);
                          }}
                          className=" btn-sm btn-danger mx-1"
                        >
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
