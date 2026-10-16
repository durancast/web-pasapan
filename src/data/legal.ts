export interface LegalSection {
	heading: string;
	paras?: string[];
	list?: string[];
}

export interface LegalDoc {
	slug: string;
	title: string;
	intro?: string;
	sections: LegalSection[];
}

export const avisoLegal: LegalDoc = {
	slug: 'aviso-legal-y-terminos-de-uso-de-la-web',
	title: 'Aviso legal y términos de uso de la web',
	sections: [
		{
			heading: '1. Información del titular',
			paras: [
				'En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, los Usuarios de Internet quedan informados de que este Aviso Legal y sus Términos de Uso regulan el acceso y uso de los servicios que Balandrino Gastronómica, S.L., con CIF B02993129 y dirección de su establecimiento permanente a efectos de notificaciones en la C/ Colón, 5, 40001 de Segovia (en adelante, RESTAURANTE PASAPAN), pone a disposición de los Usuarios a través de su sitio web https://restaurantepasapan.es/ (en adelante, LA WEB).',
				'Los presentes Términos de Uso serán de aplicación de forma conjunta con la Política de Privacidad, los Términos y Condiciones de Uso de Reservas, los Términos y Condiciones de Uso de Compras y la Política de Cookies.',
			],
		},
		{
			heading: '2. Aceptación',
			paras: [
				'El acceso a LA WEB se encuentra condicionado a la previa lectura y aceptación por parte de cualquier Usuario de los términos, condiciones, comunicaciones, advertencias y avisos legales. Desde el momento en el que los Usuarios entran y usan LA WEB están aceptando los Términos de Uso de RESTAURANTE PASAPAN.',
				'Si algún Usuario no estuviese de acuerdo con el contenido o parte del contenido de los presentes Términos de Uso deberá abandonar LA WEB, no pudiendo acceder ni disponer de los servicios que en ella se ofrecen.',
				'El Usuario declara ser mayor de edad y/o disponer de la capacidad jurídica suficiente para vincularse por los Términos de Uso. La entrada y visualización de LA WEB es libre, gratuita y no requiere suscripción o registro previos.',
			],
		},
		{
			heading: '3. Obligaciones del usuario',
			paras: [
				'El Usuario está obligado a realizar un uso lícito de LA WEB y de los servicios ofrecidos, de acuerdo con la legislación vigente y respetando los derechos de Propiedad Intelectual e Industrial de RESTAURANTE PASAPAN y de terceros.',
				'El Usuario se compromete a no realizar ninguna acción que cause daño o alteraciones ni entorpezca el funcionamiento de LA WEB, a no transferir elementos portadores de virus informáticos ni a dañar, interferir o interceptar total o parcialmente LA WEB.',
				'Los Usuarios no podrán establecer vínculos o enlaces a LA WEB desde cualquier otra web sin el previo y expreso consentimiento de RESTAURANTE PASAPAN.',
			],
		},
		{
			heading: '4. Enlaces y vínculos',
			paras: [
				'Si LA WEB contuviese vínculos o enlaces con otros sitios web no gestionados por RESTAURANTE PASAPAN, éste manifiesta que no ejerce control alguno sobre esos sitios, ni responde ni es responsable del contenido de los mismos. Los enlaces se ofrecen únicamente a modo de referencias informativas.',
				'RESTAURANTE PASAPAN se exonera de toda responsabilidad en relación con los servicios prestados por dichos terceros frente a cualesquiera reclamaciones de cualquier naturaleza.',
			],
		},
		{
			heading: '5. Garantías y responsabilidad',
			paras: [
				'RESTAURANTE PASAPAN prestará los servicios que se ofrecen en LA WEB, garantizando el secreto de las comunicaciones que pudieran existir con el Usuario y respondiendo a las reclamaciones que pudieran plantearse.',
				'RESTAURANTE PASAPAN tiene el derecho de suspender temporalmente y sin preaviso la accesibilidad a LA WEB, así como de reservarse el derecho de prestación o cancelación de los servicios.',
				'RESTAURANTE PASAPAN no garantiza la ausencia de virus ni de otros elementos en los contenidos de LA WEB que puedan producir alteraciones en el sistema informático del Usuario, eximiéndose de cualquier responsabilidad por los daños que pudieran deberse a ello.',
			],
		},
		{
			heading: '6. Protección de datos y cookies',
			paras: [
				'RESTAURANTE PASAPAN respetará en todo momento lo dispuesto en el Reglamento (UE) 2016/679 (Reglamento General de Protección de Datos) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, así como toda la normativa vigente en materia de protección de datos y de uso de cookies. Los Usuarios pueden ampliar esta información en la Política de Privacidad y de Cookies.',
			],
		},
		{
			heading: '7. Propiedad intelectual e industrial',
			paras: [
				'RESTAURANTE PASAPAN ostenta todos los derechos de Propiedad Intelectual e Industrial sobre todos los elementos de LA WEB: software y sus códigos, textos, gráficos, vídeos, imágenes, diseños, signos distintivos, logotipos, nombres comerciales, marcas, así como la estructura, selección, ordenación y presentación del contenido.',
				'Queda prohibida su reproducción, distribución, comunicación pública y/o transformación en cualquier modalidad o formato, salvo que se indique lo contrario. Queda autorizada la visualización y uso para fines personales y los usos autorizados, pero no para uso comercial.',
			],
		},
		{
			heading: '8. Miscelánea',
			paras: [
				'Si cualquier cláusula de los presentes Términos de Uso fuese declarada total o parcialmente nula o ineficaz afectará tan solo a esa disposición o a la parte de la misma que resulte nula o ineficaz, subsistiendo en todo lo demás el resto de los Términos de Uso.',
			],
		},
		{
			heading: '9. Ley aplicable y jurisdicción',
			paras: [
				'Estos Términos de Uso, así como cualquier relación entre los Usuarios y RESTAURANTE PASAPAN, se regirán por la legislación española. En caso de conflicto, las partes se someten a los Juzgados y Tribunales de Segovia capital.',
			],
		},
	],
};

export const politicaPrivacidad: LegalDoc = {
	slug: 'politica-de-privacidad',
	title: 'Política de Privacidad',
	sections: [
		{
			heading: '¿Quién es el responsable del tratamiento de sus datos personales?',
			paras: [
				'En virtud del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (RGPD) y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), el Responsable del Tratamiento de sus datos personales será Balandrino Gastronómica, S.L., con CIF B02993129 y dirección de su establecimiento permanente en la C/ Colón, 5, 40001 de Segovia, con email de contacto info@restaurantepasapan.es (en adelante, RESTAURANTE PASAPAN).',
			],
		},
		{
			heading: '¿Qué datos personales vamos a tratar?',
			paras: [
				'Para el acceso y uso de la web y de nuestros servicios de gestión de reservas y pedidos online, RESTAURANTE PASAPAN tratará los siguientes datos personales: dirección de correo electrónico, nombre, apellidos, país y región de residencia, fecha de nacimiento, dirección IP, dirección postal, teléfono de contacto, sexo y DNI, según el servicio solicitado.',
			],
		},
		{
			heading: '¿Con qué finalidades vamos a tratar sus datos personales?',
			paras: [
				'La base jurídica que legitima el tratamiento es el consentimiento expreso del Usuario, con las siguientes finalidades:',
			],
			list: [
				'Realizar y gestionar (modificar, anular, volver a reservar) reservas en RESTAURANTE PASAPAN.',
				'Realizar encuestas de satisfacción, estadísticas y análisis de los datos obtenidos de las reservas, a fin de elaborar perfiles básicos.',
				'Gestionar el registro en la WEB.',
				'Prestar adecuadamente el servicio de compra y pedidos de alimentos y bebidas.',
				'Informar del estado del pedido y su tramitación.',
				'Elaborar facturas y recibos en relación con el pedido solicitado.',
				'Gestionar las publicaciones en el blog y los servicios de atención al Usuario.',
				'Gestionar la participación en sorteos y concursos, en su caso.',
				'El envío de encuestas de satisfacción o calidad, y comunicaciones comerciales sobre productos o servicios similares a los contratados.',
			],
		},
		{
			heading: '¿Durante cuánto tiempo se conservarán sus datos personales?',
			paras: [
				'Conservaremos los datos personales el tiempo que sea necesario para la correcta prestación del servicio, mientras el Usuario esté registrado en la web, así como mientras decida no ejercer su derecho de oposición al tratamiento. Igualmente, conservaremos los datos durante el plazo que la legislación vigente establezca.',
			],
		},
		{
			heading: '¿Qué derechos tiene como interesado?',
			paras: [
				'La legislación vigente permite ejercer los siguientes derechos:',
			],
			list: [
				'A solicitar el acceso a los datos personales.',
				'A solicitar la supresión de los datos en la medida en que ya no sean necesarios.',
				'A solicitar la limitación del tratamiento.',
				'A solicitar la rectificación de los datos en caso de que fuesen inexactos.',
				'A oponerse al tratamiento de la información facilitada, salvo motivos legítimos imperiosos.',
				'A oponerse a ser objeto de decisiones automatizadas, incluyendo la elaboración de perfiles.',
				'A revocar el consentimiento para cada finalidad específica.',
				'A solicitar la portabilidad de los datos.',
				'A presentar una reclamación ante la Agencia Española de Protección de Datos o la autoridad de control competente.',
			],
		},
		{
			heading: 'Ejercicio de derechos',
			paras: [
				'Los formularios para el ejercicio de derechos pueden solicitarse vía email a info@restaurantepasapan.es o mediante correo postal. Estos formularios deben ir firmados electrónicamente o acompañados de la fotocopia del DNI en vigor. Informaremos al Usuario sobre las actuaciones derivadas de su petición en el plazo máximo de un mes.',
			],
		},
		{
			heading: '¿Cedemos sus datos personales?',
			paras: [
				'No se cederán datos personales a terceros, salvo obligación legal o informando previamente al titular. Los datos podrán ser tratados de forma confidencial y con las medidas técnicas y organizativas de seguridad necesarias.',
			],
		},
		{
			heading: 'Decisiones automatizadas y transferencias internacionales',
			paras: [
				'RESTAURANTE PASAPAN podrá llevar a cabo la toma de decisiones automatizadas, incluida la elaboración de perfiles basados en su comportamiento, siempre con su consentimiento expreso. El Usuario puede oponerse en todo momento a la aparición y envío de publicidad adaptada solicitándolo en info@restaurantepasapan.es.',
				'En caso de transferencias internacionales de datos, estas solo se realizarán al amparo del Marco de Privacidad de Datos UE-EE. UU. (EU-US Data Privacy Framework) o de cláusulas contractuales tipo aprobadas por la Comisión Europea.',
			],
		},
		{
			heading: '¿Se pueden producir cambios en la política de privacidad?',
			paras: [
				'RESTAURANTE PASAPAN se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o prácticas de la industria, anunciando en esta página los cambios introducidos con razonable antelación.',
			],
		},
	],
};

export const condicionesReservas: LegalDoc = {
	slug: 'condiciones-de-uso-de-las-reservas',
	title: 'Términos y Condiciones de Uso de las Reservas',
	intro:
		'Titular del servicio: Balandrino Gastronómica, S.L. (Restaurante Pasapán). CIF B02993129. C/ Colón, 5, 40001 de Segovia, España. Email: info@restaurantepasapan.es.',
	sections: [
		{
			heading: 'Condiciones de uso',
			paras: [
				'Las presentes Condiciones de Uso establecen las condiciones bajo las cuales se ofrece a los usuarios el acceso al Servicio https://restaurantepasapan.myrestoo.net (en adelante, el Servicio) que Balandrino Gastronómica, S.L. (Restaurante Pasapán) pone a disposición de los usuarios de Internet.',
				'El uso del Servicio atribuye a quien lo realiza la condición de usuario e implica la aceptación íntegra de todas las condiciones legales. El Usuario manifiesta que ha leído, entiende y comprende lo aquí expuesto, que asume todas las obligaciones dispuestas y que es mayor de edad y tiene capacidad legal suficiente.',
			],
		},
		{
			heading: 'Necesidad de registro',
			paras: [
				'Para realizar una reserva mediante el uso de este Servicio es necesario el previo registro del Usuario. Los datos introducidos deberán ser exactos, actuales y veraces.',
				'El servicio de Reserva tiene por finalidad la reserva de un servicio en nuestro restaurante. El restaurante no garantiza una determinada ubicación de la mesa. La reserva será cancelada automáticamente ante retrasos que superen el límite de tolerancia de 15 minutos.',
				'Toda personalización o solicitud especial debe ser informada de manera explícita al Restaurante y será válida tras la confirmación expresa de la misma por nuestro departamento de reservas, pudiendo incurrir en costes adicionales.',
			],
		},
		{
			heading: 'Política de cancelación y garantía de reservas',
			paras: [
				'El cliente puede en todo momento cancelar o modificar su reserva. En determinadas situaciones, podremos solicitar de nuestros clientes la toma de una garantía de reserva, la cual será informada en el momento de solicitarse.',
				'El método de pago de la garantía será mediante tarjeta de crédito o débito a través de la pasarela de pagos Stripe, que cuenta con los estrictos requisitos de seguridad y métodos antifraude. No conocemos ni conservamos datos de la tarjeta del cliente.',
			],
		},
		{
			heading: 'Exclusión de usuarios',
			paras: [
				'Balandrino Gastronómica, S.L. (Restaurante Pasapán) se reserva el derecho a impedir el uso del Servicio, de forma temporal o definitiva, a cualquier Usuario que infrinja las normas establecidas. La relación entre el titular y el Usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y Tribunales de Segovia capital.',
			],
		},
		{
			heading: 'Política de privacidad y tratamiento de datos',
			paras: [
				'Para usar el servicio de reservas y cumplimentar los formularios incorporados en el sitio, se solicitarán ciertos datos de carácter personal, que serán objeto de tratamiento automatizado cuyo responsable es Balandrino Gastronómica, S.L. (Restaurante Pasapán).',
				'Al facilitar estos datos, el Usuario consiente y autoriza expresamente su recogida y tratamiento, constituyéndose este consentimiento como base de legitimación, con las finalidades de realizar y gestionar reservas, realizar encuestas de satisfacción y estadísticas, y enviar información comercial o promocional relacionada con los servicios siempre que el Usuario haya prestado su específico consentimiento.',
				'Solo se conservarán durante el tiempo estrictamente necesario para cumplir con las finalidades informadas, aplicando las medidas técnicas y organizativas de seguridad exigidas por la Ley.',
			],
		},
		{
			heading: 'Ejercicio de derechos',
			paras: [
				'El Usuario tiene capacidad para ejercer sus derechos de acceso, rectificación, supresión, limitación y revocación del consentimiento mediante email a info@restaurantepasapan.es o comunicación escrita dirigida al domicilio del Titular, indicando como referencia "datos personales" y el concreto derecho, acompañando copia de su documento de identificación. También podrá dirigirse a la Agencia Española de Protección de Datos.',
			],
		},
	],
};

export const condicionesCompra: LegalDoc = {
	slug: 'terminos-condiciones-compra',
	title: 'Términos y Condiciones de Compra',
	intro:
		'Última actualización: 29 de julio de 2025. Los presentes Términos y Condiciones de Compra serán de aplicación conjuntamente con la Política de Privacidad y de Cookies de Balandrino Gastronómica, S.L. (RESTAURANTE PASAPAN).',
	sections: [
		{
			heading: 'Información general',
			paras: [
				'En cumplimiento del deber de información recogido en el art. 10 de la LSSI 34/2002, la titularidad de la página web corresponde a Balandrino Gastronómica, S.L. (RESTAURANTE PASAPAN), CIF B02993129, con domicilio a efectos de notificaciones en C/ Colón, 5, 40001 de Segovia y correo electrónico info@restaurantepasapan.es.',
			],
		},
		{
			heading: 'Obligaciones del usuario',
			list: [
				'Usar la página web únicamente con la finalidad de consultar productos y realizar pedidos para la recogida en el local.',
				'No realizar ningún pedido fraudulento o falso.',
				'Tener capacidad legal para celebrar contratos y ser mayor de 18 años.',
				'Facilitar sus datos de contacto de forma veraz y exacta.',
				'No establecer vínculos o enlaces a la página web sin el previo consentimiento de RESTAURANTE PASAPAN.',
			],
		},
		{
			heading: 'Condiciones de compra y disponibilidad',
			paras: [
				'Los Usuarios tienen la posibilidad de realizar pedidos de los artículos ofrecidos para su recogida en el local. El contrato se formalizará en lengua española.',
				'Los pedidos están sujetos a la disponibilidad de los productos. Si se produjeran dificultades de suministro, RESTAURANTE PASAPAN informará al cliente y (i) reembolsará la cantidad abonada por los productos no disponibles o (ii) cambiará el producto por otro similar.',
				'Los precios se exponen con los impuestos vigentes incluidos. Los productos se facturarán sobre la base del precio en vigor en el momento de formalizar el pedido.',
			],
		},
		{
			heading: 'Creación de un perfil de cliente',
			paras: [
				'El Usuario podrá crear un Perfil de cliente adherido a su correo electrónico y contraseña, para el que se le solicitará el registro de los datos esenciales para la tramitación de un pedido. Estos datos serán tratados conforme a la Política de Privacidad. El Usuario también podrá realizar pedidos en modo invitado.',
			],
		},
		{
			heading: 'Forma de realizar un pedido',
			paras: [
				'El pedido se realizará a través del Perfil de Cliente o en modo invitado, seleccionando el apartado "Pedido para recogida en el local", la fecha y la hora estimada. Tras revisar el "Resumen Pedido", el Usuario tramitará el pedido y efectuará el pago, debiendo aceptar expresamente las presentes Condiciones y la Política de Privacidad. El pedido se formaliza cuando se efectúa el pago.',
				'No existen límites de compra: el Usuario puede realizar el pedido por el número de artículos que desee, sin mínimos ni máximos.',
			],
		},
		{
			heading: 'Venta de alcohol',
			paras: [
				'De conformidad con la Ley 11/2010, de 17 de diciembre, está prohibido vender bebidas alcohólicas a menores de 18 años. El Usuario garantiza que no realizará ni recogerá ningún pedido con alcohol siendo menor de 18 años.',
			],
		},
		{
			heading: 'Alergias e intolerancias',
			paras: [
				'El Usuario conoce y acepta que si tiene una alergia o intolerancia alimentaria debe verificar el listado de alérgenos de cada plato disponible en la web e indicar la intolerancia o alergia de la forma más detallada posible en los comentarios del pedido, o contactar directamente con el restaurante. RESTAURANTE PASAPAN no se responsabiliza de los perjuicios que pudieran derivarse de no consultar dicho listado.',
			],
		},
		{
			heading: 'Derecho de cancelación y forma de pago',
			paras: [
				'RESTAURANTE PASAPAN se reserva el derecho a rechazar o cancelar un pedido por razones justificadas, como errores en los datos de facturación, sospecha de fraude, págalo incompleto o si el Usuario es menor de 18 años.',
				'El Usuario podrá utilizar como medio de pago tarjeta bancaria o Bizum. Los pagos con tarjeta se realizan a través de la pasarela de "Comercia Global Payments CaixaBank". Solo se admiten pagos en EUROS.',
			],
		},
		{
			heading: 'Entrega y cancelación de un pedido',
			paras: [
				'Los productos se entregarán en el local del RESTAURANTE PASAPAN. Los tiempos de entrega son estimados y no vinculantes. Se entenderá producida la "entrega" en el momento en el que el Usuario o un tercero indicado adquiera la posesión material del pedido en el local.',
				'Después de realizar un pedido y haberse autorizado su pago, el Usuario no podrá anularlo ni solicitar su reembolso. Si desea modificar o cancelar su pedido podrá contactar con el restaurante, que decidirá si los cambios son posibles según si ha comenzado la elaboración.',
			],
		},
		{
			heading: 'Responsabilidades y garantías, virus y propiedad intelectual',
			paras: [
				'El acceso y uso de la página web es responsabilidad de los Usuarios, no siendo objeto de garantía por parte de RESTAURANTE PASAPAN su infalibilidad, disponibilidad o la ausencia de virus y errores.',
				'RESTAURANTE PASAPAN, como titular o cesionaria, ostenta todos los derechos de Propiedad Intelectual e Industrial sobre todos los elementos de la página web, quedando prohibida su reproducción, distribución, comunicación pública y/o transformación, salvo para uso personal y los usos autorizados.',
			],
		},
		{
			heading: 'Legislación aplicable y jurisdicción',
			paras: [
				'El uso de la página web y los contratos de compra se regirán por la legislación española. Cualquier controversia será sometida a los Juzgados y Tribunales de Segovia capital. Cuando el Usuario sea considerado Consumidor podrá reclamar sus derechos tanto en España como en su Estado Miembro de residencia en la Unión Europea.',
			],
		},
	],
};

export const politicaCookies: LegalDoc = {
	slug: 'politica-de-cookies',
	title: 'Política de Cookies',
	sections: [
		{
			heading: '¿Qué son las cookies?',
			paras: [
				'Cuando accedes a nuestra web, en el navegador de tu dispositivo se almacena una pequeña cantidad de texto denominado "cookie" que contiene información variada sobre tu navegación, hábitos, preferencias y personalizaciones de contenidos. Existen otras tecnologías que funcionan de manera similar y que también se usan para recopilar datos sobre tu actividad de navegación; a todas ellas las llamamos "cookies".',
			],
		},
		{
			heading: '¿Para qué se utilizan las cookies en esta web?',
			paras: [
				'El objetivo principal de nuestras cookies es mejorar tu experiencia en la navegación, por ejemplo para recordar tus preferencias (idioma, país, etc.) durante la navegación y en futuras visitas. En determinados casos, si hemos obtenido tu previo consentimiento informado, podremos utilizar cookies para mostrarte publicidad basada en el análisis de tus hábitos de navegación. No se almacena información sensible de identificación personal.',
			],
		},
		{
			heading: '¿Quién utiliza la información almacenada en las cookies?',
			paras: [
				'La información almacenada es utilizada exclusivamente por nosotros, a excepción de las denominadas "cookies de terceros", que son utilizadas y gestionadas por entidades externas que nos proporcionan servicios que mejoran la experiencia del usuario, como las estadísticas gestionadas por Google Analytics o las operaciones de pago.',
			],
		},
		{
			heading: '¿Cómo puedo evitar el uso de cookies?',
			paras: [
				'Si prefieres evitar el uso de las cookies, puedes rechazarlas o configurarlas. Para restringir, bloquear o borrar las cookies puedes modificar la configuración de tu navegador, en el menú "Preferencias", "Herramientas" u "Opciones", en "Privacidad y Seguridad" o "borrar datos de navegación".',
			],
		},
		{
			heading: '¿Qué tipos de cookies se utilizan?',
			paras: [
				'Según la entidad que las gestiona: cookies propias y cookies de terceros.',
				'Según su finalidad:',
			],
			list: [
				'Cookies técnicas: necesarias para la navegación y el buen funcionamiento de la página web.',
				'Cookies de análisis: permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización del servicio.',
				'Cookies de preferencias o personalización: recuerdan información para que el usuario acceda al servicio con determinadas características.',
				'Cookies publicitarias comportamentales: analizan los hábitos de navegación para mostrar publicidad relacionada con el perfil de navegación.',
			],
		},
		{
			heading: 'Según el plazo de tiempo que permanecen activadas',
			paras: ['A continuación se detallan las cookies utilizadas en esta web:'],
			list: [
				'Cookies de sesión: recaban y almacenan datos mientras el usuario accede a la página web y desaparecen al terminar la sesión.',
				'Cookies persistentes: los datos siguen almacenados en el terminal durante un periodo definido por el responsable de la cookie, que puede ir de unos minutos a varios años.',
			],
		},
	],
};