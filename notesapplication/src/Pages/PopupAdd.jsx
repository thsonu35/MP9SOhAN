import React, { useState } from 'react';
import style from './Index.module.css'; // Import CSS module for styling

function PopupAdd({ onClose }) {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('#000000');

  const handleCreateGroup = () => {
    console.log("Creating group:", groupName, "with color:", groupColor);
    
    onClose(); // Close the pop-up after group creation
  };

  return (
    <div className={style.popup}>
      <div className={style.popupContent}>
        <span className={style.close} onClick={onClose}>&times;</span>
        <h2>Create Group</h2>
        <form>
          <label htmlFor="groupName">Group Name:</label><br />
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          /><br />
          <label htmlFor="groupColor">Group Color:</label><br />
          <input
            type="color"
            id="groupColor"
            value={groupColor}
            onChange={(e) => setGroupColor(e.target.value)}
          /><br /><br />
          <button type="button" onClick={handleCreateGroup}>Create Group</button>
        </form>
      </div>
    </div>
  );
}

export default PopupAdd;
