# Justin's Portfolio

This is a static webpage built wih 11ty, to be used as Justin's Van der Leij portfolio.

## Installation

Clone the repository into your desired folder using either SSH, HTTPS, or the Download button:

```bash
git clone git@github.com:Tjakka5/PortfolioWebsite.git

git clone https://github.com/Tjakka5/PortfolioWebsite.git
```

Then you'll need to install the NPM modules required to build the project:

```bash
npm install
```

And finally you can either:

* Build the website using with: `npm run build`
* Serve the website locally (ideal for debugging) with: `npm run serve`

## Usage

This project has 3 main folders:

### `base` Folder

This is the folder you'll modify with your content, in here you'll mainly find Markdown files which will result in HTML pages.

Stuff placed in the `img`, `css` and `static` folders are copied as is to the build folder, you can use this folder for whatever you desire, though it's recommended to keep the `css` folder as is.

In `data` you can find `.json` files with data that you can modify with your own information, this information will then be used anywhere in the page.

Any Markdown in the `projects` folder will be marked as a project, and added to the portfolio.

### `build` Folder

This is where the final build of the website ends up.

Note that all the files are static so you can move this folder anywhere to be deployed by your server.

If you want to place it in a location that is not your root, say you have the domain `https://example.com` and you want to make the portfolio accessible at `https://example.com/portfolio` you may need to change the [`pathPrefix`](https://github.com/Tjakka5/PortfolioWebsite/blob/dev/.eleventy.js#L43).

### `src` Folder

In this folder you can find the templates and the helpers needed to build the website.

Ideally you would not modify this folder.

## Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT License](https://choosealicense.com/licenses/mit/) - Copyright 2019 [Pablo Ariel Mayobre](https://github.com/pablomayobre)
