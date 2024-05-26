'use client'
import React, { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const PdfViewer = () => {
    const [numPages, setNumPages] = useState();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const link = "https://chat-pdf-js-lang-45675-sujaypaul.s3.ap-south-1.amazonaws.com/1716703199255-sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAU6GDYHL2JFE4ZN4Q%2F20240526%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240526T060019Z&X-Amz-Expires=43200&X-Amz-Signature=f3ea3f75e67f4fe84220339ca8d92b76be44a9358d745c33272c87b39480380b&X-Amz-SignedHeaders=host&x-id=GetObject"

    return (
        <div className='h-full overscroll-y-auto overflow-x-hidden' >
            <Document file={{
                url : link
            }} 
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
                console.log(error)
            }}
            >
            {
                Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page) => (
                <Page pageNumber={page} renderAnnotationLayer={false} renderTextLayer={false} />
                ))
            }
            </Document>
        </div>
    );

}

export default PdfViewer