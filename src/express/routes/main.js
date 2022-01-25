'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();

const mainContent = {
  wrapperClass: `.wrapper-color`,
};

mainRouter.get(`/`, (req, res) => res.render(`main`, mainContent));

module.exports = mainRouter;
