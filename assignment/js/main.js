

$(document).ready(function(){

    
        $("#connect").click(function(){
            var btnval = $("#connect").val();
            var tab1 = $("#port").val();
            var tab2 = $("#host").val();
            
            if(btnval === "Connect"){
            if(tab1 === "8000" && tab2 === "broker.mqttdashboard.com"){
                $("#connectionStatus").css("background-color", "green");
                
                $("#connect").attr({
                    "value" : "Disconnect"
                });
                $("#collapseOne").slideUp();
                $("#collapseTwo").slideDown();
                $("#collapseFour").slideDown();
                $("#collapseThree").slideDown();
                $("body").removeClass("notconnected");
                $("body").addClass("connected");
                

                
            }else{
                alert("Connect failed: AMQJSC0001E Connect timed out.");
            }
        }else{
            $("#connectionStatus").css("background-color", "red");
            $("#connect").attr({
                "value" : "Connect"
            });
            $("body").removeClass("connected");
            $("body").addClass("notconnected");
        }
        });

        $("#tab1").click(function(){
            
            $("#collapseOne").slideToggle();
        });
        $("#tab2").click(function(){
            
            $("#collapseTwo").slideToggle();
        });
        $("#tab3").click(function(){
            
            $("#collapseThree").slideToggle();
        });
        $("#tab4").click(function(){
            
            $("#collapseFour").slideToggle();
        });

function makeid() {
    var text = "ClientID-";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  $("#cid").attr({
    "value" : makeid()
});
$("#publish").click(function(){
    var btnval = $("#connect").val();
    
    if(btnval === "Connect"){
        alert("Notconnected");
    }else{
        return("Published");
    }
});
$("#sub").click(function(){
    var btnval = $("#connect").val();
    
    if(btnval === "Connect"){
        alert("Notconnected");
    }else{
        return("subscribed");
    }
});
});




