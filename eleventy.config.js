module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    return {
        dir: {
            input: "eleventy",
            output: "_site"
          }
    };
  };