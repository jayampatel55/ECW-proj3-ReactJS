import React from 'react';
import './EmployeeCard.css';
function EmployeeCard({ name, role, department, phone, cell, location, teamLead, dateOfJoining }) {
    return (
        <div className="employee-card">
            <img src="https://via.placeholder.com/100" alt="Employee" />
            <div className="employee-info">
                <h3>{name}</h3>
                <p>{role}</p>
                <p><strong>Department:</strong> {department}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Cell:</strong> {cell}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Team Lead:</strong> {teamLead}</p>
                <p><strong>Date of Joining:</strong> {dateOfJoining}</p>
            </div>
        </div>
    );
}
export default EmployeeCard;