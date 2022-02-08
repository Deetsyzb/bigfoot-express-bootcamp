const attachRoute = (app) => {
  app.get("/", (req, res) => {
    console.log("request came in");
    res.send("yay");
  });

  app.get("/wow-bananas", (req, res) => {
    console.log("request came in");
    res.send("wow-bananas");
  });

  const rollDie = () => Math.floor(Math.random() * 6) + 1;
  app.get("/dice-roll", (req, res) => {
    console.log("request came in");
    res.send("A rolled die: " + rollDie());
  });

  app.get("/two-dice-rolls", (req, res) => {
    console.log("request came in");
    res.send("A rolled die: " + rollDie() + ", yet another: " + rollDie());
  });

  app.get("/names/:index", (req, res) => {
    const { query, params } = req;
    console.log("[/names/:index] Request received");
    console.log("params", params); // is part of URI path before ? delimiter, express converts positional to key arguments
    console.log("query", query); // is part of URI path after ? delimiter (think a query is a question)
    res.status(404).send();
  });

  app.get("/names/:index/:gender", (req, res) => {
    const { query, params } = req;
    console.log("[/names/:index/:gender] Request received");
    console.log("params", params);
    console.log("query", query);
    res.status(404).send();
  });
};
export default attachRoute;
