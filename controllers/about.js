'use strict';
import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    const info = appStore.getAppInfo();
    logger.debug("appinfo", info);
    response.send(`
     <h1>About ${info.appTitle}</h1>
     <p>Version: ${info.version}</p>
     <h2>Creators</h2>
     <p>${info.creators[0].fullname} - ${info.creators[0].job}</p>
     <p>${info.creators[1].fullname} - ${info.creators[1].job}</p>
     <p>${info.creators[2].fullname} - ${info.creators[2].job}</p>
     <a href="/">Home</a>
     <a href="/dashboard">Dashboard</a>
     <a href="/about">About</a>
    `);   
  },
};

export default about;


