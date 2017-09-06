export function create(...tags) {
  return tags.map(tag => (options, children) => {
    return createElement(tag, options, children)
  })
}

export function createElement(tag, options = {}, children) {
  let result = document.createElement(tag)

  result.textContent = options.textContent

  if (options.id) result.id = options.id
  if (options.class) result.className = options.class

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

export let a = create("a")[0]
export let article = create("article")[0]
export let aside = create("aside")[0]
export let b = create("b")[0]
export let br = create("br")[0]
export let button = create("button")[0]
export let canvas = create("canvas")[0]
export let div = create("div")[0]
export let footer = create("footer")[0]
export let form = create("form")[0]
export let h1 = create("h1")[0]
export let h2 = create("h2")[0]
export let h3 = create("h3")[0]
export let h4 = create("h4")[0]
export let h5 = create("h5")[0]
export let h6 = create("h6")[0]
export let header = create("header")[0]
export let hr = create("hr")[0]
export let i = create("i")[0]
export let iframe = create("iframe")[0]
export let img = create("img")[0]
export let input = create("input")[0]
export let label = create("label")[0]
export let li = create("li")[0]
export let link = create("link")[0]
export let main = create("main")[0]
export let meta = create("meta")[0]
export let nav = create("nav")[0]
export let ol = create("ol")[0]
export let option = create("option")[0]
export let progress = create("progress")[0]
export let script = create("script")[0]
export let section = create("section")[0]
export let select = create("select")[0]
export let span = create("span")[0]
export let style = create("style")[0]
export let sub = create("sub")[0]
export let sup = create("sup")[0]
export let svg = create("svg")[0]
export let table = create("table")[0]
export let tbody = create("tbody")[0]
export let td = create("td")[0]
export let textarea = create("textarea")[0]
export let th = create("th")[0]
export let tr = create("tr")[0]
export let ul = create("ul")[0]
export let video = create("video")[0]
