// Tao mang
var numberList = [];
var numberSoNguyen = [];
var numberListTangDan = [];
document.getElementById("btnThemSo").onclick = function () {
  var number = document.getElementById("txtNumber").value * 1;
  // them so tu user
  numberList.push(number);
  document.getElementById("footerCard").innerHTML = numberList;
};
document.getElementById("btnTongSoDuong").onclick = function () {
  var tong = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      tong += numberList[i];
    }
  }
  document.getElementById("footerCard").innerHTML = "Tong so duong " + tong;
};
document.getElementById("btnDemSoDuong").onclick = function () {
  /**
   * - Tạo biến đếm: count
   * - Duyệt = numberList
   * - Nếu như phần tử < 0
   *      => Tăng 1 đơn vị cho biến count
   */
  var count = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      count++;
    }
  }
  document.getElementById("footerCard").innerHTML = "Co " + count + " duong";
};
document.getElementById("btnSoNhoNhat").onclick = function () {
  var flag = numberList[0];
  for (var i = 1; i < numberList.length; i++) {
    if (numberList[i] < flag) {
      flag = numberList[i];
    }
  }
  document.getElementById("footerCard").innerHTML = "So nho nhat la : " + flag;
};
document.getElementById("btnSoDuongNhoNhat").onclick = function () {
  var flag = 100;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] < flag && numberList[i] > 0) {
      flag = numberList[i];
    }
  }
  document.getElementById("footerCard").innerHTML = "So nho nhat la : " + flag;
};
document.getElementById("btnSoChanCuoiCung").onclick = function () {
  var flag = -1;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0) {
      flag = numberList[i];
    }
  }
  document.getElementById("footerCard").innerHTML =
    "So chan cuoi cung la : " + flag;
};
document.getElementById("btnXapSep").onclick = function () {
  numberListTangDan = numberList;
  for (var i = 0; i < numberListTangDan.length - 1; i++) {
    for (var j = i + 1; j < numberListTangDan.length; j++) {
      if (numberListTangDan[i] > numberListTangDan[j]) {
        //Hoan vi
        var temp = numberListTangDan[i];
        numberListTangDan[i] = numberListTangDan[j];
        numberListTangDan[j] = temp;
      }
    }
  }
  document.getElementById("footerCard").innerHTML =
    "Sap Xep theo thu tu tang dan : " + numberListTangDan;
};
function soNT(soN) {
  var count = 0;
  for (var i = 1; i <= soN; i++) {
    if (soN % i === 0) {
      count++;
    }
  }
  return count;
}
document.getElementById("btnSoNTDau").onclick = function () {
  var kq = -1;

  for (var i = 0; i <= numberList.length; i++) {
    var flag = soNT(numberList[i]);
    if (flag == 2) {
      kq = numberList[i];
      break;
    }
  }
  document.getElementById("footerCard").innerHTML =
    "So nguyen to dau la : " + kq;
};
document.getElementById("btnSoSanh").onclick = function () {
  var countAm = 0;
  var countDuong = 0;

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      countDuong++;
    } else {
      countAm++;
    }
  }
  var kq = "";
  if (countAm > countDuong) {
    kq = "So am nhieu hon so duong";
  } else if (countAm < countDuong) {
    kq = "So duong nhieu hon so am";
  } else {
    kq = "So duong bang so am";
  }
  document.getElementById("footerCard").innerHTML =
    "So duong co : " +
    countDuong +
    "</br>" +
    "So am co : " +
    countAm +
    "</br>" +
    kq;
};
document.getElementById("btnDoiCho").onclick = function () {
  var number1 = document.getElementById("txtNumber1").value * 1;
  var number2 = document.getElementById("txtNumber2").value * 1;

  var flag = numberList[number1];
  numberList[number1] = numberList[number2];
  numberList[number2] = flag;

  document.getElementById("footerCard1").innerHTML =
    "Danh sach sau khi doi cho : " + numberList;
};

document.getElementById("btnSoNguyen").onclick = function () {
  for (var i = 0; i <= numberList.length; i++) {
    var flag = soNT(numberList[i]);
    if (flag == 2) {
      numberSoNguyen.push(numberList[i]);
    }
  }
  document.getElementById("footerCard").innerHTML =
    "Mang so nguyen to : " + numberSoNguyen;
};
