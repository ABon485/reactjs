
import './App.css'
import ExportRecord1 from './component/ExportRecord1'

function App() {
  const record = [
  {
    "STT": "1",
    "Tên Học Viên ": "Đồng Thiên Hương ",
    "Lớp ": "EDS.RB.01",
    "Ngày học ": "25/07/2024",
    "Môn học": "Khóa học Robotics",
    "MỤC TIÊU BÀI HỌC ": "- Tìm hiểu chủ đề : Phát triển nông nghiệp\n- Kiến thức, khái niệm: Tìm hiểu về bộ Lego DUPLO , tập làm quen với các bước lắp ráp cơ bản, tìm hiểu về cấu tạo xe nông nghiệp.\n- Sản phẩm : Lắp ráp xe nông nghiệp.",
    "TRẠNG THÁI TINH THẦN ": "Con cực kì hứng khởi ",
    "1. KHÁM PHÁ": "A : Tập trung lắng nghe nội dung bài học, có sự chủ động, tương tác cao. Tích cực tham gia các hoạt động lớp học, đôi lúc còn đề xuất các hoạt động trò chơi cho cả lớp.",
    "2. TƯ DUY PHẢN BIỆN": "B : Bạn tích cực lắng nghe và đặt câu hỏi, trao đổi xây dựng bài học. Nhớ được kiến thức cũ nhưng còn bối rối trong việc áp dụng thêm kiến thức mới, hoàn thành tốt nhiệm vụ được giao.",
    "3. KỸ NĂNG": "B : Phát huy tốt các kỹ năng về lắp ráp và lập trình trên máy tính. Nhớ được các chức năng của linh kiện, câu lệnh. Đôi lúc còn bị vấp ở các bước thử thách khó. Có sự cố gắng qua từng buổi học..",
    "4. SẢN PHẨM": "A : Sản phẩm có chủ đề rõ ràng, đạt hơn 70% kiến thức bài học. Có sự mở rộng về tính năng hoạt động. Có tính thẩm mỹ tốt, được thiết kế theo hướng cá nhân hóa, khả năng sáng tạo cao.",
    "5. KỸ NĂNG GIAO TIẾP, CHIA SẺ Ý TƯỞNG": "B : Bạn đã tự tin trong giao tiếp và tương tác với thầy cô và bạn bè, tham gia hoạt động nhóm tích cực. Trình bày được ý tưởng, nhưng chưa trôi chảy.",
    "NHẬN XÉT KHÁC ": "Hôm nay con được làm quen với buổi đầu tiên, tiếp xúc với lego duplo, nhưng cô đánh giá con khá tốt khi nhận biết và lấy các mảnh ghép. Đôi lúc con còn gặp khó khăn trong việc lắp ráp các khớp chuyển động khó, nhưng con đã vượt qua và thực hiện được. Con có sự cẩn thận và tỉ mỉ tốt."
    }
    
  ]
  
  return (
    <>
     <ExportRecord1 record = {record[0]}/>
    </>
  )
}

export default App
