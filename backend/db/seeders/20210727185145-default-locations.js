"use strict";
const faker = require("faker");

const fakerArr = [];
for (let i = 0; i < 50; i++) {
  const location = {
    name: faker.lorem.words(),
    price: Math.floor(Math.random() * 100) + 10,
    imageUrl: faker.image.nature(),
    address: faker.address.streetAddress(),
    unit: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
    zipcode: faker.address.zipCode(),
    description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  fakerArr.push(location);
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          name: "Pipeline / Ehukai Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/waves.jpg",
          address: "59-337 Ke Nui Rd",
          city: "Haleiwa",
          state: "Hawaii",
          country: "United States",
          zipcode: "96712",
          latitude: 21.664825,
          longitude: -158.051304,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Newport Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/waves2.jpg",
          address: "70 Newport Pier",
          city: "Newport Beach",
          state: "California",
          country: "United States",
          zipcode: "92663",
          latitude: 33.607167,
          longitude: -117.92865,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "San Clemente State Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/waves3.jpg",
          address: "225 Avenida Calafia",
          city: "San Clemente",
          state: "California",
          country: "United States",
          zipcode: "92672",
          latitude: 33.402282,
          longitude: -117.604627,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cocoa Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/med.jpg",
          address: "12 Minutemen Causeway",
          city: "Cocoa Beach",
          state: "Florida",
          country: "United States",
          zipcode: "32931",
          latitude: 28.31686,
          longitude: -80.607969,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cape Kiwanda",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/med2.jpg",
          address: "33810 Cape Kiwanda Drive",
          city: "Pacific City",
          state: "Oregon",
          country: "United States",
          zipcode: "97135",
          latitude: 45.215321,
          longitude: -123.971584,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asilomar State Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/med3.jpg",
          address: "Sunset Drive",
          city: "Pacific Grove",
          state: "California",
          country: "United States",
          zipcode: "97135",
          latitude: 36.61745,
          longitude: -121.942649,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Curtis Byrd Park",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/small.jpeg",
          address: "Ocean Avenue",
          city: "Melbourne Beach",
          state: "Florida",
          country: "United States",
          zipcode: "32951",
          latitude: 28.063275,
          longitude: -80.559421,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jacksonville Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/small2.jpeg",
          address: "601 1st St S",
          city: "Jacksonville Beach",
          state: "Florida",
          country: "United States",
          zipcode: "32250",
          latitude: 30.286457,
          longitude: -81.388451,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Virginia Key Beach Park",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/small3.jpg",
          address: "4020 Virginia Beach Drive",
          city: "Miami",
          state: "Florida",
          country: "United States",
          zipcode: "33149",
          latitude: 25.740887,
          longitude: -80.150404,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Myrtle Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/dog-beach.jpg",
          address: "422 Chester St",
          city: "Myrtle Beach",
          state: "South Carolina",
          country: "United States",
          zipcode: "29577",
          latitude: 33.687712,
          longitude: -78.883071,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Virginia Beach Oceanfront",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/dog-beach2.jpg",
          address: "1700 Atlantic Ave",
          city: "Virginia Beach",
          state: "Virginia",
          country: "United States",
          zipcode: "23451",
          latitude: 36.845508,
          longitude: -75.972634,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Point Pleasant Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/dog-beach3.png",
          address: "18 Trenton Ave",
          city: "Point Pleasant Beach",
          state: "New Jersey",
          country: "United States",
          zipcode: "08742",
          latitude: 40.092025,
          longitude: -74.035974,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Long Sands Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/open.jpg",
          address: "189 Long Beach Ave",
          city: "York",
          state: "Maine",
          country: "United States",
          zipcode: "03909",
          latitude: 43.164972,
          longitude: -70.617897,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Willard Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/open2.jpg",
          address: "95, Campus Center Drive",
          city: "Portland",
          state: "Maine",
          country: "United States",
          zipcode: "04106",
          latitude: 43.642977,
          longitude: -70.227642,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blackwoods Campground",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/open3.jpg",
          address: "155 Blackwoods Drive",
          city: "Otter Creek",
          state: "Maine",
          country: "United States",
          zipcode: "04660",
          latitude: 44.305365,
          longitude: -68.211049,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ocean City Beach",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/hidden.jpg",
          address: "37 2nd Ave",
          city: "Ocean City",
          state: "Washington",
          country: "United States",
          zipcode: "98569",
          latitude: 47.068575,
          longitude: -124.175444,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Strawberry Bay Falls",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/hidden2.jpg",
          address: "La Push Rd",
          city: "La Push",
          state: "Washington",
          country: "United States",
          zipcode: "98350",
          latitude: 47.885327,
          longitude: -124.61937,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bastendorff Beach Park",
          price: Math.floor(Math.random() * 100) + 10,
          imageUrl: "https://coastal-camper.s3.amazonaws.com/hidden3.jpg",
          address: "63377 Bastendorf Beach Rd",
          city: "Coos Bay",
          state: "Washington",
          country: "United States",
          zipcode: "97420",
          latitude: 43.34346,
          longitude: -124.351112,
          description: faker.lorem.sentence() + " " + faker.lorem.sentence(),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", {
      id: { [Sequelize.Op.gt]: 0 },
    });
  },
};
