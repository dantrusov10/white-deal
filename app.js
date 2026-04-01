const appState = {
  role: 'partner',
  section: 'summary',
  modalStep: 1,
  registerForm: {
    type: 'Проект', vendor: 'Инферит ИТМен', title: 'Модернизация CMDB и инвентаризации ИТ-активов',
    client: 'АО ВолгаЭнерго', inn: '7704123456', segment: 'Энергетика', solutionClass: 'ITAM / CMDB',
    amount: '27 800 000 ₽', closeDate: '30.06.2026', description: 'Проект импортозамещения системы учета ИТ-активов, CMDB и сервисных связей.',
    basis: 'Проведены 2 квалификационные встречи, согласован предварительный контур решения, подтвержден интерес ИТ-директора.',
    evidence: 'Встреча 05.03.2026; Коммерческое предложение v1; Протокол сессии discovery; Контакт ЛПР подтвержден.'
  }
};

const datasets = {
  summary: {
    partner: {
      stats: [
        ['Активные регистрации', '18', '+3 за 14 дней'],
        ['Требуют продления', '2', '1 — срочно сегодня'],
        ['Открытые споры', '1', 'SLA: 18 часов'],
        ['Рейтинг партнера', '93/100', 'Platinum / высокий уровень доверия'],
      ],
      notices: [
        {title:'Требуется продление по DR-2026-00111', text:'До окончания защиты осталось 2 дня. Необходимо приложить подтверждающие материалы.', tag:'warn'},
        {title:'Вендор рассмотрел регистрацию DR-2026-00129', text:'По сделке запрошено уточнение состава решения и статуса пилота.', tag:'info'},
        {title:'Зафиксирован сигнал смежной активности', text:'По одному из ваших проектов появился технологический партнер в составе комплексного предложения.', tag:'neutral'}
      ],
      signals: [
        'В марте рост регистраций в финансовом секторе составил 32% по сравнению с февралем.',
        'Класс решений Discovery устойчиво растет в промышленности 6 месяцев подряд.',
        'В сегменте BI наблюдается снижение новых регистраций у компаний среднего масштаба.'
      ]
    },
    vendor: {
      stats: [
        ['Новые поступления', '7', '3 требуют решения сегодня'],
        ['Активные защиты', '64', 'Средний срок — 29 дней'],
        ['Рейтинг вендора', '91/100', 'Надежный участник рынка'],
        ['Конфликтные случаи', '4', '2 урегулированы без эскалации'],
      ],
      notices: [
        {title:'Новая регистрация DR-2026-00129', text:'Поступила валидированная регистрация на проект FinOps. Требуется решение вендора.', tag:'info'},
        {title:'Открыто оспаривание по DR-2026-00103', text:'Партнер сообщает о попытке параллельной регистрации. Срок ответа — до 18:00.', tag:'danger'},
        {title:'Сигнал о мультивендорной сборке', text:'По проекту DR-2026-00124 замечено 2 смежных решения в рамках комплексного предложения.', tag:'neutral'}
      ],
      signals: [
        'Рост заявок из финсектора +32% в марте может потребовать корректировки партнерского приоритета.',
        'На классе решений Discovery наблюдается усиление спроса в промышленных компаниях.',
        'В сегменте ITSM снизилась доля регистраций с признаком быстрого закрытия.'
      ]
    },
    arbitrage: {
      stats: [
        ['Дел в очереди', '12', '4 новых за сутки'],
        ['Нарушение SLA', '1', 'Требует приоритизации'],
        ['Авторазбор', '73%', 'Без участия оператора'],
        ['Доверие к решениям', '94%', 'По данным повторных апелляций'],
      ],
      notices: [
        {title:'ARB-2026-0081 требует решения', text:'Срок рассмотрения истекает через 6 часов. Нужна финализация уровня 2.', tag:'danger'},
        {title:'Новый кейс по отказу в продлении', text:'Партнер приложил документы; вендор указывает на недостаточный прогресс.', tag:'info'},
        {title:'Системный сигнал', text:'Зафиксирован рост однотипных споров в классе решений Discovery.', tag:'neutral'}
      ],
      signals: [
        'Частота споров по продлению выросла в промышленных проектах за последние 2 месяца.',
        'Большинство конфликтов в марте связано с неопределенностью статуса активности партнера.',
        'Среднее время урегулирования по level 1 сократилось до 4.2 часов.'
      ]
    },
    market: {
      stats: [
        ['Новых регистраций за 30 дней', '147', '+18% к прошлому периоду'],
        ['Активных вендоров', '26', '11 с рейтингом выше 85'],
        ['Активных партнеров', '94', '24 уровня Platinum / Gold'],
        ['Открытых споров', '9', 'SLA соблюдается в 94% случаев'],
      ],
      notices: [
        {title:'Финансовый сектор растет', text:'В марте зафиксирован устойчивый рост регистраций решений классов BI, ITSM и Discovery.', tag:'info'},
        {title:'Промышленность: сигнал по Discovery', text:'В классе решений Discovery виден рост 6 месяцев подряд.', tag:'neutral'},
        {title:'Снижение интереса к базовому ITSM', text:'За последние 2 квартала объем регистраций постепенно смещается в сторону платформенных решений.', tag:'warn'}
      ],
      signals: [
        'В марте массово регистрируются сделки в финансовом секторе.',
        'Решения класса Discovery массово регистрируются в промышленности на горизонте 6 месяцев.',
        'В сегменте энергетики растет интерес к ITAM / CMDB и каталогу ПО.'
      ]
    }
  },
  registrations: [
    {id:'DR-2026-00124', date:'15.03.2026', partner:'Softline Integration', vendor:'Инферит ИТМен', client:'АО ВолгаЭнерго', subject:'Модернизация CMDB и инвентаризации ИТ-активов', status:'Активна', statusClass:'ok', until:'15.05.2026', risk:'Низкий', segment:'Энергетика', class:'ITAM / CMDB', amount:'27 800 000 ₽', timeline:[['15.03.2026 10:42','Регистрация создана партнером'],['15.03.2026 10:43','Автопроверка: 94/100'],['15.03.2026 12:08','Вендор подтвердил регистрацию'],['18.03.2026 14:15','Загружено коммерческое предложение']], evidence:['Встреча 05.03.2026','Коммерческое предложение v1','Протокол discovery-сессии','Контакт ЛПР подтвержден'], alerts:['Замечена смежная регистрация технологического партнера без нарушения текущей защиты.'], lifecycle:'Активна', ratingImpact:'Положительное влияние на рейтинг партнера и вендора'},
    {id:'DR-2026-00129', date:'28.03.2026', partner:'Rubytech Solutions', vendor:'CloudMaster', client:'ООО СеверЛогистика', subject:'Пилот FinOps и контроль неиспользуемых VM', status:'Ожидает решения', statusClass:'warn', until:'—', risk:'Средний', segment:'Логистика', class:'FinOps', amount:'8 400 000 ₽', timeline:[['28.03.2026 09:20','Регистрация создана'],['28.03.2026 09:21','Автопроверка: 82/100'],['28.03.2026 09:21','Передано вендору на решение']], evidence:['Встреча 22.03.2026','Краткий расчет экономии','Черновой пилотный контур'], alerts:['Вендор запросил уточнение состава решения и статуса пилота.'], lifecycle:'Проверка вендором', ratingImpact:'Нейтральное'},
    {id:'DR-2026-00111', date:'01.03.2026', partner:'T1 Infra Projects', vendor:'Polymatica', client:'ПАО РегионБанк', subject:'Комплексное BI + каталог ПО + витрина отчетности', status:'Требует продления', statusClass:'info', until:'02.04.2026', risk:'Средний', segment:'Финансы', class:'BI / Data Catalog', amount:'42 000 000 ₽', timeline:[['01.03.2026 11:05','Регистрация подтверждена'],['14.03.2026 17:40','Добавлен протокол встречи'],['29.03.2026 09:00','Система запросила продление']], evidence:['КП v2','Протокол встречи','Письмо от бизнес-заказчика'], alerts:['Необходимо подтвердить активность до истечения срока защиты.'], lifecycle:'Ожидает продления', ratingImpact:'Риск снижения рейтинга при отсутствии подтверждения'},
    {id:'DR-2026-00103', date:'24.02.2026', partner:'ICL Services', vendor:'Naumen', client:'ГК СтройИнвест', subject:'Сервис-деск и управление изменениями', status:'Спор', statusClass:'danger', until:'08.04.2026', risk:'Высокий', segment:'Строительство', class:'ITSM', amount:'19 600 000 ₽', timeline:[['24.02.2026 16:18','Сделка зарегистрирована'],['24.02.2026 18:10','Вендор подтвердил регистрацию'],['27.03.2026 13:10','Подана жалоба: попытка параллельной регистрации']], evidence:['Первичный тендерный контур','ТЗ от клиента','История переписки'], alerts:['Открыт спор по попытке параллельной регистрации.'], lifecycle:'Арбитраж', ratingImpact:'Негативное влияние при подтверждении нарушения'}
  ],
  disputes: [
    {id:'ARB-2026-0081', deal:'DR-2026-00103', type:'Попытка параллельной регистрации', complainant:'ICL Services', otherParty:'Naumen / второй партнер', level:'Уровень 2 — специалист', status:'В рассмотрении', statusClass:'warn', sla:'18 часов', summary:'Партнер сообщает о попытке подтверждения конкурирующей регистрации по уже защищенной сделке.', auto:'Совпадение клиента и предмета проекта подтверждено', decisions:['Автоуровень: найдено 87% совпадения по предмету и 100% по клиенту','Уровень 2: проводится сверка материалов и внутренней коммуникации вендора']},
    {id:'ARB-2026-0072', deal:'DR-2026-00094', type:'Отказ в продлении', complainant:'Rubytech Solutions', otherParty:'CloudMaster', level:'Уровень 3 — руководитель', status:'Назначено финальное решение', statusClass:'info', sla:'6 часов', summary:'Партнер приложил доказательства активности; вендор считает прогресс недостаточным.', auto:'Материалы подтверждены частично', decisions:['Автоуровень: обнаружены новые материалы после срока первичной защиты','Уровень 2: подтверждены 2 активности из 4']},
    {id:'ARB-2026-0065', deal:'DR-2026-00088', type:'Непрозрачный отказ', complainant:'Softline Integration', otherParty:'Polymatica', level:'Уровень 1 — автоматический', status:'Закрыто', statusClass:'ok', sla:'Завершено', summary:'Система выявила отсутствие дубля и нарушение внутренней логики отказа.', auto:'Оснований для отказа не найдено', decisions:['Автоуровень: рекомендация пересмотра','Вендор изменил статус на подтверждено']}
  ],
  vendors: [
    {name:'Инферит ИТМен', category:'ITAM / CMDB', segment:'Enterprise IT', rating:96, disputes:1, active:64, transparency:97, speed:93, trust:'Эталон', note:'Высокая скорость решений, низкая конфликтность'},
    {name:'Polymatica', category:'BI / Analytics', segment:'Data Platforms', rating:91, disputes:3, active:41, transparency:90, speed:88, trust:'Надежный', note:'Стабильный участник с высокой долей защищенных регистраций'},
    {name:'CloudMaster', category:'FinOps / Cloud', segment:'Infrastructure', rating:88, disputes:5, active:35, transparency:86, speed:84, trust:'Стабильный', note:'Высокая активность в сегменте логистики и mid-market'},
    {name:'Naumen', category:'ITSM', segment:'Service Management', rating:84, disputes:6, active:28, transparency:82, speed:81, trust:'Под наблюдением', note:'Повышенная частота споров по параллельным регистрациям'},
    {name:'Billogic', category:'Billing / ERP', segment:'Enterprise Systems', rating:87, disputes:2, active:19, transparency:88, speed:83, trust:'Стабильный', note:'Низкий уровень нарушений, умеренный объем регистрации'}
  ],
  partners: [
    {name:'Softline Integration', specialization:'Enterprise infra / ITAM', tier:'Platinum', rating:93, winRate:'41%', active:18, disputes:1, note:'Высокое качество материалов и соблюдение сроков продления'},
    {name:'Rubytech Solutions', specialization:'Cloud / FinOps', tier:'Gold', rating:87, winRate:'38%', active:12, disputes:2, note:'Сильная активность в пилотных внедрениях'},
    {name:'ICL Services', specialization:'ITSM / Support', tier:'Gold', rating:82, winRate:'36%', active:9, disputes:3, note:'Часто работает в конкурентных тендерных контурах'},
    {name:'T1 Infra Projects', specialization:'BI / Integration', tier:'Silver', rating:85, winRate:'32%', active:11, disputes:1, note:'Нуждается в улучшении дисциплины продлений'},
    {name:'K2Tech Consulting', specialization:'Discovery / Data', tier:'Gold', rating:89, winRate:'39%', active:13, disputes:1, note:'Высокий спрос в индустриальном сегменте'}
  ],
  marketSignals: [
    {title:'Рост регистраций в финансовом секторе', text:'В марте количество регистраций в финансовом секторе выросло на 32% относительно февраля. Наибольший вклад внесли BI, ITSM и Discovery-проекты.', impact:'Может служить сигналом для перераспределения фокуса партнерских программ и маркетинга.', trend:'Рост', chart:[42,51,56,59,74,81]},
    {title:'Discovery в промышленности растет 6 месяцев подряд', text:'Решения класса Discovery демонстрируют устойчивое наращивание регистраций в промышленном сегменте.', impact:'Сигнал для усиления продуктовой стратегии и развития отраслевых пресейл-команд.', trend:'Рост', chart:[22,24,29,35,41,47]},
    {title:'BI в среднем бизнесе замедляется', text:'За последние 2 квартала доля новых регистраций BI-решений в среднем бизнесе снизилась на 11%.', impact:'Может означать насыщение рынка или смещение в сторону комплексных платформ.', trend:'Снижение', chart:[58,56,52,49,47,45]}
  ],
  history: [
    ['30.03.2026 17:42','Система','Сформирован обезличенный сигнал по росту Discovery в промышленности'],
    ['30.03.2026 15:10','Вендор CloudMaster','Запрошено уточнение по DR-2026-00129'],
    ['29.03.2026 09:00','Система','Запрошено продление по DR-2026-00111'],
    ['27.03.2026 13:10','ICL Services','Подано оспаривание по DR-2026-00103'],
    ['18.03.2026 14:15','Softline Integration','Загружено коммерческое предложение по DR-2026-00124']
  ]
};

const meta = {
  summary: ['Сводка','Операционная сводка по текущей роли и ключевым действиям'],
  registry: ['Реестр регистраций','Единый список регистраций, сроков, статусов, рисков и связанных действий'],
  disputes: ['Реестр споров','Контур оспаривания, эскалаций и многоуровневого рассмотрения'],
  'catalog-vendors': ['Каталог вендоров','Поиск вендоров по классу решений, рейтингу, активности и качеству поведения'],
  'catalog-partners': ['Каталог партнеров','Выбор партнеров по специализации, рейтингу, активности и результативности'],
  ratings: ['Рейтинги','Репутационный контур вендоров и партнеров с методикой расчета'],
  analytics: ['Аналитика рынка','Обезличенные сигналы и динамика регистраций по классам решений и сегментам'],
  history: ['Журнал действий','Фиксация процедурных и пользовательских действий в системе']
};

function $(sel){ return document.querySelector(sel); }
function $all(sel){ return Array.from(document.querySelectorAll(sel)); }
function badgeClass(status){
  const s = status.toLowerCase();
  if(s.includes('актив') || s.includes('закрыто') || s.includes('эталон')) return 'ok';
  if(s.includes('ожида') || s.includes('рассмотр') || s.includes('срочно')) return 'warn';
  if(s.includes('спор') || s.includes('опас') || s.includes('наруш') || s.includes('под наблюд')) return 'danger';
  if(s.includes('продл') || s.includes('решение') || s.includes('назначено')) return 'info';
  return 'neutral';
}
function tooltip(text){ return `<span class="tooltip" title="${escapeHtml(text)}">?</span>`; }
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

function render(){
  const [title, subtitle] = meta[appState.section];
  $('#page-title').textContent = title;
  $('#page-subtitle').textContent = subtitle;
  renderSection();
  syncButtons();
}

function syncButtons(){
  $all('.role-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.role === appState.role));
  $all('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.section === appState.section));
}

function renderSection(){
  const root = $('#content');
  if(appState.section === 'summary') root.innerHTML = renderSummary();
  if(appState.section === 'registry') root.innerHTML = renderRegistry();
  if(appState.section === 'disputes') root.innerHTML = renderDisputes();
  if(appState.section === 'catalog-vendors') root.innerHTML = renderVendors();
  if(appState.section === 'catalog-partners') root.innerHTML = renderPartners();
  if(appState.section === 'ratings') root.innerHTML = renderRatings();
  if(appState.section === 'analytics') root.innerHTML = renderAnalytics();
  if(appState.section === 'history') root.innerHTML = renderHistory();
  bindDynamic();
}

function renderSummary(){
  const data = datasets.summary[appState.role];
  return `
    <div class="stats-grid">
      ${data.stats.map(s => `<div class="stat-card"><div class="stat-label">${s[0]}</div><div class="stat-value">${s[1]}</div><div class="stat-note">${s[2]}</div></div>`).join('')}
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-header"><div><div class="card-title">Требуют действий</div><div class="card-subtitle">Персонализированные уведомления по текущей роли</div></div></div>
        <div class="card-body"><div class="notice-list">
          ${data.notices.map((n,i)=>`<div class="notice-item row-click" data-notice="${i}"><span class="badge ${n.tag}">${n.title}</span><div style="margin-top:8px">${n.text}</div></div>`).join('')}
        </div></div>
      </div>
      <div class="card">
        <div class="card-header"><div><div class="card-title">Обезличенные сигналы рынка</div><div class="card-subtitle">Сводка по динамике сегментов и классов решений</div></div></div>
        <div class="card-body"><div class="signal-grid">
          ${data.signals.map((s,i)=>`<div class="signal row-click" data-signal="${i}"><div class="signal-title">Сигнал ${i+1}</div><div class="signal-note">${s}</div></div>`).join('')}
        </div></div>
      </div>
    </div>`;
}

function renderRegistry(){
  return `
  <div class="table-wrap">
    <div class="table-header">
      <div><div class="card-title">Реестр регистраций</div><div class="card-subtitle">Сделки, проекты, статусы, сроки и риски</div></div>
      <div class="toolbar">
        <select><option>Все статусы</option><option>Активна</option><option>Ожидает решения</option><option>Требует продления</option><option>Спор</option></select>
        <select><option>Все сегменты</option><option>Финансы</option><option>Промышленность</option><option>Энергетика</option><option>Логистика</option></select>
        <select><option>Все классы решений</option><option>ITSM</option><option>Discovery</option><option>BI</option><option>FinOps</option><option>ITAM / CMDB</option></select>
      </div>
    </div>
    <div class="table-scroll"><table>
      <thead><tr><th>№</th><th>Дата</th><th>Партнер</th><th>Вендор</th><th>Клиент</th><th>Предмет</th><th>Статус</th><th>Срок</th><th>Риск</th></tr></thead>
      <tbody>
        ${datasets.registrations.map((r,i)=>`<tr class="row-click" data-reg="${i}"><td>${r.id}</td><td>${r.date}</td><td>${r.partner}</td><td>${r.vendor}</td><td>${r.client}</td><td>${r.subject}</td><td><span class="badge ${r.statusClass}">${r.status}</span></td><td>${r.until}</td><td>${r.risk}</td></tr>`).join('')}
      </tbody>
    </table></div>
  </div>`;
}

function renderDisputes(){
  return `
  <div class="table-wrap">
    <div class="table-header">
      <div><div class="card-title">Реестр споров</div><div class="card-subtitle">Оспаривание регистраций, отказов, продлений и нарушений</div></div>
      <div class="toolbar">
        <select><option>Все уровни</option><option>Уровень 1</option><option>Уровень 2</option><option>Уровень 3</option></select>
        <select><option>Все статусы</option><option>В рассмотрении</option><option>Назначено решение</option><option>Закрыто</option></select>
      </div>
    </div>
    <div class="table-scroll"><table>
      <thead><tr><th>№</th><th>Сделка</th><th>Тип</th><th>Заявитель</th><th>Уровень</th><th>Статус</th><th>SLA</th></tr></thead>
      <tbody>
        ${datasets.disputes.map((d,i)=>`<tr class="row-click" data-dispute="${i}"><td>${d.id}</td><td>${d.deal}</td><td>${d.type}</td><td>${d.complainant}</td><td>${d.level}</td><td><span class="badge ${d.statusClass}">${d.status}</span></td><td>${d.sla}</td></tr>`).join('')}
      </tbody>
    </table></div>
  </div>`;
}

function renderVendors(){
  return `
  <div class="table-wrap">
    <div class="table-header">
      <div><div class="card-title">Каталог вендоров</div><div class="card-subtitle">Выбор по рейтингу, активности, классу решений и качеству поведения</div></div>
      <div class="toolbar">
        <select><option>Все категории</option><option>ITSM</option><option>FinOps</option><option>BI</option><option>ITAM / CMDB</option></select>
        <select><option>Все сегменты</option><option>Enterprise IT</option><option>Infrastructure</option><option>Data Platforms</option></select>
      </div>
    </div>
    <div class="table-scroll"><table>
      <thead><tr><th>Вендор</th><th>Категория</th><th>Сегмент</th><th>Рейтинг</th><th>Активные регистрации</th><th>Споры</th><th>Статус доверия</th></tr></thead>
      <tbody>
        ${datasets.vendors.map((v,i)=>`<tr class="row-click" data-vendor="${i}"><td>${v.name}</td><td>${v.category}</td><td>${v.segment}</td><td>${v.rating}/100</td><td>${v.active}</td><td>${v.disputes}</td><td><span class="badge ${badgeClass(v.trust)}">${v.trust}</span></td></tr>`).join('')}
      </tbody>
    </table></div>
  </div>`;
}

function renderPartners(){
  return `
  <div class="table-wrap">
    <div class="table-header">
      <div><div class="card-title">Каталог партнеров</div><div class="card-subtitle">Выбор по специализации, результативности и дисциплине работы в системе</div></div>
      <div class="toolbar">
        <select><option>Все специализации</option><option>Enterprise infra</option><option>Cloud</option><option>ITSM</option><option>Discovery</option></select>
        <select><option>Все tiers</option><option>Platinum</option><option>Gold</option><option>Silver</option></select>
      </div>
    </div>
    <div class="table-scroll"><table>
      <thead><tr><th>Партнер</th><th>Специализация</th><th>Tier</th><th>Рейтинг</th><th>Win-rate</th><th>Активные регистрации</th><th>Споры</th></tr></thead>
      <tbody>
        ${datasets.partners.map((p,i)=>`<tr class="row-click" data-partner="${i}"><td>${p.name}</td><td>${p.specialization}</td><td>${p.tier}</td><td>${p.rating}/100</td><td>${p.winRate}</td><td>${p.active}</td><td>${p.disputes}</td></tr>`).join('')}
      </tbody>
    </table></div>
  </div>`;
}

function renderRatings(){
  return `
    <div class="tabs">
      <button class="tab-btn active" data-ratingtab="vendors">Рейтинг вендоров</button>
      <button class="tab-btn" data-ratingtab="partners">Рейтинг партнеров</button>
    </div>
    <div id="ratings-wrap">${ratingsTable('vendors')}</div>`;
}
function ratingsTable(type){
  if(type === 'vendors'){
    return `<div class="dual">
      <div class="table-wrap"><div class="table-header"><div><div class="card-title">Рейтинг вендоров</div><div class="card-subtitle">Оценивается прозрачность, скорость решений, конфликтность, соблюдение защит ${tooltip('Рейтинг вендора складывается из прозрачности решений, доли соблюденных защит, скорости реакции и частоты подтвержденных нарушений.')}</div></div></div><div class="table-scroll"><table><thead><tr><th>Вендор</th><th>Итог</th><th>Прозрачность</th><th>Скорость</th><th>Споры</th></tr></thead><tbody>${datasets.vendors.map((v,i)=>`<tr class="row-click" data-vendor="${i}"><td>${v.name}</td><td>${v.rating}/100</td><td>${v.transparency}</td><td>${v.speed}</td><td>${v.disputes}</td></tr>`).join('')}</tbody></table></div></div>
      <div class="right-box"><div class="card-header"><div><div class="card-title">Методика расчета</div><div class="card-subtitle">Как формируется репутация вендора</div></div></div><div class="card-body metric-list"><div class="metric-row"><span>Соблюдение защит</span><strong>35%</strong></div><div class="metric-row"><span>Прозрачность решений</span><strong>25%</strong></div><div class="metric-row"><span>Скорость реакции</span><strong>20%</strong></div><div class="metric-row"><span>Подтвержденные нарушения</span><strong>20%</strong></div></div></div>
    </div>`;
  }
  return `<div class="dual">
    <div class="table-wrap"><div class="table-header"><div><div class="card-title">Рейтинг партнеров</div><div class="card-subtitle">Оценивается полнота материалов, дисциплина продлений, качество поведения в спорах ${tooltip('Рейтинг партнера зависит от качества подаваемых регистраций, дисциплины продлений, подтвержденной активности и доли обоснованных споров.')}</div></div></div><div class="table-scroll"><table><thead><tr><th>Партнер</th><th>Итог</th><th>Win-rate</th><th>Активные</th><th>Споры</th></tr></thead><tbody>${datasets.partners.map((p,i)=>`<tr class="row-click" data-partner="${i}"><td>${p.name}</td><td>${p.rating}/100</td><td>${p.winRate}</td><td>${p.active}</td><td>${p.disputes}</td></tr>`).join('')}</tbody></table></div></div>
    <div class="right-box"><div class="card-header"><div><div class="card-title">Методика расчета</div><div class="card-subtitle">Как формируется репутация партнера</div></div></div><div class="card-body metric-list"><div class="metric-row"><span>Качество материалов</span><strong>30%</strong></div><div class="metric-row"><span>Подтвержденная активность</span><strong>25%</strong></div><div class="metric-row"><span>Дисциплина продлений</span><strong>20%</strong></div><div class="metric-row"><span>Поведение в спорах</span><strong>25%</strong></div></div></div>
  </div>`;
}

function renderAnalytics(){
  const cards = datasets.marketSignals;
  return `
    <div class="card" style="margin-bottom:16px;">
      <div class="card-header"><div><div class="card-title">Параметры аналитики</div><div class="card-subtitle">Выбор сегмента, класса решений и периода для обезличенного анализа рынка</div></div></div>
      <div class="card-body">
        <div class="toolbar">
          <select><option>Сегмент: все</option><option>Финансы</option><option>Промышленность</option><option>Энергетика</option><option>Госсектор</option></select>
          <select><option>Класс решений: все</option><option>Discovery</option><option>ITSM</option><option>BI</option><option>ITAM / CMDB</option><option>FinOps</option></select>
          <select><option>Период: 6 месяцев</option><option>1 месяц</option><option>1 квартал</option><option>1 год</option></select>
        </div>
      </div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-header"><div><div class="card-title">Обезличенные рыночные сигналы</div><div class="card-subtitle">Никаких компаний, клиентов и сделок — только агрегированная динамика</div></div></div>
        <div class="card-body signal-grid">${cards.map((c,i)=>`<div class="signal row-click" data-market="${i}"><div class="signal-title">${c.title}</div><div class="signal-note">${c.text}</div><div class="small" style="margin-top:8px;">Стратегический эффект: ${c.impact}</div></div>`).join('')}</div>
      </div>
      <div class="card">
        <div class="card-header"><div><div class="card-title">Динамика регистраций</div><div class="card-subtitle">Пример обезличенной визуализации по выбранному классу решений</div></div></div>
        <div class="card-body">
          <div class="chart-box">
            <div class="small">Пример: Discovery / промышленность / 6 месяцев</div>
            <div class="bars">
              ${[22,24,29,35,41,47].map((v,i)=>`<div class="bar-col"><div class="bar" style="height:${v*2.4}px"></div><div class="small">M${i+1}</div><div class="small">${v}</div></div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderHistory(){
  return `
    <div class="table-wrap"><div class="table-header"><div><div class="card-title">Журнал действий</div><div class="card-subtitle">Процедурные и пользовательские действия в системе</div></div></div>
    <div class="table-scroll"><table><thead><tr><th>Дата и время</th><th>Источник</th><th>Событие</th></tr></thead><tbody>
      ${datasets.history.map(h=>`<tr><td>${h[0]}</td><td>${h[1]}</td><td>${h[2]}</td></tr>`).join('')}
    </tbody></table></div></div>`;
}

function renderRegisterFlow(){
  const f = appState.registerForm;
  const step = appState.modalStep;
  $('#modal-title').textContent = 'Процедура регистрации сделки / проекта';
  $('#modal-subtitle').textContent = 'Форма без бэка, но с полноценной сквозной логикой для демонстрации';
  $('#modal-body').innerHTML = `
    <div class="stepper">
      <div class="step ${step===1?'active':''}">1. Основные сведения</div>
      <div class="step ${step===2?'active':''}">2. Параметры сделки</div>
      <div class="step ${step===3?'active':''}">3. Подтверждающие материалы</div>
      <div class="step ${step===4?'active':''}">4. Проверка и отправка</div>
    </div>
    ${step===1 ? `
      <div class="form-grid">
        <div class="form-row"><label class="label">Тип регистрации ${tooltip('В рамках системы можно регистрировать как короткую сделку, так и длительный проект.')}</label><select id="f-type"><option ${f.type==='Проект'?'selected':''}>Проект</option><option ${f.type==='Сделка'?'selected':''}>Сделка</option></select></div>
        <div class="form-row"><label class="label">Вендор</label><select id="f-vendor">${datasets.vendors.map(v=>`<option ${f.vendor===v.name?'selected':''}>${v.name}</option>`).join('')}</select></div>
        <div class="form-row full"><label class="label">Предмет регистрации</label><input class="field" id="f-title" value="${escapeHtml(f.title)}"></div>
        <div class="form-row"><label class="label">Компания клиента</label><input class="field" id="f-client" value="${escapeHtml(f.client)}"></div>
        <div class="form-row"><label class="label">ИНН / идентификатор клиента ${tooltip('Клиент раскрывается вендору и системе, но не рынку.')}</label><input class="field" id="f-inn" value="${escapeHtml(f.inn)}"></div>
      </div>` : ''}
    ${step===2 ? `
      <div class="form-grid">
        <div class="form-row"><label class="label">Сегмент</label><select id="f-segment"><option ${f.segment==='Финансы'?'selected':''}>Финансы</option><option ${f.segment==='Промышленность'?'selected':''}>Промышленность</option><option ${f.segment==='Энергетика'?'selected':''}>Энергетика</option><option ${f.segment==='Логистика'?'selected':''}>Логистика</option></select></div>
        <div class="form-row"><label class="label">Класс решений</label><select id="f-class"><option ${f.solutionClass==='ITAM / CMDB'?'selected':''}>ITAM / CMDB</option><option>ITSM</option><option>Discovery</option><option>BI / Data Catalog</option><option>FinOps</option></select></div>
        <div class="form-row"><label class="label">Плановая сумма</label><input class="field" id="f-amount" value="${escapeHtml(f.amount)}"></div>
        <div class="form-row"><label class="label">Плановая дата закрытия</label><input class="field" id="f-close" value="${escapeHtml(f.closeDate)}"></div>
        <div class="form-row full"><label class="label">Описание проекта ${tooltip('Используется в машинной проверке, определении класса решений и поиске возможных дублей.')}</label><textarea id="f-description" rows="6">${escapeHtml(f.description)}</textarea></div>
      </div>` : ''}
    ${step===3 ? `
      <div class="form-grid">
        <div class="form-row full"><label class="label">Основание для регистрации</label><textarea id="f-basis" rows="5">${escapeHtml(f.basis)}</textarea></div>
        <div class="form-row full"><label class="label">Подтверждающие материалы ${tooltip('Вместо абстрактного текста рекомендуется прикладывать сущности: встречи, КП, пилоты, подтвержденные контакты.')}</label><textarea id="f-evidence" rows="6">${escapeHtml(f.evidence)}</textarea></div>
      </div>
      <div class="card" style="margin-top:16px;"><div class="card-body"><strong>Предварительная машинная оценка:</strong><div class="metric-list" style="margin-top:10px"><div class="metric-row"><span>Полнота данных</span><strong>91/100</strong></div><div class="metric-row"><span>Вероятность дубля</span><strong>Низкая</strong></div><div class="metric-row"><span>Рекомендация</span><strong>Передать вендору на рассмотрение</strong></div></div></div></div>` : ''}
    ${step===4 ? `
      <div class="dual">
        <div class="card"><div class="card-header"><div><div class="card-title">Сводка по регистрации</div><div class="card-subtitle">Финальная проверка перед отправкой</div></div></div><div class="card-body">
          <div class="kv"><div class="kv-key">Тип</div><div>${f.type}</div></div>
          <div class="kv"><div class="kv-key">Вендор</div><div>${f.vendor}</div></div>
          <div class="kv"><div class="kv-key">Клиент</div><div>${f.client}</div></div>
          <div class="kv"><div class="kv-key">Сегмент</div><div>${f.segment}</div></div>
          <div class="kv"><div class="kv-key">Класс решений</div><div>${f.solutionClass}</div></div>
          <div class="kv"><div class="kv-key">Сумма</div><div>${f.amount}</div></div>
          <div class="kv"><div class="kv-key">Срок закрытия</div><div>${f.closeDate}</div></div>
        </div></div>
        <div class="card"><div class="card-header"><div><div class="card-title">Что произойдет дальше</div><div class="card-subtitle">Процедурная логика системы</div></div></div><div class="card-body"><div class="metric-list"><div class="metric-row"><span>1. Машинная проверка</span><strong>до 5 минут</strong></div><div class="metric-row"><span>2. Передача вендору</span><strong>после валидации</strong></div><div class="metric-row"><span>3. Решение вендора</span><strong>до 1 дня</strong></div><div class="metric-row"><span>4. При необходимости — оспаривание</span><strong>через арбитраж</strong></div></div></div></div>
      </div>` : ''}
  `;
  $('#modal-footer').innerHTML = `
    <div><button class="ghost-btn" id="modal-prev" ${step===1?'disabled':''}>Назад</button></div>
    <div>${step<4 ? '<button class="primary-btn" id="modal-next">Далее</button>' : '<button class="primary-btn" id="modal-submit">Отправить на регистрацию</button>'}</div>`;
  bindModalForm();
}

function openModal(){ $('#modal').classList.remove('hidden'); }
function closeModal(){ $('#modal').classList.add('hidden'); appState.modalStep = 1; }

function bindModalForm(){
  const bind = (id,key)=>{ const el = document.getElementById(id); if(el) el.oninput = ()=> appState.registerForm[key] = el.value; };
  bind('f-title','title'); bind('f-client','client'); bind('f-inn','inn'); bind('f-amount','amount'); bind('f-close','closeDate'); bind('f-description','description'); bind('f-basis','basis'); bind('f-evidence','evidence');
  const type = document.getElementById('f-type'); if(type) type.onchange = ()=> appState.registerForm.type = type.value;
  const vendor = document.getElementById('f-vendor'); if(vendor) vendor.onchange = ()=> appState.registerForm.vendor = vendor.value;
  const seg = document.getElementById('f-segment'); if(seg) seg.onchange = ()=> appState.registerForm.segment = seg.value;
  const cls = document.getElementById('f-class'); if(cls) cls.onchange = ()=> appState.registerForm.solutionClass = cls.value;
  const prev = document.getElementById('modal-prev'); if(prev) prev.onclick = ()=>{ appState.modalStep--; renderRegisterFlow(); };
  const next = document.getElementById('modal-next'); if(next) next.onclick = ()=>{ appState.modalStep++; renderRegisterFlow(); };
  const submit = document.getElementById('modal-submit'); if(submit) submit.onclick = ()=> {
    $('#modal-title').textContent = 'Регистрация создана';
    $('#modal-subtitle').textContent = 'Система показывает следующий реалистичный шаг без сохранения данных';
    $('#modal-body').innerHTML = `<div class="card"><div class="card-body"><div class="kv"><div class="kv-key">Номер регистрации</div><div>DR-2026-00131</div></div><div class="kv"><div class="kv-key">Статус</div><div><span class="badge warn">Ожидает решения вендора</span></div></div><div class="kv"><div class="kv-key">Машинная оценка</div><div>91/100</div></div><div class="kv"><div class="kv-key">Комментарий системы</div><div>Регистрация признана валидной и направлена вендору на рассмотрение.</div></div></div></div>`;
    $('#modal-footer').innerHTML = '<div></div><div><button class="primary-btn" id="close-success">Понятно</button></div>';
    document.getElementById('close-success').onclick = closeModal;
  };
}

function setDetails(html){ $('#details-content').classList.remove('muted'); $('#details-content').innerHTML = html; }

function detailsRegistration(r){
  setDetails(`
    <div class="card"><div class="card-body">
      <div class="badge ${r.statusClass}">${r.status}</div>
      <div style="font-weight:700; margin:10px 0 8px; color:var(--brand)">${r.id}</div>
      <div class="kv"><div class="kv-key">Партнер</div><div>${r.partner}</div></div>
      <div class="kv"><div class="kv-key">Вендор</div><div>${r.vendor}</div></div>
      <div class="kv"><div class="kv-key">Клиент</div><div>${r.client}</div></div>
      <div class="kv"><div class="kv-key">Предмет</div><div>${r.subject}</div></div>
      <div class="kv"><div class="kv-key">Сегмент</div><div>${r.segment}</div></div>
      <div class="kv"><div class="kv-key">Класс решений</div><div>${r.class}</div></div>
      <div class="kv"><div class="kv-key">Сумма</div><div>${r.amount}</div></div>
      <div class="kv"><div class="kv-key">Жизненный цикл</div><div>${r.lifecycle}</div></div>
    </div></div>
    <div class="card" style="margin-top:12px;"><div class="card-header"><div><div class="card-title">Подтверждающие материалы</div></div></div><div class="card-body"><ul class="list-clean">${r.evidence.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>
    <div class="card" style="margin-top:12px;"><div class="card-header"><div><div class="card-title">История действий</div></div></div><div class="card-body"><div class="timeline">${r.timeline.map(t=>`<div class="timeline-item"><div class="timeline-date">${t[0]}</div><div>${t[1]}</div></div>`).join('')}</div></div></div>
    <div class="card" style="margin-top:12px;"><div class="card-header"><div><div class="card-title">Сигналы и влияние на рейтинг</div></div></div><div class="card-body"><div>${r.alerts.join('<br>')}</div><div style="margin-top:8px" class="small">${r.ratingImpact}</div><div class="actions-row"><button class="ghost-btn" id="detail-extend">Продлить</button><button class="primary-btn" id="detail-dispute">Оспорить</button></div></div></div>
  `);
  const ex = document.getElementById('detail-extend'); if(ex) ex.onclick = ()=> alert('Демо: открывается процедура продления с приложением материалов.');
  const ds = document.getElementById('detail-dispute'); if(ds) ds.onclick = ()=> alert('Демо: открывается процедура оспаривания регистрации.');
}

function detailsDispute(d){
  setDetails(`
    <div class="card"><div class="card-body"><div class="badge ${d.statusClass}">${d.status}</div><div style="font-weight:700; margin:10px 0 8px; color:var(--brand)">${d.id}</div>
      <div class="kv"><div class="kv-key">Сделка</div><div>${d.deal}</div></div>
      <div class="kv"><div class="kv-key">Тип</div><div>${d.type}</div></div>
      <div class="kv"><div class="kv-key">Заявитель</div><div>${d.complainant}</div></div>
      <div class="kv"><div class="kv-key">Другая сторона</div><div>${d.otherParty}</div></div>
      <div class="kv"><div class="kv-key">Уровень</div><div>${d.level}</div></div>
      <div class="kv"><div class="kv-key">SLA</div><div>${d.sla}</div></div>
      <div style="margin-top:10px">${d.summary}</div>
    </div></div>
    <div class="card" style="margin-top:12px;"><div class="card-header"><div><div class="card-title">Результат автопроверки</div></div></div><div class="card-body">${d.auto}</div></div>
    <div class="card" style="margin-top:12px;"><div class="card-header"><div><div class="card-title">Решения по уровням</div></div></div><div class="card-body"><ul class="list-clean">${d.decisions.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>
  `);
}

function detailsVendor(v){
  setDetails(`
    <div class="card"><div class="card-body"><div class="badge ${badgeClass(v.trust)}">${v.trust}</div><div style="font-weight:700; margin:10px 0 8px; color:var(--brand)">${v.name}</div>
      <div class="kv"><div class="kv-key">Категория</div><div>${v.category}</div></div>
      <div class="kv"><div class="kv-key">Сегмент</div><div>${v.segment}</div></div>
      <div class="kv"><div class="kv-key">Итоговый рейтинг</div><div>${v.rating}/100</div></div>
      <div class="kv"><div class="kv-key">Прозрачность</div><div>${v.transparency}</div></div>
      <div class="kv"><div class="kv-key">Скорость решений</div><div>${v.speed}</div></div>
      <div class="kv"><div class="kv-key">Активные регистрации</div><div>${v.active}</div></div>
      <div class="kv"><div class="kv-key">Споры</div><div>${v.disputes}</div></div>
      <div style="margin-top:10px">${v.note}</div></div></div>`);
}

function detailsPartner(p){
  setDetails(`
    <div class="card"><div class="card-body"><div class="badge ${badgeClass(p.tier)}">${p.tier}</div><div style="font-weight:700; margin:10px 0 8px; color:var(--brand)">${p.name}</div>
      <div class="kv"><div class="kv-key">Специализация</div><div>${p.specialization}</div></div>
      <div class="kv"><div class="kv-key">Итоговый рейтинг</div><div>${p.rating}/100</div></div>
      <div class="kv"><div class="kv-key">Win-rate</div><div>${p.winRate}</div></div>
      <div class="kv"><div class="kv-key">Активные регистрации</div><div>${p.active}</div></div>
      <div class="kv"><div class="kv-key">Споры</div><div>${p.disputes}</div></div>
      <div style="margin-top:10px">${p.note}</div></div></div>`);
}

function detailsSignal(sig){
  setDetails(`
    <div class="card"><div class="card-body"><div class="badge ${sig.trend==='Снижение'?'warn':'info'}">${sig.trend}</div><div style="font-weight:700; margin:10px 0 8px; color:var(--brand)">${sig.title}</div><div>${sig.text}</div><div style="margin-top:10px" class="small">${sig.impact}</div></div></div>
    <div class="card" style="margin-top:12px;"><div class="card-header"><div><div class="card-title">Обезличенная динамика</div></div></div><div class="card-body"><div class="bars">${sig.chart.map((v,i)=>`<div class="bar-col"><div class="bar" style="height:${v*2.2}px"></div><div class="small">M${i+1}</div><div class="small">${v}</div></div>`).join('')}</div></div></div>`);
}

function bindDynamic(){
  $all('[data-reg]').forEach(el => el.onclick = ()=> detailsRegistration(datasets.registrations[+el.dataset.reg]));
  $all('[data-dispute]').forEach(el => el.onclick = ()=> detailsDispute(datasets.disputes[+el.dataset.dispute]));
  $all('[data-vendor]').forEach(el => el.onclick = ()=> detailsVendor(datasets.vendors[+el.dataset.vendor]));
  $all('[data-partner]').forEach(el => el.onclick = ()=> detailsPartner(datasets.partners[+el.dataset.partner]));
  $all('[data-market]').forEach(el => el.onclick = ()=> detailsSignal(datasets.marketSignals[+el.dataset.market]));
  $all('[data-signal]').forEach(el => el.onclick = ()=> detailsSignal(datasets.marketSignals[+el.dataset.signal % datasets.marketSignals.length]));
  $all('[data-notice]').forEach(el => {
    const n = datasets.summary[appState.role].notices[+el.dataset.notice];
    el.onclick = ()=> setDetails(`<div class="card"><div class="card-body"><div class="badge ${n.tag}">${n.title}</div><div style="margin-top:10px">${n.text}</div><div style="margin-top:12px" class="small">Следующее действие зависит от текущей роли и регламента системы.</div></div></div>`);
  });
  $all('[data-ratingtab]').forEach(el => el.onclick = ()=> {
    $all('[data-ratingtab]').forEach(x=>x.classList.toggle('active', x===el));
    $('#ratings-wrap').innerHTML = ratingsTable(el.dataset.ratingtab);
    bindDynamic();
  });
}

function initEvents(){
  $all('.role-btn').forEach(btn => btn.addEventListener('click', ()=> { appState.role = btn.dataset.role; render(); }));
  $all('.nav-btn').forEach(btn => btn.addEventListener('click', ()=> { appState.section = btn.dataset.section; render(); }));
  $('#open-register-flow').addEventListener('click', ()=> { openModal(); renderRegisterFlow(); });
  $('#close-modal').addEventListener('click', closeModal);
  $('#modal-backdrop').addEventListener('click', closeModal);
  $('#clear-details').addEventListener('click', ()=> { $('#details-content').className = 'details-content muted'; $('#details-content').textContent = 'Выберите запись в реестре, уведомление, участника или аналитический сигнал.'; });
  $('#global-search').addEventListener('keydown', (e)=> {
    if(e.key === 'Enter') {
      const q = e.target.value.toLowerCase();
      const found = datasets.registrations.find(r => r.id.toLowerCase().includes(q) || r.client.toLowerCase().includes(q) || r.partner.toLowerCase().includes(q));
      if(found){ appState.section='registry'; render(); detailsRegistration(found); }
      else alert('В демо-поиске ничего не найдено. Попробуйте DR-2026-00124 или ВолгаЭнерго.');
    }
  });
}

initEvents();
render();
