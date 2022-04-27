$(document).ready(function () {
    var i = 1;
    $("#myBtn").click(function () {
      $("#myModal").modal();
    });
    // ===================================================
    function kiemTraMaSV() {
      var re = /^[0-9]{8}$/;
      if ($("#txtMaSV").val() == "") {
        $("#tbMaSV").html("* Bắt buộc nhập");
        return false;
      }
      if (!re.test($("#txtMaSV").val())) {
        $("#tbMaSV").html("*");
        return false;
      }
      $("#tbMaSV").html("*");
      return true;
    }
    $("#txtMaSV").blur(kiemTraMaSV);
    
    // ===================================================
  
    function kiemTraHT() {
     
      if ($("#txtHT").val() == "") {
        $("#tbHT").html("* Bắt buộc nhập");
        return false;
      }
      
          $("#tbHT").html("*"); 
          return true;
    }
    $("#HT").blur(kiemTraHT);
   //===============================================================
    function kiemTraNgayKH() {
     
        if ($("#txtNgay").val() == "") {
            $("#tbNgay").html("* Bắt buộc nhập");
            return false;
      }
      
      var day = new Date($("#txtNgay").val());
      var today = new Date();
      if (day < today) {
        $("#tbNgay").html("* Khởi hành phải sau ngày hiện tại 30 ngày");
        return false;
      }
      $("#tbNgay").html("*");
      return true;
    }
    $("#txtNgay").blur(kiemTraNgayKH);
   
    
  
    // ========================  ===========================
    function KTGia() {
      var gia=$("txtGia").val();
      if (gia == "") {
        $("#tbGia").html("* Bắt buộc");
        return false;
      }
      if (isNaN(gia)==false) {
        $("#tbGia").html("* Phải nhập số");
        return false;
      }
      if((gia)<0){
        $("#tbGia").html("* Phải nhập số >0");
        return false;
      }
      $("#tbGia").html("*");
      return true;
    }
    $("#txtGia").blur(KTGia);

    
  
    // ====================================================
    $("#btnSave").click(function () {
      if (
        !kiemTraMa()||
        !kiemTraDD()||
        !kiemTraNgayKH()||
        !KTGia()
       
      ) {
        $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin")
        return false;
      }
      var matour= $("#txtMa").val();
      var diemden= $("#txtDiemDen").val();
      var ngaykh= $("#txtNgay").val();
      var tg= $("#txtTG").val();
      var gia= $("#txtGia").val();
      var anh= $("#txtAnh").val().substring(12);
      var them = "<tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + diemden + "</td><td>" + ngaykh + "</td><td>" + tg + "</td><td>" + gia +"</td><td>" + anh +"</td></tr>"
      $("table tbody").append(them);
      $("#myModal").modal("hide");
      return true
    });
  });
  
  