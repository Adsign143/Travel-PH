use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.bookings.insertMany([
    {
        BookingID: 1,
        Destination: "Palawan",
        Price: 2500,
        date: new Date(),
    },
     {
        BookingID: 2,
        Destination: "Boracay",
        Price: 3000,
        date: new Date(),
    },
     {
        BookingID: 3,
        Destination: "Bohol",
        Price: 2500,
        date: new Date(),
    }

]);

db.bookings.find();