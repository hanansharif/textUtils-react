import React, {useState} from 'react'

export default function About(props) {
  return (
    <div className="container">
      <h1 className={`m-3 text-${props.mode === 'light' ? 'dark': 'light'}`}>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item mx-3 mt-3" style={{backgroundColor: props.mode === 'dark' ? 'gray': 'white', color: props.mode === 'dark' ? 'white': 'black'}}>
          <h2 className="accordion-header">
            <button className="accordion-button"type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode === 'dark' ? 'rgb(90,90,90)': 'white', color: props.mode === 'dark' ? 'white': 'black'}}>
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, capitalize, small case, title case, sentence case and remove extra spaces, etc
            </div>
          </div>
        </div>
        <div className="accordion-itemv mx-3" style={{backgroundColor: props.mode === 'dark' ? 'gray': 'white', color: props.mode === 'dark' ? 'white': 'black'}}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode === 'dark' ? 'rgb(90,90,90)': 'white', color: props.mode === 'dark' ? 'white': 'black'}}>
            <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils is a free text analyzer tool that provide instant word count and character count stats and treats your text. Suitable for writing text with word or character limits. <br />But it no limit of word count.
            </div>
          </div>
        </div>
        <div className="accordion-item mx-3 mb-3" style={{backgroundColor: props.mode === 'dark' ? 'gray': 'white', color: props.mode === 'dark' ? 'white': 'black'}}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode === 'dark' ? 'rgb(90,90,90)': 'white', color: props.mode === 'dark' ? 'white': 'black'}}>
            <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books. Excel Document, pdf Document, Essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
