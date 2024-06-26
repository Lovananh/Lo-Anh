const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang Web Của Tôi</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        header {
            background-color: #2baa84;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        nav {
            background-color: #85fdf5;
            padding: 10px 0;
            text-align: center;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin-right: 20px;
        }
        nav ul li a {
            color: #100e0e;
            text-decoration: none;
        }
        .container {
            text-align: center;
            max-width: 800px;
            margin: 20px auto;
            padding: 0 20px;
        }
        footer {
            background-color: #202450;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        /* Thêm CSS cho phần liên hệ */
        .contact-info {
            padding: 20px;
            margin-top: 20px;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Viền nổi */
            background-color: #557ce7;
        }
        .contact-info label {
            font-weight: bold;
        }
        .contact-info input[type="text"],
        .contact-info input[type="email"],
        .contact-info textarea {
            width: 100%;
            padding: 8px;
            margin-top: 6px;
            margin-bottom: 16px;
            resize: vertical;
            box-sizing: border-box;
            border: 1px solid #ccc; /* Viền cho input và textarea */
            border-radius: 5px; /* Bo góc */
        }
        .contact-info input[type="submit"] {
            background-color: #4857e1;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px; /* Bo góc */
            cursor: pointer;
        }
        .contact-info input[type="submit"]:hover {
            background-color: #1b10ae;
        }
    </style>
</head>
<body>
    <header>
        <h1> Lò Văn Anh</h1>
        <h2>msv :22810310019 </h2>
    </header>
    <nav>
        <ul>
            <li><a href="#">Trang Chủ</a></li>
            <li><a href="#">Giới Thiệu</a></li>
            <li><a href="#">Dịch Vụ</a></li>
            <li><a href="#">Liên Hệ</a></li>
        </ul>
    </nav>
    <div class="container">
        <h2> Chào mừng bạn đến với L.V.A </h2>
        <div class="contact-info">
            <h2>Liên Hệ</h2>
            <form id="contact-form" action="#" method="post">
                <label for="name">Họ và Tên:</label><br>
                <input type="text" id="name" name="name" required><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br>
                <label for="message">Tin nhắn:</label><br>
                <textarea id="message" name="message" rows="4" required></textarea><br>
                <input type="submit" value="Gửi">
            </form>
            <div id="success-message" style="display: none; color: rgb(196, 231, 20);">Gửi thành công!</div>
        </div>
    </div>
    
    <script>
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('success-message').style.display = 'block';
        });
    </script>
</body>
</html>

`
