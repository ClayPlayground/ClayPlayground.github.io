var ajaxRequest = new XMLHttpRequest();

			ajaxRequest.onreadystatechange = function(){
			
				if(ajaxRequest.readyState == 4){
					//the request is completed, now check its status
					if(ajaxRequest.status == 200){
						//turn JSON into object
						var jsonObj = JSON.parse(ajaxRequest.responseText);

						var place = document.getElementById("cardsBody");
						var galleryPlace = document.getElementById("galleryPlace");
						var indicatorPlace = document.getElementById("carIndic");
						
						for (var i = 0; i < jsonObj.imgSet.length; i++){
							console.log(jsonObj.imgSet[i]);
							BuildDiv(jsonObj.imgSet[i], place, i );
							BuildGalleryDiv(jsonObj.imgSet[i], galleryPlace, indicatorPlace, i);
						}
						/*for (const imgSet of jsonObj.imgSet) {
							console.log(imgSet);
							BuildDiv(imgSet, place, i );								
							}*/
						//inject in html
						//InjectFunc(title, photoUrl, place);
						
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
			//aggiungere al div gli elementi di una card
			element.innerHTML = `
			<div class="card cardCustom" style="width: 18rem;" data-number="${number}">
                <img class="card-img-top cardImg" src="resources/${objSet.nomeFile}" alt="${objSet.titolo}">
                <div class="card-body">
                    <h2 class="cardTitle">${objSet.titolo}
                    </h2>
                    <p class="card-text">${objSet.BreveDescrizione}</p>
                </div>
            </div>`;
			
			place.appendChild(element);
		}
		function BuildGalleryDiv(objSet, place, indicatorPlace, number){
			let element = document.createElement("div");
			//aggiungere al div gli elementi di una card
			element.innerHTML = `
			<div class="carousel-item">
            <img class="d-block w-100" src="resources/${objSet.nomeFile}" alt="${objSet.titolo}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${objSet.titolo}</h5>
                <p>${objSet.BreveDescrizione}</p>
              </div>
            </div>
			`;

			let elementDue = document.createElement("li");
			elementDue.setAttribute("data-target", "#carouselIndicat");
			elementDue.setAttribute("data-slide-to", number);
			
			if (number == 0){
				element.classList.add("active");
				elementDue.classList.add("active");
			}

			place.appendChild(element);
		}
	