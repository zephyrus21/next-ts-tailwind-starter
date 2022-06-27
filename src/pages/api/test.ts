import type { NextApiRequest, NextApiResponse } from "next";

type Data = { msg: string };

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ msg: "Welcome to the server side!!!" });
};

export default handler;
