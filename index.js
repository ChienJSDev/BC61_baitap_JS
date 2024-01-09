// Bài tập 1
document.getElementById('btnKetQua').onclick = function () {
    var soNgay = document.getElementById('txt-ngayLuong').value * 1;
    var luong1Ngay = 100000;
    var ketQua = soNgay * luong1Ngay;
    var fomatLuong = ketQua.toLocaleString({
        style: 'currency',
        currency: 'VND'
    })
    document.getElementById('ketQua1').innerHTML = ` Lương của bạn tháng này là ${fomatLuong} VNĐ`;
}

// Bài tập 2
document.getElementById('btnKetQua2').onclick = function () {
    var so1 = document.getElementById('txt-so1').value * 1;
    var so2 = document.getElementById('txt-so2').value * 1;
    var so3 = document.getElementById('txt-so3').value * 1;
    var so4 = document.getElementById('txt-so4').value * 1;
    var so5 = document.getElementById('txt-so5').value * 1;
    var giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
    var fomatGiaTriTrungBinh = giaTriTrungBinh.toLocaleString({
        style: 'currency',
    })
    document.getElementById('ketQua2').innerHTML = ` Giá trị trung bình là ${fomatGiaTriTrungBinh}`;
}

// Bài tập 3
document.getElementById('btnKetQua3').onclick = function () {
    var tienVND = 23500;
    var usd = document.getElementById('txt-soTien').value * 1;
    var tien = usd * tienVND;
    document.getElementById('ketQua3').innerHTML = tien; 
}

// Bài tập 4
document.getElementById('btnKetQua4').onclick = function () {
    var chieuDai = document.getElementById('txt-chieuDai').value * 1;
    var chieuRong = document.getElementById('txt-chieuRong').value * 1;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById('ketQua4').innerHTML = ` Chu vi: ${chuVi}, diện tích: ${dienTich}.`;
}

// Bài tập 5
document.getElementById('btnKetQua5').onclick = function () {
    var so = document.getElementById('txt-kiSo').value * 1;
    var soHangDonVi = so % 10;
    let soHangChuc = (so - soHangDonVi)/10
    var tong = soHangChuc + soHangDonVi;
    document.getElementById('ketQua5').innerHTML = tong;
}