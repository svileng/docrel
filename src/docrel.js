export function createElement(tag, options = {}, children) {
  let result = document.createElement(tag)

  result.textContent = options.textContent
  setAttributes(result, options.attrs)
  setClassList(result, options.classList)
  setEventListeners(result, options.events)

  appendChildren(result, children)

  return result
}

export function setAttributes(el, attrs = {}) {
  Object.keys(attrs).forEach(attrName => {
    if (attrs[attrName]) {
      el.setAttribute(attrName, attrs[attrName])
    }
  })
}

export function setClassList(el, classList = []) {
  classList.forEach(className => el.classList.add(className))
}

export function setEventListeners(el, events = {}) {
  Object.keys(events).forEach(eventName => {
    let eventFn = events[eventName]
    el.addEventListener(eventName, eventFn)
  })
}

export function appendChildren(node, children = []) {
  children.forEach(child => node.appendChild(child))
}
