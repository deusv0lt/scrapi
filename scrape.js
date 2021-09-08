const axios = require("axios");
const cheerio = require("cheerio");

const extractLinks = async (url) => {
  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    const linkObjects = $("a");
    // this is a mass object, not an array

    const links = [];
    linkObjects.each((index, element) => {
      links.push({
        text: $(element).text(), // get the text
        href: $(element).attr("href"), // get the href attribute
      });
    });

    console.log(links);
    return links;
  } catch (error) {
    console.log(error.response.body);
  }
};

module.exports = extractLinks;
