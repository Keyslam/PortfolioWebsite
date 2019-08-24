const fs = require("fs");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownSetup = require('./src/markdown.js')
const collectionsSetup = require('./src/collections.js')

module.exports = (eleventy) => {
  eleventy.addPlugin(pluginSyntaxHighlight);
  eleventy.setDataDeepMerge(true);

  eleventy.addPassthroughCopy("base/img");
  eleventy.addPassthroughCopy("base/css");
  eleventy.addPassthroughCopy("base/static");

  collectionsSetup(eleventy);
  markdownSetup(eleventy);

  eleventy.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('build/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "base",
      includes: "../src/templates",
      data: "data",
      output: "build"
    }
  };
};
