import React from "react";

export default function DashBoard() {
  return (
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm my-2"
      >
        <i class="fas fa-download fa-sm text-primary-50"></i> Generate Report
      </a>
    </div>
  );
}
