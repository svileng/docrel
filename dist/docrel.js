"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.createElement = createElement;
exports.setAttributes = setAttributes;
exports.setClassList = setClassList;
exports.setEventListeners = setEventListeners;
exports.appendChildren = appendChildren;
function create() {
  for (var _len = arguments.length, tags = Array(_len), _key = 0; _key < _len; _key++) {
    tags[_key] = arguments[_key];
  }

  return tags.map(function (tag) {
    return function (options, children) {
      return createElement(tag, options, children);
    };
  });
}

function createElement(tag) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = arguments[2];

  var result = document.createElement(tag);

  result.textContent = options.textContent;

  if (options.id) result.id = options.id;
  if (options.class) result.className = options.class;

  setAttributes(result, options.attrs);
  setClassList(result, options.classList);
  setEventListeners(result, options.events);

  appendChildren(result, children);

  return result;
}

function setAttributes(el) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Object.keys(attrs).forEach(function (attrName) {
    if (attrs[attrName]) {
      el.setAttribute(attrName, attrs[attrName]);
    }
  });
}

function setClassList(el) {
  var classList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  classList.forEach(function (className) {
    return el.classList.add(className);
  });
}

function setEventListeners(el) {
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Object.keys(events).forEach(function (eventName) {
    var eventFn = events[eventName];
    el.addEventListener(eventName, eventFn);
  });
}

function appendChildren(node) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  children.forEach(function (child) {
    return node.appendChild(child);
  });
}

var a = exports.a = create("a")[0];
var article = exports.article = create("article")[0];
var aside = exports.aside = create("aside")[0];
var b = exports.b = create("b")[0];
var br = exports.br = create("br")[0];
var button = exports.button = create("button")[0];
var div = exports.div = create("div")[0];
var footer = exports.footer = create("footer")[0];
var form = exports.form = create("form")[0];
var h1 = exports.h1 = create("h1")[0];
var h2 = exports.h2 = create("h2")[0];
var h3 = exports.h3 = create("h3")[0];
var h4 = exports.h4 = create("h4")[0];
var h5 = exports.h5 = create("h5")[0];
var h6 = exports.h6 = create("h6")[0];
var header = exports.header = create("header")[0];
var hr = exports.hr = create("hr")[0];
var i = exports.i = create("i")[0];
var img = exports.img = create("img")[0];
var input = exports.input = create("input")[0];
var label = exports.label = create("label")[0];
var li = exports.li = create("li")[0];
var link = exports.link = create("link")[0];
var main = exports.main = create("main")[0];
var meta = exports.meta = create("meta")[0];
var nav = exports.nav = create("nav")[0];
var option = exports.option = create("option")[0];
var script = exports.script = create("script")[0];
var section = exports.section = create("section")[0];
var select = exports.select = create("select")[0];
var span = exports.span = create("span")[0];
var style = exports.style = create("style")[0];
var sub = exports.sub = create("sub")[0];
var sup = exports.sup = create("sup")[0];
var svg = exports.svg = create("svg")[0];
var table = exports.table = create("table")[0];
var tbody = exports.tbody = create("tbody")[0];
var td = exports.td = create("td")[0];
var textarea = exports.textarea = create("textarea")[0];
var th = exports.th = create("th")[0];
var tr = exports.tr = create("tr")[0];
var ul = exports.ul = create("ul")[0];
var video = exports.video = create("video")[0];