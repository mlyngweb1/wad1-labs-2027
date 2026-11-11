'use strict';
import logger from "../utils/logger.js";

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!")
    response.send(`
    <h1>Dashbord</h1>
    <p>Coming soon...</p>
    <a href="/">Home</a>
    <a href="/dashboard">Dashboard</a>
    <a href="/about">About</a>
    `);   
  },
};


export default dashboard;
