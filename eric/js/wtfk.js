$(function(){
	$("#form2").validate({
        submitHandler(form){
            $.ajax({
                type:"post",
                url:"php/fk.php",
                data:$(form).serialize(),
                dataType:"json",
                //"uname=dongdong&upwd1=123456&..."
                success:function(data){
                    alert(data.msg);
                    form.reset();
                }
            })
       }
    })
});
