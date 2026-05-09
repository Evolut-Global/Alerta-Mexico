/* ============================================================
   ALERTA JALISCO — App Logic
   225 incidentes (24 confirmados + 201 reportes ciudadanos)
   ============================================================ */

const INCIDENTS = [
  {id:'i1',icon:'🔥',title:'Incendio vehiculo — Crucero del Zapote',place:'Tlajomulco de Zuniga',address:'Carretera Libre a Cd. Guzman, Crucero del Zapote',lat:20.4319,lng:-103.4775,type:'fire',source:'Verificado'},
  {id:'i2',icon:'🔥',title:'Incendio vehiculo — Carretera a Zacoalco',place:'Tlajomulco de Zuniga',address:'Carretera a Zacoalco',lat:20.3835,lng:-103.4312,type:'fire',source:'Reportado'},
  {id:'i3',icon:'🔥',title:'Incendio vehiculo — Col. Colonial Tlaquepaque',place:'San Pedro Tlaquepaque',address:'Colonia Colonial Tlaquepaque',lat:20.6404,lng:-103.3128,type:'fire',source:'Reportado'},
  {id:'i4',icon:'🔥',title:'Incendio vehiculo — Col. Tabachines',place:'Zapopan',address:'Colonia Tabachines / Periferico y Tabachines',lat:20.7412,lng:-103.3778,type:'fire',source:'Confirmado oficialmente'},
  {id:'i5',icon:'🔥',title:'Incendio vehiculo — Carretera Acatlan',place:'Acatlan de Juarez',address:'Sobre carretera a Acatlan (varios puntos)',lat:20.4333,lng:-103.5833,type:'fire',source:'Reportado'},
  {id:'i6',icon:'🔥',title:'Incendio vehiculo — Carr. Morelia-GDL',place:'La Barca',address:'Carretera Morelia - Guadalajara (tramo estatal)',lat:20.28,lng:-102.55,type:'fire',source:'Reportado'},
  {id:'i7',icon:'🔥',title:'Incendio vehiculo — Carr. Chapala / El Zapote',place:'Tlajomulco de Zuniga',address:'Carretera a Chapala, altura del Zapote',lat:20.483,lng:-103.393,type:'fire',source:'Reportado'},
  {id:'i8',icon:'🔥',title:'Incendio vehiculo — Carr. GDL-Colima / Jocotepec',place:'Jocotepec',address:'Carretera Guadalajara-Colima, altura Jocotepec',lat:20.2854,lng:-103.4302,type:'fire',source:'Reportado'},
  {id:'i9',icon:'🔥',title:'Incendio vehiculo — Periferico y Calzada Indep.',place:'Guadalajara',address:'Periferico y Calzada Independencia',lat:20.7035,lng:-103.3234,type:'fire',source:'Confirmado oficialmente'},
  {id:'i10',icon:'🔥',title:'Incendio vehiculo — Periferico y Av. Alcalde',place:'Guadalajara',address:'Avenida Alcalde y Periferico',lat:20.7312,lng:-103.3478,type:'fire',source:'Confirmado oficialmente'},
  {id:'i11',icon:'🔥',title:'Incendio vehiculo — Calzada y Batallon S. Patricio',place:'Guadalajara',address:'Calzada Independencia y Batallon de San Patricio',lat:20.6598,lng:-103.3341,type:'fire',source:'Confirmado oficialmente'},
  {id:'i12',icon:'🔥',title:'Incendio vehiculo — Santa Cruz de las Flores',place:'Tlajomulco de Zuniga',address:'Santa Cruz de las Flores, cruce Vicente Trigo',lat:20.4735,lng:-103.4127,type:'fire',source:'Reportado'},
  {id:'i13',icon:'🔥',title:'Incendio vehiculo — Carr. Chapala y Lazaro Card.',place:'Tlaquepaque',address:'Carr. a Chapala y Lazaro Cardenas, Col. Revolucion',lat:20.6301,lng:-103.3435,type:'fire',source:'Reportado'},
  {id:'i14',icon:'🔥',title:'Incendio vehiculo — GDL-Colima / Buenavista',place:'Tlajomulco de Zuniga',address:'Carretera Guadalajara-Colima, altura Buenavista',lat:20.4142,lng:-103.4741,type:'fire',source:'Confirmado oficialmente'},
  {id:'i15',icon:'🛞',title:'Poncha llantas — GDL-Chapala (varios puntos)',place:'El Salto',address:'Carretera Guadalajara-Chapala, tramo metropolitano',lat:20.5183,lng:-103.1817,type:'spike',source:'Reportado'},
  {id:'i16',icon:'🔥',title:'Incendio vehiculo — Periferico y Av. Vallarta',place:'Zapopan',address:'Periferico y Avenida Vallarta',lat:20.6766,lng:-103.4456,type:'fire',source:'Confirmado oficialmente'},
  {id:'i17',icon:'🔥',title:'Incendio vehiculo — Col. Lomas del Zalate',place:'Tonila',address:'Colimilla y Pedro Moreno, Col. Lomas del Zalate',lat:19.6,lng:-103.4333,type:'fire',source:'Reportado'},
  {id:'i18',icon:'🔥',title:'Incendio vehiculo — 16 de Sep. y La Paz',place:'Guadalajara Centro',address:'Av. 16 de Septiembre y La Paz',lat:20.669,lng:-103.349,type:'fire',source:'Confirmado municipio GDL'},
  {id:'i19',icon:'🏪',title:'Oxxo incendiado — Juarez y Calzada Indep.',place:'Guadalajara',address:'Juarez y Calzada Independencia',lat:20.675,lng:-103.345,type:'fire',source:'Confirmado municipio GDL'},
  {id:'i20',icon:'🚌',title:'Macrobus incendiado — Periferico y Artesanos',place:'Guadalajara',address:'Periferico y Artesanos, estacion del Macrobus',lat:20.71,lng:-103.355,type:'fire',source:'Confirmado municipio GDL'},
  {id:'i21',icon:'🚧',title:'Bloqueo — Periferico y Angel Martinez',place:'Guadalajara',address:'Periferico y Angel Martinez',lat:20.72,lng:-103.36,type:'block',source:'Confirmado municipio GDL'},
  {id:'i22',icon:'🚧',title:'Bloqueo — Periferico y Las Canadas',place:'Zapopan',address:'Periferico y Las Canadas',lat:20.75,lng:-103.42,type:'block',source:'Confirmado municipio Zapopan'},
  {id:'i23',icon:'🚧',title:'Bloqueo — Adolf B Horn, Arvento',place:'Tlajomulco de Zuniga',address:'Adolf B Horn en Arvento',lat:20.53,lng:-103.46,type:'block',source:'Confirmado municipio Tlajomulco'},
  {id:'i24',icon:'🚧',title:'Bloqueo — Lopez Mateos Sur / Las Plazas Outlet',place:'Tlajomulco de Zuniga',address:'Lopez Mateos Sur en Las Plazas Outlet',lat:20.565,lng:-103.415,type:'block',source:'Confirmado municipio Tlajomulco'},
  {id:'fb_2',icon:'🔥',title:'Gasolinera',place:'Reporte ciudadano',address:'Gasolinera',lat:20.688148,lng:-103.294179,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_3',icon:'🔥',title:'Vehículo incendio',place:'Reporte ciudadano',address:'Vehículo incendio',lat:20.68859,lng:-103.295853,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_4',icon:'🔥',title:'Gasolinera incendiada',place:'Reporte ciudadano',address:'Gasolinera incendiada',lat:20.675607,lng:-103.273751,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_5',icon:'🔥',title:'Gasolinera incendiada',place:'Reporte ciudadano',address:'Gasolinera incendiada',lat:20.678188,lng:-103.271806,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_6',icon:'💥',title:'Tiroteo constante',place:'Reporte ciudadano',address:'Tiroteo constante',lat:20.686093,lng:-103.293983,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_7',icon:'🔥',title:'Incendio en la esquina de Enrique Díaz de León y Av. de la V...',place:'Reporte ciudadano',address:'Incendio en la esquina de Enrique Díaz de León y Av. de la Viga.',lat:20.705833,lng:-103.358896,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_8',icon:'🔥',title:'Entrada de abajo a las cañadas y San Esteban, bloqueado y gu...',place:'Reporte ciudadano',address:'Entrada de abajo a las cañadas y San Esteban, bloqueado y guardia nacional muerta',lat:20.790597,lng:-103.350366,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_9',icon:'💥',title:'Avenida Tonalá',place:'Reporte ciudadano',address:'Avenida Tonalá',lat:20.617711,lng:-103.262744,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_10',icon:'💥',title:'Balacera bajo puente de Carretera Guadalajara frente a Centr...',place:'Reporte ciudadano',address:'Balacera bajo puente de Carretera Guadalajara frente a Central camionera Zapopan',lat:20.70426,lng:-103.460807,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_11',icon:'🔥',title:'Glorieta Juan Gil Preciado y carretera colotlan Camión incen...',place:'Reporte ciudadano',address:'Glorieta Juan Gil Preciado y carretera colotlan Camión incendiado',lat:20.781573,lng:-103.463171,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_12',icon:'⚠️',title:'Narcos estacionados en la carretera esperando',place:'Reporte ciudadano',address:'Narcos estacionados en la carretera esperando',lat:20.528917,lng:-102.329205,type:'other',source:'Reporte ciudadano'},
  {id:'fb_13',icon:'🔥',title:'Oxxo Antonio palafox',place:'Reporte ciudadano',address:'Oxxo Antonio palafox',lat:20.642045,lng:-103.438001,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_14',icon:'⚠️',title:'Incendio Oxxo servidor publico',place:'Reporte ciudadano',address:'Incendio Oxxo servidor publico',lat:20.7368,lng:-103.430631,type:'other',source:'Reporte ciudadano'},
  {id:'fb_15',icon:'🔥',title:'Incendio de banco azteca del municipio y balaceras',place:'Reporte ciudadano',address:'Incendio de banco azteca del municipio y balaceras',lat:20.375355,lng:-104.816586,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_16',icon:'🔥',title:'Vehiculo incendiado al lado de estacion zoologico',place:'Reporte ciudadano',address:'Vehiculo incendiado al lado de estacion zoologico',lat:20.727207,lng:-103.315226,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_17',icon:'🔥',title:'Oxxo Quemado',place:'Reporte ciudadano',address:'Oxxo Quemado',lat:21.026903,lng:-101.876253,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_18',icon:'🔥',title:'Crucero del salto',place:'Reporte ciudadano',address:'Crucero del salto',lat:20.49015,lng:-103.27198,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_19',icon:'💥',title:'Colonia Villa Fontana Diamante',place:'Reporte ciudadano',address:'Colonia Villa Fontana Diamante',lat:20.780006,lng:-103.470429,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_20',icon:'🔥',title:'Nogales Vallarts',place:'Reporte ciudadano',address:'Nogales Vallarts',lat:20.704542,lng:-103.462773,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_21',icon:'🔥',title:'CONCENTRO',place:'Reporte ciudadano',address:'CONCENTRO',lat:20.693887,lng:-103.453636,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_22',icon:'🚧',title:'UVM CIUDAD JUDICIAL',place:'Reporte ciudadano',address:'UVM CIUDAD JUDICIAL',lat:20.676924,lng:-103.455396,type:'block',source:'Reporte ciudadano'},
  {id:'fb_23',icon:'🔥',title:'Camion en periferico',place:'Reporte ciudadano',address:'Camion en periferico',lat:20.717945,lng:-103.426473,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_24',icon:'🔥',title:'Restaurante Capuchinos Centro Sur',place:'Reporte ciudadano',address:'Restaurante Capuchinos Centro Sur',lat:20.603061,lng:-103.400402,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_25',icon:'🔥',title:'Camion quemado',place:'Reporte ciudadano',address:'Camion quemado',lat:20.378318,lng:-103.812684,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_26',icon:'🔥',title:'Circunvalacion y Normalistas',place:'Reporte ciudadano',address:'Circunvalacion y Normalistas',lat:20.699801,lng:-103.337081,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_27',icon:'🔥',title:'Carro incendiado',place:'Reporte ciudadano',address:'Carro incendiado',lat:20.678146,lng:-103.417557,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_28',icon:'🔥',title:'7eleven incendiado',place:'Reporte ciudadano',address:'7eleven incendiado',lat:20.690056,lng:-103.303375,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_29',icon:'🔥',title:'Taxi incendiado',place:'Reporte ciudadano',address:'Taxi incendiado',lat:20.768258,lng:-103.419757,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_30',icon:'🔥',title:'Quema de un trailer y un camión más pequeño',place:'Reporte ciudadano',address:'Quema de un trailer y un camión más pequeño',lat:20.570044,lng:-103.140121,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_31',icon:'⚠️',title:'Oxxo Incendiado',place:'Reporte ciudadano',address:'Oxxo Incendiado',lat:20.779342,lng:-103.468868,type:'other',source:'Reporte ciudadano'},
  {id:'fb_32',icon:'🔥',title:'Quema de establecimientos',place:'Reporte ciudadano',address:'Quema de establecimientos',lat:20.568752,lng:-103.139836,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_33',icon:'🔥',title:'circunvalacion oblatos y juan pablo II',place:'Reporte ciudadano',address:'circunvalacion oblatos y juan pablo II',lat:20.692133,lng:-103.312383,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_34',icon:'⚠️',title:'Oxxo incendiado',place:'Reporte ciudadano',address:'Oxxo incendiado',lat:20.765191,lng:-103.522979,type:'other',source:'Reporte ciudadano'},
  {id:'fb_35',icon:'⚠️',title:'Oxxo incendiado',place:'Reporte ciudadano',address:'Oxxo incendiado',lat:20.65359,lng:-103.314522,type:'other',source:'Reporte ciudadano'},
  {id:'fb_36',icon:'🔥',title:'Kpetrom periférico y Mariano Otero',place:'Reporte ciudadano',address:'Kpetrom periférico y Mariano Otero',lat:20.630289,lng:-103.436287,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_37',icon:'⚠️',title:'Quema de un OXXO',place:'Reporte ciudadano',address:'Quema de un OXXO',lat:20.746611,lng:-103.392004,type:'other',source:'Reporte ciudadano'},
  {id:'fb_38',icon:'⚠️',title:'Intento de incendio y balacera',place:'Reporte ciudadano',address:'Intento de incendio y balacera',lat:20.752167,lng:-103.407448,type:'other',source:'Reporte ciudadano'},
  {id:'fb_39',icon:'🔥',title:'Vehículo incendiado',place:'Reporte ciudadano',address:'Vehículo incendiado',lat:20.661101,lng:-103.322763,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_40',icon:'⚠️',title:'Oxxo incendiado en justo corro',place:'Reporte ciudadano',address:'Oxxo incendiado en justo corro',lat:20.651325,lng:-103.315984,type:'other',source:'Reporte ciudadano'},
  {id:'fb_41',icon:'⚠️',title:'intento de incendio y balacera en Upper',place:'Reporte ciudadano',address:'intento de incendio y balacera en Upper',lat:20.752118,lng:-103.407456,type:'other',source:'Reporte ciudadano'},
  {id:'fb_42',icon:'🔥',title:'Av. de los cedros y Av. Tesistán, cerca de prepa 7. Camion 6...',place:'Reporte ciudadano',address:'Av. de los cedros y Av. Tesistán, cerca de prepa 7. Camion 632-B incendiado',lat:20.737011,lng:-103.410798,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_43',icon:'🔥',title:'Vehículo en llamas a un lado del Oxxo enfrente de la escuela...',place:'Reporte ciudadano',address:'Vehículo en llamas a un lado del Oxxo enfrente de la escuela vocacional',lat:20.656708,lng:-103.328583,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_44',icon:'🔥',title:'Transporte público quemado y bloqueando',place:'Reporte ciudadano',address:'Transporte público quemado y bloqueando',lat:20.783593,lng:-103.509639,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_45',icon:'💥',title:'San Juan de ocotam',place:'Reporte ciudadano',address:'San Juan de ocotam',lat:20.703554,lng:-103.453832,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_46',icon:'🔥',title:'transporte público incendiado',place:'Reporte ciudadano',address:'transporte público incendiado',lat:20.780473,lng:-103.512257,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_47',icon:'💥',title:'en el parque ruben dario hubo balacera a las 11am aproximada...',place:'Reporte ciudadano',address:'en el parque ruben dario hubo balacera a las 11am aproximadamente',lat:20.692359,lng:-103.38351,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_48',icon:'🚧',title:'Bloqueo en el crucero Arandas-Tepatitlan, se reporta la quem...',place:'Reporte ciudadano',address:'Bloqueo en el crucero Arandas-Tepatitlan, se reporta la quema de varios camiones los cuales impiden circulación',lat:20.721331,lng:-102.454491,type:'block',source:'Reporte ciudadano'},
  {id:'fb_49',icon:'⚠️',title:'Farmacias guadalajara incendiada',place:'Reporte ciudadano',address:'Farmacias guadalajara incendiada',lat:20.642755,lng:-103.449531,type:'other',source:'Reporte ciudadano'},
  {id:'fb_50',icon:'🔥',title:'Farmacias guadalajar incedio',place:'Reporte ciudadano',address:'Farmacias guadalajar incedio',lat:20.641857,lng:-103.443742,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_51',icon:'⚠️',title:'Oxxo Martell del valle incendiado',place:'Reporte ciudadano',address:'Oxxo Martell del valle incendiado',lat:20.801473,lng:-103.482097,type:'other',source:'Reporte ciudadano'},
  {id:'fb_52',icon:'⚠️',title:'Gasolinera incendiada',place:'Reporte ciudadano',address:'Gasolinera incendiada',lat:20.799811,lng:-103.486718,type:'other',source:'Reporte ciudadano'},
  {id:'fb_53',icon:'🔥',title:'Se incendio un camión y hubo balazos',place:'Reporte ciudadano',address:'Se incendio un camión y hubo balazos',lat:20.759998,lng:-103.43676,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_54',icon:'🔥',title:'Avenida Periferico y tuzania',place:'Reporte ciudadano',address:'Avenida Periferico y tuzania',lat:20.733017,lng:-103.410251,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_55',icon:'🔥',title:'Av. Reyes Heroles y Calle Valerio Trujano, Col. Emiliano Zap...',place:'Reporte ciudadano',address:'Av. Reyes Heroles y Calle Valerio Trujano, Col. Emiliano Zapata 44180',lat:20.623256,lng:-103.382354,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_57',icon:'⚠️',title:'Vehículo abandonado con bidones vacíos y señales de violenci...',place:'Reporte ciudadano',address:'Vehículo abandonado con bidones vacíos y señales de violencia en Av. Presidentes y Manuel Puga y Acal',lat:20.651027,lng:-103.320275,type:'other',source:'Reporte ciudadano'},
  {id:'fb_58',icon:'🔥',title:'Farmacia incendiada',place:'Reporte ciudadano',address:'Farmacia incendiada',lat:20.619917,lng:-103.355116,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_59',icon:'🔥',title:'Cerca de Carrillo Puerto, El Verde, 45694 San José el Verde,...',place:'Reporte ciudadano',address:'Cerca de Carrillo Puerto, El Verde, 45694 San José el Verde, Jal.',lat:20.562153,lng:-103.285673,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_60',icon:'⚠️',title:'Calle Avenida san mateo camionetas extrañas entrando por tes...',place:'Reporte ciudadano',address:'Calle Avenida san mateo camionetas extrañas entrando por tesistan',lat:20.789094,lng:-103.468525,type:'other',source:'Reporte ciudadano'},
  {id:'fb_61',icon:'🔥',title:'Autobús urbano cerca de las 9:00 a.m permanece bloqueado el ...',place:'Reporte ciudadano',address:'Autobús urbano cerca de las 9:00 a.m permanece bloqueado el sitio',lat:20.484295,lng:-103.495159,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_62',icon:'🔥',title:'Camionetas',place:'Reporte ciudadano',address:'Camionetas',lat:20.789454,lng:-103.46828,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_64',icon:'⚠️',title:'Camionetas extrañas entrando',place:'Reporte ciudadano',address:'Camionetas extrañas entrando',lat:20.78884,lng:-103.468785,type:'other',source:'Reporte ciudadano'},
  {id:'fb_65',icon:'⚠️',title:'Periférico y naciones unidas Oxxo incendiado gasolinera shel...',place:'Reporte ciudadano',address:'Periférico y naciones unidas Oxxo incendiado gasolinera shell',lat:20.703539,lng:-103.44807,type:'other',source:'Reporte ciudadano'},
  {id:'fb_66',icon:'🔥',title:'Autobús urbano cerca de la zona de las cuatas permanece bloq...',place:'Reporte ciudadano',address:'Autobús urbano cerca de la zona de las cuatas permanece bloqueado el sitio',lat:20.481235,lng:-103.497679,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_67',icon:'⚠️',title:'Incendio en farmacia Guadalajara calle 22 y legazpi',place:'Reporte ciudadano',address:'Incendio en farmacia Guadalajara calle 22 y legazpi',lat:20.631881,lng:-103.358915,type:'other',source:'Reporte ciudadano'},
  {id:'fb_68',icon:'🔥',title:'Boulevard el vigia y avenida laureles  Carro en llamas ya ac...',place:'Reporte ciudadano',address:'Boulevard el vigia y avenida laureles  Carro en llamas ya acordonada la zona sin arribo de policías',lat:20.731417,lng:-103.393743,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_69',icon:'🔥',title:'Quema de vehículo en Lázaro cardenas cruce carretera Chapala',place:'Reporte ciudadano',address:'Quema de vehículo en Lázaro cardenas cruce carretera Chapala',lat:20.625929,lng:-103.323544,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_70',icon:'🔥',title:'Avenida laurea y boulevard del vigía carro en llamas',place:'Reporte ciudadano',address:'Avenida laurea y boulevard del vigía carro en llamas',lat:20.731496,lng:-103.393736,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_71',icon:'🔥',title:'Casa verde',place:'Reporte ciudadano',address:'Casa verde',lat:19.353984,lng:-90.723333,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_72',icon:'⚠️',title:'Camioneta raras',place:'Reporte ciudadano',address:'Camioneta raras',lat:20.788902,lng:-103.468358,type:'other',source:'Reporte ciudadano'},
  {id:'fb_73',icon:'🔥',title:'Avenida rio blanco y avenida paseo de las avez',place:'Reporte ciudadano',address:'Avenida rio blanco y avenida paseo de las avez',lat:20.760199,lng:-103.389543,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_74',icon:'🔥',title:'vehículo incendiado cerca de carnicería',place:'Reporte ciudadano',address:'vehículo incendiado cerca de carnicería',lat:20.733693,lng:-103.354327,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_75',icon:'🔥',title:'vehículo quemado cerca de tortas en lateral periférico',place:'Reporte ciudadano',address:'vehículo quemado cerca de tortas en lateral periférico',lat:20.732166,lng:-103.354644,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_76',icon:'💥',title:'Batallón de San Patricio y Calzada Independencia',place:'Reporte ciudadano',address:'Batallón de San Patricio y Calzada Independencia',lat:20.716325,lng:-103.319565,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_77',icon:'⚠️',title:'Cerro del tesoro explosión',place:'Reporte ciudadano',address:'Cerro del tesoro explosión',lat:20.623868,lng:-103.404007,type:'other',source:'Reporte ciudadano'},
  {id:'fb_78',icon:'💥',title:'Avenida Palmeras',place:'Reporte ciudadano',address:'Avenida Palmeras',lat:20.730786,lng:-103.416004,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_79',icon:'🔥',title:'Vehículos incendiados en carretera barra de navidad en Villa...',place:'Reporte ciudadano',address:'Vehículos incendiados en carretera barra de navidad en Villa Corona',lat:20.416138,lng:-103.668665,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_80',icon:'💥',title:'Balacera',place:'Reporte ciudadano',address:'Balacera',lat:20.625449,lng:-103.243616,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_81',icon:'🔥',title:'Vehículos incendiados ambos lados',place:'Reporte ciudadano',address:'Vehículos incendiados ambos lados',lat:20.56206,lng:-103.283351,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_82',icon:'🔥',title:'Rio Seco y Lázaro Cárdenas',place:'Reporte ciudadano',address:'Rio Seco y Lázaro Cárdenas',lat:20.625622,lng:-103.304615,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_83',icon:'⚠️',title:'OXXO Incendiado',place:'Reporte ciudadano',address:'OXXO Incendiado',lat:20.780786,lng:-103.46213,type:'other',source:'Reporte ciudadano'},
  {id:'fb_84',icon:'💥',title:'San Pedrito',place:'Reporte ciudadano',address:'San Pedrito',lat:20.615546,lng:-103.28938,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_85',icon:'💥',title:'Balacera por carretera a tesistan',place:'Reporte ciudadano',address:'Balacera por carretera a tesistan',lat:20.795617,lng:-103.477078,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_86',icon:'🔥',title:'Prolongación Parres Arias y Av Camino Bosques de San Isidro',place:'Reporte ciudadano',address:'Prolongación Parres Arias y Av Camino Bosques de San Isidro',lat:20.757755,lng:-103.38315,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_87',icon:'🔥',title:'Oxxo incendiado',place:'Reporte ciudadano',address:'Oxxo incendiado',lat:20.774623,lng:-103.44527,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_88',icon:'🚧',title:'Zoquipan y lago superior',place:'Reporte ciudadano',address:'Zoquipan y lago superior',lat:20.717788,lng:-103.368584,type:'block',source:'Reporte ciudadano'},
  {id:'fb_89',icon:'⚠️',title:'Oxxo incendiado',place:'Reporte ciudadano',address:'Oxxo incendiado',lat:20.774552,lng:-103.445235,type:'other',source:'Reporte ciudadano'},
  {id:'fb_90',icon:'🔥',title:'Pasando puente del diablo',place:'Reporte ciudadano',address:'Pasando puente del diablo',lat:20.569188,lng:-103.145726,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_91',icon:'⚠️',title:'oxxo incendiado',place:'Reporte ciudadano',address:'oxxo incendiado',lat:20.774583,lng:-103.445292,type:'other',source:'Reporte ciudadano'},
  {id:'fb_92',icon:'🔥',title:'incendio de pastizal por parte de 2 sujetos en una motocicle...',place:'Reporte ciudadano',address:'incendio de pastizal por parte de 2 sujetos en una motocicleta',lat:20.614695,lng:-103.399195,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_93',icon:'🔥',title:'El sauz  incendio',place:'Reporte ciudadano',address:'El sauz  incendio',lat:20.621991,lng:-103.389072,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_94',icon:'💥',title:'Colonia Lomas de independencia, despojamiento de vehículos y...',place:'Reporte ciudadano',address:'Colonia Lomas de independencia, despojamiento de vehículos y enfrentamientos con armas',lat:20.713703,lng:-103.330709,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_95',icon:'🔥',title:'Puente Autlan - El Grullo',place:'Reporte ciudadano',address:'Puente Autlan - El Grullo',lat:19.791551,lng:-104.229153,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_96',icon:'🔥',title:'Autobús de transporte público',place:'Reporte ciudadano',address:'Autobús de transporte público',lat:20.662407,lng:-103.232434,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_97',icon:'🔥',title:'Puente Puerta del Barro - El Grullo',place:'Reporte ciudadano',address:'Puente Puerta del Barro - El Grullo',lat:19.818593,lng:-104.233745,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_98',icon:'🔥',title:'Puente el corcovado',place:'Reporte ciudadano',address:'Puente el corcovado',lat:19.851188,lng:-104.283133,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_99',icon:'🔥',title:'Crucero El Mentidero - Lagunillas',place:'Reporte ciudadano',address:'Crucero El Mentidero - Lagunillas',lat:19.769812,lng:-104.295153,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_100',icon:'🔥',title:'Crucero de carretera a el salto y carretera a el verde',place:'Reporte ciudadano',address:'Crucero de carretera a el salto y carretera a el verde',lat:20.498867,lng:-103.231285,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_101',icon:'🚧',title:'Cruce El Mentidero - Lagunillas',place:'Reporte ciudadano',address:'Cruce El Mentidero - Lagunillas',lat:19.770053,lng:-104.295263,type:'block',source:'Reporte ciudadano'},
  {id:'fb_102',icon:'🔥',title:'Puente El Chacalito - El Grullo',place:'Reporte ciudadano',address:'Puente El Chacalito - El Grullo',lat:19.81302,lng:-104.244384,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_103',icon:'🔥',title:'Carretera libre a Zapotlanejo y Av Arroyo de Enmedio',place:'Reporte ciudadano',address:'Carretera libre a Zapotlanejo y Av Arroyo de Enmedio',lat:20.601504,lng:-103.239405,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_104',icon:'🔥',title:'Vehículos atravesados en llamas',place:'Reporte ciudadano',address:'Vehículos atravesados en llamas',lat:20.630759,lng:-105.228474,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_105',icon:'⚠️',title:'Oxxo de San José del Quince incendiado.',place:'Reporte ciudadano',address:'Oxxo de San José del Quince incendiado.',lat:20.650071,lng:-103.336029,type:'other',source:'Reporte ciudadano'},
  {id:'fb_106',icon:'🔥',title:'Vehiculo de transporte público incendiado',place:'Reporte ciudadano',address:'Vehiculo de transporte público incendiado',lat:20.727814,lng:-103.544624,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_107',icon:'⚠️',title:'Central nueva todos los módulos del 1 al 7',place:'Reporte ciudadano',address:'Central nueva todos los módulos del 1 al 7',lat:20.62202,lng:-103.284731,type:'other',source:'Reporte ciudadano'},
  {id:'fb_108',icon:'🔥',title:'Quema de autos en el lado de Mazamitla',place:'Reporte ciudadano',address:'Quema de autos en el lado de Mazamitla',lat:19.920017,lng:-103.023691,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_109',icon:'⚠️',title:'En el pueblo donde inició el desmadre',place:'Reporte ciudadano',address:'En el pueblo donde inició el desmadre',lat:19.943337,lng:-103.760262,type:'other',source:'Reporte ciudadano'},
  {id:'fb_110',icon:'🔥',title:'Bloqueo de carretera',place:'Reporte ciudadano',address:'Bloqueo de carretera',lat:20.849134,lng:-103.445184,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_111',icon:'💥',title:'Balacera, incendios, gente armada y encapuchada en tianguis ...',place:'Reporte ciudadano',address:'Balacera, incendios, gente armada y encapuchada en tianguis textil Tepatitlan',lat:20.811586,lng:-102.781773,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_112',icon:'🔥',title:'Colonia Jardines de Tepa',place:'Reporte ciudadano',address:'Colonia Jardines de Tepa',lat:20.815025,lng:-102.778816,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_113',icon:'🔥',title:'Banco incendiado, gente armada',place:'Reporte ciudadano',address:'Banco incendiado, gente armada',lat:21.167876,lng:-102.465252,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_114',icon:'🔥',title:'Se reporta un incendio de un tipo camion sobre la carretera ...',place:'Reporte ciudadano',address:'Se reporta un incendio de un tipo camion sobre la carretera 45 norte y cierres por vehículos incendiados en la 45 sur.',lat:20.433288,lng:-103.478122,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_115',icon:'⚠️',title:'Rastro y la calerilla OXXO de quemado',place:'Reporte ciudadano',address:'Rastro y la calerilla OXXO de quemado',lat:20.537381,lng:-103.422923,type:'other',source:'Reporte ciudadano'},
  {id:'fb_116',icon:'⚠️',title:'Intento de incendio en Seven 7 y estación de la Línea 3',place:'Reporte ciudadano',address:'Intento de incendio en Seven 7 y estación de la Línea 3',lat:20.74124,lng:-103.406947,type:'other',source:'Reporte ciudadano'},
  {id:'fb_117',icon:'🔥',title:'Se reporta el incendio de un trococamion sobre la carretera ...',place:'Reporte ciudadano',address:'Se reporta el incendio de un trococamion sobre la carretera 45 norte y cierres totales por vehículos incendiados  en  la carretera 45 sur',lat:21.979679,lng:-102.291641,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_118',icon:'⚠️',title:'Intento de incendio en 7 eleven y balacera en estación Arcos...',place:'Reporte ciudadano',address:'Intento de incendio en 7 eleven y balacera en estación Arcos de Zapopan',lat:20.741325,lng:-103.40714,type:'other',source:'Reporte ciudadano'},
  {id:'fb_119',icon:'🔥',title:'Carretera Totatiche vehículos en llamas',place:'Reporte ciudadano',address:'Carretera Totatiche vehículos en llamas',lat:21.931422,lng:-103.406925,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_120',icon:'💥',title:'Oxxo de Santa Anita incendiado, enfrentamiento',place:'Reporte ciudadano',address:'Oxxo de Santa Anita incendiado, enfrentamiento',lat:20.551807,lng:-103.446931,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_121',icon:'💥',title:'Balacera en estación Arcos de Zapopan de la Línea 3 e intent...',place:'Reporte ciudadano',address:'Balacera en estación Arcos de Zapopan de la Línea 3 e intento de incendio en 7 eleven',lat:20.741084,lng:-103.406711,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_122',icon:'🔥',title:'Carretera Federal 110, entre la comunidad de Arroyo Hondo y ...',place:'Reporte ciudadano',address:'Carretera Federal 110, entre la comunidad de Arroyo Hondo y Soyatlan de Afuera.',lat:19.682673,lng:-103.296948,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_123',icon:'🔥',title:'carretera libre Tepatitlán carro atravesado en llamas',place:'Reporte ciudadano',address:'carretera libre Tepatitlán carro atravesado en llamas',lat:21.277278,lng:-102.319686,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_124',icon:'⚠️',title:'Av Santa Rosalía y Patria. Farmacia similares incendiada',place:'Reporte ciudadano',address:'Av Santa Rosalía y Patria. Farmacia similares incendiada',lat:20.637112,lng:-103.284045,type:'other',source:'Reporte ciudadano'},
  {id:'fb_125',icon:'⚠️',title:'Av. Tepeyac, cruce con Av. Clouthier, gasolinera incendiada',place:'Reporte ciudadano',address:'Av. Tepeyac, cruce con Av. Clouthier, gasolinera incendiada',lat:20.655478,lng:-103.424099,type:'other',source:'Reporte ciudadano'},
  {id:'fb_126',icon:'⚠️',title:'C. Juarez, Centro, 46770 San Martín Hidalgo, Jal. Gasolinera...',place:'Reporte ciudadano',address:'C. Juarez, Centro, 46770 San Martín Hidalgo, Jal. Gasolinera incendiada',lat:20.434417,lng:-103.923417,type:'other',source:'Reporte ciudadano'},
  {id:'fb_127',icon:'⚠️',title:'Oxxo calle bandera, Fransisco Silva romero',place:'Reporte ciudadano',address:'Oxxo calle bandera, Fransisco Silva romero',lat:20.597756,lng:-103.262799,type:'other',source:'Reporte ciudadano'},
  {id:'fb_128',icon:'⚠️',title:'Oxxo incendiado',place:'Reporte ciudadano',address:'Oxxo incendiado',lat:20.381927,lng:-103.860219,type:'other',source:'Reporte ciudadano'},
  {id:'fb_129',icon:'🚧',title:'Bloqueo de el puente el corcovado',place:'Reporte ciudadano',address:'Bloqueo de el puente el corcovado',lat:19.850976,lng:-104.283377,type:'block',source:'Reporte ciudadano'},
  {id:'fb_130',icon:'🔥',title:'Av Patria y Calzada Federalismo, frente a Mercado Atemajac',place:'Reporte ciudadano',address:'Av Patria y Calzada Federalismo, frente a Mercado Atemajac',lat:20.715173,lng:-103.354547,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_131',icon:'🔥',title:'Oxxo incendiado, en calle bandera',place:'Reporte ciudadano',address:'Oxxo incendiado, en calle bandera',lat:20.598956,lng:-103.262901,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_132',icon:'🔥',title:'Varios vehículos incendiados',place:'Reporte ciudadano',address:'Varios vehículos incendiados',lat:20.381891,lng:-103.864671,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_133',icon:'🔥',title:'Varios vehículos incendiados',place:'Reporte ciudadano',address:'Varios vehículos incendiados',lat:20.381903,lng:-103.864617,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_134',icon:'💥',title:'Balacera frente a Jabil',place:'Reporte ciudadano',address:'Balacera frente a Jabil',lat:20.740984,lng:-103.399501,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_135',icon:'🔥',title:'Camión incendiado y atravesado',place:'Reporte ciudadano',address:'Camión incendiado y atravesado',lat:20.820898,lng:-103.429004,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_136',icon:'🔥',title:'Camion incendiado',place:'Reporte ciudadano',address:'Camion incendiado',lat:20.824163,lng:-103.428423,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_137',icon:'🚧',title:'Camión atravesado',place:'Reporte ciudadano',address:'Camión atravesado',lat:20.84971,lng:-103.445281,type:'block',source:'Reporte ciudadano'},
  {id:'fb_138',icon:'🚧',title:'Av.patria , cruce de federalismo, en la línea 1 estación ate...',place:'Reporte ciudadano',address:'Av.patria , cruce de federalismo, en la línea 1 estación atemajac , está bloqueado no hay paso',lat:20.715469,lng:-103.354679,type:'block',source:'Reporte ciudadano'},
  {id:'fb_139',icon:'⚠️',title:'Oxxo Incendiado',place:'Reporte ciudadano',address:'Oxxo Incendiado',lat:20.719096,lng:-103.472497,type:'other',source:'Reporte ciudadano'},
  {id:'fb_140',icon:'🚧',title:'Bloqueo en carretera Tepic-Puga, a la altura de Los Sabinos',place:'Reporte ciudadano',address:'Bloqueo en carretera Tepic-Puga, a la altura de Los Sabinos',lat:21.584165,lng:-104.857163,type:'block',source:'Reporte ciudadano'},
  {id:'fb_141',icon:'🔥',title:'Vehiculo Incendiado',place:'Reporte ciudadano',address:'Vehiculo Incendiado',lat:20.713017,lng:-103.457083,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_142',icon:'🔥',title:'Avenida patria y federalismo (mercado de atemajac',place:'Reporte ciudadano',address:'Avenida patria y federalismo (mercado de atemajac',lat:20.71558,lng:-103.354428,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_143',icon:'⚠️',title:'Super colchones incendiado Centro Sur',place:'Reporte ciudadano',address:'Super colchones incendiado Centro Sur',lat:20.60523,lng:-103.401132,type:'other',source:'Reporte ciudadano'},
  {id:'fb_144',icon:'🔥',title:'calle cerrada cancun-leona vicario',place:'Reporte ciudadano',address:'calle cerrada cancun-leona vicario',lat:21.104039,lng:-86.967044,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_145',icon:'🔥',title:'Taxi libre incendiado sobre avenida Internacional, la cual e...',place:'Reporte ciudadano',address:'Taxi libre incendiado sobre avenida Internacional, la cual es principal para acceso a Aeropuerto Internacional de Tijuana',lat:20.725973,lng:-103.376284,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_146',icon:'⚠️',title:'oxxo incendiado',place:'Reporte ciudadano',address:'oxxo incendiado',lat:20.719062,lng:-103.472543,type:'other',source:'Reporte ciudadano'},
  {id:'fb_147',icon:'⚠️',title:'Oxxo incenciado',place:'Reporte ciudadano',address:'Oxxo incenciado',lat:20.36562,lng:-103.822603,type:'other',source:'Reporte ciudadano'},
  {id:'fb_148',icon:'🔥',title:'TRACTOCAMIÓN INCENDIADO',place:'Reporte ciudadano',address:'TRACTOCAMIÓN INCENDIADO',lat:20.712817,lng:-103.469528,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_149',icon:'🔥',title:'Camiones de transporte urbano incendiados en la curva del Gu...',place:'Reporte ciudadano',address:'Camiones de transporte urbano incendiados en la curva del Guayabo',lat:21.466394,lng:-104.888406,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_150',icon:'🔥',title:'Auto en llamas',place:'Reporte ciudadano',address:'Auto en llamas',lat:20.768131,lng:-103.419821,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_151',icon:'⚠️',title:'oxxo incendiado',place:'Reporte ciudadano',address:'oxxo incendiado',lat:20.371846,lng:-103.821777,type:'other',source:'Reporte ciudadano'},
  {id:'fb_152',icon:'🔥',title:'Esquina de matatlan y periférico',place:'Reporte ciudadano',address:'Esquina de matatlan y periférico',lat:20.670407,lng:-103.224705,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_153',icon:'🔥',title:'Oxxo incendiado  Banco del bienestar incendiado  Varios vehí...',place:'Reporte ciudadano',address:'Oxxo incendiado  Banco del bienestar incendiado  Varios vehículos incendiados en las entradas/salidas del pueblo',lat:21.462321,lng:-103.45661,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_154',icon:'⚠️',title:'Tienda de conveniencia incendiada',place:'Reporte ciudadano',address:'Tienda de conveniencia incendiada',lat:20.640363,lng:-103.257224,type:'other',source:'Reporte ciudadano'},
  {id:'fb_155',icon:'⚠️',title:'Incendio en farmacia benavides',place:'Reporte ciudadano',address:'Incendio en farmacia benavides',lat:20.650546,lng:-103.287498,type:'other',source:'Reporte ciudadano'},
  {id:'fb_156',icon:'💥',title:'Balacera',place:'Reporte ciudadano',address:'Balacera',lat:20.686698,lng:-100.466752,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_157',icon:'💥',title:'Calle Lago y Calle lago Yuriria, Balacera Cerca de un oxxo',place:'Reporte ciudadano',address:'Calle Lago y Calle lago Yuriria, Balacera Cerca de un oxxo',lat:20.699496,lng:-100.468407,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_158',icon:'🔥',title:'Vehiculo parcialmente incendiado, restos ubicados',place:'Reporte ciudadano',address:'Vehiculo parcialmente incendiado, restos ubicados',lat:20.633979,lng:-103.24374,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_159',icon:'🔥',title:'Soriana circunvalación',place:'Reporte ciudadano',address:'Soriana circunvalación',lat:20.683137,lng:-103.385446,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_160',icon:'🔥',title:'Carretera Ahuacatlán - Amatlan de cañas',place:'Reporte ciudadano',address:'Carretera Ahuacatlán - Amatlan de cañas',lat:21.036882,lng:-104.474273,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_161',icon:'⚠️',title:'Amacueca, Banco del Bienestar quemado',place:'Reporte ciudadano',address:'Amacueca, Banco del Bienestar quemado',lat:20.007024,lng:-103.603392,type:'other',source:'Reporte ciudadano'},
  {id:'fb_162',icon:'⚠️',title:'OXXO INCENDIADO',place:'Reporte ciudadano',address:'OXXO INCENDIADO',lat:20.587203,lng:-103.383536,type:'other',source:'Reporte ciudadano'},
  {id:'fb_163',icon:'🔥',title:'Camiones del transporte público incendiados',place:'Reporte ciudadano',address:'Camiones del transporte público incendiados',lat:21.466152,lng:-104.888716,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_164',icon:'⚠️',title:'Electra de av. Tonaltecas incendiado',place:'Reporte ciudadano',address:'Electra de av. Tonaltecas incendiado',lat:20.626512,lng:-103.246064,type:'other',source:'Reporte ciudadano'},
  {id:'fb_165',icon:'🔥',title:'Transporte incendiado',place:'Reporte ciudadano',address:'Transporte incendiado',lat:20.675773,lng:-103.238193,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_166',icon:'⚠️',title:'Incendio Farmacias del Ahorro Santa Rosalia',place:'Reporte ciudadano',address:'Incendio Farmacias del Ahorro Santa Rosalia',lat:20.63695,lng:-103.284,type:'other',source:'Reporte ciudadano'},
  {id:'fb_167',icon:'🔥',title:'Carro encendido',place:'Reporte ciudadano',address:'Carro encendido',lat:20.683491,lng:-103.245649,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_168',icon:'⚠️',title:'Refaccionaría O\'Reilly incendiada',place:'Reporte ciudadano',address:'Refaccionaría O\'Reilly incendiada',lat:20.64971,lng:-103.456404,type:'other',source:'Reporte ciudadano'},
  {id:'fb_169',icon:'🔥',title:'Subida a Tepec bloqueada',place:'Reporte ciudadano',address:'Subida a Tepec bloqueada',lat:19.987747,lng:-103.635321,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_170',icon:'🔥',title:'Macrobus en llamas',place:'Reporte ciudadano',address:'Macrobus en llamas',lat:20.680942,lng:-103.242989,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_171',icon:'🔥',title:'Bloqueo con camión incendiado',place:'Reporte ciudadano',address:'Bloqueo con camión incendiado',lat:20.908615,lng:-103.957062,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_172',icon:'🔥',title:'Carro en llamas',place:'Reporte ciudadano',address:'Carro en llamas',lat:20.683451,lng:-103.245596,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_173',icon:'🔥',title:'vehiculo encendido',place:'Reporte ciudadano',address:'vehiculo encendido',lat:19.474371,lng:-99.986572,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_174',icon:'🔥',title:'Vehiculo incediado',place:'Reporte ciudadano',address:'Vehiculo incediado',lat:21.261906,lng:-102.326542,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_175',icon:'🔥',title:'4 Coches quemados',place:'Reporte ciudadano',address:'4 Coches quemados',lat:21.257714,lng:-102.322975,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_176',icon:'🔥',title:'3 vehiculos incendiados (unn taxi, 1 coche y una camioneta)',place:'Reporte ciudadano',address:'3 vehiculos incendiados (unn taxi, 1 coche y una camioneta)',lat:21.265715,lng:-102.312434,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_177',icon:'🔥',title:'Dos trailers quemados',place:'Reporte ciudadano',address:'Dos trailers quemados',lat:21.276778,lng:-102.321081,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_178',icon:'🔥',title:'Varios autos incendiados',place:'Reporte ciudadano',address:'Varios autos incendiados',lat:21.289564,lng:-102.26836,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_179',icon:'⚠️',title:'Ataque a la base de la guardia nacional',place:'Reporte ciudadano',address:'Ataque a la base de la guardia nacional',lat:21.289758,lng:-102.268161,type:'other',source:'Reporte ciudadano'},
  {id:'fb_180',icon:'🔥',title:'Vehiculos incenciados',place:'Reporte ciudadano',address:'Vehiculos incenciados',lat:21.225737,lng:-102.314107,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_181',icon:'🔥',title:'Carretera a Mazamitla, antes de entrar al pueblo',place:'Reporte ciudadano',address:'Carretera a Mazamitla, antes de entrar al pueblo',lat:19.92199,lng:-103.038664,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_182',icon:'🔥',title:'Vehículo atravesado en llamas',place:'Reporte ciudadano',address:'Vehículo atravesado en llamas',lat:21.090255,lng:-101.621033,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_183',icon:'🔥',title:'Coche quemado',place:'Reporte ciudadano',address:'Coche quemado',lat:21.243767,lng:-102.338247,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_184',icon:'🔥',title:'2 trailers quemados, libramientos de san juan de los lagos',place:'Reporte ciudadano',address:'2 trailers quemados, libramientos de san juan de los lagos',lat:21.263841,lng:-102.3352,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_185',icon:'🔥',title:'Vehiculo quemado, colonia el herrero avenida universidad',place:'Reporte ciudadano',address:'Vehiculo quemado, colonia el herrero avenida universidad',lat:21.261761,lng:-102.326574,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_186',icon:'⚠️',title:'Banco del bienestar Chapala incendiado',place:'Reporte ciudadano',address:'Banco del bienestar Chapala incendiado',lat:20.299478,lng:-103.195454,type:'other',source:'Reporte ciudadano'},
  {id:'fb_187',icon:'💥',title:'Ataque a las instalaciones de la guardia nacional san juan d...',place:'Reporte ciudadano',address:'Ataque a las instalaciones de la guardia nacional san juan de los lagos',lat:21.289687,lng:-102.267952,type:'shooting',source:'Reporte ciudadano'},
  {id:'fb_188',icon:'⚠️',title:'oxxo incendiado',place:'Reporte ciudadano',address:'oxxo incendiado',lat:20.673775,lng:-103.295281,type:'other',source:'Reporte ciudadano'},
  {id:'fb_189',icon:'🔥',title:'Police car been set on fire',place:'Reporte ciudadano',address:'Police car been set on fire',lat:21.176729,lng:-104.634476,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_190',icon:'🔥',title:'Entrada a Avenida San Isidro por Periférico Norte camión inc...',place:'Reporte ciudadano',address:'Entrada a Avenida San Isidro por Periférico Norte camión incendiado',lat:20.740603,lng:-103.385714,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_191',icon:'🔥',title:'Quemaron autobús en puente Marabasco',place:'Reporte ciudadano',address:'Quemaron autobús en puente Marabasco',lat:19.236781,lng:-104.554276,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_192',icon:'🔥',title:'Dos camiones atravesados incendiados',place:'Reporte ciudadano',address:'Dos camiones atravesados incendiados',lat:21.465671,lng:-104.888729,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_193',icon:'⚠️',title:'Av. Guadalupe y Prolongación el Colli, lugar incendiado O\'Re...',place:'Reporte ciudadano',address:'Av. Guadalupe y Prolongación el Colli, lugar incendiado O\'Reilly Autopartes',lat:20.649756,lng:-103.456253,type:'other',source:'Reporte ciudadano'},
  {id:'fb_194',icon:'⚠️',title:'Oxxo incendiado',place:'Reporte ciudadano',address:'Oxxo incendiado',lat:20.300324,lng:-103.194647,type:'other',source:'Reporte ciudadano'},
  {id:'fb_195',icon:'🔥',title:'Camión calcinado',place:'Reporte ciudadano',address:'Camión calcinado',lat:20.809482,lng:-102.779093,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_196',icon:'🔥',title:'Lateral de 8 de julio y periférico. Camioneta incendiada',place:'Reporte ciudadano',address:'Lateral de 8 de julio y periférico. Camioneta incendiada',lat:20.587203,lng:-103.383488,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_197',icon:'⚠️',title:'Oxxo incendiado',place:'Reporte ciudadano',address:'Oxxo incendiado',lat:20.291879,lng:-103.201841,type:'other',source:'Reporte ciudadano'},
  {id:'fb_198',icon:'⚠️',title:'Oxxo incendiado',place:'Reporte ciudadano',address:'Oxxo incendiado',lat:20.539678,lng:-103.290689,type:'other',source:'Reporte ciudadano'},
  {id:'fb_199',icon:'🔥',title:'Oblatos',place:'Reporte ciudadano',address:'Oblatos',lat:20.65,lng:-103.35,type:'fire',source:'Reporte ciudadano'},
  {id:'fb_200',icon:'🚧',title:'Bloqueo en la carrera Tepic-Puga, a la altura de los Sabinos',place:'Reporte ciudadano',address:'Bloqueo en la carrera Tepic-Puga, a la altura de los Sabinos',lat:21.584245,lng:-104.856992,type:'block',source:'Reporte ciudadano'},
  {id:'fb_201',icon:'⚠️',title:'Punteros Tlajomulco centro',place:'Reporte ciudadano',address:'Punteros Tlajomulco centro',lat:20.473778,lng:-103.449063,type:'other',source:'Reporte ciudadano'}
];

const TYPE_COLORS = {
  fire:     '#ef4444',
  block:    '#f59e0b',
  spike:    '#f97316',
  shooting: '#dc2626',
  other:    '#f97316'
};

const TYPE_ICONS = {
  fire:     '\u{1F525}',
  block:    '\u{1F6A7}',
  spike:    '\u{1F6DE}',
  shooting: '\u{1F4A5}',
  other:    '\u26A0\uFE0F'
};

let map, clusterGroup, pickerMap;
let activeId = null;
let activeFilter = 'all';
let searchQuery = '';
let pickedLat = null, pickedLng = null;
let selectedType = 'fire';
let heatmapActive = false;
let heatCircles = [];
const markerMap = {};

function esc(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function getBadgeClass(source) {
  if (!source) return 'badge-reported';
  const s = source.toLowerCase();
  if (s.includes('confirmado') || s.includes('municipio')) return 'badge-confirmed';
  if (s.includes('verificado')) return 'badge-verified';
  if (s.includes('ciudadano')) return 'badge-citizen';
  return 'badge-reported';
}

function getBadgeLabel(source) {
  if (!source) return 'Reportado';
  const s = source.toLowerCase();
  if (s.includes('confirmado') || s.includes('municipio')) return 'Confirmado';
  if (s.includes('verificado')) return 'Verificado';
  if (s.includes('ciudadano')) return 'Ciudadano';
  return 'Reportado';
}

function showToast(msg, type) {
  type = type || 'info';
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  const icons = { success: '\u2705', error: '\u274C', info: '\u2139\uFE0F' };
  toast.innerHTML = '<span class="toast-icon">' + (icons[type] || icons.info) + '</span><span class="toast-msg">' + msg + '</span>';
  container.appendChild(toast);
  setTimeout(function() {
    toast.classList.add('toast-out');
    setTimeout(function() { toast.remove(); }, 300);
  }, 4000);
}

function createMarkerHTML(inc) {
  var color = TYPE_COLORS[inc.type] || '#f97316';
  var emoji = inc.icon || TYPE_ICONS[inc.type] || '\u26A0\uFE0F';
  return '<div class="marker-pin">' +
    '<div class="marker-pulse" style="background:' + color + '"></div>' +
    '<div class="marker-core" style="background:' + color + '">' + emoji + '</div>' +
    '</div>';
}

function createPopupHTML(inc) {
  var emoji = inc.icon || TYPE_ICONS[inc.type] || '\u26A0\uFE0F';
  var bgClass = inc.type === 'block' ? 'block-bg' : inc.type === 'spike' ? 'spike-bg' : inc.type === 'shooting' ? 'shooting-bg' : '';
  return '<div class="popup-inner">' +
    '<div class="popup-header">' +
      '<div class="popup-emoji ' + bgClass + '">' + emoji + '</div>' +
      '<div class="popup-title">' + esc(inc.title) + '</div>' +
    '</div>' +
    '<div class="popup-address">' +
      '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>' +
      '<span>' + esc(inc.address) + '<br><strong>' + esc(inc.place) + '</strong></span>' +
    '</div>' +
    '<div class="popup-footer">' +
      '<span class="popup-tag popup-tag-source">' + esc(inc.source || 'Reportado') + '</span>' +
      '<span class="popup-tag popup-tag-coords">' + inc.lat.toFixed(4) + ', ' + inc.lng.toFixed(4) + '</span>' +
    '</div>' +
  '</div>';
}

function addMarker(inc) {
  var icon = L.divIcon({
    className: 'custom-marker',
    html: createMarkerHTML(inc),
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -24]
  });

  var marker = L.marker([inc.lat, inc.lng], { icon: icon })
    .bindPopup(createPopupHTML(inc), {
      className: 'custom-popup',
      maxWidth: 320,
      minWidth: 240,
      closeButton: true
    });

  marker.on('click', function() { setActive(inc.id); });
  marker._incidentId = inc.id;
  marker._incidentType = inc.type;
  markerMap[inc.id] = marker;
  clusterGroup.addLayer(marker);
}

function getFilteredIncidents() {
  return INCIDENTS.filter(function(inc) {
    if (activeFilter !== 'all' && inc.type !== activeFilter) return false;
    if (searchQuery) {
      var q = searchQuery.toLowerCase();
      return (
        inc.title.toLowerCase().includes(q) ||
        inc.place.toLowerCase().includes(q) ||
        inc.address.toLowerCase().includes(q)
      );
    }
    return true;
  });
}

function renderIncidentList() {
  var list = document.getElementById('incident-list');
  var filtered = getFilteredIncidents();

  if (filtered.length === 0) {
    list.innerHTML = '<div class="no-results">' +
      '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg>' +
      '<p>No se encontraron incidentes</p></div>';
    return;
  }

  var html = '';
  filtered.forEach(function(inc, i) {
    var emoji = inc.icon || TYPE_ICONS[inc.type] || '\u26A0\uFE0F';
    var isActive = activeId === inc.id;
    html += '<div class="incident-card type-' + inc.type + (isActive ? ' active' : '') + '" data-id="' + inc.id + '" style="animation-delay:' + (i * 15) + 'ms">' +
      '<div class="card-icon-wrap ' + inc.type + '">' + emoji + '</div>' +
      '<div class="card-content">' +
        '<div class="card-title">' + esc(inc.title) + '</div>' +
        '<div class="card-place">' +
          '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>' +
          esc(inc.place) +
        '</div>' +
        '<div class="card-meta">' +
          '<span class="card-badge ' + getBadgeClass(inc.source) + '">' + getBadgeLabel(inc.source) + '</span>' +
          '<span class="card-coords">' + inc.lat.toFixed(4) + ', ' + inc.lng.toFixed(4) + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  });
  list.innerHTML = html;

  list.querySelectorAll('.incident-card').forEach(function(card) {
    card.addEventListener('click', function() { setActive(card.dataset.id); });
  });
}

function updateMapMarkers() {
  clusterGroup.clearLayers();
  Object.keys(markerMap).forEach(function(k) { delete markerMap[k]; });
  var filtered = getFilteredIncidents();
  filtered.forEach(function(inc) { addMarker(inc); });
  updateHeatmap();
}

function setActive(id) {
  activeId = id;
  var inc = INCIDENTS.find(function(i) { return i.id === id; });
  if (inc && map) {
    map.setView([inc.lat, inc.lng], 15, { animate: true, duration: 0.8 });
    setTimeout(function() {
      if (markerMap[id]) markerMap[id].openPopup();
    }, 400);
  }
  renderIncidentList();
  if (window.innerWidth <= 900) {
    document.getElementById('sidebar').classList.remove('expanded');
  }
}

function updateStats() {
  var filtered = getFilteredIncidents();
  animateNumber('stat-total', filtered.length);
  animateNumber('stat-fire', filtered.filter(function(i) { return i.type === 'fire'; }).length);
  animateNumber('stat-block', filtered.filter(function(i) { return i.type === 'block'; }).length);
  animateNumber('stat-other', filtered.filter(function(i) { return i.type !== 'fire' && i.type !== 'block'; }).length);
}

function animateNumber(elId, target) {
  var el = document.getElementById(elId);
  var current = parseInt(el.textContent) || 0;
  if (current === target) return;
  var duration = 600;
  var start = performance.now();
  function step(now) {
    var progress = Math.min((now - start) / duration, 1);
    var ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(current + (target - current) * ease);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function toggleHeatmap() {
  heatmapActive = !heatmapActive;
  document.getElementById('btn-heatmap').classList.toggle('active', heatmapActive);
  updateHeatmap();
}

function updateHeatmap() {
  heatCircles.forEach(function(c) { c.remove(); });
  heatCircles = [];
  if (!heatmapActive) return;
  var filtered = getFilteredIncidents();
  filtered.forEach(function(inc) {
    var color = TYPE_COLORS[inc.type] || '#f97316';
    var circle = L.circle([inc.lat, inc.lng], {
      radius: 1200,
      color: 'transparent',
      fillColor: color,
      fillOpacity: 0.12,
      interactive: false
    }).addTo(map);
    heatCircles.push(circle);
  });
}

function updateClock() {
  var now = new Date();
  var time = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById('header-clock').textContent = time;
}

function initMap() {
  map = L.map('map', {
    center: [20.65, -103.35],
    zoom: 11,
    zoomControl: false
  });
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '\u00A9 OpenStreetMap \u00A9 CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);
  clusterGroup = L.markerClusterGroup({
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 14
  });
  map.addLayer(clusterGroup);
  INCIDENTS.forEach(function(inc) { addMarker(inc); });
}

function initFilters() {
  document.getElementById('filter-bar').addEventListener('click', function(e) {
    var chip = e.target.closest('.filter-chip');
    if (!chip) return;
    document.querySelectorAll('.filter-chip').forEach(function(c) { c.classList.remove('active'); });
    chip.classList.add('active');
    activeFilter = chip.dataset.filter;
    activeId = null;
    updateMapMarkers();
    renderIncidentList();
    updateStats();
  });
}

function initSearch() {
  var input = document.getElementById('search-input');
  var clearBtn = document.getElementById('search-clear');
  var timer = null;
  input.addEventListener('input', function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      searchQuery = input.value.trim();
      clearBtn.classList.toggle('visible', searchQuery.length > 0);
      updateMapMarkers();
      renderIncidentList();
      updateStats();
    }, 200);
  });
  clearBtn.addEventListener('click', function() {
    input.value = '';
    searchQuery = '';
    clearBtn.classList.remove('visible');
    updateMapMarkers();
    renderIncidentList();
    updateStats();
  });
}

function initReportModal() {
  var modal = document.getElementById('report-modal');
  var fab = document.getElementById('fab-report');
  var closeBtn = document.getElementById('modal-close');
  var backdrop = document.getElementById('modal-backdrop');
  var cancelBtn = document.getElementById('btn-cancel-report');
  var submitBtn = document.getElementById('btn-submit-report');
  var locationPicker = document.getElementById('location-picker');
  var locationPreview = document.getElementById('location-preview');
  var descInput = document.getElementById('report-desc');

  function openModal() { modal.classList.add('active'); }
  function closeModal() { modal.classList.remove('active'); resetForm(); }
  function resetForm() {
    pickedLat = null; pickedLng = null; selectedType = 'fire';
    descInput.value = '';
    locationPreview.classList.remove('picked');
    locationPreview.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg><span>Toca para seleccionar ubicacion</span>';
    submitBtn.disabled = true;
    document.querySelectorAll('.type-option').forEach(function(o) { o.classList.remove('active'); });
    document.querySelector('.type-option[data-type="fire"]').classList.add('active');
  }
  function checkForm() {
    submitBtn.disabled = !(pickedLat && descInput.value.trim().length > 5);
  }

  fab.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  document.getElementById('type-selector').addEventListener('click', function(e) {
    var opt = e.target.closest('.type-option');
    if (!opt) return;
    document.querySelectorAll('.type-option').forEach(function(o) { o.classList.remove('active'); });
    opt.classList.add('active');
    selectedType = opt.dataset.type;
  });

  descInput.addEventListener('input', checkForm);
  locationPicker.addEventListener('click', function() { closeModal(); openPicker(); });

  submitBtn.addEventListener('click', function() {
    if (!pickedLat || !descInput.value.trim()) return;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    setTimeout(function() {
      showToast('Reporte enviado. Sera validado antes de publicarse.', 'success');
      closeModal();
      submitBtn.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg> Enviar reporte';
    }, 1200);
  });
}

function openPicker() {
  var overlay = document.getElementById('picker-overlay');
  overlay.classList.add('active');
  setTimeout(function() {
    if (!pickerMap) {
      pickerMap = L.map('picker-map', {
        center: map ? map.getCenter() : [20.65, -103.35],
        zoom: map ? map.getZoom() : 13,
        zoomControl: true
      });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 19
      }).addTo(pickerMap);
      pickerMap.on('move', function() {
        var c = pickerMap.getCenter();
        document.getElementById('picker-coords').textContent = c.lat.toFixed(4) + ', ' + c.lng.toFixed(4);
      });
    } else {
      pickerMap.invalidateSize();
      if (map) pickerMap.setView(map.getCenter(), map.getZoom());
    }
  }, 150);
}

function closePicker() {
  document.getElementById('picker-overlay').classList.remove('active');
}

function confirmPickerLocation() {
  if (!pickerMap) return;
  var c = pickerMap.getCenter();
  pickedLat = c.lat; pickedLng = c.lng;
  closePicker();
  var modal = document.getElementById('report-modal');
  modal.classList.add('active');
  var preview = document.getElementById('location-preview');
  preview.classList.add('picked');
  preview.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg><span>' + pickedLat.toFixed(4) + ', ' + pickedLng.toFixed(4) + '</span>';
  var submitBtn = document.getElementById('btn-submit-report');
  var desc = document.getElementById('report-desc').value.trim();
  submitBtn.disabled = !(desc.length > 5);
}

function initPicker() {
  document.getElementById('picker-cancel').addEventListener('click', function() {
    closePicker();
    document.getElementById('report-modal').classList.add('active');
  });
  document.getElementById('picker-confirm').addEventListener('click', confirmPickerLocation);
}

function initMapControls() {
  document.getElementById('btn-zoom-all').addEventListener('click', function() {
    var filtered = getFilteredIncidents();
    if (filtered.length === 0) return;
    var bounds = L.latLngBounds(filtered.map(function(i) { return [i.lat, i.lng]; }));
    map.fitBounds(bounds, { padding: [50, 50], animate: true, duration: 0.8 });
  });
  document.getElementById('btn-heatmap').addEventListener('click', toggleHeatmap);
}

function initMobileSidebar() {
  var sidebar = document.getElementById('sidebar');
  var sidebarTop = sidebar.querySelector('.sidebar-top');
  sidebarTop.addEventListener('click', function() {
    if (window.innerWidth <= 900) sidebar.classList.toggle('expanded');
  });
  var startY = 0;
  sidebarTop.addEventListener('touchstart', function(e) { startY = e.touches[0].clientY; }, { passive: true });
  sidebarTop.addEventListener('touchend', function(e) {
    var diff = startY - e.changedTouches[0].clientY;
    if (diff > 40) sidebar.classList.add('expanded');
    else if (diff < -40) sidebar.classList.remove('expanded');
  }, { passive: true });
}

function initKeyboard() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.getElementById('report-modal').classList.remove('active');
      closePicker();
    }
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
      var input = document.getElementById('search-input');
      if (document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
    }
  });
}

function hideLoading() {
  setTimeout(function() {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 2000);
}

window.addEventListener('DOMContentLoaded', function() {
  initMap();
  renderIncidentList();
  updateStats();
  initFilters();
  initSearch();
  initReportModal();
  initPicker();
  initMapControls();
  initMobileSidebar();
  initKeyboard();
  updateClock();
  setInterval(updateClock, 1000);
  hideLoading();
});
