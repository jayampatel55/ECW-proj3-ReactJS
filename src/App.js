import React, { useState } from 'react';
import './App.css';
import EmployeeCard from './EmployeeCard'; // Import the EmployeeCard component
function App() {
  // Define state for each popup visibility
  const [showPopup, setShowPopup] = useState(false);
  const [showClientPopup, setShowClientPopup] = useState(false);
  const [showTaskPopup, setShowTaskPopup] = useState(false);
  // Toggle functions for popups
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleClientPopup = () => {
    setShowClientPopup(!showClientPopup);
  };
  const toggleTaskPopup = () => {
    setShowTaskPopup(!showTaskPopup);
  };
  // Example data for employees
  const employees = [
    {
      name: "Aahana Joshi",
      role: "Team Lead - Tech Support",
      department: "Customer Service",
      phone: "10825",
      cell: "N/A",
      location: "Waikiki",
      teamLead: "Poojarj, Sandesh",
      dateOfJoining: "12/21/2014"
    },
    {
      name: "Aakash Shah",
      role: "Sales Director",
      department: "Sales",
      phone: "11720",
      cell: "+91 9925461000",
      location: "Atlantis",
      teamLead: "Aathit Sameer",
      dateOfJoining: "11/26/2015"
    },
    {
      name: "Aamir Shaikh",
      role: "Team Lead - RCM Operations",
      department: "RCM",
      phone: "17392",
      cell: "+918879655385",
      location: "Waikiki",
      teamLead: "Krishna Amar",
      dateOfJoining: "07/06/2015"
    },
    {
      name: "Dhruval Patel",
      role: "Intern - Emanager",
      department: "Emanager",
      phone: "081403",
      cell: "N/A",
      location: "Atlantis",
      teamLead: "Suthar,Dhaval",
      dateOfJoining: "01/07/2024"
    },
    {
      name: "Jayam Patel",
      role: "Intern - Emanager",
      department: "Emanager",
      phone: "54781",
      cell: "N/A",
      location: "Atlantis",
      teamLead: "Suthar,Dhaval",
      dateOfJoining: "01/07/2024"
    },
    // Add more employee objects here
  ];
  return (
      <div className="app">
        {/* Sidebar */}
        <div className="sidebar">
          <a className="active" href="#home">ECW</a>
          <a href="#FAVOURITE">★</a>
          <a href="#GENERAL">General</a>
          <a href="#eManger">eManager</a>
          <a href="#HR">HR</a>
          <a href="#ATLANTIS">ATLANTIS</a>
          <a href="#ALL">ALL</a>
          <a href="#smile">☺</a>
        </div>
        {/* Main Content Area */}
        <div className="main-content">
          {/* Top navigation bar */}
          <div className="top-nav">
            <ul>
              <li><a href="#Project">Project</a></li>
              <li><a href="#Task" onClick={toggleTaskPopup}>Task</a></li>
              <li><a href="#Client" onClick={toggleClientPopup}>Client</a></li>
              <li><a href="#Resource" onClick={togglePopup}>Resource</a></li>
              <div className="jellybean-container">
                <div>SM</div>
                <div className="jellybean sm">0</div>
                <div>PS</div>
                <div className="jellybean ps">0</div>
                <div>U</div>
                <div className="jellybean uo">0</div>
                <div>R</div>
                <div className="jellybean ri">0</div>
                <div>T</div>
                <div className="jellybean to">0</div>
                <div>N</div>
                <div className="jellybean no">0</div>
                <div>A</div>
                <div className="jellybean ao">0</div>
              </div>
            </ul>
          </div>
          {/* Dashboard Title */}
          <br/>
          <div className="dashboard-title">Compliance Dashboard</div>
          {/* Example Content Boxes */}
          <div className="content-box">
            <h3>Pending with Exams</h3>
            <p>No Course(s) found.</p>
          </div>
          <div className="content-box">
            <h3>Outstanding Courses (0)</h3>
            <p>No Course(s) found.</p>
          </div>
          <div className="content-box">
            <h3>Upcoming Courses</h3>
            <p>No Course(s) found.</p>
          </div>
        </div>

        {/* Resource Lookup Popup */}
        {showPopup && (
            <div className="popup">
              <div className="popup-header">
                <span>Resource Lookup</span>
                <button
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '10px',
                      background: 'white',
                      border: 'none',
                      fontSize: '22px',
                      cursor: 'pointer'
                    }}
                    onClick={togglePopup}
                >
                  ×
                </button>
              </div>
              <br />
              <div className="popup-content">
                <select>
                  <option value="1" selected="selected">Name</option>
                  <option value="2">Department</option>
                  <option value="8">Team Lead</option>
                  <option value="4">Phone</option>
                  <option value="5">Cell</option>
                  <option value="6">Conf Line</option>
                  <option value="7">Conf Room</option>
                  <option value="14">By POD Owner</option>
                  <option value="9">Location</option>
                  <option value="10">Vertical</option>
                  <option value="12">Role</option>
                  <option value="17">Generic Role</option>
                  <option value="13">Team</option>
                  <option value="3">By Operational Lead</option>
                  <option value="16">By Business Lead</option>
                  <option value="15">By Manager</option>
                </select>
                <input type="text" placeholder="" style={{ width: '180px', height: '28px' }} />
                <select>
                  <option value="1" selected="selected">Department</option>
                  <option value="8">Team Lead</option>
                  <option value="4">Phone</option>
                  <option value="5">Cell</option>
                  <option value="6">Conf Line</option>
                  <option value="7">Conf Room</option>
                  <option value="14">By POD Owner</option>
                  <option value="9">Location</option>
                  <option value="10">Vertical</option>
                  <option value="12">Role</option>
                  <option value="17">Generic Role</option>
                  <option value="13">Team</option>
                  <option value="3">By Operational Lead</option>
                  <option value="16">By Business Lead</option>
                  <option value="15">By Manager</option>
                </select>
                <select>
                  <option value="1" selected="selected">All</option>
                  <option value="2">Department</option>
                  <option value="8">Team Lead</option>
                  <option value="4">Phone</option>
                  <option value="5">Cell</option>
                  <option value="6">Conf Line</option>
                  <option value="7">Conf Room</option>
                  <option value="14">By POD Owner</option>
                  <option value="9">Location</option>
                  <option value="10">Vertical</option>
                  <option value="12">Role</option>
                  <option value="17">Generic Role</option>
                  <option value="13">Team</option>
                  <option value="3">By Operational Lead</option>
                  <option value="16">By Business Lead</option>
                  <option value="15">By Manager</option>
                </select>
                <select>
                  <option value="active">Active</option>
                  <option value="outOfOffice">Inactive</option>
                </select>
                <input type="checkbox" style={{ width: '20px', height: '20px' }} /> Out of office
                <input type="checkbox" style={{ width: '20px', height: '20px' }} /> System resources only
                <div className="employee-cards-container">
                  {employees.map((employee, index) => (
                      <EmployeeCard key={index} {...employee} />
                  ))}
                </div>
              </div>
            </div>
        )}
        {/* Client Lookup Popup */}
        {showClientPopup && (
            <div className="popup">
              <div className="popup-header">
                <span>Client Lookup</span>
                <button
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '10px',
                      background: 'white',
                      border: 'none',
                      fontSize: '22px',
                      cursor: 'pointer'
                    }}
                    onClick={toggleClientPopup}
                >
                  ×
                </button>
              </div>
              <br />
              <div className="popup-content">
                <select>
                  <option value="1" selected="selected">Name</option>
                  <option value="4">APU</option>
                  <option value="5">Client Code</option>
                  <option value="6">Speciality</option>
                  <option value="7">Location</option>
                  <option value="8">E-mail</option>
                  <option value="9">Country</option>
                  <option value="10">City</option>
                  <option value="11">Zip</option>
                  <option value="12">State</option>

                </select>
                <input type="text" placeholder="Search..." style={{width: '180px', height: '28px'}}/>
                <select>
                  <option value="1" selected="selected">APU</option>
                  <option value="4">APU</option>
                  <option value="4">SAM</option>
                  <option value="5">Client Code</option>
                  <option value="6">Speciality</option>
                  <option value="7">Location</option>
                  <option value="8">E-mail</option>
                  <option value="9">Country</option>
                  <option value="10">City</option>
                  <option value="11">Zip</option>
                  <option value="12">State</option>
                </select>
                <input type="text" placeholder="Search..." style={{width: '180px', height: '28px'}}/>
              </div>
            </div>
        )}
        {/* Task Lookup Popup */}
        {showTaskPopup && (
            <div className="popup">
              <div className="popup-header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                background: '#007acc',
                color: 'white'
              }}>
                <span style={{fontSize: '18px'}}>Task Lookup</span>
                <button
                    style={{
                      background: 'transparent',
                      border: 'none',
                      fontSize: '22px',
                      cursor: 'pointer',
                      color: 'white'
                    }}
                    onClick={toggleTaskPopup}
                >
                  ×
                </button>
              </div>
              <div className="popup-content" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ marginRight: '10px' }}>Task ID:</label>
                  <input type="text" placeholder="Task ID" style={{ width: '150px', marginRight: '10px' }} />
                  <button style={{ marginRight: '10px', padding: '5px 10px'  }}>Go</button>
                  <select style={{marginRight: '50px'}} >
                    <option value="1" selected>Select</option>
                    <option value="4">Project Name</option>
                    <option value="2">APU Id</option>
                    <option value="3">Project Id</option>
                    <option value="4">Department</option>

                    {/* Add more options if needed */}
                  </select>
                  <label style={{ marginRight: '10px' }}>Date Range:</label>
                  <input type="date" style={{ marginRight: '10px' }} />
                  <input type="date" style={{ marginRight: '10px' }} />
                  <button>Lookup</button>
                </div>
              </div>
            </div>
        )}

      </div>
  );

}
export default App;