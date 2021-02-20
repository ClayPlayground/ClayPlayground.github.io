var ajaxRequest = new XMLHttpRequest();

	ajaxRequest.onreadystatechange = function(){
	
		if(ajaxRequest.readyState == 4){
			//the request is completed, now check its status
			if(ajaxRequest.status == 200){
				//turn JSON into object
				var jsonObj = JSON.parse(ajaxRequest.responseText);

				const place = document.getElementById("cardsBody");
				const galleryPlace = document.getElementById("galleryPlace");
				const pageIndex =place.dataset.currentfile;
				for (let i = 0; i < jsonObj.imgSet.length; i++){
					if (pageIndex == jsonObj.imgSet[i].categoria)
					{
					Build(jsonObj.imgSet[i], place);
					BuildGalleryDiv(jsonObj.imgSet[i], galleryPlace, i);
					}
				}
				if (place.innerHTML=""){
					place.innerHtml="Nulla da vedere";
				}
			}else{
				console.log("Status error: " + ajaxRequest.status);
			}
		}else{
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
		place.appendChild(element);
	}
	
	function Build(objSet, place){
		let elem = document.createElement("div");
		elem.innerHTML = `
			<img class="card-img-top cardImg btnAble" src="resources/${objSet.nomeFile}" alt="${objSet.titolo}">
			<div class="card-body">
				<h2 class="cardTitle">${objSet.titolo}
				</h2>
				<p class="card-text">${objSet.BreveDescrizione}</p>
			</div>`;
		elem.classList.add("card");
		elem.classList.add("cardCustom");
		elem.style("width", "18rem");

		place.appendChild(elem);
	}