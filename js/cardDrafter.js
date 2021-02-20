var ajaxRequest = new XMLHttpRequest();

	ajaxRequest.onreadystatechange = function(){
	
		if(ajaxRequest.readyState == 4){
			//the request is completed, now check its status
			if(ajaxRequest.status == 200){
				//turn JSON into object
				var jsonObj = JSON.parse(ajaxRequest.responseText);

				let galleryPlace = document.getElementById("galleryPlace");
				let pageIndex =place.dataset.currentfile;
				for (let i = 0; i < jsonObj.imgSet.length; i++){
					if (pageIndex == jsonObj.imgSet[i].categoria)
					{
					BuildGalleryDiv(jsonObj.imgSet[i], galleryPlace, i);
					}
				}
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

	

	function BuildGalleryDiv(objSet, place, number){
		let element = document.createElement("div");
		element.innerHTML = `
		<img class="d-block carolImage carolImageCustom" src="resources/${objSet.nomeFile}" alt="${objSet.titolo}">
		<div class="carousel-caption d-none d-md-block">
			<h5>${objSet.titolo}</h5>
			<p>${objSet.BreveDescrizione}</p>
			</div>
		`;
		element.classList.add("carousel-item")
		element.classList.add("carolImageContainer")
		if (number == 0){
			element.classList.add("active");
		}

		//place.appendChild(element);
		Appender(place, element);
	}
	
	

	function Appender(x, y){
        x.appendChild(y);
	}