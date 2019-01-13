import React from 'react';

const Detail = ({name,value}) => {
  return (
      <li className="list-group-item">
    
    {name} <span className="badge badge-primary">{value}</span>
    
    </li>
  );
}

export default Detail;