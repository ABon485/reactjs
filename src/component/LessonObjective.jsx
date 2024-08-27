import React from 'react';

const LessonObjective = ({ content }) => {
  const sections = content.split('\n').map(section => section.trim()).filter(section => section);

  return (
    <div style={{textAlign:"left", marginLeft:"50px",backgroundColor:"",fontSize:'16px'}}>
      <h3 style={{color:"#d62020"}}>MỤC TIÊU BÀI HỌC:</h3>
      {sections.map((section, index) => {
        const items = section.split('-').map(item => item.trim()).filter(item => item);
        return (
          <div key={index}>
            {items.map((item, subIndex) => (
              <p key={subIndex}>- {item}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default LessonObjective;