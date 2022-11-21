//console.log( 'header' );




class ComponentMiddle {



	static html() {


		return getComponentHtml({ tag: 'middle',
			innerHTML: `
				${ ComponentAside.html() }
				<div id="content">

				</div>
			`, 
		});
	}



	// вставка контента по выбраному клику
	static showContent( id ) {

		//alert( id );


		let htmVideolList = '';


		let arrFiltred = [];
		if ( id == 'asmr' || id == 'comedy' || id == 'clips' || id == 'kvn' ) {

			arrFiltred = arrYoutube.filter( k => k.id == id );
			console.log( arrFiltred[ 0 ] );

			if ( arrFiltred[ 0 ].arr ) {
				//alert( 555 );

				htmVideolList = ComponentListVideo.html( arrFiltred[ 0 ].arr );
			}
		}


		document.getElementById( 'content' ).innerHTML = `
			<div class="video">
				<div class="screen"></div>
				<div class="title"></div>
			</div>
			<div class="list">${ htmVideolList }</div>
		`;




		return true;






		if ( id == 'films' ) {

		}

		if ( id == 'films' ) {

		}















		// найденая категория видео


		
		if ( objFiltred.group ) {

			alert( objFiltred.id );
		}











		if ( id == 'asmr' ) {
			//content.innerHTML = ComponentAsmr.html();

			arrYoutube.forEach( k => {

				if ( k.id == id ) {

					console.log( k );

					htmVideolList += `<div class="each" onclick="ComponentYoutube.clcImgYoutube( this )" data-href="${ k.href }" data-title="${ k.title }">
						<div class="img">
							<img src="https://i.ytimg.com/vi/${ k.href }/hqdefault.jpg">
						</div>
						<div class="title">${ k.title }</div>
					</div>`;


				}

			});



		}

/*

		if ( id == 'clips' ) 
			content.innerHTML = ComponentClips.html();

		if ( id == 'comedy' ) 
			content.innerHTML = ComponentComedy.html();

		if ( id == 'english' ) 
			content.innerHTML = ComponentEnglish.html();

		if ( id == 'films' ) 
			content.innerHTML = ComponentFilms.html();

		if ( id == 'kvn' ) 
			content.innerHTML = ComponentKvn.html();
*/











	}



	// вставка видео (из списка) в главный "экран"
	static clcVideoFromList( id ) {




	}











}











