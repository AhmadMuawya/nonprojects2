import React, { useState, useRef } from "react";
import Qrcode from 'qrcode.react';
import "./QrcodeGenerator.css";

const QrcodeGeneratorVCF = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        title: '',
        website: '',
    });

    const qrRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const generateVCard = () => {
        return (
            `BEGIN:VCARD\n` +
            `VERSION:3.0\n` +
            `N:${formData.lastName};${formData.firstName}\n` +
            `FN:${formData.firstName} ${formData.lastName}\n` +
            `ORG:${formData.company}\n` +
            `TITLE:${formData.title}\n` +
            `TEL:${formData.phone}\n` +
            `EMAIL:${formData.email}\n` +
            `URL:${formData.website}\n` +
            `END:VCARD`
        );
    };

    const handleDownload = () => {
        const cnvs = document.querySelector('canvas');
        const url = cnvs.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = url;
        link.download = `vCard_${formData.firstName}_${formData.lastName}.png`;
        qrRef.current.appendChild(link);
        link.click();
        qrRef.current.removeChild(link);
    };

    return (
        <>
            <div className="qr-generator-container">
                <h1>vCard QR Code Generator</h1>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                />
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Job Title"
                />
                <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Website URL"
                />
                <div className="qr-code-display" ref={qrRef}>
                    <Qrcode
                        value={generateVCard()}
                        size={256}
                        bgColor="#FFFFFF"
                        fgColor="#5F699A"
                        level="H"
                        includeMargin={true}
                    />
                    <button onClick={handleDownload}>Download</button>
                </div>
            </div>
        </>
    );
};

export default QrcodeGeneratorVCF;
