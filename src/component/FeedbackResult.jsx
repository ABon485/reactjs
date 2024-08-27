import React from 'react';
import { Row, Col } from 'antd';
import FeedbackSection from './FeedbackSection';
import '../component/Style/styleFeedbackResult.css'; 

const FeedbackResult = ({ content }) => {
  const {
    "1. KHÁM PHÁ": exploration,
    "2. TƯ DUY PHẢN BIỆN": criticalThinking,
    "3. KỸ NĂNG": skills,
    "4. SẢN PHẨM": product,
    "5. KỸ NĂNG GIAO TIẾP, CHIA SẺ Ý TƯỞNG": communicationSkills,
    "NHẬN XÉT KHÁC ": additionalComments,
  } = content;

  return (
    <div className="p-4 bg-card text-card-foreground rounded-lg shadow-md" style={{ paddingTop: '20px', paddingLeft:"28px", paddingRight:"40px"}}>
      <Row gutter={16} className="table-container">
        <Col span={12} className="table-col">
          <Row gutter={16}>
            <Col span={24} className="table-item">
              <FeedbackSection title="1. KHÁM PHÁ" content={exploration} />
            </Col>
            <Col span={24} className="table-item">
              <FeedbackSection title="2. TƯ DUY PHẢN BIỆN" content={criticalThinking} />
            </Col>
            <Col span={24} className="table-item">
              <FeedbackSection title="3. KỸ NĂNG LẮP RÁP / LẬP TRÌNH" content={skills} />
            </Col>
          </Row>
        </Col>
        <Col span={12} className="table-col">
          <Row gutter={16}>
            <Col span={24} className="table-item">
              <FeedbackSection title="4. SẢN PHẨM" content={product} />
            </Col>
            <Col span={24} className="table-item">
              <FeedbackSection title="5. KỸ NĂNG GIAO TIẾP, CHIA SẺ Ý TƯỞNG" content={communicationSkills} />
            </Col>
            <Col span={24} className="table-item">
              <FeedbackSection title="6. NHẬN XÉT KHÁC" content={additionalComments} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FeedbackResult;