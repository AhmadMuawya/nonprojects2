import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo"; //rtreffer to https://gcoro.github.io/QRCodeCustomizer/
import './QrcodeGenerator.css'; // Import the CSS file


const QrcodeGeneratorWLogo = () => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleDownload = () => {
        const qrCodeElement = document.getElementById('react-qrcode-logo');
        const url = qrCodeElement.toDataURL("image/png/");
        const link = document.createElement("a");
        link.href = url;
        link.download = `${input}.png`;
        link.click();
    }

    return (
        <>
            <div className="qr-generator-container">
                <h1>QR Code Generator</h1>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter text or URL"
                />
                <div className="qr-code-display">
                    {input && (
                        <QRCode
                            id="react-qrcode-logo"
                            value={input}
                            size={256}
                            logoImage="https://e7.pngegg.com/pngimages/614/895/png-clipart-circle-red-logo-red-circle-logo-sphere.png" // Replace with your logo URL
                            logoWidth={60} // Adjust logo size
                            logoHeight={60}
                            logoOpacity={0.8} // Optional: Adjust logo opacity
                            qrStyle="squares" // Optional: Choose style (squares or dots)
                        />
                    )}
                </div>
                {input && (
                    <button onClick={handleDownload}>Download</button>
                )}
            </div>
        </>
    );
};

export default QrcodeGeneratorWLogo;
