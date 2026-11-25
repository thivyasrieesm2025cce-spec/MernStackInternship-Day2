import React, { useState } from "react";
import "./App.css";

function App() {

  const [page, setPage] = useState("Dashboard");
  const [name, setName] = useState("Thivya");
  const [search, setSearch] = useState("");
  const [newAutomation, setNewAutomation] = useState("");

  const dashboardData = {
    menu: [
      "Dashboard",
      "AI Agents",
      "Automations",
      "Analytics",
      "Settings"
    ],

    cards: [
      { number: "12.5K", title: "Total Interactions" },
      { number: "248", title: "Automations Run" },
      { number: "98.7%", title: "Success Rate" },
      { number: "2.3s", title: "Response Time" }
    ],

    activities: [
      "New automation completed",
      "Customer Support Agent active",
      "Document Analyzer running"
    ]
  };

  const [agents, setAgents] = useState([
    { name: "Customer Support Agent", active: true },
    { name: "Document Analyzer", active: true },
    { name: "Content Generator", active: false }
  ]);

  const [automations, setAutomations] = useState([
    { name: "Email Automation", status: "Pending" },
    { name: "Report Generation", status: "Pending" },
    { name: "Data Processing", status: "Pending" }
  ]);

  // Activate and Deactivate AI Agents

  function toggleAgent(index) {
    setAgents(agents.map((agent, i) =>
      i === index
        ? { ...agent, active: !agent.active }
        : agent
    ));
  }

  // Run Automation

  function runAutomation(index) {
    setAutomations(automations.map((item, i) =>
      i === index
        ? { ...item, status: "Completed" }
        : item
    ));
  }

  // Add Automation

  function addAutomation() {

    if (newAutomation.trim() === "") {
      alert("Please enter automation name");
      return;
    }

    setAutomations([
      ...automations,
      {
        name: newAutomation.trim(),
        status: "Pending"
      }
    ]);

    setNewAutomation("");
  }

  // Delete Automation

  function deleteAutomation(index) {
    setAutomations(
      automations.filter((item, i) => i !== index)
    );
  }

  return (
    <div className="container">

      {/* Navbar */}

      <nav className="navbar">

        <h2>PulseWorks AI</h2>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h4>Welcome, {name}</h4>

      </nav>

      <div className="main">

        {/* Sidebar */}

        <div className="sidebar">

          <h3>Menu</h3>

          {dashboardData.menu.map((item, index) => (

            <p
              key={index}
              className={page === item ? "active" : ""}
              onClick={() => {
                setPage(item);
                setSearch("");
              }}
            >
              {item}
            </p>

          ))}

        </div>

        <div className="content">

          {/* Dashboard */}

          {page === "Dashboard" && (
            <>

              <h1>Welcome back, {name} 👋</h1>

              <p>
                Here's what's happening in your workspace today.
              </p>

              <div className="cards">

                {dashboardData.cards.map((item, index) => (

                  <div className="card" key={index}>
                    <h3>{item.number}</h3>
                    <p>{item.title}</p>
                  </div>

                ))}

              </div>

              <div className="activity">

                <h2>Recent Activity</h2>

                {dashboardData.activities
                  .filter(item =>
                    item.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}

              </div>

            </>
          )}

          {/* AI Agents */}

          {page === "AI Agents" && (
            <>

              <h1>AI Agents</h1>
              <p>Manage your AI agents.</p>

              <div className="activity">

                {agents.map((agent, index) =>
                  agent.name.toLowerCase().includes(search.toLowerCase()) && (

                    <div className="item-row" key={index}>

                      <div>
                        <h3>{agent.name}</h3>

                        <p>
                          Status: {agent.active ? "Active" : "Inactive"}
                        </p>
                      </div>

                      <button
                        onClick={() => toggleAgent(index)}
                        className={agent.active ? "red-btn" : "blue-btn"}
                      >
                        {agent.active ? "Deactivate" : "Activate"}
                      </button>

                    </div>

                  )
                )}

              </div>

            </>
          )}

          {/* Automations */}

          {page === "Automations" && (
            <>

              <h1>Automations</h1>
              <p>Manage and run your workflows.</p>

              <div className="activity">

                <h2>Add New Automation</h2>

                <input
                  className="settings-input"
                  type="text"
                  placeholder="Enter automation name"
                  value={newAutomation}
                  onChange={(e) => setNewAutomation(e.target.value)}
                />

                <button
                  className="blue-btn"
                  onClick={addAutomation}
                >
                  + Add Automation
                </button>

              </div>

              <div className="activity">

                <h2>Available Automations</h2>

                {automations.length === 0 && (
                  <p>No automations available.</p>
                )}

                {automations.map((item, index) =>
                  item.name.toLowerCase().includes(search.toLowerCase()) && (

                    <div className="item-row" key={index}>

                      <div>

                        <h3>{item.name}</h3>
                        <p>Status: {item.status}</p>

                      </div>

                      <div>

                        <button
                          className="blue-btn"
                          onClick={() => runAutomation(index)}
                          style={{ marginRight: "10px" }}
                        >
                          Run
                        </button>

                        <button
                          className="red-btn"
                          onClick={() => deleteAutomation(index)}
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  )
                )}

              </div>

            </>
          )}

          {/* Analytics */}

          {page === "Analytics" && (
            <>

              <h1>Analytics</h1>
              <p>Monitor your workspace performance.</p>

              <div className="cards">

                <div className="card">
                  <h3>{agents.length}</h3>
                  <p>Total Agents</p>
                </div>

                <div className="card">

                  <h3>
                    {agents.filter(agent => agent.active).length}
                  </h3>

                  <p>Active Agents</p>

                </div>

                <div className="card">
                  <h3>{automations.length}</h3>
                  <p>Total Automations</p>
                </div>

                <div className="card">

                  <h3>
                    {automations.filter(item =>
                      item.status === "Completed"
                    ).length}
                  </h3>

                  <p>Completed Automations</p>

                </div>

              </div>

            </>
          )}

          {/* Settings */}

          {page === "Settings" && (
            <>

              <h1>Settings</h1>
              <p>Manage your profile.</p>

              <div className="activity">

                <h2>Profile Settings</h2>

                <label>Username</label>

                <input
                  className="settings-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <button
                  className="blue-btn"
                  onClick={() => alert("Profile updated successfully!")}
                >
                  Save Changes
                </button>

              </div>

            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default App;