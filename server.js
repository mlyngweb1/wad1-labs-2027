const express = require("express");

const app = express();

const appInfo = {
    appTitle: "Playlist Maker",
    version: 0.2,
    creators: [
      {
        fullname: "Stevie Feliciano",
        job: "Web Developer"
      },
      {
        fullname: "Helen Hess",
        job: "Web Developer"
      },
      {
        fullname: "Jenny Howe",
        job: "UX Designer"
      }
    ],
    location: "Waterford"
};


// Define a route
app.get("/", (request, response) => {
  response.send(`
    <h1>Welcome to ${appInfo.appTitle}</h1>
    <p>Welcome to Playlist Maker</p>
    <p>Location: ${appInfo.location}</p>

    <a href="/">Home</a>
    <a href="/about">About</a>
  `);
});

app.get("/about", (request, response) => {
  response.send(`
    <h1>About ${appInfo.appTitle}</h1>
    <p>Version: ${appInfo.version}</p>

    <h2>Creators</h2>

    <p>${appInfo.creators[0].fullname}
       - ${appInfo.creators[0].job}</p>

    <p>${appInfo.creators[1].fullname}
       - ${appInfo.creators[1].job}</p>

    <p>${appInfo.creators[2].fullname}
       - ${appInfo.creators[2].job}</p>

    <a href="/">Home</a>
    <a href="/about">About</a>
  `);
});



// Start the server
app.listen(3000, () => {
  console.log("Playlist Maker running");
});

