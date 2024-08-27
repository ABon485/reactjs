import React, { useRef } from 'react';
import { Button, Col, Row } from 'antd';
import StatusIcon from './statusIcon';
import '../component/Style/styleExportRecord.css';
import LessonObjective from './LessonObjective';
import FeedbackResult from './FeedbackResult';
import logo from '../assets/react.svg';
const ExportRecord = ({ record }) => {
  const exportRef = useRef(null);
  const content1 = record['MỤC TIÊU BÀI HỌC '] || '';
  const content = record;
  return (
    <>
      <div className="export-container">
        <div ref={exportRef} >
          <Row className="logo-header" justify='center'>
            <Col>
              <img src={logo} alt="Logo" height="60" />
            </Col>
          </Row>
          <Row className="result-section">
            <Col span={14}>
              <div className="info-row">
                <h3>Họ tên học sinh:</h3>
                <p>{record["Tên Học Viên "]}</p>
              </div>
              <div className="info-row">
                <h3>Ngày:</h3>
                <p>{record['Ngày học ']}</p>
              </div>
              <div className="info-row">
                <h3>Môn học:</h3>
                <p>{record['Môn học']}</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="info-row">
                <h3>Lớp:</h3>
                <p>{record['Lớp ']}</p>
              </div>
            </Col>
            <Col span={4} className="status-icon-col">
              <StatusIcon status={record['TRẠNG THÁI TINH THẦN ']} />
            </Col>
          </Row>
          <Row className='Result-2'>
            <Col>
              <LessonObjective content={content1} />
            </Col>
          </Row>
          <Row className='Result-3'>
            <Col>
              <FeedbackResult content={content} />
            </Col>
          </Row>
          {/* <Row className="result-section" style={{ marginTop: '20px', height: 'auto', padding: '10px' }} justify='center' >
            <Col span={16}>
            </Col>
          </Row> */}
        </div>
      </div>
      <Button onClick="{handleDownload}" className="download-button">Tải Xuống</Button>
    </>
  );
};

export default ExportRecord;