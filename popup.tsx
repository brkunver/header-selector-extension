import "./style.css"

import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function IndexPopup() {
  const [showHeaderSection, setShowHeaderSection] = useState(false)
  const [headers, setHeaders] = useState({
    header1: [""],
    header2: [""],
    header3: [""],
    header4: [""],
    header5: [""],
    header6: [""]
  })

  function getHeadersHandler() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getHeaders" },
        (response) => {
          setHeaders(response)
        }
      )
    })
    setShowHeaderSection(true)
  }

  function handleCopy() {
    let headerList: string[] = []
    for (let title of Object.values(headers)) {
      if (title.length > 1) {
        title.forEach((item) => {
          if (item) headerList.push(item)
        })
      }
    }
    console.log(JSON.stringify(headerList))
    navigator.clipboard.writeText(JSON.stringify(headerList))
  }

  return (
    <div className="w-[480] p-2 h-[300] overflow-y-auto bg-gradient-to-b from-emerald-900 to-cyan-900 text-white">
      <h1 className="mt-6">Click button to get headers on this page</h1>
      <button onClick={getHeadersHandler} className="">
        Get headers
      </button>
      {showHeaderSection ? (
        <button onClick={handleCopy}>
          Copy all headers in JSON array text format
        </button>
      ) : null}
      {showHeaderSection ? (
        <div className="flex flex-col justify-center my-4 space-y-3">
          <div>
            <h2>H1 headers</h2>

            {headers.header1.map((item) => {
              return <p key={uuidv4()}>➔ {item}</p>
            })}
          </div>
          <div>
            <h2>H2 headers</h2>

            {headers.header2.map((item) => {
              return <p key={uuidv4()}>➔ {item}</p>
            })}
          </div>
          <div>
            <h2>H3 headers</h2>

            {headers.header3.map((item) => {
              return <p key={uuidv4()}>➔ {item}</p>
            })}
          </div>

          <div>
            <h2>H4 headers</h2>

            {headers.header4.map((item) => {
              return <p key={uuidv4()}>➔ {item}</p>
            })}
          </div>
          <div>
            <h2>H5 headers</h2>

            {headers.header5.map((item) => {
              return <p key={uuidv4()}>➔ {item}</p>
            })}
          </div>
          <div>
            <h2>H6 headers</h2>

            {headers.header6.map((item) => {
              return <p key={uuidv4()}>➔ {item}</p>
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default IndexPopup
