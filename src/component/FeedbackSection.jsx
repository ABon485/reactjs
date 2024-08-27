import React from 'react';

const FeedbackSection = ({ title, content }) => {
  return (
    <div className="Feedback" style={{padding:'10px', fontSize:'16px'}} >
      <h3 className="font-semibold">{title}:</h3>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
};

export default FeedbackSection;