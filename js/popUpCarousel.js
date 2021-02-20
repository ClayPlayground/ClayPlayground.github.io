$(document).ready(function(){
            
        EventDrafter();

        function ActivatePanel(number){ 
            var pann = document.getElementById("panel");
            pann.classList.remove("deactivated");
            
            $("#popUpCarousel").carousel(number);
        }

        function DeactivatePanel(panel){
        panel.classList.add("deactivated");
        }

        function EventDrafter(){
            let pan = document.getElementById("panel");
            let cards = Array.from(document.getElementsByClassName("btnAble"));
            for (let i = 0; i < cards.length; i++ ){
                cards[i].addEventListener("click", (e)=>{
                    ActivatePanel(i);
                })
            }
            document.getElementById("escBtn").addEventListener("click", function(){
                DeactivatePanel(pan);
            });
        }          
    }
);