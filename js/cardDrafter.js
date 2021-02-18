var ajaxRequest = new XMLHttpRequest();

			ajaxRequest.onreadystatechange = function(){
			
				if(ajaxRequest.readyState == 4){
					//the request is completed, now check its status
					if(ajaxRequest.status == 200){
						//turn JSON into object
						var jsonObj = JSON.parse(ajaxRequest.responseText);

						var place = document.getElementById("cardsBody");

						for (const imgSet of jsonObj.imgSet) {
							console.log(imgSet);
							BuildDiv(imgSet, place);								
							}
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

		function BuildDiv(objSet, place){
			let element = document.createElement("div");
			//aggiungere al div gli elementi di una card
			element.innerHTML = `
			<div class="card cardCustom" style="width: 18rem;">
                <img class="card-img-top" src="resources/${objSet.nomeFile}" alt="${objSet.titolo}">
                <div class="card-body">
                    <h2 class="cardTitle">${objSet.titolo}
                    </h2>
                    <p class="card-text">${objSet.BreveDescrizione}</p>
                </div>
            </div>`;
			
			place.appendChild(element);
		}
	