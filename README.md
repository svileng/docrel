# docrel [![Build Status](https://travis-ci.org/svileng/docrel.svg?branch=master)](https://travis-ci.org/svileng/docrel) [![npm version](https://badge.fury.io/js/docrel.svg)](https://badge.fury.io/js/docrel) ![Size](https://img.shields.io/badge/min%2Bgz-%3C%201KB-blue.svg)
> Slightly better document.createElement

`Docrel` is a thin wrapper for `document.createElement` that makes creating elements a bit easier. It also helps clean up your code and avoid repetition. No dependencies, no black magic (see [source](https://github.com/svileng/docrel/blob/master/src/docrel.js)).

Using `document.createElement`:

```js
let option = document.createElement("option")
option.id = "random-id"
option.setAttribute("value", someVar)
if (someVar === selectedVar) {
  option.setAttribute("selected", "selected")
}
option.textContent = `This is ${anotherVar}`

let select = document.createElement("select")
select.className = "foo bar"
select.appendChild(option)
```

Using `docrel`:

```js
import {createElement} from "docrel"

let option = createElement("option", {
  id: "random-id",
  attrs: {
    value: someVar,
    selected: someVar === selectedVar ? "selected" : null
  },
  textContent: `This is ${anotherVar}`
})

let select = createElement("select", {class: "foo bar"}, [
  option
])
```

If `someVar === selectedVar` returns `null` the attribute won't be set at all.

## Install
```bash
npm install docrel --save
```

## Usage
```js
import {createElement} from "docrel"

let el = createElement("div", {
  id: "el-id",
  class: "class-a class-b",
  textContent: "I'm an HTMLElement!",
  attrs: {
    align: "center",
    "data-attr": 1
  },
  events: {
    click: () => {console.log("click!")}
  }
})
```

```html
<!-- Resulting HTML when el is appended to the DOM -->
<div id="el-id" class="class-a class-b" align="center" data-attr=1>
  I'm an HTMLElement!
</div>
```

- The `class` option is a shorthand to `node.className`;
- Keys inside `attrs` are passed to `node.setAttribute`, unless key value is `null` or `undefined`;
- Keys inside `events` are passed to `node.addEventListener`;
- Returns an HTML Element object.

### Nesting / appending children

The `createElement` function supports a third parameter for appending child elements:

```js
let el = createElement("div", {class: "wrapper"}, [
  createElement("input", {attrs: {type: "text"}}),
  createElement("button", {textContent: "Submit"})
])
```

In addition to `createElement`, internal helper functions such as `appendChildren` and `setAttributes` are exported as well. See source for more info.

## About
<img src="http://heresy.io/public/logo.svg" width="300">

This project is sponsored by [Heresy](https://heresy.io). We're making an innovative tool for enterprise sales and we're building a team of engineers here in London (UK) who love open source and JavaScript. If you would like to hear more, just get in touch via email: `team [at] heresy [dot] i/o`.

## Contributing
Contributions are more than welcome. Please fork the repo and send a PR with a clean, rebased branch containing your changes. Also please make sure tests are passing and update tests if necessary.

To run the project locally, you will need to `npm install` dev dependencies and then use `npm run dev` and `npm test` to transpile ES2015 code and run tests, respectively (Node.js >= 6.0 or latest). See `package.json` for more info.

## Contributors
- [@svileng](http://twitter.com/svileng)

## License
- docrel: [LICENSE](https://github.com/svileng/docrel/blob/master/LICENSE)
- "Heresy" name and logo: Copyright © 2016 Heresy Software Ltd
