"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.setAttributes = setAttributes;
exports.setClassList = setClassList;
exports.setEventListeners = setEventListeners;
function createElement(tag) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var result = document.createElement(tag);

  setAttributes(result, options.attrs);
  setClassList(result, options.classList);
  setEventListeners(result, options.events);

  result.textContent = options.textContent;

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