//console.log( '' );






class ComponentListVideo {



	static arrArgs = []; 





	static html( arr ) {

		//let txt = 'any text';

		let innerHTML = '';


		arr.forEach( k => {
			innerHTML += `<div class="each" onclick="ComponentListVideo.clc( this )" data-href="${ k.href }" data-title="${ k.title }">
				<div class="img">
					<img src="https://i.ytimg.com/vi/${ k.href }/hqdefault.jpg">
				</div>
				<div class="title">${ k.title }</div>
			</div>`;
		});


		let data = {
			tag: 'list-video',
			innerHTML,
		};



		//console.log( 'ComponentListVideo.html()' );
		//console.log( arr );


		return getComponentHtml( data );
	}



	static clc( elem ) {

		console.log( elem.dataset.href );
		console.log( elem.dataset.title );


		document.querySelectorAll( '#content .video .screen' )[ 0 ].innerHTML = `<iframe src="https://www.youtube.com/embed/${ elem.dataset.href }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
		document.querySelectorAll( '#content .video .title' )[ 0 ].innerHTML = elem.dataset.title + ` <a href="https://www.youtube.com/watch?v=${ elem.dataset.href }" target="_blank">(${ elem.dataset.href })</a>`;


		//console.log( data );
		//alert( data );

	}










}























