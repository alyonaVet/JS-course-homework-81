import express from "express";

const linksRouter = express.Router();

linksRouter.get('/', (req, res) => {
    return res.send("Here are your link: ");
});

linksRouter.post("/", (req, res, next) => {
    res.send(req.body);
});

export default linksRouter;
