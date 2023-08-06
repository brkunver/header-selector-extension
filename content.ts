export {}

chrome.runtime.onMessage.addListener(onMessageHandler)

function onMessageHandler(message: any, sender, sendResponse: Function) {
  if (message.action == "getHeaders") {
    const header1 = Array.from(document.querySelectorAll("h1")).map(
      (header) => header.textContent
    )
    const header2 = Array.from(document.querySelectorAll("h2")).map(
      (header) => header.textContent
    )
    const header3 = Array.from(document.querySelectorAll("h3")).map(
      (header) => header.textContent
    )
    const header4 = Array.from(document.querySelectorAll("h4")).map(
      (header) => header.textContent
    )
    const header5 = Array.from(document.querySelectorAll("h5")).map(
      (header) => header.textContent
    )
    const header6 = Array.from(document.querySelectorAll("h6")).map(
      (header) => header.textContent
    )
    sendResponse({ header1, header2, header3, header4, header5, header6 })
  }
}

console.log("content script activated")
