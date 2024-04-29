import React, { useState, useEffect } from "react";
import "./history.css"; // Import your CSS file

function History() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("assurance");
  const [historyItems, setHistoryItems] = useState([
    {
      id: 1,
      date: "26/4/2024",
      events: ["sinistre", "contrat"]
    },
    {
      id: 2,
      date: "27/4/2024",
      events: ["sinistre", "sinistre"]
    }
  ]);
  const [filteredItems, setFilteredItems] = useState(historyItems); // Initialize with all history items

  useEffect(() => {
    setFilteredItems(historyItems); // Initialize filtered items with all history items when component mounts
  }, [historyItems]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    // Filter history items based on date
    setFilteredItems(
      historyItems.filter((item) => item.date.includes(query))
    );
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleDeleteEvent = (itemId, eventIndex) => {
    setHistoryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              events: item.events.filter((_, index) => index !== eventIndex)
            }
          : item
      )
    );
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/CASH_Assurances_Logo.svg"
            alt="CASH Assurances"
            height="40px"
            width="100px"
          />
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </header>
      <div className="history">
        <nav className="history-sections">
          <div class="history-Title"> Historique</div>
          <a href="#" rel="">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2666/2666523.png"
              alt=""
              className="history-icon"
            />
            Les Polices d'assurance
          </a>
          <a href="#" rel="">
            <img
              src="https://cdn-icons-png.flaticon.com/512/64/64703.png"
              alt=""
              className="history-icon"
            />
            Déclaration de Sinistre
          </a>
        </nav>
        {/* Display history items based on selected section and search query */}
        <div className="history-container">
          {filteredItems.map((item) => (
            <div key={item.id} className="history-item">
              {/* Render history item content based on data */}
              <p>Date: {item.date}</p>
              {item.events.map((event, index) => (
                <div key={index} className="event">
                  <p>Event: {event}</p>
                  <button
                    className="event-delet"
                    onClick={() => handleDeleteEvent(item.id, index)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
