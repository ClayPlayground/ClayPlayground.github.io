var ajaxRequest = new XMLHttpRequest();

	ajaxRequest.onreadystatechange = function(){
	
		if(ajaxRequest.readyState == 4){
			//the request is completed, now check its status
			if(ajaxRequest.status == 200){
				//turn JSON into object
				var jsonObj = JSON.parse(ajaxRequest.responseText);

                place = document.getElementById("crlInner");
                indPlace = document.getElementById("indInner");
                for (var i = 0; i < jsonObj.imgSet.length; i++){
                    if (jsonObj.imgSet[i].homepage == true){
                        CreateAndAppend(place, jsonObj.imgSet[i]);
                        CreateAndAppendIndicator(indPlace, jsonObj.imgSet[i])
                    }
				}
                SetActiveClass(place, indPlace);
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
           `<img class="d-block carolImage" src="resources/${obj.nomeFile}" alt="${obj.BreveDescrizione}">`;
            //console.log(element); 
            element.classList.add("carousel-item")
            element.classList.add("carolImageContain")
    
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
        element.classList.add("active");

        let indElement = indPlace.firstElementChild;
        indElement.classList.add("active");
    }