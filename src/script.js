

$(document).ready(function(){

$("td img").click(function(){
var value=$(this).attr("src");
console.log(value);
$("#showroom").attr("src",value);
});

$("td").on({mouseover:function(){
$(this).css("background","#032a68");
},mouseout:function(){
$(this).css("background","gray");
}})



})
