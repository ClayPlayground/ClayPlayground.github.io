var ajaxRequest = new XMLHttpRequest();

	ajaxRequest.onreadystatechange = function(){
	
		if(ajaxRequest.readyState == 4){
			//the request is completed, now check its status
			if(ajaxRequest.status == 200){
				//turn JSON into object
				var jsonObj = JSON.parse(ajaxRequest.responseText);

                let place = document.getElementById("cardsBody");
                //let indPlace = document.getElementById("indInner");
                let index = place.dataset.currentFiles;
                for (var i = 0; i < jsonObj.imgSet.length; i++){
                    console.log("is json true? "+jsonObj.imgSet[i].homepage)
                    if (jsonObj.imgSet[i].categoria == index){
                        console.log("json is "+jsonObj.imgSet[i].homepage)
                        console.log("place is "+place);
                        CreateAndAppend(place, jsonObj.imgSet[i]);
                        //CreateAndAppendIndicator(indPlace, index);
                    }
				}
                //SetActiveClass(place, indPlace);
			}
			else{
				console.log("Status error: " + ajaxRequest.status);
			}
		}
		else{
			console.log("Ignored readyState: " + ajaxRequest.readyState);
		}
	
	
	}
	
	ajaxRequest.open('GET', 'https://clayplayground.github.io/resources/imageSet.json');
	ajaxRequest.send();

    function CreateAndAppend(place, obj){

        let element = document.createElement("div");
            element.innerHTML = 
           `<img class="card-img-top cardImg btnAble" width="100" src="resources/${obj.nomeFile}" alt="${obj.titolo}">
           <div class="card-body">
               <h2 class="cardTitle">${obj.titolo}
               </h2>
               <p class="card-text">${obj.BreveDescrizione}</p>
           </div>`;
            //console.log(element); 
            element.classList.add("card")
            element.classList.add("cardCustom")
    
            //APPENDERE L'ELEMENTO
            place.appendChild(element);
    
    }
    function CreateAndAppendIndicator(place, index){
        let element = document.createElement("li");
        element.dataset.target ="#homePageCarousel";
        element.dataset.slideTo=index;
        place.appendChild(element);
    }

    function SetActiveClass(place, indPlace){
        let element = place.firstElementChild;
        console.log("place.firstelement: "+place.firstElementChild);
        element.classList.add("active");

        let indElement = indPlace.firstElementChild;
        console.log("place.firstelement: "+indPlace.firstElementChild);

        indElement.classList.add("active");
    }