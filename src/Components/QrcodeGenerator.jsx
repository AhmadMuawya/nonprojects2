import React ,  { useState , useRef } from "react";
import Qrcode from 'qrcode.react';
import "./QrcodeGenerator.css"

const QrcodeGenerator = ()=>{
    const [input , setInput] = useState('');
    const qrRef = useRef(null);

    const handleInputChange = (e) =>{
        setInput(e.target.value);
    }
    const handleDownload = ()=>{
        const cnvs = document.querySelector('canvas');
        const url = cnvs.toDataURL("image/png/");

        const link = document.createElement("a");
        link.href = url ;
        link.download = `${input}.png`;
       qrRef.current.appendChild(link);
       console.log(qrRef.current);
        link.click();
        qrRef.current.removeChild(link);
        
    }

    return(
        <>
        <div className="qr-generator-container">
        <h1>QR Code generator</h1>
        <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a text or a URL"
        />
            <div className="qr-code-display" ref={qrRef}>
                {input && (
                    <Qrcode 
                    value={input}
                    size={256}
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="H"
                    includeMargin={true}  
                    />
                )}
                {input && (
                    <button onClick={handleDownload}>Download</button>
                ) }
            </div>
            
        </div>
        
        
        </>
    );
    
};

export default QrcodeGenerator ;