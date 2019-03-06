function header(){
    $.ajax({
        url: "/files/head.html", // 読み込むHTMLファイル
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
