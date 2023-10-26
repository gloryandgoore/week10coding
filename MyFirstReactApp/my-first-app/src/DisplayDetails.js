import React from 'react'

const DisplayDetails = ({ details }) => {
  return (
    <div className="bg-gray-100 p-4">
      <ul className="list-disc list-inside">
        <li className="mb-2">Name: {details.name}</li>
        <li className="mb-2">Email: {details.email}</li>
        <li className="mb-2">Phone: {details.phone}</li>
      </ul>
    </div>
  );
};

export default DisplayDetails
