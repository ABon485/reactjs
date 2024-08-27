import React from 'react';
// import './styleStatusIcon.css'
const StatusIcon = ({ status }) => {
  switch (status) {
    case "Con cực kì hứng khởi ":
      return <div className='Icon'>😍</div>
    case "Con vui ":
      return <div className='Icon'>😆</div>;
    default:
      return <div className='Icon'>😌</div>;
  }
};

export default StatusIcon;