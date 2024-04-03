const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Lấy các phần tử input từ form
const nameInput = document.getElementById('name');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

// Lấy các form từ DOM
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

// Xử lý sự kiện khi người dùng submit form đăng ký
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi để kiểm tra dữ liệu trước

    const name = nameInput.value.trim(); // Lấy tên từ input và loại bỏ các khoảng trắng ở đầu và cuối
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Kiểm tra định dạng tên
    if (!isValidName(name)) {
        alert('Please enter a valid name.'); // Thông báo lỗi nếu tên không hợp lệ
        return;
    }

    // Kiểm tra định dạng email và mật khẩu cũng có thể thực hiện tương tự

    // Nếu dữ liệu hợp lệ, có thể gửi form đi hoặc thực hiện các hành động khác tùy thuộc vào yêu cầu của bạn
});

// Hàm kiểm tra định dạng tên
function isValidName(name) {
    // Định nghĩa các điều kiện cho tên, ví dụ: phải có ít nhất 2 ký tự và không chứa ký tự đặc biệt
    const nameRegex = /^[a-zA-Z ]{2,}$/; // Sử dụng regex để kiểm tra

    return nameRegex.test(name); // Trả về true nếu tên hợp lệ, ngược lại trả về false
}
