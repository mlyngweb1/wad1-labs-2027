'use strict';
import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    const info = appStore.getAppInfo();
    logger.debug("appinfo", info);
    response.send(`
    <h1>${info.appTitle}</h1>
    <p>Welcome to Playlist Maker</p>
    <p>Location: ${info.location}</p>
    <a href="/">Home</a>
    <a href="/dashboard">Dashboard</a>
    <a href="/about">About</a>
    `);   
  },
};

export default start;
