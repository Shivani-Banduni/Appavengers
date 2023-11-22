// components/DocumentGrid.js

import React from 'react';
import { useSelector } from 'react-redux';

const DocumentGrid = () => {
const[allDocuments,setalldocuments]=React.useState ([])
const getalldata=async()=>{
const data=await fetch('http://localhost:9000/api/content')
const alldata=await data.json()
console.log(alldata)
setalldocuments(alldata)
}
React.useEffect(() => {
   getalldata()
   
}, []);

  return (
    <div className="document-grid">
      { allDocuments.length > 0 ? (
        allDocuments.map((document) => (
          <div key={document._id} className="card">
            <h3 >{document.title}</h3>
            <p>{document.body}</p>
          </div>
        ))
      ) : (
        <p>No documents available</p>
      )}
    </div>
  );
};

export default DocumentGrid;
