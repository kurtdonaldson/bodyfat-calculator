const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
//change password with username password. remove firstproject. app.post below will create new DB called node-demo
const dbURL = process.env.DB_URL;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  MongoClient.connect(dbURL, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db("node-demo");
    const collection = db.collection("users");
    collection
      .find()
      .toArray()
      .then((results) => {
        res.render("index.ejs", { users: results });
      })
      .catch((error) => {
        res.redirect("/");
      });
  });
});

app.post("/users", (req, res) => {
  MongoClient.connect(dbURL, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db("node-demo");
    const collection = db.collection("users");
    collection
      .insertOne(req.body)
      .then(() => {
        res.redirect("/");
      })
      .catch(() => {
        res.redirect("/");
      });
  });
});

app.delete("/users", (req, res) => {
  MongoClient.connect(dbURL, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db("node-demo");
    const collection = db.collection("users");
    collection
      .deleteOne(req.body)
      .then(() => {
        res.json(`Deleted user`);
      })
      .catch(() => {
        res.redirect("/");
      });
  });
});

app.put("/users", (req, res) => {
  MongoClient.connect(dbURL, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db("node-demo");
    const collection = db.collection("users");
    collection
      .findOneAndUpdate(
        { name: req.body.name },
        {
          $push: {
            test: {
              classification: req.body.classification,
              leanMass: req.body.leanMass,
              bodyfat: req.body.bodyfat,
              date: req.body.date,
            },
          },
        },
        {
          upsert: true,
        }
      )
      .then(() => {
        res.json("Success");
      })
      .catch(() => {
        res.redirect("/");
      });
  });
});

app.listen(PORT, () => {
  console.log("LISTENING ON " + PORT + "...");
});
