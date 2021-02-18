var ajaxRequest = new XMLHttpRequest();

			ajaxRequest.onreadystatechange = function(){
			
				if(ajaxRequest.readyState == 4){
					//the request is completed, now check its status
					if(ajaxRequest.status == 200){
						//turn JSON into object
						var jsonObj = JSON.parse(ajaxRequest.responseText);

						var place = document.getElementById("cardsBody");
						for (var i = 0; i < jsonObj.imgSet.length; i++){
							console.log(imgSet[i]);
							BuildDiv(imgSet[i], place, i );
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
	