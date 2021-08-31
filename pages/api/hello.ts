import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((_, res) => {
    res.send("Hello on the GET endpoint");
  })
  .post((_, res) => {
    res.send("Hello on the POST endpoint");
  });

export default handler;
