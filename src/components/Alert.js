import React from "react";

export default function Alert({alertDetail}) {
 function capitalize(word){
    let temp=word.toLowerCase();
     return temp[0].toUpperCase()+temp.slice(1);
   
    
 }
  return (
    alertDetail.type && <div className={`alert alert-${alertDetail.type} alert-dismissible fade show my-3`} role="alert">
      <strong>{capitalize(alertDetail.type)}!</strong>{alertDetail.msg} 
    </div>
  );
}
