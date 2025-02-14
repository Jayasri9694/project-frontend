import React from 'react'; 
import { useLocation } from 'react-router-dom'; 
import './petDetailsPage.css';

const PetDetailsPage = () => {
  const location = useLocation();
  const { pet } = location.state || {};

  if (!pet) {
    return <div>Pet details not available</div>;
  }

  return (
    <div className="pet-details">
      <div className="pet-info">
        <h2>{pet.name}</h2>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Age:</strong> {pet.age}</p>
        <p><strong>Temperament:</strong> {pet.temperament}</p>
      </div>
      <div className="pet-description">
        <p>Dogs are the most popular pet on the planet! A third of ALL households around the world have a dog. These playful, friendly, loyal animals make great companions, but they can also be fierce and tough protectors, or intelligent helpers.</p>
        <p>Dogs have been bred for desired behaviors, sensory capabilities, and physical attributes. Dog breeds vary widely in shape, size, and color. They have the same number of bones (with the exception of the tail), powerful jaws that house around 42 teeth, and well-developed senses of smell, hearing, and sight. Compared to humans, dogs have an inferior visual acuity, a superior sense of smell, and a relatively large olfactory cortex. They perform many roles for humans, such as hunting, herding, pulling loads, protection, companionship, therapy, aiding disabled people, and assisting police and the military.</p>
      </div>
    </div>
  );
};

export default PetDetailsPage;
