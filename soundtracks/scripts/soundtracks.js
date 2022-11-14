const soundtracksData = [
  [
    {
      id: 1,
      nameEn: 'Titanic',
      nameRu: 'Титаник',
      trackEn: 'My Heart Will Go On',
      trackRu: 'Моё сердце будет биться дальше',
      authorEn: 'Céline Dion',
      authorRu: 'Селин Дион',
      descriptionEn: '"My Heart Will Go On" is a 1997 song recorded by Canadian singer Celine Dion.<br><br>The song serves as the main soundtrack to James Cameron\'s blockbuster film Titanic, based on an account of the transatlantic ocean liner of the same name which sank in 1912 after colliding with an iceberg in the North Atlantic Ocean.<br><br>The song\'s music was composed by James Horner, its lyrics were written by Will Jennings, while the production was handled by Walter Afanasieff, Horner and Simon Franglen.',
      descriptionRu: '"Моё сердце будет биться дальше" — песня канадской певицы Селин Дион, главная тема к фильму Джеймса Кэмерона "Титаник". Автор музыки — Джеймс Хорнер, слова написал Уилл Дженнингс, продюсером стал Уолтер Афанасьефф. Композиция была выпущена на альбоме Дион Let\'s Talk About Love в 1997 году, она возглавила чарты по всему миру, включая США, Великобританию и Австралию. Релиз сингла состоялся в Австралии и Германии 8 декабря 1997 года и в январе и феврале 1998 года в остальном мире, композиция стала одной из самых популярных за всю историю музыки и самой продаваемой в мире песней 1998 года.емыми в более чем 18 миллионов копий, это второй самый продаваемый сингл на физическом носителе в истории музыки и один из самых продаваемых синглов всех времен. Он также был самым продаваемым синглом в мире за 1998 год. Песня также была включена в список "Песни века" Американской ассоциацией звукозаписывающей индустрии и Национальным фондом искусств. Дион исполнила песню в честь 20-летия фильма "Титаник" на церемонии вручения премии Billboard Music Awards 21 мая 2017 года.',
      image: 'url(../../assets/img/titanic.webp',
      audio: 'titanic.mp3',
      duration: '00:17',
      wikiEn: 'https://en.wikipedia.org/wiki/My_Heart_Will_Go_On',
      wikiRu: 'https://ru.wikipedia.org/wiki/My_Heart_Will_Go_On',
      youtube: 'https://youtu.be/8u_T0ZEVD24'
    },
    {
      id: 2,
      nameEn: 'Star Wars',
      nameRu: 'Звёздные войны',
      trackEn: 'The Imperial March',
      trackRu: 'Имперский марш',
      authorEn: 'John Williams',
      authorRu: 'Джон Уильямс',
      descriptionEn: '"The Imperial March (Darth Vader\'s Theme)" is a musical theme present in the Star Wars franchise. It was composed by John Williams for the film The Empire Strikes Back.<br><br>Together with "Yoda\'s Theme", "The Imperial March" was premiered on April 29, 1980, three weeks before the opening of the film, on the occasion of John Williams first concert as official conductor-in-residence of the Boston Pops Orchestra.<br><br>One of the best known symphonic movie themes, it is used as a leitmotif throughout the Star Wars franchise.',
      descriptionRu: '«Имперский марш (Тема Дарта Вейдера)» — музыкальная тема, представленная во франшизе «Звёздные войны». Она была написана Джоном Уильямсом для фильма «Звёздные войны. Эпизод V: Империя наносит ответный удар». Вместе с «темой Йоды» премьера «Имперского марша» состоялась 29 апреля 1980 года, за три недели до открытия фильма, по случаю первого концерта Джона Уильямса в качестве официального дирижёра Boston Pops Orchestra. Одна из самых известных тем симфонического кино, это пример лейтмотива, повторяющейся темы, связанной с персонажами или событиями в драме.',
      image: 'url(../../assets/img/star-wars.webp',
      audio: 'star-wars.mp3',
      duration: '00:21',
      wikiEn: 'https://en.wikipedia.org/wiki/The_Imperial_March',
      wikiRu: 'https://ru.wikipedia.org/wiki/%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B0%D1%80%D1%88',
      youtube: 'https://youtu.be/vsMWVW4xtwI'
    },
    {
      id: 3,
      nameEn: 'The Godfather',
      nameRu: 'Крёстный отец',
      trackEn: 'Speak Softly Love',
      trackRu: 'Говори тихо, любовь моя',
      authorEn: 'Nino Rota',
      authorRu: 'Нино Рота',
      descriptionEn: '"Love Theme from The Godfather" is an instrumental theme from the 1972 film The Godfather, composed by Nino Rota.<br><br>The piece was lyricized in English by Larry Kusik into "Speak Softly, Love", a popular song released in 1972.<br><br>The highest-charting rendition of either version was by vocalist Andy Williams, who took "Speak Softly Love" to number 34 on Billboard magazine\'s Hot 100 and number seven on its Easy Listening chart.',
      descriptionRu: '«Говори тихо, любовь моя» — песня композитора Нино Рота на слова Ларри Кьюзика, впервые прозвучавшая в инструментальном исполнении в фильме «Крёстный отец» (1972).<br><br>Наибольшей популярности песня достигла в исполнении Энди Уильямса, поднявшись до 43-й позиции в Billboard Hot 100 и седьмого места в хит-параде Easy Listening.<br><br>Позднее эту песню исполняли также Эл Мартино, София Ротару («Скажи, що любиш», 1975), Бобби Винтон, Муслим Магомаев, Олег Погудин и другие певцы.',
      image: 'url(../../assets/img/godfather.webp',
      audio: 'godfather.mp3',
      duration: '00:15',
      wikiEn: 'https://en.wikipedia.org/wiki/Love_Theme_from_The_Godfather',
      wikiRu: 'https://ru.wikipedia.org/wiki/Speak_Softly_Love',
      youtube: 'https://youtu.be/zbSMCyJkUmI'
    },
    {
      id: 4,
      nameEn: 'Pulp Fiction',
      nameRu: 'Криминальное чтиво',
      trackEn: 'You Never Can Tell',
      trackRu: 'Никак не угадать',
      authorEn: 'Chuck Berry',
      authorRu: 'Чак Берри',
      descriptionEn: '"You Never Can Tell", also known as "C\'est La Vie" or "Teenage Wedding", is a song written by Chuck Berry.<br><br>It was composed in the early 1960s while Berry was in federal prison for violating the Mann Act. Released in 1964 on the album St. Louis to Liverpool and the follow-up single to Berry\'s final Top Ten hit of the 1960s: "No Particular Place to Go", "You Never Can Tell" reached number 14, becoming Berry\'s final Top 40 hit until "My Ding-a-Ling", a number 1 in October 1972.<br><br>The song became popular again after the 1994 release of the film Pulp Fiction, directed and co-written by Quentin Tarantino. The music was played for a "Twist contest" in which Vincent Vega (John Travolta) and Mia Wallace (Uma Thurman) competed (and were the only contestants shown in the film). The music added an evocative element of sound to the narrative and Tarantino said that the song\'s lyrics of "Pierre" and "Mademoiselle" gave the scene a "uniquely \'50s French New Wave dance sequence feel".',
      descriptionRu: '«You Never Can Tell» — песня американского рок-музыканта Чака Берри, вышедшая на сингле в 1964 году.<br><br>Песня была написана в начале шестидесятых, в то время, когда Чак Берри находился в тюрьме. You Never Can Tell вошла в альбом Берри St. Louis to Liverpool 1964 года, изданный на лейбле Chess Records, как сингл она дошла до 14 места в рейтинге журнала Billboard.<br><br>Вторая волна популярности You Never Can Tell началась после выхода на экраны фильма культового американского режиссёра Квентина Тарантино «Криминальное чтиво» (1994), в саундтрек которого вошла песня. В одном из эпизодов фильма гангстер Винсент Вега (Джон Траволта) и жена его босса Миа Уоллес (Ума Турман) танцуют твист под песню Чака Берри. По словам Тарантино, лирика песни придаёт этой сцене особую атмосферу Французской новой волны.',
      image: 'url(../../assets/img/pulp-fiction.webp',
      audio: 'pulp-fiction.mp3',
      duration: '00:21',
      wikiEn: 'https://en.wikipedia.org/wiki/You_Never_Can_Tell_(song)',
      wikiRu: 'https://ru.wikipedia.org/wiki/You_Never_Can_Tell',
      youtube: 'https://youtu.be/WSLMN6g_Od4'
    },{
      id: 5,
      nameEn: 'The Bodyguard',
      nameRu: 'Телохранитель',
      trackEn: 'I Will Always Love You',
      trackRu: 'Я всегда буду любить тебя',
      authorEn: 'Whitney Houston',
      authorRu: 'Уитни Хьюстон',
      descriptionEn: '"I Will Always Love You" is a song written and originally recorded in 1973 by American singer-songwriter Dolly Parton.<br><br>Whitney Houston recorded a soul-ballad arrangement of the song for the 1992 film The Bodyguard. Houston\'s version peaked at number one on the Billboard Hot 100 for a then-record-breaking 14 weeks. The single was certified Diamond by the RIAA, making Houston\'s first Diamond single, the third female artist who had both a Diamond single and a Diamond album, and becoming the best-selling single by a woman in the U.S.<br><br>The song was a global success, topping the charts in almost all countries. With 20 million copies sold it became the best-selling single of all time by a female solo artist.<br><br>Houston won the Grammy Award for Record of the Year in 1994 for "I Will Always Love You". The song has been recorded by many other artists including Linda Ronstadt, John Doe, Amber Riley, LeAnn Rimes and Sarah Washington, whose dance version reached number 12 on the UK Singles Chart.',
      descriptionRu: '«Я всегда буду любить тебя» — сингл американской кантри-певицы Долли Партон, выпущенный в 1974 году на лейбле RCA Records.<br><br>Однако с наибольшим успехом исполнила этот хит другая певица — Уитни Хьюстон. Её соул-версия, включённая в саундтрек к фильму «Телохранитель» 1992 года, была удостоена множества наград, в том числе «Грэмми» за лучшую запись года и лучший женский поп-вокал.<br><br>Критики были впечатлены тем, как грустная любовная песня благодаря мощному вокалу и влиянию госпела превратилась в неистовое воплощение драмы покинутой женщины.',
      image: 'url(../../assets/img/bodyguard.webp',
      audio: 'bodyguard.mp3',
      duration: '00:47',
      wikiEn: 'https://en.wikipedia.org/wiki/I_Will_Always_Love_You',
      wikiRu: 'https://ru.wikipedia.org/wiki/I_Will_Always_Love_You',
      youtube: 'https://youtu.be/8u_T0ZEVD24'
    },
    {
      id: 6,
      nameEn: 'Requiem for a Dream',
      nameRu: 'Реквием по мечте',
      trackEn: 'Lux Aeterna',
      trackRu: 'Вечный свет',
      authorEn: 'Clint Mansell',
      authorRu: 'Клинт Мэнселл',
      descriptionEn: '"Lux Aeterna" is an orchestral composition by Clint Mansell. It forms a leitmotif in the 2000 film Requiem for a Dream, and is the penultimate piece in the movie\'s soundtrack.<br><br>The popularity of the piece led to its use in popular culture outside the film, in film and teaser trailers, such as Sunshine and Waking Madison, and multiple remixes and remakes by other producers.<br><br>It was also used in the 2010 season 2 premiere episode of NCIS: LA and a version of the track was re-orchestrated with a choir and full orchestra for The Lord of the Rings: The Two Towers trailer.<br><br>It was arranged by Simone Benyacar, Daniel Nielsen, and Veigar Margeirsson.<br><br>The orchestrated version was used in various trailers and video games. Clint Mansell commented that the piece had "gone on to have a life of its own".',
      descriptionRu: '«Вечный свет» — саундтрек к фильму Даррена Аронофски «Реквием по мечте» (экранизация романа Хьюберта Селби). Выпущен в 2000 году. Композитором является Клинт Мэнселл.<br><br>Эта музыка стала культовым хитом, так как саундтрек был оценён по достоинству многими музыкантами и получил широкое признание, а композиция «Lux Aeterna» и её реаранжированная версия «Requiem for a Tower» впоследствии были использованы в различных формах массовой информации (трейлеры и тизеры фильмов и сериалов, видеоигры, телепередачи, рекламные ролики и другие медиа).<br><br>Саундтрек Requiem for a Dream закрепил свою популярность после издания альбома Requiem for a Dream: Remixed, содержавшего новые ремиксы, созданные Полом Окенфолдом, Джошем Уинком, Джэгзом Кунером, Delerium и многими другими.',
      image: 'url(../../assets/img/requiem.webp',
      audio: 'requiem.mp3',
      duration: '00:30',
      wikiEn: 'https://en.wikipedia.org/wiki/Lux_Aeterna_(Mansell)',
      wikiRu: 'https://ru.wikipedia.org/wiki/Requiem_for_a_Dream_(%D1%81%D0%B0%D1%83%D0%BD%D0%B4%D1%82%D1%80%D0%B5%D0%BA)',
      youtube: 'https://youtu.be/oc3Cq89P97Y'
    }
  ],
  [
    {
      id: 1,
      name: 'Воробей',
      species: 'Passer domesticus',
      description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
    },
    {
      id: 2,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав "тарахтение", они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
    },
    {
      id: 3,
      name: 'Галка',
      species: 'Coloeus monedula',
      description: 'Слово "галка" произошло из старославянского языка и переводится как "чёрный". Этим словом часто называют воронов или других черных птиц. Латинское название галки "monedula" связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
    },
    {
      id: 4,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
    },
    {
      id: 5,
      name: 'Сорока',
      species: 'Pica pica',
      description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
    },
    {
      id: 6,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Клёст',
      species: 'Loxia curvirostra',
      description: 'Клестов называют "рождественскими" птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
    },
    {
      id: 3,
      name: 'Горлица',
      species: 'Streptopelia turtur',
      description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
    },
    {
      id: 4,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать "барабанную дробь" дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
    },
    {
      id: 5,
      name: 'Удод',
      species: 'Upupa epops',
      description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
    },
    {
      id: 6,
      name: 'Стриж',
      species: 'Apus apus',
      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
    },
    {
      id: 3,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
    },
    {
      id: 6,
      name: 'Щегол',
      species: 'Carduelis carduelis',
      description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
    },
    {
      id: 2,
      name: 'Коршун',
      species: 'Milvus migrans',
      description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
    },
    {
      id: 3,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение "седой, как лунь".',
      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
    },
    {
      id: 4,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description: 'Латинское название сокола Falco произошло от слова "серп" из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
    },
    {
      id: 5,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые "брови" над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
    },
    {
      id: 6,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
    },
    {
      id: 3,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
    },
    {
      id: 6,
      name: 'Чайка',
      species: 'Larus argentatus',
      description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
    }
  ]
];

export default soundtracksData;