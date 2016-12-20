angular.module('starter.translate', ['pascalprecht.translate'])
.config(function($translateProvider){
	//Config language
	$translateProvider.preferredLanguage("en");
	$translateProvider.fallbackLanguage("en");
	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escapeParameters');
	//Translate for EN
	$translateProvider.translations('en', {
		disconnected: "Red no disponible",
		photos: "Fotos",
		videos: "Videos",
		latest: "ÚLTIMO",
		topnew: "TOP NEW",
		video: "VIDEO",
		trending: "POPULAR",
		thisArticle: "Este post tiene",
		comment: "comentario",
		comments: "Comentarios",
		addComment: "AÑADIR / VER COMENTARIOS",
		nextStory: "OTRAS NOTICIAS",
		Comment: "Comentar",
		noData: "NO DATA",
		logout: "Salir",
		myBookmarks: "Mis noticias guardadas",
		appSettings: "Opciones de la App",
		support: "Soporte",
		rateApp: "Valóranos en la store",
		shareApp: "Comparte esta app",
		information: "Informacion",
		aboutUs: "Sobre nosotros",
		termsOfUse: "Términos de uso",
		privacyPolicy: "Política de privacidad",
		version: "Versión",
		versionNumber: "1.0.1",
		news: "Noticias",
		photo: "Fotos",
		bookmark: "Guardar noticia",
		noBookmark: "No hay noticias guardadas",
		logIn: "Entrar",
		username: "Usuario (nick)",
		password: "Contraseña",
		forgotPassword: "¿Olvidaste la contraseña?",
		notMember: "Si no tienes cuenta visita www.gamelegant.com para registrarte",
		signUpNow: "REGISTRARSE",
		resetPassword: "Modificar contraseña",
		enterEmail: "Introduce tu email",
		email: "Email",
		register: "Registrarse",
		weNeed: "Necesitamos un par de detalles más para registrar tu cuenta",
		firstName: "Nombre",
		lastName: "Nick/Apodo",
		rePassword: "Vuelve a escribir la contraseña",
		iAgree: "Acepto los",
		settings:"Ajustes",
		termsConditions: "Términos & Condiciones de GamElegant",
		keyword: "Palabra clave",
		textSize: "Tamaño de texto",
		textSizeForStoryPages:"Tamaño del texto para las páginas de la historia",
		emptyList: "Lista vacía",
		noResult: "No hay resultados disponibles",
	});
	//End Translate for EN
});