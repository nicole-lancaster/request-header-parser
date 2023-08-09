import Express, { response } from "express";

export const getBasicHtml = (
  request: Express.Request,
  response: Express.Response,
) => {
  try {
    return response.status(200).sendFile(`${__dirname}/views/index.html`);
  } catch (err) {
    return console.error(err);
  }
};

export const getResponseHeader = (
  request: Express.Request,
  response: Express.Response,
) => {
  const ipAddress: string = request.ip;
  const language = request.headers["accept-language"];
  const software = request.headers["user-agent"];
  try {
    return response.status(200).send({ ipAddress, language, software });
  } catch (err) {
    return console.error(err);
  }
};
