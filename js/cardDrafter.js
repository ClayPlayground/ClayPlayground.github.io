var ajaxRequest2 = new XMLHttpRequest();

	ajaxRequest2.onreadystatechange = function(){
	
		if(ajaxRequest2.readyState == 4){
			//the request is completed, now check its status
			if(ajaxRequest2.status == 200){
				//turn JSON into object
				var jsonObj = JSON.parse(ajaxRequest.responseText);

				const galleryPlace = document.getElementById("galleryPlace");

				for (let i = 0; i < jsonObj.imgSet.length; i++){
					if (jsonObj.imgSet[i].categoria == 1)
					{
					BuildGalleryDiv(jsonObj.imgSet[i], galleryPlace, i);
					}
				}
			}else{
				console.log("Status error: " + ajaxRequest.status);
			}
		}else{
			console.log("Ignored readyState: " + ajaxRequest.readyState);
		}
	
	
	}
	
	ajaxRequest2.open('GET', 'https://clayplayground.github.io/resources/imageSet.json');
	ajaxRequest2.send();

	

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

		document.getElementById("galleryPlace").appendChild(element);
		place.appendChild(element);
	}
	
	

	