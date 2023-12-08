import React, { useState } from 'react';

function CameraTypes() {
  const [totalDisplayed, setTotalDisplayed] = useState(3); 

  const cameraTypes = [
    {
      id: 1,
      name: 'Berlin Zoo',
      description: 'The zoo and its aquarium had more than 3.3 million visitors in 2015[2]. It is considered the most visited zoo in Europe and one of the most popular in the world. Regular public animal feedings are one of the biggest attractions of the zoo. The zoos image was also helped by world-famous animals such as the polar bear Knut and the giant panda Bao Bao.',
      image: '/compact camera.png',
    },
    {
      id: 2,
      name: 'Toronto Zoo',
      description: 'The Toronto Zoo is a zoo located in Toronto, Ontario, Canada. Encompassing 287 hectares (710 acres),[1] the Toronto Zoo is the largest zoo in Canada.[7] It is divided into seven zoogeographic regions: Indo-Malaya, Africa, Americas, Tundra Trek, Australasia, Eurasia, and the Canadian Domain. Some animals are displayed indoors in pavilions and outdoors in what would be their naturalistic environments, with viewing at many levels. It also has areas such as the Kids Zoo, Waterside Theatre, and Splash Island. ',
      image: '/dslr camera.png',
    },
    {
      id: 3,
      name: 'Singapore Zoo',
      description: 'The Singapore Zoo, formerly known as the Singapore Zoological Gardens or Mandai Zoo, is a 28 hectares (69 acres) zoo located on the margins of Upper Seletar Reservoir within Singapores heavily forested central catchment area. Opened in 1973, the zoo was built at a cost of $9 million that was granted by the government of Singapore.',
      image: '/mirrorless camera.png',
    },
    {
      id: 4,
      name: 'Sony',
      description: 'Introducing the Sony, a state-of-the-art digital camera designed to elevate your photography to new heights.',
      image: '/sony 2.png',
    },
    {
      id: 5,
      name: 'Canon',
      description: 'Introducing the Canon, a cutting-edge digital camera designed to redefine your photography experience. .',
      image: '/canon 2.png',
    },
  ];

const handleViewMore = () => {
  const remainingItems = cameraTypes.length - totalDisplayed;
  const newTotalDisplayed = totalDisplayed + Math.min(3, remainingItems);

  setTotalDisplayed(newTotalDisplayed);
};

return (
  <div className="camera-types">
    <div className="camera-column">
      {cameraTypes.slice(0, totalDisplayed).map((camera, index) => (
        <div key={camera.id} className="camera">
          <img src={camera.image} alt={camera.name} />
          <h3>{camera.name}</h3>
          <p>{camera.description}</p>
          {index % 3 === 2 && <div key={`spacer-${index}`} className="spacer" />}
        </div>
      ))}
    </div>
    <div className="view-more-container">
      <button className="view-more" onClick={handleViewMore}>
        View More
      </button>
    </div>
  </div>
);
}


export default CameraTypes;