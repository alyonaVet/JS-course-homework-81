import express from "express";
import {getShortUrl} from "../constants";
import Link from "../models/Link";
import {LinkData} from "../types";

const linksRouter = express.Router();

linksRouter.get('/:shortUrl', async (req, res, next) => {
    try {
        const shortUrl = req.params.shortUrl;
        const link = await Link.findOne({shortUrl});

        if (!link) {
            return res.status(404).send({error: 'Link not found'});
        }

        return res.status(301).redirect(link.originalUrl);

    } catch (error) {
        return next(error);
    }
});

linksRouter.post("/", async (req, res, next) => {
    try {
        if (!req.body.originalUrl) {
            return res.status(400).send({error: "URL must be present in the request"});

        }
        const linkData: LinkData = {
            originalUrl: req.body.originalUrl,
            shortUrl: getShortUrl(),
        }

        const link = new Link(linkData);
        await link.save();
        return res.send(link);
    } catch (error) {
        return next(error);
    }
});

export default linksRouter;
