import React from 'react';

function Navigation() {
  return (
    <nav>
      <div className="cameras-info">
        <img src="/cameras.png" alt="cameras" />
        <div className="cameras-description">
          <h2>Zoo info</h2>
          <p>A zoo is a place where animals live in captivity and are put on display for people to view. The word “zoo” is short for “zoological park.” Zoos contain wide varieties of animals that are native to all parts of the Earth.
</p>
          <p>Though people have kept wild animals for thousands of years, those collections have not always resembled modern zoos. The first zoos were created as private collections by the wealthy to show their power. These private collections were called menageries.</p>
          <p>Wall carvings found in Egypt and Mesopotamia are evidence that rulers and aristocrats created menageries as early as 2500 BCE. They left records of expeditions to distant places to bring back exotic animals such as giraffes, elephants, bears, dolphins, and birds. There is evidence that ancient zoo owners hired animal handlers to make sure their animals thrived and reproduced.
</p>
          <button>Read More</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
