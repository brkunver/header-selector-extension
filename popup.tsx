import "./style.css"

import { useState } from "react"

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

  return (
    <div className="w-[480] p-2 h-[200] overflow-y-auto bg-gradient-to-b from-emerald-900 to-cyan-900 text-white">
      <h1 className="mt-6">Click button the get headers on this page</h1>
      <button
        onClick={getHeadersHandler}
        className="mx-auto my-4 block border border-gray-600 font-semibold bg-emerald-800 px-2 rounded-lg py-1 text-base hover:scale-105 transition-all ease-in-out duration-100 hover:bg-emerald-700 active:bg-emerald-600">
        Get headers
      </button>
      {showHeaderSection ? (
        <div className="flex flex-col justify-center my-4 ">
          <div>
            <h2>H1 headers</h2>

            {headers.header1.map((item) => {
              return <p>➔ {item}</p>
            })}
          </div>
          <div>
            <h2>H2 headers</h2>

            {headers.header2.map((item) => {
              return <p>➔ {item}</p>
            })}
          </div>
          <div>
            <h2>H3 headers</h2>

            {headers.header3.map((item) => {
              return <p>➔ {item}</p>
            })}
          </div>

          <div>
            <h2>H4 headers</h2>

            {headers.header4.map((item) => {
              return <p>➔ {item}</p>
            })}
          </div>
          <div>
            <h2>H5 headers</h2>

            {headers.header5.map((item) => {
              return <p>➔ {item}</p>
            })}
          </div>
          <div>
            <h2>H6 headers</h2>

            {headers.header6.map((item) => {
              return <p>➔ {item}</p>
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default IndexPopup
