//console.log( 'header' );




class ComponentMiddle {


	static arrFiltred = [];





	static html() {




		return getComponentHtml({ tag: 'middle',
			innerHTML: `
				${ ComponentAside.html() }
				<div id="content"></div>
			`, 
		});
	}



	// вставка контента по выбраному клику
	static showContent( id ) {

		//alert( id );

		//let htmVideolList 	= '';
		let htmlNav 		= '';



		if ( id == 'films' ) {


		} else {

			this.arrFiltred = arrYoutube.filter( k => k.id == id );
			//console.log( this.arrFiltred[ 0 ] );


			if ( this.arrFiltred[ 0 ].nav ) {
				//alert( 555 );

				this.arrFiltred[ 0 ].nav.forEach( k => {
					htmlNav += ComponentBtn.html( k.title, [ 
						{ k: 'title' 	, v: k.title 									, },
						{ k: 'onclick' 	, v: `ComponentMiddle.clcNav( '${ k.id }' )` 	, },
						{ k: 'data-id' 	, v: k.id 										, },
					]);
				});

				//htmVideolList = ComponentListVideo.html( this.arrFiltred[ 0 ].arr );
			}

/*
			if ( this.arrFiltred[ 0 ].arr ) {
				//alert( 555 );

				htmVideolList = ComponentListVideo.html( this.arrFiltred[ 0 ].arr );
			}
*/
		}



		document.getElementById( 'content' ).innerHTML = `
			<div class="video">
				<div class="screen"></div>
				<div class="title"></div>
				<div class="nav">${ htmlNav }</div>
			</div>

			<div class="list"></div>
		`;
	}




	// вставка видео (из списка) в главный "экран"
	static clcNav( id ) {

		btnLight( 'cmp-middle .video .nav', id );

		//console.log( this.arrFiltred[ 0 ].arr );
		document.querySelectorAll( '#content .video .screen' )[ 0 ].innerHTML = '';

		//alert( id );
		//console.log( this.arrFiltred[ 0 ].arr );

		let arrFiltered = this.arrFiltred[ 0 ].arr;

		if ( id != 'all' ) {
			arrFiltered = this.arrFiltred[ 0 ].arr.filter( k => {
				if ( k.cat[ id ])
					return true; 
			});
		} 

		//console.log( arrFiltered );
		document.querySelectorAll( 'cmp-middle .list' )[ 0 ].innerHTML = ComponentListVideo.html( arrFiltered );
	}








	static arr2arr222() {

		let html = '';

		arrYoutube.forEach( k => {


			if ( k.id == 'arr2arr' ) {


				k.arr.forEach( k1 => {
					console.log( k1 );
					html += `{ href: '${ k1.href }' , title: '${ k1.title }' , cat: { bebris_2: 1 , } , }, <br/>`;

				});


			}


		});

		return html;

	}




}











