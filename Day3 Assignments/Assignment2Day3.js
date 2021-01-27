function drivenage(){
    var no;
    no=Number(document.getElementById("age").value);
    if(no<18)
    {
    alert("Not legal age to drive");
    }
    else
    {
    alert("Drive safe");
    }
    }