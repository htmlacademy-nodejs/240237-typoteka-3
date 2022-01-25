'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();


articlesRouter.get(`/:id`, (req, res) => res.render(`articles/article`));
articlesRouter.get(`/category/:id`, (req, res) => res.render(`articles/category`));
articlesRouter.get(`/edit/:id`, (req, res) => res.render(`articles/edit`));
articlesRouter.get(`/add`, (req, res) => res.render(`articles/new-article`));

module.exports = articlesRouter;
