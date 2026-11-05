/* global use, db */
// MongoDB Playground
// Run this file from the MongoDB extension in VS Code.

use('TravelPH');

const destinations = [
  {
    slug: 'coron-palawan',
    name: 'Coron, Palawan',
    pricePerPerson: 2500,
    currency: 'PHP',
    image: 'Photos/pexels-christian-paul-del-rosario-1076240.jpg',
    alt: 'Coron, Palawan',
    activities: [
      'Island Hopping',
      'Snorkeling and Scuba Diving',
      'Kayaking at Twin Lagoon',
      'Swimming at Kayangan Lake',
      'Shipwreck Diving (WWII Wrecks)'
    ]
  },
  {
    slug: 'boracay-philippines',
    name: 'Boracay, Philippines',
    pricePerPerson: 3000,
    currency: 'PHP',
    image: 'Photos/pexels-shyshy-obligar-12926994.jpg',
    alt: 'Boracay, Philippines',
    activities: [
      'Island Hopping',
      'Parasailing',
      'Snorkeling and Scuba Diving',
      'Helmet Diving',
      'Sunset Sailing (Paraw Sailing)'
    ]
  },
  {
    slug: 'bohol-philippines',
    name: 'Bohol, Philippines',
    pricePerPerson: 2500,
    currency: 'PHP',
    image: 'Photos/pexels-nalz-15289296.jpg',
    alt: 'Bohol, Philippines',
    activities: [
      'Island Hopping',
      'Snorkeling and Scuba Diving',
      'Loboc River Cruise',
      'ATV Adventure at the Chocolate Hills',
      'Tarsier Watching'
    ]
  }
];

for (const destination of destinations) {
  db.destinations.replaceOne(
    { slug: destination.slug },
    destination,
    { upsert: true }
  );
}

console.log(`${destinations.length} destinations created or updated.`);

// Check the saved documents.
db.destinations.find({}, { _id: 0 }).sort({ name: 1 });
