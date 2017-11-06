$(document).ready(function(){

$(".htmlButton").click(function (){
      $("#HTMLSection").removeAttr("hidden");
      $("#javascriptSection").attr("hidden", "true");
   })

$(".jsButton").click(function(){
         $("#javascriptSection").removeAttr("hidden");
         $("#HTMLSection").attr("hidden", "true");
      })
});
