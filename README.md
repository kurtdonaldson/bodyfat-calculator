# bodyfat-calculator

I designed the bodyfat-calculator app in order to help health professionals calculate and store clients bodyfat percentages. This would provide a simple way of
storing and tracking a clients progress.

I worked alongside a UX designer to create a one page web app for Healthcare professionals who would use this in-clinic.

The stack I used for this app includeded HTML, CSS, Bootstrap, JS, MongoDB, Node and Express. 

After multiple iterations we settled on an minimum viable product(MVP) that would meet the basic calculation needs. Currently validation and authorisation are in development. It will be deployed in MongoDB after this. 

Challenges:
  1. One of the more difficult tasks was deciding the appropriate way of storing client test data and then retrieving it and displaying it. I used MongoDB Atlas to store a users name and their test results. The struture I decided on was storing the test results as objects within an array. The array allowed me to store the objects in the sequence that they were created. In order to display the results in the index.ejs file, I used a for loop to iterate over all the users and then iterated over each users results using a nested for loop. 

users:{
  name: 'Joe Bloggs'
  test:[
         {
          classification: "Fitness,
          bodyfat: "18%",
          leanMass: "66kg",
          date: "02/02/22"
          },
          {
          classification: "Acceptable,
          bodyfat: "22%",
          leanMass: "69kg",
          date: "01/04/22"
          },
  ],
