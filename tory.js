module.exports = {
  outputGenerators: [
    {
      id: "index-html",
      /*
       * To get continuous updates from Python code, use the '-u' flag to specify that the output
       * should be unbuffered.
       */
      command: "parcel build index.html --public-url . 2>&1 > /dev/null && cat dist/index.html",
      type: "html",
      path: ["/Users/andrew/.nvm/versions/node/v10.16.0/bin"]
    }
  ]
};
