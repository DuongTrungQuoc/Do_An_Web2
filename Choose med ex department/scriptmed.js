document.addEventListener("DOMContentLoaded", function() {
    var departmentButtons = document.querySelectorAll(".department-button");
    departmentButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Xóa class "selected" khỏi tất cả các button trước khi chọn button mới
            departmentButtons.forEach(function(btn) {
                btn.classList.remove("selected");
            });
            // Thêm class "selected" cho button được click
            this.classList.add("selected");
            var departmentName = this.querySelector("span").textContent;
            alert("Bạn đã chọn " + departmentName + " thành công!");
            // Thực hiện hành động khác khi người dùng chọn khoa ở đây
        });
    });
});
