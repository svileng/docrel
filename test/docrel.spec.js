let {
  create,
  createElement,
  setAttributes,
  setClassList,
  setEventListeners,
  appendChildren,
  div
} = require("../dist/docrel.js")

describe("docrel", () => {

  describe("create", () => {
    beforeEach(() => {
      global.document = {
        createElement: jasmine.createSpy().and.returnValue({})
      }
    })

    it("calls createElement", () => {
      const [span] = create("span")
      span()
      expect(global.document.createElement).toHaveBeenCalledWith("span")
    })
  })

  describe("tag helpers", () => {
    beforeEach(() => {
      global.document = {
        createElement: jasmine.createSpy().and.returnValue({})
      }
    })

    it("calls createElement", () => {
      div()
      expect(global.document.createElement).toHaveBeenCalledWith("div")
    })
  })

  describe("createElement", () => {
    beforeEach(() => {
      global.document = {
        createElement: jasmine.createSpy().and.returnValue({})
      }
    })

    it("calls document.createElement with given param", () => {
      createElement("foo")
      expect(global.document.createElement).toHaveBeenCalledWith("foo")
    })

    it("sets textContent", () => {
      var el = createElement("foo", {textContent: "yo"})
      expect(el.textContent).toBe("yo")
    })

    it("sets id", () => {
      var el = createElement("foo", {id: "yo"})
      expect(el.id).toBe("yo")
    })

    it("sets className", () => {
      var el = createElement("foo", {class: "yo sup"})
      expect(el.className).toBe("yo sup")
    })
  })

  describe("setAttributes", () => {
    beforeEach(() => {
      this.node = {
        setAttribute: jasmine.createSpy()
      }
    })

    it("calls setAttribute for every given attribute", () => {
      setAttributes(this.node, {attrA: "foo", attrB: "bar"})
      expect(this.node.setAttribute).toHaveBeenCalledWith("attrA", "foo")
      expect(this.node.setAttribute).toHaveBeenCalledWith("attrB", "bar")
    })

    it("does nothing when no attributes given", () => {
      setAttributes(this.node, undefined)
      expect(this.node.setAttribute).not.toHaveBeenCalled()
    })
  })

  describe("setClassList", () => {
    beforeEach(() => {
      this.node = {
        classList: {add: jasmine.createSpy()}
      }
    })

    it("calls classList.add for every given string", () => {
      setClassList(this.node, ["foo", "bar", "baz"])
      expect(this.node.classList.add).toHaveBeenCalledWith("foo")
      expect(this.node.classList.add).toHaveBeenCalledWith("bar")
      expect(this.node.classList.add).toHaveBeenCalledWith("baz")
    })

    it("does nothing when no params given", () => {
      setAttributes(this.node, undefined)
      expect(this.node.classList.add).not.toHaveBeenCalled()
    })
  })

  describe("setEventListeners", () => {
    beforeEach(() => {
      this.node = {
        addEventListener: jasmine.createSpy()
      }
    })

    it("calls addEventListener for every given event", () => {
      setEventListeners(this.node, {ev1: "fn1", ev2: "fn2"})
      expect(this.node.addEventListener).toHaveBeenCalledWith("ev1", "fn1")
      expect(this.node.addEventListener).toHaveBeenCalledWith("ev2", "fn2")
    })

    it("does nothing when no params given", () => {
      setAttributes(this.node, undefined)
      expect(this.node.addEventListener).not.toHaveBeenCalled()
    })
  })

  describe("appendChildren", () => {
    beforeEach(() => {
      this.node = {
        appendChild: jasmine.createSpy()
      }
    })

    it("calls appendChild for every given child element", () => {
      appendChildren(this.node, ["foo", "bar"])
      expect(this.node.appendChild).toHaveBeenCalledWith("foo")
      expect(this.node.appendChild).toHaveBeenCalledWith("bar")
    })

    it("does nothing when no params given", () => {
      appendChildren(this.node, undefined)
      expect(this.node.appendChild).not.toHaveBeenCalled()
    })
  })

})
