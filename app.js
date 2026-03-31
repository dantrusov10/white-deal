const DATA = {
  roles: {
    partner: {
      title: 'Кабинет партнера / интегратора',
      heroTitle: 'Защита сделок, продления, жалобы и выбор лучших вендоров в одном контуре.',
      heroText: 'Прототип показывает рабочий интерфейс партнера: от регистрации новой сделки до продления защиты, подачи жалобы и выбора вендоров по каталогу и рейтингам.',
      heroTags: ['Регистрация сделки', 'Продление защиты', 'Жалобы', 'Каталог вендоров'],
      summary: [
        'Персонализированные уведомления показывают, где риск, что продлевать и где вендор должен дать решение.',
        'Карточки сделок раскрываются до истории активности, доказательной базы, арбитражного следа и нарушений.',
        'Каталог вендоров позволяет выбрать, к кому идти, по категориям, рейтингу, скорости решений и прозрачности.'
      ],
      nav: [
        { id: 'dashboard', name: 'Дашборд', note: 'Персонализированный обзор' },
        { id: 'newDeal', name: 'Новая регистрация', note: 'Многошаговая форма' },
        { id: 'portfolio', name: 'Мои сделки', note: 'Портфель и lifecycle' },
        { id: 'extensions', name: 'Продления', note: 'Активность и доказательства' },
        { id: 'complaints', name: 'Жалобы', note: 'Споры и challenge' },
        { id: 'vendorCatalog', name: 'Каталог вендоров', note: 'Куда идти' },
        { id: 'ratings', name: 'Рейтинги рынка', note: 'Прозрачность и доверие' }
      ],
      kpis: [
        ['Активные защиты', '18', '+3 за 7 дней'],
        ['На продление', '2', '1 срочно до завтра'],
        ['Открытые жалобы', '1', 'SLA 18 часов'],
        ['Индекс партнера', '93/100', 'Platinum']
      ]
    },
    vendor: {
      title: 'Кабинет вендора',
      heroTitle: 'Входящие регистрации, прозрачный pipeline, контроль конфликтов и рейтинг партнеров.',
      heroText: 'Прототип показывает, как вендор принимает или отклоняет регистрации, отслеживает нарушения, видит конкуренцию и управляет доверием к партнерам.',
      heroTags: ['Входящие регистрации', 'Pipeline', 'Нарушения', 'Каталог партнеров'],
      summary: [
        'Дашборд вендора не смешан с партнерским: он показывает входящие, индекс скорости решений, конфликты и картину по каналу.',
        'Карточка партнера раскрывает специализацию, win-rate, нарушения и совместимость по категории продукта.',
        'Прототип включает рейтинг вендоров и партнеров, а также drill-down по уведомлениям и текущим делам.'
      ],
      nav: [
        { id: 'dashboard', name: 'Дашборд', note: 'Показатели вендора' },
        { id: 'inbox', name: 'Входящие регистрации', note: 'Approve / reject' },
        { id: 'pipeline', name: 'Портфель защит', note: 'Активные сделки' },
        { id: 'alerts', name: 'Алерты', note: 'Конкуренты и нарушения' },
        { id: 'partnerCatalog', name: 'Каталог партнеров', note: 'С кем работать' },
        { id: 'ratings', name: 'Рейтинг вендоров', note: 'Разбор метрик' },
        { id: 'analytics', name: 'Аналитика', note: 'Эффект и структура канала' }
      ],
      kpis: [
        ['Новые регистрации', '7', '3 требуют решения сегодня'],
        ['Активные защиты', '64', 'Средний срок 29 дней'],
        ['Открытые конфликты', '4', '2 в разборе'],
        ['Индекс вендора', '91/100', 'Надежный канал']
      ]
    },
    arbitrage: {
      title: 'Операционный центр арбитража',
      heroTitle: 'Независимая проверка, уровни эскалации, контроль SLA и разбор нарушений.',
      heroText: 'Прототип раскрывает очереди, кейсы, комментарии, нарушения и логику принятия решения. Все карточки открываются с кратким описанием и деталями.',
      heroTags: ['Очередь проверки', 'Кейсы', 'Решения', 'Нарушения'],
      summary: [
        'В центре арбитража каждая карточка дела раскрывается до таймлайна, аргументов сторон, документов и влияния на рейтинг.',
        'Есть отдельный слой нарушений: обход системы, спам-регистрации, слабые доказательства активности, challenge по реальному ведению клиента.',
        'SLA и уровни проверки визуализированы как работающий операционный контур, а не как абстрактные блоки.'
      ],
      nav: [
        { id: 'dashboard', name: 'Операционный обзор', note: 'Очередь и SLA' },
        { id: 'queue', name: 'Очередь проверки', note: 'Что брать в работу' },
        { id: 'cases', name: 'Арбитражные кейсы', note: 'Стороны и аргументы' },
        { id: 'violations', name: 'Нарушения', note: 'Enforcement и след' },
        { id: 'decisions', name: 'Решения', note: 'Итоги и последствия' },
        { id: 'history', name: 'Журнал', note: 'История действий' }
      ],
      kpis: [
        ['В очереди', '12', '4 новых за сутки'],
        ['SLA под риском', '1', 'Нужна приоритизация'],
        ['Авторазбор', '73%', 'без человека'],
        ['Нарушения', '6', '2 критических']
      ]
    },
    market: {
      title: 'Публичный обзор рынка',
      heroTitle: 'Обезличенная прозрачность рынка до торгов: активность, категории, рейтинги, конкуренция.',
      heroText: 'Прототип показывает, как рынок видит активность без раскрытия чувствительных данных: ленту регистраций, каталоги, рейтинги, категории и паттерны конкуренции.',
      heroTags: ['Лента рынка', 'Каталоги', 'Рейтинги', 'Паттерны'],
      summary: [
        'Каталог вендоров и каталог партнеров разделены по категориям, чтобы показывать сценарий поиска и выбора, а не только работы внутри сделки.',
        'Уведомления и карточки раскрываются в краткие пояснения, чтобы любой зритель понимал смысл поля или алерта.',
        'Публичный слой показывает потенциал платформы как отраслевого стандарта прозрачности.'
      ],
      nav: [
        { id: 'dashboard', name: 'Обзор рынка', note: 'Главные сигналы' },
        { id: 'feed', name: 'Лента регистраций', note: 'Обезличенные сделки' },
        { id: 'vendorCatalog', name: 'Каталог вендоров', note: 'Категории и рейтинги' },
        { id: 'partnerCatalog', name: 'Каталог партнеров', note: 'Компетенции и статистика' },
        { id: 'ratings', name: 'Публичные рейтинги', note: 'Методология' },
        { id: 'patterns', name: 'Паттерны', note: 'Конкурентные карты' }
      ],
      kpis: [
        ['Новых регистраций', '147', '+18% неделя к неделе'],
        ['Активных вендоров', '26', '11 с рейтингом 85+'],
        ['Активных партнеров', '94', '24 platinum/gold'],
        ['Открытых споров', '9', 'SLA 94%']
      ]
    }
  },
  vendors: [
    { id: 'v1', name: 'Инферит ИТМен', categories: ['ITAM', 'CMDB', 'Discovery'], rating: 96, transparency: 97, speed: 94, conflict: 91, focus: 'Крупный Enterprise / импортозамещение', status: 'Эталон', note: 'Сильная скорость принятия решений, высокий уровень подтверждения защит.', deals: 114, response: '6.4 ч', partners: 18 },
    { id: 'v2', name: 'Polymatica', categories: ['BI', 'Analytics', 'Reporting'], rating: 91, transparency: 92, speed: 87, conflict: 88, focus: 'BI и витрины отчетности', status: 'Надежный', note: 'Сильная аналитическая категория, умеренная конкуренция в банковском секторе.', deals: 76, response: '11.2 ч', partners: 14 },
    { id: 'v3', name: 'CloudMaster', categories: ['FinOps', 'Cloud'], rating: 88, transparency: 89, speed: 84, conflict: 86, focus: 'Оптимизация облака и бюджета', status: 'Стабильный', note: 'Высокая доля продлений, активные мультивендорные сценарии.', deals: 62, response: '12.9 ч', partners: 11 },
    { id: 'v4', name: 'Naumen', categories: ['ITSM', 'Service Desk'], rating: 84, transparency: 81, speed: 79, conflict: 82, focus: 'ITSM / service management', status: 'Под наблюдением', note: 'Нужно улучшить скорость решений и снизить долю споров.', deals: 58, response: '18.1 ч', partners: 15 },
    { id: 'v5', name: 'Billogic', categories: ['Billing', 'Telecom'], rating: 89, transparency: 90, speed: 85, conflict: 87, focus: 'Биллинг и коммерческий контур', status: 'Надежный', note: 'Стабильные исходы, низкий процент обхода системы.', deals: 49, response: '9.6 ч', partners: 8 }
  ],
  partners: [
    { id: 'p1', name: 'Softline Integration', categories: ['Enterprise Infrastructure', 'ITAM', 'BI'], rating: 93, winRate: 41, activeDeals: 18, violations: 0, tier: 'Platinum', focus: 'Крупный enterprise', note: 'Сильный контур продаж и высокая дисциплина по продлениям.' },
    { id: 'p2', name: 'Rubytech Solutions', categories: ['Cloud', 'FinOps', 'Infrastructure'], rating: 87, winRate: 38, activeDeals: 12, violations: 1, tier: 'Gold', focus: 'Инфраструктурные проекты', note: 'Хорошая скорость входа в сделки, средняя доказательная дисциплина.' },
    { id: 'p3', name: 'ICL Services', categories: ['ITSM', 'Support', 'Integration'], rating: 82, winRate: 36, activeDeals: 9, violations: 1, tier: 'Gold', focus: 'Service management', note: 'Есть один активный спор по параллельной регистрации.' },
    { id: 'p4', name: 'T1 Infra Projects', categories: ['BI', 'Platform', 'System Integration'], rating: 85, winRate: 32, activeDeals: 11, violations: 0, tier: 'Silver', focus: 'Крупные комплексные проекты', note: 'Высокая доля длинных циклов и много продлений.' },
    { id: 'p5', name: 'Lanit Project Hub', categories: ['Data', 'Government', 'Integration'], rating: 86, winRate: 35, activeDeals: 7, violations: 0, tier: 'Gold', focus: 'Госсегмент и сложные контуры', note: 'Устойчивый профиль без критических нарушений.' }
  ],
  deals: [
    { id: 'DR-2026-00124', title: 'Модернизация CMDB и инвентаризации ИТ-активов', client: 'АО ВолгаЭнерго', clientMasked: 'Крупная энергокомпания, ПФО', vendor: 'Инферит ИТМен', partner: 'Softline Integration', amount: '27 800 000 ₽', closeDate: '30.06.2026', createdAt: '15.03.2026 10:42', protectionTo: '15.05.2026', status: 'Защита активна', stage: 'Активная защита', ratingImpact: '+2.1', lifecycle: 'В работе', conflictRisk: 'Низкий', extension: false, challenge: false, multi: ['Polymatica', 'CloudMaster'], activities: ['Встреча с CIO', 'Подготовлено КП', 'Согласован пилот'], evidence: 'Протокол встречи, КП, draft scope', alerts: 'Партнер ведет смежные решения у 2 соседних вендоров', history: ['15.03 — регистрация', '15.03 — автопроверка 94/100', '15.03 — подтверждение вендором', '18.03 — загружено КП', '26.03 — добавлен протокол пилота'] },
    { id: 'DR-2026-00129', title: 'Пилот FinOps и контроль неиспользуемых VM', client: 'ООО СеверЛогистика', clientMasked: 'Логистический холдинг, ЦФО', vendor: 'CloudMaster', partner: 'Rubytech Solutions', amount: '8 400 000 ₽', closeDate: '12.07.2026', createdAt: '28.03.2026 09:20', protectionTo: '—', status: 'Ожидает решения вендора', stage: 'Входящее подтверждение', ratingImpact: '0', lifecycle: 'Новая', conflictRisk: 'Средний', extension: false, challenge: false, multi: ['Billogic'], activities: ['Квалификация потребности', 'Первичная диагностика'], evidence: 'Черновик оценки облака и экономического эффекта', alerts: 'Сделка входит в набор из 1 потенциального технологического партнера', history: ['28.03 — регистрация', '28.03 — автоиндекс 82/100', '28.03 — отправлено вендору'] },
    { id: 'DR-2026-00111', title: 'Комплексное BI + каталог ПО + витрина отчетности', client: 'ПАО РегионБанк', clientMasked: 'Федеральный банк, ТОП-50', vendor: 'Polymatica', partner: 'T1 Infra Projects', amount: '42 000 000 ₽', closeDate: '25.08.2026', createdAt: '01.03.2026 11:05', protectionTo: '02.04.2026', status: 'Требует продления', stage: 'Продление защиты', ratingImpact: '+0.4', lifecycle: 'В работе', conflictRisk: 'Средний', extension: true, challenge: false, multi: ['Инферит ИТМен'], activities: ['Встреча с бизнес-заказчиком', 'Скоуп проекта', 'Пилот витрины'], evidence: 'Презентация, пилотный контур, список сущностей каталога', alerts: 'Низкая частота обновления активности за последние 10 дней', history: ['01.03 — регистрация', '14.03 — загружен протокол встречи', '29.03 — система запросила продление'] },
    { id: 'DR-2026-00103', title: 'Сервис-деск и управление изменениями', client: 'ГК СтройИнвест', clientMasked: 'Строительный холдинг, СЗФО', vendor: 'Naumen', partner: 'ICL Services', amount: '19 600 000 ₽', closeDate: '19.05.2026', createdAt: '24.02.2026 16:18', protectionTo: '08.04.2026', status: 'Спор / арбитраж', stage: 'Challenge и арбитраж', ratingImpact: '-1.0', lifecycle: 'Спорная', conflictRisk: 'Высокий', extension: false, challenge: true, multi: [], activities: ['Квалификация', 'Демонстрация решения'], evidence: 'Запись демо, черновой scope, письмо заказчика', alerts: 'Подана жалоба на параллельную регистрацию', history: ['24.02 — регистрация', '24.02 — подтверждение', '27.03 — жалоба', '28.03 — передано арбитражу'] },
    { id: 'DR-2026-00098', title: 'Единый каталог ПО и нормализация discovery-данных', client: 'Холдинг СеверМедь', clientMasked: 'Промышленный холдинг, Урал', vendor: 'Инферит ИТМен', partner: 'Lanit Project Hub', amount: '16 300 000 ₽', closeDate: '10.07.2026', createdAt: '20.03.2026 15:10', protectionTo: '20.05.2026', status: 'Защита активна', stage: 'Активная защита', ratingImpact: '+1.6', lifecycle: 'В работе', conflictRisk: 'Низкий', extension: false, challenge: false, multi: ['Polymatica'], activities: ['Аудит discovery-выгрузки', 'Карта ПО', 'Согласование ПСИ'], evidence: 'Протокол аудита, выгрузка, draft ПСИ', alerts: 'Смежная BI-часть идет через другого вендора', history: ['20.03 — регистрация', '20.03 — подтверждение', '22.03 — добавлен аудит', '27.03 — согласован контур ПСИ'] }
  ],
  disputes: [
    { id: 'ARB-2026-0081', dealId: 'DR-2026-00103', title: 'Попытка параллельной регистрации', vendor: 'Naumen', partner: 'ICL Services', respondent: 'Softline Integration', status: 'В рассмотрении', level: 'Уровень 2 — специалист', sla: '18 часов', summary: 'Вторая сторона утверждает, что реально ведет клиента дольше. Система фиксирует более раннюю регистрацию первой стороны.', result: 'Ожидается финальное заключение', timeline: ['27.03 13:10 — жалоба зарегистрирована', '27.03 13:12 — совпадение клиента и предмета проекта', '27.03 15:00 — кейс ушел специалисту'], arguments: ['Истец: есть демонстрация и контакт ЛПР', 'Ответчик: есть предварительный коммерческий контур и более ранняя регистрация'], consequence: 'После решения рейтинг одной из сторон изменится на 1.5–3.0 пункта' },
    { id: 'ARB-2026-0072', dealId: 'DR-2026-00094', title: 'Отказ в продлении', vendor: 'CloudMaster', partner: 'Rubytech Solutions', respondent: 'CloudMaster', status: 'Финальное решение сегодня', level: 'Уровень 3 — руководитель', sla: '6 часов', summary: 'Партнер загрузил доказательства активности, вендор посчитал их недостаточными.', result: 'Высока вероятность частичного продления на 14 дней', timeline: ['25.03 10:02 — запрос продления', '25.03 10:10 — отказ вендора', '25.03 12:30 — инициирована апелляция', '26.03 09:00 — сверка документов'], arguments: ['Партнер: есть пилот и КП', 'Вендор: нет подтвержденного следующего шага у клиента'], consequence: 'Рейтинг вендора может снизиться при необоснованном отказе' },
    { id: 'ARB-2026-0065', dealId: 'DR-2026-00088', title: 'Непрозрачный отказ', vendor: 'Polymatica', partner: 'Softline Integration', respondent: 'Polymatica', status: 'Закрыто', level: 'Уровень 1 — авто', sla: 'Завершено', summary: 'Автоанализ выявил отсутствие дубля и нарушение внутреннего правила вендора.', result: 'Решение пересмотрено, сделка подтверждена', timeline: ['20.03 11:45 — жалоба', '20.03 11:46 — автоанализ', '20.03 13:05 — вендор изменил статус'], arguments: ['Система: дубль не подтвержден', 'Вендор: первоначальный отказ был ошибочным'], consequence: 'Рейтинг вендора незначительно снижен, индекс прозрачности скорректирован' }
  ],
  violations: [
    { id: 'V-021', type: 'Попытка обхода системы', party: 'Вендор', subject: 'Naumen', severity: 'Высокая', status: 'Подтверждено', impact: '-3.0 к рейтингу', summary: 'Обнаружена попытка согласовать параллельную поддержку действующей защищенной сделки вне системы.' },
    { id: 'V-018', type: 'Спам-регистрация', party: 'Партнер', subject: 'Rubytech Solutions', severity: 'Средняя', status: 'Подтверждено', impact: '-1.2 к рейтингу', summary: 'Три регистрации в смежных категориях без достаточной доказательной базы.' },
    { id: 'V-014', type: 'Слабое продление', party: 'Партнер', subject: 'T1 Infra Projects', severity: 'Низкая', status: 'Предупреждение', impact: '0', summary: 'Продление подано без свежих подтверждений активности. Дано время на дозагрузку.' }
  ],
  notifications: {
    partner: [
      { id: 'n1', title: 'Срочно продлить DR-2026-00111', text: 'До конца срока защиты осталось 3 дня. Загрузите новую активность: встречу, КП или пилот.', level: 'orange' },
      { id: 'n2', title: 'CloudMaster должен ответить по DR-2026-00129', text: 'Сделка прошла автопроверку и уже 12 часов ждет решения вендора.', level: 'blue' },
      { id: 'n3', title: 'По DR-2026-00124 замечен смежный вендор', text: 'Это не нарушение, но полезный сигнал для комплексной стратегии продажи.', level: 'green' }
    ],
    vendor: [
      { id: 'n4', title: 'Новая регистрация в категории FinOps', text: 'Rubytech Solutions подал проект на 8.4 млн ₽. Автоиндекс достоверности 82/100.', level: 'blue' },
      { id: 'n5', title: 'Есть риск нарушения по действующей защите', text: 'По проекту Naumen зафиксирован challenge и возможный обход системы.', level: 'red' },
      { id: 'n6', title: 'Партнер T1 просит продлить защиту', text: 'Активность слабая. Откройте карточку и оцените доказательства.', level: 'orange' }
    ],
    arbitrage: [
      { id: 'n7', title: 'ARB-2026-0081 выйдет за SLA через 18 часов', text: 'Нужно либо вынести решение, либо повысить приоритет.', level: 'red' },
      { id: 'n8', title: 'Подтверждено нарушение V-021', text: 'Система ждет применения репутационного эффекта к вендору.', level: 'orange' },
      { id: 'n9', title: 'Авторазбор нового кейса завершен', text: 'Можно брать в работу со второго уровня без дополнительной сортировки.', level: 'green' }
    ],
    market: [
      { id: 'n10', title: 'Рост активности в BI-категории', text: 'За неделю количество обезличенных регистраций в BI выросло на 18%.', level: 'blue' },
      { id: 'n11', title: 'Naumen перешел в статус “под наблюдением”', text: 'Снижение индекса скорости решений и рост количества споров.', level: 'orange' },
      { id: 'n12', title: 'Инферит ИТМен сохраняет эталонный рейтинг', text: 'Высокая прозрачность и низкий уровень конфликтов.', level: 'green' }
    ]
  },
  feed: [
    { date: '30 марта', partner: 'Softline Integration', vendor: 'Polymatica', note: 'Зарегистрирован обезличенный проект класса BI + Data Catalog в банковском секторе.', competition: 'Зафиксированы 2 смежных вендора и 1 технологический партнер.' },
    { date: '29 марта', partner: 'Rubytech Solutions', vendor: 'CloudMaster', note: 'Зарегистрирована обезличенная инициатива класса FinOps / cloud control в логистике.', competition: 'Есть связка с 1 технологическим участником и 1 смежным биллинговым контуром.' },
    { date: '28 марта', partner: 'ICL Services', vendor: 'Naumen', note: 'Открыта обезличенная регистрация класса ITSM / Change Management.', competition: 'На уровне рынка наблюдается конкуренция 2 интеграторов без раскрытия клиента.' }
  ],
  patterns: [
    { title: 'Наиболее конкурентные категории', lines: ['BI и отчетность — высокий рост новых регистраций', 'FinOps — высокая мультивендорность', 'ITSM — повышенная доля challenge-кейсов'] },
    { title: 'Паттерны нарушений', lines: ['Чаще всего спорят вокруг продлений и двойных регистраций', 'Наиболее чувствительный сегмент — проекты с длинным пресейлом', 'Спам-регистрации чаще возникают в перегретых категориях'] },
    { title: 'Поведенческие сигналы доверия', lines: ['Скорость ответа вендора влияет на рейтинг сильнее отказов', 'Регулярная активность партнера снижает риск challenge', 'Незначительные споры почти не бьют по индексу надежности'] }
  ]
};

const state = {
  role: 'partner',
  page: 'dashboard',
  formStep: 1,
  newDeal: {
    type: 'Проект', vendor: 'Инферит ИТМен', title: 'Пилот единого каталога ПО и CMDB', client: 'АО ЭнергоСеть', inn: '7702458123', amount: '12 500 000 ₽', closeDate: '2026-07-15', description: 'Единый контур discovery, нормализации ПО и управленческой отчетности по активам.', basis: 'Проведена встреча с ИТ-директором, согласованы контуры пилота и предмет оценки.', docs: 'Протокол встречи, draft scope, презентация', category: 'ITAM / CMDB'
  }
};

const roleSwitch = document.getElementById('roleSwitch');
const navMenu = document.getElementById('navMenu');
const pageTitle = document.getElementById('pageTitle');
const heroRow = document.getElementById('heroRow');
const kpiGrid = document.getElementById('kpiGrid');
const contentArea = document.getElementById('contentArea');
const modalRoot = document.getElementById('modalRoot');

document.getElementById('openQuickHelp').addEventListener('click', () => openModal(helpModal()));
document.getElementById('openWelcome').addEventListener('click', () => openModal(coverageModal()));

function render() {
  const cfg = DATA.roles[state.role];
  pageTitle.textContent = cfg.title;

  roleSwitch.innerHTML = Object.entries(DATA.roles).map(([id, role]) => `
    <button class="role-chip ${state.role === id ? 'active' : ''}" data-role="${id}">
      <div>${role.title}</div>
      <small>${role.heroTags[0]} · ${role.heroTags[1]}</small>
    </button>
  `).join('');

  navMenu.innerHTML = cfg.nav.map(item => `
    <button class="nav-item ${state.page === item.id ? 'active' : ''}" data-page="${item.id}">
      <div>${item.name}</div>
      <small>${item.note}</small>
    </button>
  `).join('');

  roleSwitch.querySelectorAll('[data-role]').forEach(btn => btn.onclick = () => {
    state.role = btn.dataset.role;
    state.page = DATA.roles[state.role].nav[0].id;
    render();
  });

  navMenu.querySelectorAll('[data-page]').forEach(btn => btn.onclick = () => {
    state.page = btn.dataset.page;
    render();
  });

  heroRow.innerHTML = `
    <div class="hero-card">
      <div class="hero-title">${cfg.heroTitle}</div>
      <div class="hero-text">${cfg.heroText}</div>
      <div class="hero-tags">${cfg.heroTags.map(tag => `<div class="hero-tag">${tag}</div>`).join('')}</div>
    </div>
    <div class="summary-card">
      <div class="summary-title">Что визуализировано в этом режиме</div>
      <div class="summary-list">${cfg.summary.map(line => `<div class="summary-item">${line}</div>`).join('')}</div>
    </div>
  `;

  kpiGrid.innerHTML = cfg.kpis.map(([label, value, note]) => `
    <div class="metric-card">
      <div class="metric-label">${label}</div>
      <div class="metric-value">${value}</div>
      <div class="metric-note">${note}</div>
    </div>
  `).join('');

  contentArea.innerHTML = renderPage();
  bindDynamicActions();
}

function renderPage() {
  if (state.role === 'partner') return renderPartnerPage();
  if (state.role === 'vendor') return renderVendorPage();
  if (state.role === 'arbitrage') return renderArbitragePage();
  return renderMarketPage();
}

function sectionHeader(title, subtitle, actions = '') {
  return `
    <div class="card-header">
      <div>
        <div class="card-title">${title}</div>
        <div class="card-subtitle">${subtitle}</div>
      </div>
      <div class="card-tools">${actions}</div>
    </div>
  `;
}

function notifBlock(role) {
  return `
    <div class="card">
      ${sectionHeader('Ключевые уведомления', 'Персонализировано под текущую роль. Все карточки раскрываются.', '<button class="soft-btn" data-modal="notifGuide">Как читать уведомления</button>')}
      <div class="item-list">
        ${DATA.notifications[role].map(n => `
          <div class="note-item">
            <div class="item-top">
              <div>
                <div class="badges"><span class="badge ${n.level}">${badgeText(n.level)}</span></div>
                <div class="deal-title">${n.title}</div>
                <div class="deal-meta">${n.text}</div>
              </div>
              <div class="inline-actions">
                <button class="ghost-btn" data-open-notif="${n.id}">Открыть</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function badgeText(level) {
  return ({ blue: 'Инфо', orange: 'Внимание', red: 'Критично', green: 'Позитивный сигнал' })[level] || 'Статус';
}

function dealList(items, withControls = true) {
  return items.map(d => `
    <div class="deal-item">
      <div class="deal-top">
        <div>
          <div class="badges">
            <span class="badge slate">${d.id}</span>
            <span class="badge ${statusColor(d.status)}">${d.status}</span>
            <span class="badge blue">${d.lifecycle}</span>
          </div>
          <div class="deal-title">${d.title}</div>
          <div class="deal-meta">
            Клиент: ${d.client} · Вендор: ${d.vendor} · Партнер: ${d.partner}<br>
            Сумма: ${d.amount} · Защита до: ${d.protectionTo} · Риск конфликта: ${d.conflictRisk}
          </div>
        </div>
        ${withControls ? `<div class="inline-actions">
          <button class="ghost-btn" data-open-deal="${d.id}">Карточка</button>
          <button class="soft-btn" data-open-activities="${d.id}">Активности</button>
        </div>` : ''}
      </div>
      <div class="deal-actions">
        ${d.extension ? `<button class="soft-btn" data-go="extensions">Продлить</button>` : ''}
        ${d.challenge ? `<button class="danger-btn" data-open-dispute="${d.id}">Открыть спор</button>` : ''}
        <button class="ghost-btn" data-open-evidence="${d.id}">Доказательства</button>
        <button class="ghost-btn" data-open-timeline="${d.id}">История</button>
      </div>
    </div>
  `).join('');
}

function statusColor(status) {
  if (status.includes('Защита')) return 'green';
  if (status.includes('Ожидает')) return 'orange';
  if (status.includes('Прод')) return 'blue';
  if (status.includes('Спор')) return 'red';
  return 'slate';
}

function renderPartnerPage() {
  switch (state.page) {
    case 'dashboard':
      return `
        <div class="grid-2">
          <div class="card">
            ${sectionHeader('Мой приоритетный портфель', 'Показывает, что партнер видит как рабочий фронт: активные сделки, продления, challenge и lifecycle.', '<button class="primary-btn" data-go="newDeal">Новая регистрация</button>')}
            <div class="item-list">${dealList(DATA.deals.slice(0, 4))}</div>
          </div>
          <div class="content-area">
            ${notifBlock('partner')}
            <div class="card">
              ${sectionHeader('Прозрачность по рынку', 'Краткие сигналы можно раскрыть и понять их влияние на сделку.', '')}
              <div class="item-list">
                ${DATA.feed.slice(0,2).map((f,i)=>`
                  <div class="feed-card">
                    <div class="item-top">
                      <div>
                        <div class="badges"><span class="badge slate">${f.date}</span></div>
                        <div class="deal-title">${f.note}</div>
                        <div class="deal-meta">${f.competition}</div>
                      </div>
                      <button class="ghost-btn" data-open-feed="${i}">Разобрать</button>
                    </div>
                  </div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    case 'newDeal':
      return renderNewDealForm();
    case 'portfolio':
      return `
        <div class="card">
          ${sectionHeader('Мои сделки и полный lifecycle', 'Добавлены статусы, challenge, мультивендорность, доказательства активности и влияние на рейтинг.', '')}
          ${tableDeals()}
        </div>
      `;
    case 'extensions':
      return `
        <div class="grid-2">
          <div class="card">
            ${sectionHeader('Продления защиты', 'Здесь виден кейс: хочешь продлить — покажи свежую активность.', '')}
            <div class="item-list">
              ${DATA.deals.filter(d => d.extension).map(d => `
                <div class="deal-item">
                  <div class="deal-title">${d.title}</div>
                  <div class="deal-meta">${d.partner} · ${d.vendor} · срок до ${d.protectionTo}</div>
                  <div class="deal-actions">
                    <button class="primary-btn" data-open-extension="${d.id}">Заполнить продление</button>
                    <button class="ghost-btn" data-open-activities="${d.id}">Открыть активности</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="card">
            ${sectionHeader('Что считается доказательством активности', 'Это отдельные сущности, а не просто текстовое поле.', '')}
            <div class="item-list">
              ${['Встреча с клиентом', 'Коммерческое предложение', 'Пилот / PoC', 'Подтвержденный следующий шаг', 'Согласованный scope', 'Комментарий арбитража'].map(x => `<div class="activity-item">${x}</div>`).join('')}
            </div>
          </div>
        </div>
      `;
    case 'complaints':
      return `
        <div class="grid-2">
          <div class="card">
            ${sectionHeader('Жалобы, challenge и споры', 'Покрывает кейсы: параллельная регистрация, отказ в продлении, непрозрачный отказ.', '<button class="primary-btn" data-open-complaint-form="1">Подать жалобу</button>')}
            <div class="item-list">${DATA.disputes.map(d => disputeCard(d)).join('')}</div>
          </div>
          <div class="card">
            ${sectionHeader('Когда стоит подавать challenge', 'Новый функциональный слой, которого часто не хватает в регистраторах сделок.', '')}
            <div class="item-list">
              ${['Вы реально ведете клиента, но регистрация у другого партнера выглядит слабой', 'Защита не продлена, но партнер пытается удержать проект без активности', 'Вендор обошел систему и поддержал другого участника вне правил'].map(x => `<div class="note-item">${x}</div>`).join('')}
            </div>
          </div>
        </div>
      `;
    case 'vendorCatalog':
      return catalogVendors();
    case 'ratings':
      return ratingsPage();
  }
}

function renderVendorPage() {
  switch (state.page) {
    case 'dashboard':
      return `
        <div class="grid-2">
          <div class="card">
            ${sectionHeader('Входящие и портфель защит', 'Унифицировано отдельно под вендора: акцент на новых регистрациях, решениях и качестве канала.', '')}
            <div class="item-list">${dealList(DATA.deals.filter(d => ['Ожидает решения вендора','Требует продления','Защита активна'].includes(d.status)).slice(0,4))}</div>
          </div>
          <div class="content-area">
            ${notifBlock('vendor')}
            <div class="card">
              ${sectionHeader('Ключевые сигналы по каналу', 'Сразу видно где конфликт, где сильный партнер и где можно потерять доверие.', '')}
              <div class="item-list">
                <div class="note-item">У тебя 1 критический риск обхода системы по текущим сделкам.</div>
                <div class="note-item">2 сделки требуют решения в течение 12 часов, иначе падает индекс скорости.</div>
                <div class="note-item">Партнеры с рейтингом 90+ дают win-rate на 7–11 п.п. выше среднего.</div>
              </div>
            </div>
          </div>
        </div>
      `;
    case 'inbox':
      return `
        <div class="card">
          ${sectionHeader('Входящие регистрации', 'Вендор видит только заявки после системной проверки. Каждая заявка раскрывается полностью.', '')}
          <div class="item-list">${dealList(DATA.deals.filter(d => d.status === 'Ожидает решения вендора'))}</div>
        </div>
      `;
    case 'pipeline':
      return `
        <div class="card">
          ${sectionHeader('Портфель защит и lifecycle', 'Покрывает бизнес-кейс pipeline visibility, включая активные сделки, продления, мультивендорность и lifecycle.', '')}
          ${tableDeals()}
        </div>
      `;
    case 'alerts':
      return `
        <div class="grid-2">
          <div class="card">
            ${sectionHeader('Конкурентные алерты', 'Показывает не просто факт, а расшифровку: что это значит для вендора и как влияет на решение.', '')}
            <div class="item-list">
              ${DATA.deals.slice(0,3).map(d => `
                <div class="note-item">
                  <div class="deal-title">${d.id} — ${d.title}</div>
                  <div class="deal-meta">${d.alerts}</div>
                  <div class="deal-actions"><button class="ghost-btn" data-open-deal="${d.id}">Разобрать сделку</button></div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="card">
            ${sectionHeader('Нарушения и enforcement', 'Добавлен слой, которого не хватало: обход системы, спам-регистрации и влияние на рейтинг.', '')}
            <div class="item-list">${DATA.violations.map(v => violationCard(v)).join('')}</div>
          </div>
        </div>
      `;
    case 'partnerCatalog':
      return catalogPartners();
    case 'ratings':
      return vendorRatingsPage();
    case 'analytics':
      return `
        <div class="grid-2-eq">
          <div class="card">
            ${sectionHeader('Эффект для вендора', 'Что уже умеет визуализировать прототип как полезный функционал.', '')}
            <div class="key-list">
              ${[['Сделок в прозрачном pipeline','64'],['Среднее время ответа','9.6 ч'],['Доля подтвержденных защит','78%'],['Конфликтов, решенных в срок','94%'],['Изменение рейтинга после нарушений','-1.2…-3.0']].map(([a,b])=>`<div class="key-line"><span>${a}</span><span>${b}</span></div>`).join('')}
            </div>
          </div>
          <div class="card">
            ${sectionHeader('Структура канала', 'Данные синтетические, но показывают ожидаемую аналитику рабочей платформы.', '')}
            <div class="item-list">
              <div class="note-item">18 сильных партнеров, из них 6 покрывают enterprise-сегмент.</div>
              <div class="note-item">Наиболее конфликтные категории: BI, ITSM, длинные инфраструктурные проекты.</div>
              <div class="note-item">Самый высокий win-rate у партнеров с нулевыми нарушениями и высоким индексом доказательной активности.</div>
            </div>
          </div>
        </div>
      `;
  }
}

function renderArbitragePage() {
  switch (state.page) {
    case 'dashboard':
      return `
        <div class="grid-2">
          <div class="card">
            ${sectionHeader('Очередь текущих дел', 'Теперь карточки раскрываются глубже: краткое описание, аргументы сторон, timeline, последствия.', '')}
            <div class="item-list">${DATA.disputes.map(d => disputeCard(d)).join('')}</div>
          </div>
          <div class="content-area">
            ${notifBlock('arbitrage')}
            <div class="card">
              ${sectionHeader('Что должен видеть оператор', 'Раскрытие ячеек и дел устранено: нет пустых сводок без содержания.', '')}
              <div class="item-list">
                <div class="note-item">Каждое дело показывает краткий смысл, стадию, уровень проверки и эффект на рейтинг.</div>
                <div class="note-item">Нарушения вынесены отдельно и больше не размазаны между уведомлениями и сделками.</div>
                <div class="note-item">Оператор сразу видит, какие кейсы challenge, какие — продление, какие — нарушение вендора.</div>
              </div>
            </div>
          </div>
        </div>
      `;
    case 'queue':
      return `
        <div class="card">
          ${sectionHeader('Очередь проверки', 'Кейс: независимый оператор видит, что брать в работу и почему.', '')}
          <div class="item-list">${DATA.disputes.map(d => `
            <div class="queue-item">
              <div class="item-top">
                <div>
                  <div class="badges"><span class="badge slate">${d.id}</span><span class="badge orange">${d.level}</span><span class="badge ${d.status.includes('Закрыто') ? 'green' : 'red'}">${d.status}</span></div>
                  <div class="deal-title">${d.title}</div>
                  <div class="deal-meta">${d.summary}</div>
                </div>
                <button class="ghost-btn" data-open-dispute-card="${d.id}">Открыть</button>
              </div>
            </div>`).join('')}
          </div>
        </div>
      `;
    case 'cases':
      return `
        <div class="card">
          ${sectionHeader('Арбитражные кейсы', 'Покрывает кейсы double registration, challenge, отказ в продлении, непрозрачный отказ.', '')}
          <div class="item-list">${DATA.disputes.map(d => disputeCard(d)).join('')}</div>
        </div>
      `;
    case 'violations':
      return `
        <div class="card">
          ${sectionHeader('Нарушения и последствия', 'Добавлен отдельный раздел enforcement, которого не хватало.', '')}
          <div class="item-list">${DATA.violations.map(v => violationCard(v)).join('')}</div>
        </div>
      `;
    case 'decisions':
      return `
        <div class="grid-2-eq">
          <div class="card">
            ${sectionHeader('Последние решения', 'Каждое решение влияет на доверие и репутацию стороны.', '')}
            <div class="item-list">
              ${DATA.disputes.map(d => `<div class="note-item"><strong>${d.id}</strong><br>${d.result}<br><span class="small-meta">${d.consequence}</span></div>`).join('')}
            </div>
          </div>
          <div class="card">
            ${sectionHeader('Что меняется после решения', 'Показывает бизнес-кейс: арбитраж — это не комментарий, а механизм с последствиями.', '')}
            <div class="key-list">
              ${[['Рейтинг участника','меняется автоматически'],['Статус сделки','обновляется'],['Нарушение','фиксируется в истории'],['Уведомления сторонам','отправляются'],['Публичная прозрачность','корректируется по правилам']].map(([a,b])=>`<div class="key-line"><span>${a}</span><span>${b}</span></div>`).join('')}
            </div>
          </div>
        </div>
      `;
    case 'history':
      return `
        <div class="card">
          ${sectionHeader('Журнал действий', 'Показывает, что система ведет полный след, а не только текущий статус.', '')}
          <div class="timeline">
            ${[
              '31.03 09:10 — присвоено подтвержденное нарушение V-021',
              '31.03 08:50 — ARB-2026-0081 повышен приоритет',
              '30.03 18:10 — кейс ARB-2026-0072 передан на уровень 3',
              '30.03 15:45 — вендору CloudMaster отправлено напоминание о сроке ответа',
              '30.03 11:00 — партнер T1 дозагрузил доказательства продления'
            ].map(x => `<div class="timeline-item">${x}</div>`).join('')}
          </div>
        </div>
      `;
  }
}

function renderMarketPage() {
  switch (state.page) {
    case 'dashboard':
      return `
        <div class="grid-2">
          <div class="card">
            ${sectionHeader('Главные сигналы рынка', 'Объединяет ленту, рейтинги и каталоги — чтобы зритель понимал всю экосистему.', '')}
            <div class="item-list">${DATA.feed.map((f,i)=>`<div class="feed-card"><div class="deal-title">${f.note}</div><div class="deal-meta">${f.competition}</div><div class="deal-actions"><button class="ghost-btn" data-open-feed="${i}">Разобрать сигнал</button></div></div>`).join('')}</div>
          </div>
          <div class="content-area">
            ${notifBlock('market')}
            <div class="card">
              ${sectionHeader('Категории и выбор', 'Добавлены каталоги вендоров и партнеров по категориям для сценария “к кому идти”.', '')}
              <div class="item-list">
                <div class="note-item">Сильнейшие категории: ITAM / CMDB, BI, FinOps.</div>
                <div class="note-item">Наиболее доверенные вендоры: Инферит ИТМен, Polymatica, Billogic.</div>
                <div class="note-item">Лучшие партнеры по дисциплине: Softline Integration, Lanit Project Hub.</div>
              </div>
            </div>
          </div>
        </div>
      `;
    case 'feed':
      return `
        <div class="card">
          ${sectionHeader('Обезличенная лента регистраций', 'Показывает бизнес-кейс рыночной прозрачности без раскрытия клиента и чувствительных деталей.', '')}
          <div class="item-list">${DATA.feed.map((f,i)=>`<div class="feed-card"><div class="item-top"><div><div class="badges"><span class="badge slate">${f.date}</span></div><div class="deal-title">${f.partner} → ${f.vendor}</div><div class="deal-meta">${f.note}<br>${f.competition}</div></div><button class="ghost-btn" data-open-feed="${i}">Открыть</button></div></div>`).join('')}</div>
        </div>
      `;
    case 'vendorCatalog':
      return catalogVendors();
    case 'partnerCatalog':
      return catalogPartners();
    case 'ratings':
      return vendorRatingsPage();
    case 'patterns':
      return `
        <div class="grid-3">
          ${DATA.patterns.map(p=>`<div class="card">${sectionHeader(p.title, 'Синтетическая, но реалистичная аналитика паттернов.', '')}<div class="item-list">${p.lines.map(x=>`<div class="note-item">${x}</div>`).join('')}</div></div>`).join('')}
        </div>
      `;
  }
}

function renderNewDealForm() {
  const s = state.newDeal;
  const stepNames = ['Базовые данные', 'Контур сделки', 'Основание и доказательства', 'Проверка и отправка'];
  return `
    <div class="card">
      ${sectionHeader('Новая регистрация сделки / проекта', 'Свободные поля доступны для ввода. Флоу перекидывает на следующий шаг без бэка, но с правдоподобной логикой.', '')}
      <div class="progress-steps">${stepNames.map((n, i) => `<div class="progress-step ${state.formStep === i+1 ? 'active' : ''}">${i+1}. ${n}</div>`).join('')}</div>
      ${state.formStep === 1 ? `
        <div class="form-grid">
          <label class="field"><span>Тип регистрации</span><select id="f-type"><option ${s.type==='Проект'?'selected':''}>Проект</option><option ${s.type==='Сделка'?'selected':''}>Сделка</option></select></label>
          <label class="field"><span>Вендор</span><select id="f-vendor">${DATA.vendors.map(v=>`<option ${s.vendor===v.name?'selected':''}>${v.name}</option>`).join('')}</select></label>
          <label class="field full"><span>Название проекта</span><input type="text" id="f-title" value="${s.title}"></label>
          <label class="field"><span>Клиент</span><input type="text" id="f-client" value="${s.client}"></label>
          <label class="field"><span>ИНН / ID клиента</span><input type="text" id="f-inn" value="${s.inn}"></label>
        </div>` : ''}
      ${state.formStep === 2 ? `
        <div class="form-grid">
          <label class="field"><span>Категория</span><select id="f-cat"><option ${s.category==='ITAM / CMDB'?'selected':''}>ITAM / CMDB</option><option>BI / Reporting</option><option>FinOps / Cloud</option><option>ITSM</option></select></label>
          <label class="field"><span>Сумма</span><input type="text" id="f-amount" value="${s.amount}"></label>
          <label class="field"><span>Плановая дата закрытия</span><input type="date" id="f-closeDate" value="${s.closeDate}"></label>
          <label class="field full"><span>Описание</span><textarea id="f-description">${s.description}</textarea></label>
        </div>` : ''}
      ${state.formStep === 3 ? `
        <div class="form-grid">
          <label class="field full"><span>Основание для регистрации</span><textarea id="f-basis">${s.basis}</textarea></label>
          <label class="field full"><span>Доказательная база</span><textarea id="f-docs">${s.docs}</textarea></label>
        </div>` : ''}
      ${state.formStep === 4 ? `
        <div class="grid-2-eq">
          <div class="card" style="padding:14px; box-shadow:none;">
            ${sectionHeader('Итог', 'Превью будущей карточки сделки.', '')}
            <div class="key-list">
              ${[['Тип', s.type],['Вендор', s.vendor],['Клиент', s.client],['Предмет', s.title],['Сумма', s.amount],['Категория', s.category]].map(([a,b])=>`<div class="key-line"><span>${a}</span><span>${b}</span></div>`).join('')}
            </div>
          </div>
          <div class="card" style="padding:14px; box-shadow:none;">
            ${sectionHeader('Прогноз системной проверки', 'Подсказка показывает смысл индекса и почему заявка пойдет дальше.', '')}
            <div class="item-list">
              <div class="note-item">Индекс достоверности: <strong>91/100</strong><span class="tooltip" data-tip="Считается по полноте данных, согласованности полей, косвенной проверке клиента и предмета проекта.">?</span></div>
              <div class="note-item">Вероятность дубля: <strong>Низкая</strong></div>
              <div class="note-item">Рекомендация системе: <strong>Передать вендору на подтверждение</strong></div>
            </div>
          </div>
        </div>` : ''}
      <div class="form-actions">
        <button class="ghost-btn" ${state.formStep===1?'disabled':''} data-form-nav="prev">Назад</button>
        ${state.formStep < 4 ? `<button class="primary-btn" data-form-nav="next">Далее</button>` : `<button class="primary-btn" data-form-submit="1">Отправить регистрацию</button>`}
      </div>
    </div>
  `;
}

function tableDeals() {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>ID</th><th>Сделка</th><th>Вендор</th><th>Партнер</th><th>Статус</th><th>Lifecycle</th><th>Мультивендорность</th><th>Действие</th></tr></thead>
        <tbody>
          ${DATA.deals.map(d => `
            <tr>
              <td>${d.id}</td>
              <td>${d.title}</td>
              <td>${d.vendor}</td>
              <td>${d.partner}</td>
              <td>${d.status}</td>
              <td>${d.lifecycle}</td>
              <td>${d.multi.length ? d.multi.join(', ') : '—'}</td>
              <td><button class="ghost-btn" data-open-deal="${d.id}">Открыть</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function disputeCard(d) {
  return `
    <div class="deal-item">
      <div class="item-top">
        <div>
          <div class="badges"><span class="badge slate">${d.id}</span><span class="badge orange">${d.level}</span><span class="badge ${d.status.includes('Закрыто') ? 'green' : 'red'}">${d.status}</span></div>
          <div class="deal-title">${d.title}</div>
          <div class="deal-meta">${d.summary}<br>SLA: ${d.sla}</div>
        </div>
        <button class="ghost-btn" data-open-dispute-card="${d.id}">Разобрать</button>
      </div>
    </div>
  `;
}

function violationCard(v) {
  return `
    <div class="deal-item">
      <div class="item-top">
        <div>
          <div class="badges"><span class="badge slate">${v.id}</span><span class="badge ${v.severity === 'Высокая' ? 'red' : v.severity === 'Средняя' ? 'orange' : 'blue'}">${v.severity}</span><span class="badge ${v.status === 'Подтверждено' ? 'red' : 'orange'}">${v.status}</span></div>
          <div class="deal-title">${v.type} — ${v.subject}</div>
          <div class="deal-meta">${v.summary}<br>Эффект: ${v.impact}</div>
        </div>
        <button class="ghost-btn" data-open-violation="${v.id}">Открыть</button>
      </div>
    </div>
  `;
}

function catalogVendors() {
  return `
    <div class="card">
      ${sectionHeader('Каталог вендоров по категориям', 'Добавлен как отдельный пользовательский кейс: выбрать, к кому идти, а не только управлять уже зарегистрированной сделкой.', '')}
      <div class="catalog-grid">
        ${DATA.vendors.map(v => `
          <div class="catalog-card">
            <div class="item-top">
              <div>
                <h4>${v.name}</h4>
                <p>${v.focus}</p>
              </div>
              <span class="badge ${v.status === 'Эталон' ? 'green' : v.status === 'Под наблюдением' ? 'orange' : 'blue'}">${v.status}</span>
            </div>
            <div class="catalog-meta">
              <div class="catalog-meta-line"><strong>Категории:</strong> ${v.categories.join(', ')}</div>
              <div class="catalog-meta-line"><strong>Рейтинг:</strong> ${v.rating}/100 <span class="tooltip" data-tip="Сводный индекс по прозрачности, скорости решений, конфликтности и соблюдению защит.">?</span></div>
              <div class="catalog-meta-line"><strong>Среднее решение:</strong> ${v.response}</div>
              <div class="catalog-meta-line"><strong>Партнеров в канале:</strong> ${v.partners}</div>
            </div>
            <div class="deal-actions">
              <button class="ghost-btn" data-open-vendor="${v.id}">Карточка</button>
              <button class="soft-btn" data-go-role="partner" data-go="newDeal" data-prefill-vendor="${v.name}">Идти с регистрацией</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function catalogPartners() {
  return `
    <div class="card">
      ${sectionHeader('Каталог партнеров по категориям', 'Нужен вендору и рынку для выбора, оценки и маршрутизации, а не только для просмотра уже поданных регистраций.', '')}
      <div class="catalog-grid">
        ${DATA.partners.map(p => `
          <div class="catalog-card">
            <div class="item-top">
              <div>
                <h4>${p.name}</h4>
                <p>${p.focus}</p>
              </div>
              <span class="badge blue">${p.tier}</span>
            </div>
            <div class="catalog-meta">
              <div class="catalog-meta-line"><strong>Категории:</strong> ${p.categories.join(', ')}</div>
              <div class="catalog-meta-line"><strong>Рейтинг:</strong> ${p.rating}/100</div>
              <div class="catalog-meta-line"><strong>Win-rate:</strong> ${p.winRate}%</div>
              <div class="catalog-meta-line"><strong>Нарушения:</strong> ${p.violations}</div>
            </div>
            <div class="deal-actions">
              <button class="ghost-btn" data-open-partner="${p.id}">Карточка</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function ratingsPage() {
  return `
    <div class="grid-2-eq">
      <div class="card">
        ${sectionHeader('Рейтинг вендоров', 'Теперь рейтинг вендоров добавлен отдельно и раскрывается по составляющим.', '')}
        <div class="item-list">${DATA.vendors.map(v => ratingItemVendor(v)).join('')}</div>
      </div>
      <div class="card">
        ${sectionHeader('Рейтинг партнеров', 'Показывает доверие, win-rate, дисциплину по продлениям и нарушениям.', '')}
        <div class="item-list">${DATA.partners.map(p => ratingItemPartner(p)).join('')}</div>
      </div>
    </div>
  `;
}

function vendorRatingsPage() {
  return `
    <div class="card">
      ${sectionHeader('Рейтинг вендоров и методология', 'Разворачивает цифры в понятную механику.', '')}
      <div class="grid-2-eq">
        <div class="item-list">${DATA.vendors.map(v => ratingItemVendor(v)).join('')}</div>
        <div class="card" style="padding:14px; box-shadow:none;">
          ${sectionHeader('Как считается рейтинг', 'Подсказки вынесены в явную методологию.', '')}
          <div class="key-list">
            ${[['Индекс прозрачности','насколько понятны решения'],['Индекс скорости','как быстро вендор отвечает'],['Индекс конфликтности','какова доля споров'],['Индекс соблюдения защит','были ли подтвержденные обходы'],['Корректировки','challenge, нарушения, решения арбитража']].map(([a,b])=>`<div class="key-line"><span>${a}</span><span>${b}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function ratingItemVendor(v) {
  return `
    <div class="rating-item">
      <div class="item-top">
        <div>
          <div class="deal-title">${v.name}</div>
          <div class="deal-meta">${v.note}</div>
        </div>
        <button class="ghost-btn" data-open-vendor="${v.id}">Разобрать</button>
      </div>
      <div class="badges" style="margin-top:10px;">
        <span class="badge green">Рейтинг ${v.rating}/100</span>
        <span class="badge blue">Прозрачность ${v.transparency}</span>
        <span class="badge orange">Скорость ${v.speed}</span>
        <span class="badge slate">Конфликты ${v.conflict}</span>
      </div>
    </div>
  `;
}

function ratingItemPartner(p) {
  return `
    <div class="rating-item">
      <div class="item-top">
        <div>
          <div class="deal-title">${p.name}</div>
          <div class="deal-meta">${p.note}</div>
        </div>
        <button class="ghost-btn" data-open-partner="${p.id}">Разобрать</button>
      </div>
      <div class="badges" style="margin-top:10px;">
        <span class="badge green">Рейтинг ${p.rating}/100</span>
        <span class="badge blue">Win-rate ${p.winRate}%</span>
        <span class="badge slate">Активных сделок ${p.activeDeals}</span>
        <span class="badge ${p.violations ? 'orange' : 'green'}">Нарушения ${p.violations}</span>
      </div>
    </div>
  `;
}

function bindDynamicActions() {
  document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { state.page = b.dataset.go; render(); });
  document.querySelectorAll('[data-go-role]').forEach(b => b.onclick = () => {
    state.role = b.dataset.goRole;
    if (b.dataset.prefillVendor) state.newDeal.vendor = b.dataset.prefillVendor;
    state.page = b.dataset.go || DATA.roles[state.role].nav[0].id;
    render();
  });

  document.querySelectorAll('[data-open-deal]').forEach(b => b.onclick = () => openDealModal(findDeal(b.dataset.openDeal)));
  document.querySelectorAll('[data-open-timeline]').forEach(b => b.onclick = () => openModal(timelineModal(findDeal(b.dataset.openTimeline))));
  document.querySelectorAll('[data-open-evidence]').forEach(b => b.onclick = () => openModal(evidenceModal(findDeal(b.dataset.openEvidence))));
  document.querySelectorAll('[data-open-activities]').forEach(b => b.onclick = () => openModal(activitiesModal(findDeal(b.dataset.openActivities))));
  document.querySelectorAll('[data-open-dispute]').forEach(b => b.onclick = () => {
    const dispute = DATA.disputes.find(x => x.dealId === b.dataset.openDispute) || DATA.disputes[0];
    openModal(disputeModal(dispute));
  });
  document.querySelectorAll('[data-open-dispute-card]').forEach(b => b.onclick = () => openModal(disputeModal(DATA.disputes.find(x => x.id === b.dataset.openDisputeCard))));
  document.querySelectorAll('[data-open-violation]').forEach(b => b.onclick = () => openModal(violationModal(DATA.violations.find(x => x.id === b.dataset.openViolation))));
  document.querySelectorAll('[data-open-vendor]').forEach(b => b.onclick = () => openModal(vendorModal(DATA.vendors.find(x => x.id === b.dataset.openVendor))));
  document.querySelectorAll('[data-open-partner]').forEach(b => b.onclick = () => openModal(partnerModal(DATA.partners.find(x => x.id === b.dataset.openPartner))));
  document.querySelectorAll('[data-open-feed]').forEach(b => b.onclick = () => openModal(feedModal(DATA.feed[Number(b.dataset.openFeed)])));
  document.querySelectorAll('[data-open-notif]').forEach(b => {
    const all = Object.values(DATA.notifications).flat();
    b.onclick = () => openModal(notificationModal(all.find(x => x.id === b.dataset.openNotif)));
  });
  document.querySelectorAll('[data-open-extension]').forEach(b => b.onclick = () => openModal(extensionModal(findDeal(b.dataset.openExtension))));
  document.querySelectorAll('[data-open-complaint-form]').forEach(b => b.onclick = () => openModal(complaintModal()));

  document.querySelectorAll('[data-form-nav]').forEach(b => b.onclick = () => {
    persistForm();
    if (b.dataset.formNav === 'next') state.formStep = Math.min(4, state.formStep + 1);
    if (b.dataset.formNav === 'prev') state.formStep = Math.max(1, state.formStep - 1);
    render();
  });
  document.querySelectorAll('[data-form-submit]').forEach(b => b.onclick = () => { persistForm(); openModal(submitModal()); });
  document.querySelectorAll('[data-modal="notifGuide"]').forEach(b => b.onclick = () => openModal(notificationGuideModal()));
}

function persistForm() {
  const ids = ['type','vendor','title','client','inn','amount','closeDate','description','basis','docs','cat'];
  ids.forEach(id => {
    const el = document.getElementById(`f-${id}`);
    if (!el) return;
    const key = id === 'cat' ? 'category' : id;
    state.newDeal[key] = el.value;
  });
}

function findDeal(id) { return DATA.deals.find(d => d.id === id); }

function openDealModal(deal) {
  openModal(`
    <div class="modal-header">
      <div><div class="modal-title">${deal.id} — ${deal.title}</div><div class="modal-subtitle">Полная карточка сделки: раскрытие полей, активности, evidence, lifecycle, мультивендорность, рейтинговый эффект.</div></div>
      <button class="close-btn" data-close-modal>Закрыть</button>
    </div>
    <div class="modal-body">
      <div class="two-col">
        <div class="card" style="padding:14px; box-shadow:none;">${sectionHeader('Паспорт сделки','', '')}<div class="key-list">${[['Клиент', deal.client],['Вендор', deal.vendor],['Партнер', deal.partner],['Статус', deal.status],['Lifecycle', deal.lifecycle],['Сумма', deal.amount],['Закрытие', deal.closeDate],['Защита до', deal.protectionTo],['Риск конфликта', deal.conflictRisk],['Рейтинговый эффект', deal.ratingImpact]].map(([a,b])=>`<div class="key-line"><span>${a}</span><span>${b}</span></div>`).join('')}</div></div>
        <div class="card" style="padding:14px; box-shadow:none;">${sectionHeader('Смысл полей','', '')}<div class="item-list"><div class="note-item">Мультивендорность: ${deal.multi.length ? deal.multi.join(', ') : 'нет'}</div><div class="note-item">Активности: ${deal.activities.join(', ')}</div><div class="note-item">Алерт: ${deal.alerts}</div><div class="note-item">Evidence: ${deal.evidence}</div></div></div>
      </div>
      <div class="card" style="padding:14px; box-shadow:none;">${sectionHeader('История и активность','', '')}<div class="timeline">${deal.history.map(x=>`<div class="timeline-item">${x}</div>`).join('')}</div></div>
    </div>
  `);
}

function timelineModal(deal) { return wrapModal(`${deal.id}: история`, 'Хронология действий по сделке.', `<div class="timeline">${deal.history.map(x=>`<div class="timeline-item">${x}</div>`).join('')}</div>`); }
function evidenceModal(deal) { return wrapModal(`${deal.id}: доказательная база`, 'Что система и арбитраж считают достаточными основаниями.', `<div class="item-list"><div class="note-item">${deal.evidence}</div><div class="note-item">Активности: ${deal.activities.join(', ')}</div></div>`); }
function activitiesModal(deal) { return wrapModal(`${deal.id}: активности`, 'Это отдельные сущности, а не просто текстовое поле.', `<div class="item-list">${deal.activities.map(x=>`<div class="activity-item">${x}</div>`).join('')}</div>`); }
function disputeModal(d) { return wrapModal(`${d.id} — ${d.title}`, d.summary, `<div class="two-col"><div class="card" style="padding:14px; box-shadow:none;">${sectionHeader('Аргументы сторон','', '')}<div class="item-list">${d.arguments.map(x=>`<div class="note-item">${x}</div>`).join('')}</div></div><div class="card" style="padding:14px; box-shadow:none;">${sectionHeader('Таймлайн','', '')}<div class="timeline">${d.timeline.map(x=>`<div class="timeline-item">${x}</div>`).join('')}</div></div></div><div class="card" style="padding:14px; box-shadow:none;">${sectionHeader('Последствия решения','', '')}<div class="note-item">${d.result}</div><div class="note-item">${d.consequence}</div></div>`); }
function violationModal(v) { return wrapModal(`${v.id} — ${v.type}`, v.summary, `<div class="key-list">${[['Сторона', v.party],['Субъект', v.subject],['Серьезность', v.severity],['Статус', v.status],['Эффект', v.impact]].map(([a,b])=>`<div class="key-line"><span>${a}</span><span>${b}</span></div>`).join('')}</div>`); }
function vendorModal(v) { return wrapModal(v.name, v.note, `<div class="two-col"><div class="card" style="padding:14px; box-shadow:none;">${sectionHeader('Рейтинг и методика','', '')}<div class="key-list">${[['Сводный рейтинг', v.rating],['Прозрачность', v.transparency],['Скорость', v.speed],['Конфликтность', v.conflict],['Средний ответ', v.response]].map(([a,b])=>`<div class="key-line"><span>${a}</span><span>${b}</span></div>`).join('')}</div></div><div class="card" style="padding:14px; box-shadow:none;">${sectionHeader('Профиль','', '')}<div class="item-list"><div class="note-item">Категории: ${v.categories.join(', ')}</div><div class="note-item">Партнеров в канале: ${v.partners}</div><div class="note-item">Сделок в системе: ${v.deals}</div></div></div></div>`); }
function partnerModal(p) { return wrapModal(p.name, p.note, `<div class="key-list">${[['Tier', p.tier],['Рейтинг', p.rating],['Win-rate', p.winRate + '%'],['Активные сделки', p.activeDeals],['Нарушения', p.violations],['Фокус', p.focus]].map(([a,b])=>`<div class="key-line"><span>${a}</span><span>${b}</span></div>`).join('')}</div><div class="item-list" style="margin-top:14px;"><div class="note-item">Категории: ${p.categories.join(', ')}</div></div>`); }
function feedModal(f) { return wrapModal(`Сигнал рынка — ${f.date}`, 'Раскрытие обезличенного сигнала и его бизнес-смысла.', `<div class="item-list"><div class="note-item"><strong>Пара:</strong> ${f.partner} → ${f.vendor}</div><div class="note-item">${f.note}</div><div class="note-item">${f.competition}</div><div class="note-item">Этот экран закрывает кейс прозрачности по рынку и показывает, что сигнал можно интерпретировать, а не просто видеть строкой.</div></div>`); }
function notificationModal(n) { return wrapModal(n.title, 'Персонализированное уведомление и что из него следует.', `<div class="item-list"><div class="note-item">${n.text}</div><div class="note-item">Уровень: ${badgeText(n.level)}</div><div class="note-item">Следующее действие зависит от роли: партнер продлевает / вендор решает / арбитраж эскалирует.</div></div>`); }
function extensionModal(d) { return wrapModal(`Продление ${d.id}`, 'Показывает реальный сценарий: защита не бесконечна, нужны свежие подтверждения.', `<div class="form-grid"><label class="field full"><span>Новая активность</span><textarea>29.03 — встреча с заказчиком по пилоту; 30.03 — отправлено обновленное КП; 31.03 — согласован следующий шаг.</textarea></label><label class="field full"><span>Документы</span><textarea>Обновленное КП, письмо от клиента, протокол встречи.</textarea></label></div><div class="form-actions"><button class="ghost-btn" data-close-modal>Отмена</button><button class="primary-btn" data-extension-submit="${d.id}">Отправить продление</button></div>`); }
function complaintModal() { return wrapModal('Новая жалоба / challenge', 'Показывает отдельный путь для challenge, которого часто не хватает.', `<div class="form-grid"><label class="field"><span>Тип</span><select><option>Параллельная регистрация</option><option>Непрозрачный отказ</option><option>Отказ в продлении</option><option>Обход системы вендором</option></select></label><label class="field"><span>Сделка</span><select>${DATA.deals.map(d=>`<option>${d.id} — ${d.title}</option>`).join('')}</select></label><label class="field full"><span>Описание</span><textarea>Считаем, что вторая сторона не может претендовать на сделку: у нас более ранняя регистрация и подтвержденная активность.</textarea></label></div><div class="form-actions"><button class="ghost-btn" data-close-modal>Отмена</button><button class="primary-btn" data-complaint-submit="1">Подать жалобу</button></div>`); }
function submitModal() { return wrapModal('Регистрация отправлена', 'Демо-логика: карточка не сохраняется по-настоящему, но система ведет пользователя как рабочий интерфейс.', `<div class="item-list"><div class="note-item">Сделке присвоен номер <strong>DR-2026-00131</strong>.</div><div class="note-item">Автоиндекс достоверности: <strong>91/100</strong>.</div><div class="note-item">Следующий шаг: регистрация перейдет во входящие вендору.</div></div><div class="form-actions"><button class="primary-btn" data-post-submit="1">Перейти в мой портфель</button></div>`); }
function helpModal() { return wrapModal('Как устроен прототип', 'Коротко о том, что здесь уже визуализировано.', `<div class="item-list"><div class="note-item">Отдельные кабинеты партнера, вендора, арбитража и публичного рынка.</div><div class="note-item">Каталоги вендоров и партнеров по категориям.</div><div class="note-item">Рейтинги, нарушения, challenge, lifecycle, мультивендорность, drill-down карточек.</div></div>`); }
function coverageModal() { return wrapModal('Что уже покрывает прототип', 'Обновленная версия включает как core функционал, так и слой глубины данных и навигации.', `<div class="item-list"><div class="note-item">Регистрация, подтверждение, продление, жалобы, арбитраж, нарушения.</div><div class="note-item">Каталог рынка, рейтинги вендоров и партнеров, персонализированные уведомления.</div><div class="note-item">Раскрытие текущих дел, истории, evidence, активностей и рыночных сигналов.</div></div>`); }
function notificationGuideModal() { return wrapModal('Как читать уведомления', 'Подсказка для демо-показа.', `<div class="key-list">${[['Инфо','полезный сигнал или новое событие'],['Внимание','нужно действие в обозримый срок'],['Критично','влияет на SLA, защиту или рейтинг'],['Позитивный сигнал','улучшает доверие или показывает прогресс']].map(([a,b])=>`<div class="key-line"><span>${a}</span><span>${b}</span></div>`).join('')}</div>`); }

function wrapModal(title, subtitle, body) {
  return `
    <div class="modal-header"><div><div class="modal-title">${title}</div><div class="modal-subtitle">${subtitle}</div></div><button class="close-btn" data-close-modal>Закрыть</button></div>
    <div class="modal-body">${body}</div>
  `;
}

function openModal(content) {
  modalRoot.innerHTML = `<div class="modal-overlay"><div class="modal">${content}</div></div>`;
  modalRoot.querySelectorAll('[data-close-modal]').forEach(b => b.onclick = closeModal);
  modalRoot.querySelector('.modal-overlay').addEventListener('click', e => { if (e.target.classList.contains('modal-overlay')) closeModal(); });
  const extSubmit = modalRoot.querySelector('[data-extension-submit]');
  if (extSubmit) extSubmit.onclick = () => { closeModal(); openModal(wrapModal('Продление отправлено', 'Прототип показывает следующий шаг.', `<div class="note-item">Запрос ушел в системную проверку и затем будет показан вендору на решение.</div>`)); };
  const complaintSubmit = modalRoot.querySelector('[data-complaint-submit]');
  if (complaintSubmit) complaintSubmit.onclick = () => { closeModal(); openModal(wrapModal('Жалоба подана', 'Кейс передан в арбитраж.', `<div class="note-item">Создан кейс <strong>ARB-2026-0084</strong>. Стартовый уровень — автоматическая проверка.</div>`)); };
  const postSubmit = modalRoot.querySelector('[data-post-submit]');
  if (postSubmit) postSubmit.onclick = () => { closeModal(); state.page = 'portfolio'; render(); };
}

function closeModal() { modalRoot.innerHTML = ''; }

render();
