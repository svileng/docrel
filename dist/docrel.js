"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.setAttributes = setAttributes;
exports.setClassList = setClassList;
exports.setEventListeners = setEventListeners;
exports.appendChildren = appendChildren;
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