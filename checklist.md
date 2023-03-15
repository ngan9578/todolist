Xây dựng dự dán Todolist: sử dụng làm danh sách ghi chú những việc bạn cần làm hoặc muốn làm và theo dõi các công việc bạn muốn thực hiện
1. Thiết kế HTML
2. Thiết kế css
3. Phân tích và thiết kế nơi lưu trữ dữ liệu
4. save Data (tạo ra hằng số đê lưu trữ liệu vào locoStorage)
5. load data (tạo ra hằng số đê lấy trữ liệu từ locoStorage)
6. add task (thêm công việc vào locaStorage)
7. render task (chuyển dữ liệu ở localStorage lên HTML)
- data
- map
- show html
8. markTasksComplete (đánh dấu trang thái công việc hoàn thành)
- add event onclick
- index
- update is_complete
- saveData()
9.deleteTask(Xóa công việc)
- add event onclick
- index
-splice(index, 1)
- saveData
- - show html
10. pusheditTasks (chỉnh sửa công việc)
- add event onclick
- index
- Đẩy dữ liệu task lên input
- chuyển nút button Add -> Edit
11. save editTask
- Đẩy giá trị index vào input setAttribute
- Lấy giá trị index của task getAttribute
- Tạo điều kiện if có index là edit ko có add
- tạo ra hàm edit
- Xóa index ở điều kiện if để nó trở lại bẳng nhập thông thường
12. Hiển thị số lượng công việc hoàn thành
13. Tối ưu dữ liệu trống - tạo phím tắt ESC
14. Dọn rác và lưu ý khi nhập dữ liệu 
