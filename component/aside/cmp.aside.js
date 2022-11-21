//console.log( 'aside' );









class ComponentAside {


	static arrBtns = [

		{ title: 'ASMR' 			, id: 'asmr' 			, },
		{ title: 'Comedy' 			, id: 'comedy' 			, },
		{ title: 'English' 			, id: 'english' 		, },
		{ title: 'КВК' 				, id: 'kvn' 			, },
		{ title: 'Кліпи' 			, id: 'clips' 			, },
		{ title: 'Программування' 	, id: 'programming' 	, },
		//{ title: 'Фільми' 			, id: 'films' 			, },







	];



	static html() {

		let innerHTML = '';

		this.arrBtns.forEach( k => {
			innerHTML += getComponentHtml({ 
				tag: 'btn', 
				innerHTML: k.title, 
				param: [
					{ k: 'data-id' 	, v: k.id 									, },
					{ k: 'title' 	, v: k.title 								, },
					{ k: 'onclick' 	, v: `ComponentAside.clc( '${ k.id }' )` 	, },
				], 
			});
		});

		return getComponentHtml({ tag: 'aside', innerHTML, });
	}



	static clc( id ) {

		// подсветка кнопок
		btnLight( 'cmp-aside', id );

/*
		// очистка контента
		let content = document.getElementById( 'content' );
		content.innerHTML = '';
*/


		ComponentMiddle.showContent( id );


	} 








}















