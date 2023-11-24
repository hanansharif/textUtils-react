import React, {useState} from 'react'

 // console.log(useState('Enter '))

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success");
    }
    const handleSentence = () => {
        let sentences = Text.split('. '); // Assuming sentences are separated by periods and a space

     let newText = sentences.map(sentence => {
        let trimmedSentence = sentence.trim();
        if (trimmedSentence.length > 0) {
            return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
        } else {
            return '';
        }
    });

    setText(newText.join('. '));

    props.showAlert("Converted to Sentence Case","success");
    }
    const handleTitle = () => {
        /* let lowText = Text.toLowerCase();
        let newText = lowText.charAt(0).toUpperCase() + lowText.slice(1);
        */ 
       let newText = Text.toProperCase();
        setText(newText);

        props.showAlert("Converted to Title Case","success");
    }
    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText)

        props.showAlert("Converted to Lower Case","success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change triggered");
        setText(event.target.value);
    }
    const handleClear = (event) => {
        // console.log("On Change triggered");
        setText("");
    }
    const handleSpc = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success");
    }
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(Text)
            .then(() => {
                console.log('Text copied to clipboard');
                props.showAlert("Text Copied","success");
            })
            .catch((err) => {
                console.error('Unable to copy text to clipboard', err);
            });
    };
    
    const handlePasteFromClipboard = async () => {
        try {
            const copiedText = await navigator.clipboard.readText();
            setText(copiedText);
            console.log('Text pasted from clipboard');
        } catch (err) {
            console.error('Unable to paste text from clipboard', err);
        }
    }

    const [Text, setText] = useState('');
    // text = "new Text"; //Wrong Way
    // setText("new Text"); // Correct Way
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={Text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray': 'white', color: props.mode === 'dark' ? 'white': 'black'}} autoFocus></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary m-1" onClick={handleSentence}>Convert to Sentence Case</button>
        <button className="btn btn-primary m-1" onClick={handleTitle}>Convert to Title Case</button><br />
        <button className="btn btn-primary m-1" onClick={handleSpc}>Remove Extra Spaces</button>
        <button className="btn btn-primary m-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary m-1" onClick={handleCopyToClipboard}>Copy Text</button>
        <button className="btn btn-primary m-1" onClick={handlePasteFromClipboard}>Paste Text</button>
    </div>
    <div className="container my-5"  style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <h1>Your Text Summary</h1>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"Enter something in the textbox above to preview here."}</p>
    </div>
    </>
  )
}
