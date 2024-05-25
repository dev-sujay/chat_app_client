'use client'
import React, { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const PdfViewer = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const link = "https://chat-pdf-js-lang-45675-sujaypaul.s3.ap-south-1.amazonaws.com/1716642761961-sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAU6GDYHL2JFE4ZN4Q%2F20240525%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240525T131243Z&X-Amz-Expires=43200&X-Amz-Signature=8cee5688241da637661b2418b398f08d47fcbd7ae0506c12cce4f98b9c15d633&X-Amz-SignedHeaders=host&x-id=GetObject"

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
            <p className="text-center text-sm mt-3">
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );

}

export default PdfViewer