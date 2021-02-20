var ajaxRequest = new XMLHttpRequest();

	ajaxRequest.onreadystatechange = function(){
	
		if(ajaxRequest.readyState == 4){
			//the request is completed, now check its status
			if(ajaxRequest.status == 200){
				//turn JSON into object
				var jsonObj = JSON.parse(ajaxRequest.responseText);

				let place = document.getElementById("cardsBody");
				let galleryPlace = document.getElementById("galleryPlace");

				for (let i = 0; i < jsonObj.imgSet.length; i++){
					console.log("pagina: "+place.dataset.currentfiles);
					console.log("json: "+jsonObj.imgSet[i].categoria)
					if (place.dataset.currentfiles == jsonObj.imgSet[i].categoria)
					{
					console.log(jsonObj.imgSet[i]);
					BuildDiv(jsonObj.imgSet[i], place, i);
					BuildGalleryDiv(jsonObj.imgSet[i], galleryPlace, i);
					}
				}
				if (place.innerHTML=""){
					place.innerHtml="Nulla da vedere";
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

	function BuildDiv(objSet, place, number){
		let element = document.createElement("div");
		element.innerHTML = `
		<div class="card cardCustom" style="width: 18rem;">
			<img class="card-img-top cardImg btnAble" src="resources/${objSet.nomeFile}" alt="${objSet.titolo}">
			<div class="card-body">
				<h2 class="cardTitle">${objSet.titolo}
				</h2>
				<p class="card-text">${objSet.BreveDescrizione}</p>
			</div>
		</div>
		`;
		console.log("element inner is "+element.innerHTML);
		console.log("place is "+place);
		place.appendChild(element);
	}

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

		place.appendChild(element);
	}