export function createElement(tag, options = {}) {
  let result = document.createElement(tag)

  setAttributes(result, options.attrs)
  setClassList(result, options.classList)
  setEventListeners(result, options.events)

  result.textContent = options.textContent

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
