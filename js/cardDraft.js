var ajaxRequest = new XMLHttpRequest();

	ajaxRequest.onreadystatechange = function(){
	
		if(ajaxRequest.readyState == 4){
			//the request is completed, now check its status
			if(ajaxRequest.status == 200){
				//turn JSON into object
				var jsonObj = JSON.parse(ajaxRequest.responseText);

                const place = document.getElementById("cardsBody");				
				const pageIndex = document.getElementById("cardsBody").dataset.currentfile;

				for (let i = 0; i < jsonObj.imgSet.length; i++){
					if (pageIndex == jsonObj.imgSet[i].categoria)
					{
					Build(jsonObj.imgSet[i], place);
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

	function Build(objSet, pl){
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
		console.log("why?");
		pl.appendChild(elem);
	}