import React from 'react';

const AddPhotoComponent = () => {
  const handleAddPhotoClick = () => {
    document.getElementById('photoInput').click();
  };

  const handleFileChange = (event) => {
    // Handle file change logic here
    console.log('Selected file:', event.target.files[0]);
  };

  return (
    <div>
      {/* Input element for adding a photo */}
      <input
        type="file"
        id="photoInput"
        accept="image/*"
        style={{ display: 'none' }} // Hide the input element
        onChange={handleFileChange} // Call handleFileChange when a file is selected
      />

      {/* Button to trigger file input */}
      <button className="addph" onClick={handleAddPhotoClick}>
        Add a Photo
      </button>
    </div>
  );
};

export default AddPhotoComponent;
