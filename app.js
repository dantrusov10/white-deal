
const app = {
  role: 'partner',
  page: 'summary',
  analyticsFilters: { segment:'all', class:'all', period:'quarter' },
  catalogTab: 'vendors',
  ratingTab: 'vendors'
};

const roleConfig = {
  partner: {
    label: 'Партнер',
    subtitle: 'Кабинет партнера и регистрационный контур',
    pages: [['summary','Сводка'],['registrations','Реестр регистраций'],['disputes','Реестр споров'],['participants','Каталог участников'],['ratings','Рейтинги'],['analytics','Аналитика рынка'],['journal','Журнал действий']]
  },
  vendor: {
    label: 'Вендор',
    subtitle: 'Кабинет вендора и контур подтверждения',
    pages: [['summary','Сводка'],['registrations','Реестр регистраций'],['disputes','Реестр споров'],['participants','Каталог участников'],['ratings','Рейтинги'],['analytics','Аналитика рынка'],['journal','Журнал действий']]
  },
  arbitrage: {
    label: 'Арбитраж',
    subtitle: 'Операционный центр рассмотрения дел',
    pages: [['summary','Сводка'],['disputes','Реестр споров'],['violations','Нарушения'],['participants','Каталог участников'],['ratings','Репутационный контур'],['analytics','Аналитика рынка'],['journal','Журнал действий']]
  }
};

const registrations = [
  {
    id:'WD-2026-00121', date:'28.03.2026', partner:'Softline Integration', vendor:'Инферит ИТМен', client:'АО ВолгаЭнерго',
    subject:'Модернизация Discovery и инвентаризации', status:'active', term:'15.05.2026', risk:'Низкий',
    segment:'Промышленность', solution:'Discovery', amount:'27 800 000 ₽', lifecycle:'В защите',
    confidence:84, protection:'Высокая', duplicate:'Нет прямого дубля', conflictSignals:['Совпадение клиента: 12%','Совпадение предмета: 21%','Активность другого участника: не выявлена'],
    multiVendor:'Есть технологический партнер', competitor:'1 смежная регистрация', materials:['Встреча 27.03.2026','Коммерческое предложение','Контакт ЛПР','План пилота'],
    history:[['28.03.2026','Регистрация подана'],['28.03.2026','Автопроверка 94/100'],['28.03.2026','Подтверждена вендором'],['31.03.2026','Загружено КП']],
    reason:'Основание подтверждения: наличие первичных материалов и отсутствие значимых пересечений.'
  },
  {
    id:'WD-2026-00122', date:'29.03.2026', partner:'Rubytech Solutions', vendor:'CloudMaster', client:'ООО СеверЛогистика',
    subject:'Пилот FinOps и контроль неиспользуемых VM', status:'pending', term:'—', risk:'Средний',
    segment:'Логистика', solution:'FinOps', amount:'8 400 000 ₽', lifecycle:'Зарегистрирована',
    confidence:69, protection:'Средняя', duplicate:'Частичное совпадение по предмету', conflictSignals:['Совпадение клиента: 41%','Совпадение предмета: 76%','Активность другого участника: обнаружена смежная регистрация'],
    multiVendor:'Нет', competitor:'Нет прямых дублей', materials:['Встреча 29.03.2026','Контакт ИТ-директора'],
    history:[['29.03.2026','Регистрация подана'],['29.03.2026','Автопроверка 82/100'],['30.03.2026','Ожидает решения вендора']],
    reason:'Причина удержания статуса: требуется решение вендора и уточнение по сходству предмета.'
  },
  {
    id:'WD-2026-00118', date:'22.03.2026', partner:'T1 Infra Projects', vendor:'Polymatica', client:'ПАО РегионБанк',
    subject:'BI и витрина управленческой отчетности', status:'extension', term:'02.04.2026', risk:'Средний',
    segment:'Финансы', solution:'BI', amount:'42 000 000 ₽', lifecycle:'В продлении',
    confidence:74, protection:'Средняя', duplicate:'Нет прямого дубля', conflictSignals:['Совпадение клиента: 18%','Совпадение предмета: 33%','Активность другого участника: 2 смежных решения'],
    multiVendor:'Есть 2 смежных решения', competitor:'2 смежных вендора', materials:['Протокол встречи','Черновик КП','Список показателей'],
    history:[['22.03.2026','Регистрация подтверждена'],['26.03.2026','Загружен протокол встречи'],['30.03.2026','Система запросила продление']],
    reason:'Причина продления: проект активен, но требуется подтверждение текущей фазы и материалов.'
  },
  {
    id:'WD-2026-00103', date:'14.03.2026', partner:'ICL Services', vendor:'Naumen', client:'ГК СтройИнвест',
    subject:'ITSM и управление изменениями', status:'dispute', term:'08.04.2026', risk:'Высокий',
    segment:'Строительство', solution:'ITSM', amount:'19 600 000 ₽', lifecycle:'В споре',
    confidence:57, protection:'Низкая', duplicate:'Высокая вероятность пересечения', conflictSignals:['Совпадение клиента: 96%','Совпадение предмета: 88%','Активность другого участника: подтверждена'],
    multiVendor:'Нет', competitor:'Поступил сигнал о конкурирующей активности', materials:['КП версия 1','Переписка с заказчиком','Материалы обследования'],
    history:[['14.03.2026','Регистрация подтверждена'],['27.03.2026','Подано оспаривание'],['30.03.2026','Передано в арбитраж']],
    reason:'Причина спора: конкурирующая регистрация в период активной защиты.'
  }
];

const disputes = [
  {
    id:'ARB-2026-0081', deal:'WD-2026-00103', type:'Попытка параллельной регистрации', sides:'ICL Services / Naumen / второй партнер',
    level:'Уровень 2', status:'В рассмотрении', sla:'18 часов',
    basis:'Поступила жалоба о попытке зарегистрировать идентичный предмет проекта в период активной защиты.',
    arguments:['Партнер представил материалы обследования','Вендор указал на частичное несовпадение предмета','Автопроверка нашла совпадение по клиенту и сегменту'],
    materials:['Протокол звонка','Сравнение предметов регистрации','Лог автопроверки'],
    checks:'Совпадение клиента 96%, предмет 88%, риск конфликта высокий',
    protocol:['Уровень 1: направлено на ручную проверку','Уровень 2: запрошены дополнительные материалы у вендора','Следующий шаг: финализировать допустимость защиты'],
    final:'Ожидается',
    ratingImpact:'При подтверждении нарушения: −4 к рейтингу стороны, нарушившей регламент'
  },
  {
    id:'ARB-2026-0072', deal:'WD-2026-00094', type:'Отказ в продлении', sides:'Rubytech Solutions / CloudMaster',
    level:'Уровень 3', status:'Назначено финальное решение', sla:'6 часов',
    basis:'Партнер оспорил отказ в продлении после загрузки доказательств активности.',
    arguments:['Партнер загрузил обновленное КП','Вендор считает прогресс недостаточным'],
    materials:['КП версия 3','План пилота','Переписка по бюджету'],
    checks:'Активность подтверждена частично, 3 события за 10 дней',
    protocol:['Уровень 1: отказ оставлен в силе','Уровень 2: материалы признаны частично достаточными','Уровень 3: готовится финальное решение'],
    final:'Финальное решение готовится',
    ratingImpact:'При подтверждении неправомерного отказа: −3 к рейтингу вендора'
  },
  {
    id:'ARB-2026-0065', deal:'WD-2026-00088', type:'Непрозрачный отказ', sides:'Softline Integration / Polymatica',
    level:'Уровень 1', status:'Закрыто', sla:'Завершено',
    basis:'Партнер запросил основания отклонения регистрации.',
    arguments:['В системе не найдено дублей','Основание отказа вендора признано недостаточным'],
    materials:['Лог регистрации','Лог автопроверки'],
    checks:'Нарушений не обнаружено',
    protocol:['Уровень 1: рекомендовано пересмотреть решение','Дело закрыто после восстановления регистрации'],
    final:'Регистрация восстановлена',
    ratingImpact:'−2 к рейтингу за непрозрачный отказ'
  }
];

const vendors = [
  {name:'Инферит ИТМен',rating:96,category:'Discovery / ITAM / CMDB',activity:'Высокая',disputes:1,history:'Стабильный рост, низкая доля споров',violations:'Нет критичных',perf:'12 активных регистраций',cleanliness:'92/100'},
  {name:'CloudMaster',rating:88,category:'FinOps / Cloud',activity:'Высокая',disputes:3,history:'Рост в логистике и e-commerce',violations:'1 спор по продлению',perf:'9 активных регистраций',cleanliness:'81/100'},
  {name:'Polymatica',rating:91,category:'BI / Data',activity:'Средняя',disputes:2,history:'Сильная позиция в финсекторе',violations:'1 непрозрачный отказ',perf:'7 активных регистраций',cleanliness:'85/100'},
  {name:'Naumen',rating:84,category:'ITSM / Service management',activity:'Средняя',disputes:4,history:'Снижение активности в промышленности',violations:'2 конфликтных кейса',perf:'6 активных регистраций',cleanliness:'76/100'}
];

const partners = [
  {name:'Softline Integration',rating:93,spec:'Корпоративная инфраструктура',win:'41%',open:18,history:'Стабильный высокий уровень подтверждений',violations:'Нет',perf:'18 активных сделок',cleanliness:'90/100'},
  {name:'Rubytech Solutions',rating:87,spec:'Облако / инфраструктура',win:'38%',open:12,history:'Рост активности в логистике',violations:'1 спор по продлению',perf:'12 активных сделок',cleanliness:'79/100'},
  {name:'ICL Services',rating:82,spec:'ITSM / сервисный контур',win:'36%',open:9,history:'Повышенная доля спорных кейсов',violations:'1 открытый спор',perf:'9 активных сделок',cleanliness:'74/100'},
  {name:'T1 Infra Projects',rating:85,spec:'BI / интеграция',win:'32%',open:11,history:'Высокий чек, длинный цикл',violations:'Нет',perf:'11 активных сделок',cleanliness:'83/100'}
];

const violations = [
  {id:'VIO-2026-014',subject:'Нарушение регламента подтверждения',actor:'Вендор',entity:'Naumen',impact:'-4 к рейтингу',status:'Подтверждено'},
  {id:'VIO-2026-011',subject:'Массовая регистрация без достаточных оснований',actor:'Партнер',entity:'Неназванный участник',impact:'-7 к рейтингу',status:'На проверке'},
  {id:'VIO-2026-009',subject:'Несвоевременное продление без материалов',actor:'Партнер',entity:'Rubytech Solutions',impact:'-2 к рейтингу',status:'Закрыто'}
];

const journal = [
  '30.03.2026 12:04 — открыта карточка регистрации WD-2026-00121',
  '30.03.2026 11:50 — изменен фильтр аналитики: сегмент = финансы',
  '30.03.2026 11:22 — открыта карточка спора ARB-2026-0081',
  '30.03.2026 10:40 — просмотрен рейтинг вендора Инферит ИТМен',
  '30.03.2026 10:12 — выполнен переход в каталог участников'
];

const analyticsData = {
  all: { all: { quarter: {
    bars:[82,91,98,112,119,127], line:[64,74,77,90,101,109], change:'+18%',
    insights:[
      'В марте рост регистраций в финансовом секторе +32%.',
      'Класс решений Discovery растет 18% на горизонте 6 месяцев.',
      'Промышленность показывает падение активности по ITSM на 12%.'
    ],
    marketStats:{registrations:'127', disputes:'14%', protection:'42 дня', annulled:'6%', cleanliness:'81/100', density:'1.9'}
  }}},
  finance: {
    all: { quarter: {
      bars:[23,26,28,34,37,41], line:[19,21,24,29,33,39], change:'+24%',
      insights:[
        'Финансовый сектор демонстрирует устойчивый рост интереса к BI, Discovery и CMDB.',
        'Пик новых регистраций пришелся на последнюю неделю месяца.',
        'Средний цикл подтверждения по таким регистрациям сокращается.'
      ],
      marketStats:{registrations:'41', disputes:'18%', protection:'39 дней', annulled:'5%', cleanliness:'78/100', density:'2.3'}
    }},
    discovery: { quarter: {
      bars:[18,21,26,29,33,38], line:[14,18,22,24,31,36], change:'+32%',
      insights:[
        'Наиболее выраженный рост — в финсекторе вокруг классов Data Catalog и Discovery.',
        'Регистрации концентрируются в проектах повышения прозрачности активов и отчетности.',
        'Спрос усиливается на фоне внутренних программ эффективности.'
      ],
      marketStats:{registrations:'38', disputes:'16%', protection:'37 дней', annulled:'4%', cleanliness:'82/100', density:'2.1'}
    }}
  },
  industry: {
    all: { quarter: {
      bars:[31,29,28,27,26,24], line:[28,27,27,25,23,22], change:'-12%',
      insights:[
        'Промышленность показывает снижение активности в классическом ITSM.',
        'Часть инициатив уходит в более длинный цикл обоснования.',
        'Растет доля проектов с мультивендорным контуром.'
      ],
      marketStats:{registrations:'24', disputes:'9%', protection:'48 дней', annulled:'7%', cleanliness:'84/100', density:'1.4'}
    }},
    discovery: { quarter: {
      bars:[14,16,17,21,24,27], line:[12,14,15,17,21,24], change:'+15%',
      insights:[
        'Discovery в промышленности растет 6 месяцев подряд.',
        'Основной драйвер — проекты инвентаризации и контроля изменений.',
        'Запросы чаще привязаны к импортозамещению и техническим рискам.'
      ],
      marketStats:{registrations:'27', disputes:'8%', protection:'44 дня', annulled:'5%', cleanliness:'87/100', density:'1.3'}
    }}
  }
};

const el = id => document.getElementById(id);
const tooltip = t => `<span class="tooltip" title="${t.replace(/"/g,'&quot;')}">?</span>`;
const statusClass = s => ({active:'status-active',pending:'status-pending',dispute:'status-dispute',extension:'status-extension'})[s] || '';
const statusLabel = s => ({active:'Активна',pending:'Ожидает',dispute:'Спор',extension:'Продление'})[s] || s;
const confidenceBadge = v => v >= 80 ? 'score-high' : v >= 65 ? 'score-mid' : 'score-low';

function init(){
  renderRoleSelect();
  renderNav();
  renderPage();
  el('roleSelect').addEventListener('change', e => {
    app.role = e.target.value;
    const cfg = roleConfig[app.role];
    if (!cfg.pages.find(p => p[0] === app.page)) app.page = 'summary';
    renderNav(); renderPage();
  });
  el('journalBtn').addEventListener('click', () => {
    app.page = 'journal'; renderNav(); renderPage();
  });
  el('closeModal').addEventListener('click', closeModal);
  el('modalCloseBtn').addEventListener('click', closeModal);
  el('modalOverlay').addEventListener('click', e => { if (e.target.id === 'modalOverlay') closeModal(); });
}

function renderRoleSelect(){
  el('roleSelect').innerHTML = Object.entries(roleConfig).map(([k,v]) => `<option value="${k}" ${app.role===k?'selected':''}>${v.label}</option>`).join('');
}
function renderNav(){
  const cfg = roleConfig[app.role];
  el('navMenu').innerHTML = cfg.pages.map(([k,l]) => `<button class="nav-btn ${app.page===k?'active':''}" data-page="${k}"><span>${l}</span><span class="nav-arrow">›</span></button>`).join('');
  document.querySelectorAll('.nav-btn').forEach(btn => btn.addEventListener('click', () => { app.page = btn.dataset.page; renderNav(); renderPage(); }));
}
function setHead(t,s){ el('pageTitle').textContent = t; el('pageSubtitle').textContent = s; }
function renderPage(){
  if(app.page==='summary') return renderSummary();
  if(app.page==='registrations') return renderRegistrations();
  if(app.page==='disputes') return renderDisputes();
  if(app.page==='participants') return renderParticipants();
  if(app.page==='ratings') return renderRatings();
  if(app.page==='analytics') return renderAnalytics();
  if(app.page==='journal') return renderJournal();
  if(app.page==='violations') return renderViolations();
}

function registrationsTable(rows){
  return `<table class="table"><thead><tr>
    <th>№</th><th>Дата</th><th>Партнер</th><th>Вендор</th><th>Клиент</th><th>Предмет</th><th>Статус</th><th>Защищенность</th><th>Достоверность</th><th>Риск</th><th>Действия</th>
  </tr></thead><tbody>
    ${rows.map(r => `<tr class="clickable open-registration" data-id="${r.id}">
      <td><span class="row-link">${r.id}</span></td>
      <td>${r.date}</td>
      <td>${r.partner}</td>
      <td>${r.vendor}</td>
      <td>${r.client}</td>
      <td>${r.subject}</td>
      <td><span class="badge ${statusClass(r.status)}">${statusLabel(r.status)}</span></td>
      <td>${r.protection}</td>
      <td><span class="badge ${confidenceBadge(r.confidence)}">${r.confidence}/100</span></td>
      <td>${r.risk}</td>
      <td><button class="btn-link">Открыть</button></td>
    </tr>`).join('')}
  </tbody></table>`;
}

function disputesTable(rows){
  return `<table class="table"><thead><tr>
    <th>№</th><th>Сделка</th><th>Тип</th><th>Стороны</th><th>Уровень</th><th>Статус</th><th>SLA</th><th>Влияние</th><th>Действие</th>
  </tr></thead><tbody>
    ${rows.map(r => `<tr class="clickable open-dispute" data-id="${r.id}">
      <td><span class="row-link">${r.id}</span></td>
      <td>${r.deal}</td><td>${r.type}</td><td>${r.sides}</td><td>${r.level}</td><td>${r.status}</td><td>${r.sla}</td><td>${r.ratingImpact}</td>
      <td><button class="btn-link">Открыть</button></td>
    </tr>`).join('')}
  </tbody></table>`;
}

function renderSummary(){
  const isPartner = app.role==='partner', isVendor = app.role==='vendor', isArb = app.role==='arbitrage';
  setHead('Сводка', roleConfig[app.role].subtitle);

  const actions = isPartner ? [
    ['Продления',2,'2 регистрации требуют продления','Перейти в реестр регистраций','registrations','Количество регистраций, требующих подтверждения активности.'],
    ['Споры и оспаривания',1,'1 спор в процессе','Перейти в реестр споров','disputes','Количество текущих спорных кейсов с участием вашей организации.'],
    ['Решения вендоров',3,'3 решения требуют реакции','Перейти в журнал действий','journal','Подтверждения, отказы и запросы материалов.'],
    ['Репутационный статус партнера',93,'Рейтинг партнера: 93/100','Открыть рейтинг','ratings','Институциональный рейтинг по дисциплине, конфликтам и результатам.']
  ] : isVendor ? [
    ['Новые регистрации',7,'7 заявок ждут решения','Перейти в реестр регистраций','registrations','Новые регистрации, прошедшие системную валидацию.'],
    ['Продления',2,'2 сделки требуют решения','Перейти в реестр регистраций','registrations','Продления, по которым требуется формальный ответ вендора.'],
    ['Споры',3,'3 кейса в контуре оспаривания','Перейти в реестр споров','disputes','Споры по двойным регистрациям, отказам и продлениям.'],
    ['Репутационный статус вендора',91,'Рейтинг вендора: 91/100','Открыть рейтинг','ratings','Институциональный рейтинг по прозрачности и соблюдению защит.']
  ] : [
    ['Дела в работе',12,'12 кейсов в очереди','Перейти в реестр споров','disputes','Все дела в арбитражном контуре.'],
    ['Нарушения',3,'3 кейса требуют внимания','Перейти в раздел нарушений','violations','Подтвержденные и потенциальные нарушения регламента.'],
    ['Риск SLA',1,'1 кейс близок к нарушению срока','Перейти в журнал','journal','Количество дел, требующих приоритизации.'],
    ['Индекс исполнения контура',94,'Средняя дисциплина системы','Открыть рейтинги','ratings','Сводная оценка исполнения регламента всеми участниками.']
  ];

  const rows = isArb ? registrations.filter(r => r.status==='dispute' || r.status==='extension') : isPartner ? registrations.filter(r => partners.map(p=>p.name).includes(r.partner)) : registrations;
  const marketSignals = [
    {title:'В марте рост регистраций в финансовом секторе +32%',sub:'Рост сопровождается увеличением доли проектов класса BI, Data Catalog и Discovery.',segment:'finance',class:'all'},
    {title:'Discovery в промышленности растет 6 месяцев подряд',sub:'Сегмент усиливается за счет инвентаризации, контроля изменений и импортозамещения.',segment:'industry',class:'discovery'},
    {title:'Индекс чистоты рынка в промышленности: 84/100',sub:'Низкая доля конфликтов и умеренная плотность регистраций на клиента.',segment:'industry',class:'all'}
  ];

  el('mainContent').innerHTML = `
    <div class="summary-grid">
      <div class="summary-left">
        <div class="panel">
          <div class="panel-header"><div><div class="panel-title">Требуют действий</div><div class="panel-desc">Приоритетные события, которые требуют перехода к реестрам и процедурным действиям.</div></div></div>
          <div class="panel-body"><div class="action-cards">
            ${actions.map(a => `<div class="metric-card">
              <div class="metric-top"><div class="metric-label">${tooltip(a[5])} ${a[0]}</div><button class="btn-link goto-page" data-page="${a[4]}">${a[3]}</button></div>
              <div class="metric-value">${a[1]}</div>
              <div class="metric-note">${a[2]}</div>
            </div>`).join('')}
          </div></div>
        </div>

        <div class="panel">
          <div class="panel-header"><div><div class="panel-title">${isArb?'Рискованные регистрации и продления':isVendor?'Входящие и активные регистрации':'Мои регистрации'}</div><div class="panel-desc">${isArb?'Операционная выборка для арбитражного контура.':isVendor?'Сводка поступивших заявок и действующих защит.':'Список объектов со сжатыми сведениями и переходом в подробную карточку.'}</div></div></div>
          <div class="panel-body table-wrap">${registrationsTable(rows.slice(0,5))}</div>
        </div>
      </div>

      <div class="summary-right">
        <div class="panel">
          <div class="panel-header"><div><div class="panel-title">Сигналы рынка</div><div class="panel-desc">Обезличенная сводка динамики сегментов и классов решений.</div></div><button class="btn-link goto-page" data-page="analytics">Открыть аналитику</button></div>
          <div class="panel-body mini-list">
            ${marketSignals.map(s => `<div class="signal-item signal-link" data-segment="${s.segment}" data-class="${s.class}">
              <div class="signal-title">${s.title}</div><div class="signal-sub">${s.sub}</div>
            </div>`).join('')}
          </div>
        </div>

        <div class="panel">
          <div class="panel-header"><div><div class="panel-title">${isArb?'Операционные показатели арбитража':isVendor?'Репутационный статус вендора':'Репутационный статус партнера'}</div><div class="panel-desc">${isArb?'Ключевые показатели работы контура рассмотрения.':'Сводные показатели доверия, чистоты и дисциплины.'}</div></div></div>
          <div class="panel-body">
            ${isArb ? `
              <div class="kpi-strip">
                <div class="kpi"><div class="kpi-title">Средний SLA</div><div class="kpi-value">1.2 дня</div><div class="kpi-note">по делам в работе</div></div>
                <div class="kpi"><div class="kpi-title">Авторазбор</div><div class="kpi-value">73%</div><div class="kpi-note">дел завершено на 1 уровне</div></div>
                <div class="kpi"><div class="kpi-title">Нарушения</div><div class="kpi-value">3</div><div class="kpi-note">подтверждено за период</div></div>
                <div class="kpi"><div class="kpi-title">Апелляции</div><div class="kpi-value">2</div><div class="kpi-note">вынесено на 3 уровень</div></div>
              </div>` : `
              <div class="metric-grid-3">
                <div class="info-tile"><div class="info-title">Итоговый рейтинг ${isVendor?'вендора':'партнера'} ${tooltip('Соблюдение регламента, скорость действий, доля конфликтов, результаты решений.')}</div><div class="info-value">${isVendor?'91/100':'93/100'}</div><div class="info-sub">история изменений доступна в карточке рейтинга</div></div>
                <div class="info-tile"><div class="info-title">Индекс чистоты</div><div class="info-value">${isVendor?'85/100':'90/100'}</div><div class="info-sub">качество участия в реестре и низкая конфликтность</div></div>
                <div class="info-tile"><div class="info-title">Спорность</div><div class="info-value">${isVendor?'3':'1'}</div><div class="info-sub">активных кейсов в текущем периоде</div></div>
              </div>`}
          </div>
        </div>
      </div>
    </div>
  `;
  bindCommon();
}

function renderRegistrations(){
  setHead('Реестр регистраций', app.role==='partner' ? 'Реестр моих регистраций, продлений и статусов рассмотрения.' : 'Реестр входящих, активных и спорных регистраций.');
  const rows = app.role==='partner' ? registrations.filter(r => partners.map(p=>p.name).includes(r.partner)) : registrations;
  const intro = app.role==='partner'
    ? `<div class="role-banner"><div><div class="role-banner-title">Контур партнера</div><div class="muted">В этом режиме реестр показывает только собственные регистрации, решения вендоров, продления, сигналы пересечения и оспаривания.</div></div><div class="badge">Объектов: ${rows.length}</div></div>`
    : `<div class="role-banner"><div><div class="role-banner-title">Контур вендора</div><div class="muted">В этом режиме видны входящие заявки, действующие защиты, запросы на продление, уровень достоверности регистраций и сигналы конфликтов.</div></div><div class="badge">Объектов: ${rows.length}</div></div>`;
  el('mainContent').innerHTML = `
    ${intro}
    <div class="panel">
      <div class="panel-header"><div><div class="panel-title">Фильтры</div><div class="panel-desc">Статус, сегмент, класс решения, дата, риск ${tooltip('Фильтры имитируют рабочий контур и не превращают систему в CRM.')}</div></div></div>
      <div class="panel-body">
        <div class="filters">
          <div class="form-field"><div class="label">Статус</div><select class="select"><option>Все</option><option>Активна</option><option>Ожидает</option><option>Продление</option><option>Спор</option></select></div>
          <div class="form-field"><div class="label">Сегмент</div><select class="select"><option>Все</option><option>Финансы</option><option>Промышленность</option><option>Логистика</option></select></div>
          <div class="form-field"><div class="label">Класс решений</div><select class="select"><option>Все</option><option>Discovery</option><option>FinOps</option><option>BI</option><option>ITSM</option></select></div>
          <div class="form-field"><div class="label">Дата</div><select class="select"><option>Последние 30 дней</option><option>Квартал</option></select></div>
          <div class="form-field"><div class="label">Риск</div><select class="select"><option>Все</option><option>Низкий</option><option>Средний</option><option>Высокий</option></select></div>
        </div>
      </div>
    </div>
    <div class="panel"><div class="panel-body table-wrap">${registrationsTable(rows)}</div></div>
  `;
  bindCommon();
}

function renderDisputes(){
  setHead('Реестр споров', app.role==='arbitrage' ? 'Операционный контур рассмотрения, проверки и финальных решений.' : app.role==='partner' ? 'Оспаривания, апелляции и спорные кейсы по вашим регистрациям.' : 'Споры по подтверждению, продлениям и конфликтным регистрациям.');
  const intro = app.role==='partner'
    ? 'В режиме партнера видны только споры, где ваша организация является стороной или инициатором обращения.'
    : app.role==='vendor'
    ? 'В режиме вендора видны споры по входящим регистрациям, отказам и продлениям.'
    : 'В режиме арбитража доступны основания, материалы, протокол решений и влияние на рейтинг.';
  el('mainContent').innerHTML = `
    <div class="role-banner"><div><div class="role-banner-title">${roleConfig[app.role].label}</div><div class="muted">${intro}</div></div><div class="badge">Дел: ${disputes.length}</div></div>
    <div class="panel">
      <div class="panel-header"><div><div class="panel-title">Фильтры споров</div><div class="panel-desc">Тип, уровень, статус, SLA ${tooltip('Типы споров: двойная регистрация, отказ в продлении, непрозрачный отказ, нарушение регламента.')}</div></div></div>
      <div class="panel-body">
        <div class="filters-4">
          <div class="form-field"><div class="label">Тип</div><select class="select"><option>Все</option><option>Попытка параллельной регистрации</option><option>Отказ в продлении</option></select></div>
          <div class="form-field"><div class="label">Уровень</div><select class="select"><option>Все</option><option>Уровень 1</option><option>Уровень 2</option><option>Уровень 3</option></select></div>
          <div class="form-field"><div class="label">Статус</div><select class="select"><option>Все</option><option>В рассмотрении</option><option>Закрыто</option></select></div>
          <div class="form-field"><div class="label">SLA</div><select class="select"><option>Все</option><option>&lt; 24 часов</option><option>&gt; 24 часов</option></select></div>
        </div>
      </div>
    </div>
    <div class="panel"><div class="panel-body table-wrap">${disputesTable(disputes)}</div></div>
  `;
  bindCommon();
}

function renderParticipants(){
  setHead('Каталог участников', 'Справочник субъектов рынка с разделением на вендоров и партнеров.');
  el('mainContent').innerHTML = `
    <div class="panel">
      <div class="panel-header"><div><div class="panel-title">Каталог участников</div><div class="panel-desc">Реестр субъектов рынка по категориям, активности, рейтингу и истории участия в системе.</div></div></div>
      <div class="panel-body">
        <div class="tabbar">
          <button class="tab-btn ${app.catalogTab==='vendors'?'active':''}" data-tab="vendors">Вендоры</button>
          <button class="tab-btn ${app.catalogTab==='partners'?'active':''}" data-tab="partners">Партнеры</button>
        </div>
      </div>
    </div>
    <div class="panel"><div class="panel-body table-wrap">${participantsTable()}</div></div>
  `;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => { app.catalogTab = btn.dataset.tab; renderParticipants(); }));
  bindCommon();
}
function participantsTable(){
  if(app.catalogTab==='vendors'){
    return `<table class="table"><thead><tr><th>Название</th><th>Рейтинг</th><th>Категория</th><th>Активность</th><th>Споры</th><th>Индекс чистоты</th><th>Действие</th></tr></thead><tbody>
      ${vendors.map(v => `<tr class="clickable open-vendor" data-name="${v.name}"><td><span class="row-link">${v.name}</span></td><td>${v.rating}/100</td><td>${v.category}</td><td>${v.activity}</td><td>${v.disputes}</td><td>${v.cleanliness}</td><td><button class="btn-link">Открыть</button></td></tr>`).join('')}
    </tbody></table>`;
  }
  return `<table class="table"><thead><tr><th>Название</th><th>Рейтинг</th><th>Специализация</th><th>Win-rate</th><th>Активные сделки</th><th>Индекс чистоты</th><th>Действие</th></tr></thead><tbody>
    ${partners.map(v => `<tr class="clickable open-partner" data-name="${v.name}"><td><span class="row-link">${v.name}</span></td><td>${v.rating}/100</td><td>${v.spec}</td><td>${v.win}</td><td>${v.open}</td><td>${v.cleanliness}</td><td><button class="btn-link">Открыть</button></td></tr>`).join('')}
  </tbody></table>`;
}

function renderRatings(){
  setHead('Рейтинги', 'Отдельный реестр рейтингов вендоров и партнеров.');
  el('mainContent').innerHTML = `
    <div class="panel">
      <div class="panel-header"><div><div class="panel-title">Рейтинги участников</div><div class="panel-desc">Формальная система оценки: соблюдение регламента, скорость действий, конфликтность и результаты решений ${tooltip('Рейтинг — не про продажи, а про качество участия в реестре.')}</div></div></div>
      <div class="panel-body">
        <div class="tabbar">
          <button class="tab-btn ${app.ratingTab==='vendors'?'active':''}" data-tab="vendors">Вендоры</button>
          <button class="tab-btn ${app.ratingTab==='partners'?'active':''}" data-tab="partners">Партнеры</button>
        </div>
      </div>
    </div>
    <div class="panel"><div class="panel-body table-wrap">${ratingsTable()}</div></div>
  `;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => { app.ratingTab = btn.dataset.tab; renderRatings(); }));
  bindCommon();
}
function ratingsTable(){
  const list = app.ratingTab==='vendors' ? vendors : partners;
  return `<table class="table"><thead><tr><th>Название</th><th>Итог</th><th>Соблюдение регламента</th><th>Скорость действий</th><th>Конфликтность</th><th>Решения</th><th>История</th></tr></thead><tbody>
    ${list.map(v => `<tr class="clickable ${app.ratingTab==='vendors'?'open-vendor':'open-partner'}" data-name="${v.name}">
      <td><span class="row-link">${v.name}</span></td><td>${v.rating}/100</td><td>${Math.min(99,v.rating+2)}/100</td><td>${Math.max(74,v.rating-3)}/100</td><td>${Math.max(62,v.rating-9)}/100</td><td>${Math.max(70,v.rating-4)}/100</td><td><button class="btn-link">Открыть карточку рейтинга</button></td>
    </tr>`).join('')}
  </tbody></table>`;
}

function getAnalytics(){
  const seg = app.analyticsFilters.segment, cls = app.analyticsFilters.class, per = app.analyticsFilters.period;
  const segData = analyticsData[seg] || {};
  return ((segData[cls] || {})[per]) || ((segData.all || {})[per]) || analyticsData.all.all.quarter;
}
function barChart(values){
  const max = Math.max(...values);
  return `<div class="chart-box">${values.map(v => `<div class="bar" style="height:${(v/max)*100}%"><span>${v}</span></div>`).join('')}</div>`;
}
function lineChart(values){
  const max = Math.max(...values), min = Math.min(...values), W=760, H=180, pad=20;
  const points = values.map((v,i) => {
    const x = pad + (i*(W-2*pad)/(values.length-1));
    const y = H - pad - ((v-min)/(max-min||1))*(H-2*pad);
    return `${x},${y}`;
  }).join(' ');
  return `<div class="line-chart"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><polyline fill="none" stroke="#1E3A8A" stroke-width="3" points="${points}"></polyline>${values.map((v,i)=>{const x=pad+(i*(W-2*pad)/(values.length-1));const y=H-pad-((v-min)/(max-min||1))*(H-2*pad);return `<circle cx="${x}" cy="${y}" r="4" fill="#1E3A8A"></circle><text x="${x}" y="${y-10}" text-anchor="middle" font-size="11" fill="#475569">${v}</text>`}).join('')}</svg></div>`;
}
function renderAnalytics(){
  setHead('Аналитика рынка', 'Обезличенная динамика сегментов и классов решений без раскрытия клиентов и участников.');
  const data = getAnalytics();
  const ms = data.marketStats;
  el('mainContent').innerHTML = `
    <div class="panel">
      <div class="panel-header"><div><div class="panel-title">Фильтры аналитики</div><div class="panel-desc">Сегмент, класс решений и период ${tooltip('Аналитика показывает только агрегированные данные: без клиентов, компаний и сделок поименно.')}</div></div></div>
      <div class="panel-body">
        <div class="filters-4">
          <div class="form-field"><div class="label">Сегмент</div><select id="segmentFilter" class="select"><option value="all">Все</option><option value="finance">Финансы</option><option value="industry">Промышленность</option><option value="state">Госсектор</option></select></div>
          <div class="form-field"><div class="label">Класс решений</div><select id="classFilter" class="select"><option value="all">Все</option><option value="discovery">Discovery</option><option value="itsm">ITSM</option><option value="finops">FinOps</option><option value="bi">BI</option></select></div>
          <div class="form-field"><div class="label">Период</div><select id="periodFilter" class="select"><option value="quarter">Квартал</option><option value="month">Месяц</option><option value="year">Год</option></select></div>
          <div class="form-field"><div class="label">Ключевой вывод</div><div class="select" style="display:flex;align-items:center;">${data.change}</div></div>
        </div>
      </div>
    </div>

    <div class="metric-grid-3">
      <div class="info-tile"><div class="info-title">Количество регистраций</div><div class="info-value">${ms.registrations}</div><div class="info-sub">за выбранный период</div></div>
      <div class="info-tile"><div class="info-title">Доля споров</div><div class="info-value">${ms.disputes}</div><div class="info-sub">в выбранном сегменте</div></div>
      <div class="info-tile"><div class="info-title">Средний срок защиты</div><div class="info-value">${ms.protection}</div><div class="info-sub">по активным регистрациям</div></div>
      <div class="info-tile"><div class="info-title">Доля аннулирований</div><div class="info-value">${ms.annulled}</div><div class="info-sub">завершенные и снятые регистрации</div></div>
      <div class="info-tile"><div class="info-title">Индекс чистоты рынка</div><div class="info-value">${ms.cleanliness}</div><div class="info-sub">меньше конфликтов и дублей — выше индекс</div></div>
      <div class="info-tile"><div class="info-title">Плотность регистраций</div><div class="info-value">${ms.density}</div><div class="info-sub">среднее число регистраций на объект спроса</div></div>
    </div>

    <div class="two-col">
      <div class="panel"><div class="panel-header"><div><div class="panel-title">Динамика регистраций</div><div class="panel-desc">Линия по времени</div></div></div><div class="panel-body">${lineChart(data.line)}</div></div>
      <div class="panel"><div class="panel-header"><div><div class="panel-title">Распределение</div><div class="panel-desc">Регистрации по периодам</div></div></div><div class="panel-body">${barChart(data.bars)}</div></div>
    </div>

    <div class="panel">
      <div class="panel-header"><div><div class="panel-title">Обезличенные инсайты</div><div class="panel-desc">Сводные выводы по динамике рынка и сегментов.</div></div></div>
      <div class="panel-body mini-list">
        ${data.insights.map(i => `<div class="signal-item"><div class="signal-title">${i}</div><div class="signal-sub">Данные агрегированы по потоку регистраций за выбранный период.</div></div>`).join('')}
      </div>
    </div>
  `;
  el('segmentFilter').value = app.analyticsFilters.segment;
  el('classFilter').value = app.analyticsFilters.class;
  el('periodFilter').value = app.analyticsFilters.period;
  ['segmentFilter','classFilter','periodFilter'].forEach(id => el(id).addEventListener('change', () => {
    app.analyticsFilters.segment = el('segmentFilter').value;
    app.analyticsFilters.class = el('classFilter').value;
    app.analyticsFilters.period = el('periodFilter').value;
    renderAnalytics();
  }));
}

function renderJournal(){
  setHead('Журнал действий', 'Хронология пользовательских и системных действий.');
  el('mainContent').innerHTML = `<div class="panel"><div class="panel-body mini-list">${journal.map(j => `<div class="journal-item">${j}</div>`).join('')}</div></div>`;
}

function renderViolations(){
  setHead('Нарушения', 'Фиксация нарушений регламента и их влияние на рейтинг.');
  el('mainContent').innerHTML = `
    <div class="panel">
      <div class="panel-header"><div><div class="panel-title">Реестр нарушений</div><div class="panel-desc">Подтвержденные и рассматриваемые нарушения ${tooltip('Нарушения влияют на рейтинг и могут быть основанием для арбитражного рассмотрения.')}</div></div></div>
      <div class="panel-body table-wrap">
        <table class="table"><thead><tr><th>№</th><th>Субъект</th><th>Участник</th><th>Влияние</th><th>Статус</th></tr></thead><tbody>
          ${violations.map(v => `<tr><td>${v.id}</td><td>${v.subject}</td><td>${v.actor}: ${v.entity}</td><td>${v.impact}</td><td>${v.status}</td></tr>`).join('')}
        </tbody></table>
      </div>
    </div>
  `;
}

function bindCommon(){
  document.querySelectorAll('.goto-page').forEach(btn => btn.addEventListener('click', () => { app.page = btn.dataset.page; renderNav(); renderPage(); }));
  document.querySelectorAll('.open-registration').forEach(row => row.addEventListener('click', () => openRegistration(row.dataset.id)));
  document.querySelectorAll('.open-dispute').forEach(row => row.addEventListener('click', () => openDispute(row.dataset.id)));
  document.querySelectorAll('.open-vendor').forEach(row => row.addEventListener('click', () => openVendor(row.dataset.name)));
  document.querySelectorAll('.open-partner').forEach(row => row.addEventListener('click', () => openPartner(row.dataset.name)));
  document.querySelectorAll('.signal-link').forEach(row => row.addEventListener('click', () => {
    app.analyticsFilters.segment = row.dataset.segment;
    app.analyticsFilters.class = row.dataset.class;
    app.page = 'analytics'; renderNav(); renderPage();
  }));
}

function openModal(title, subtitle, html){
  el('modalTitle').textContent = title;
  el('modalSubtitle').textContent = subtitle;
  el('modalBody').innerHTML = html;
  el('modalOverlay').classList.remove('hidden');
}
function closeModal(){ el('modalOverlay').classList.add('hidden'); }

function openRegistration(id){
  const r = registrations.find(x => x.id === id); if(!r) return;
  openModal(`Карточка регистрации ${r.id}`, 'Подробные сведения о регистрации и процедурных действиях', `
    <div class="detail-grid">
      <div class="detail-card">
        <h4>Основные сведения</h4>
        <div class="card-body">
          <div class="two-col">
            <div><strong>Статус:</strong> <span class="badge ${statusClass(r.status)}">${statusLabel(r.status)}</span></div>
            <div><strong>Жизненный цикл:</strong> ${r.lifecycle}</div>
            <div><strong>Партнер:</strong> ${r.partner}</div>
            <div><strong>Вендор:</strong> ${r.vendor}</div>
            <div><strong>Клиент:</strong> ${r.client}</div>
            <div><strong>Сумма:</strong> ${r.amount}</div>
            <div><strong>Предмет:</strong> ${r.subject}</div>
            <div><strong>Срок защиты:</strong> ${r.term}</div>
          </div>
        </div>
      </div>

      <div class="detail-card">
        <h4>Валидность и защищенность</h4>
        <div class="card-body">
          <div class="entity-list">
            <div class="entity"><strong>Индекс достоверности регистрации ${tooltip('Оценка валидности факта регистрации: материалы, последовательность действий, отсутствие противоречий и дублей.')}</strong><br><span class="badge ${confidenceBadge(r.confidence)}">${r.confidence}/100</span></div>
            <div class="entity"><strong>Уровень защищенности</strong><br>${r.protection}</div>
            <div class="entity"><strong>Причина текущего состояния</strong><br>${r.reason}</div>
          </div>
        </div>
      </div>

      <div class="detail-card">
        <h4>Сигналы пересечения и дублей</h4>
        <div class="card-body">
          <div class="entity-list">
            <div class="entity"><strong>Статус дубля:</strong> ${r.duplicate}</div>
            ${r.conflictSignals.map(s => `<div class="entity">${s}</div>`).join('')}
            <div class="entity"><strong>Мультивендорность:</strong> ${r.multiVendor}</div>
          </div>
        </div>
      </div>

      <div class="detail-card">
        <h4>Подтверждающие материалы</h4>
        <div class="card-body"><div class="entity-list">${r.materials.map(m => `<div class="entity">${m}</div>`).join('')}</div></div>
      </div>

      <div class="detail-card">
        <h4>История действий</h4>
        <div class="card-body timeline">${r.history.map(h => `<div class="timeline-item"><div class="timeline-date">${h[0]}</div><div>${h[1]}</div></div>`).join('')}</div>
      </div>

      <div class="detail-card">
        <h4>Процедурные действия</h4>
        <div class="card-body">
          <div class="three-col">
            <div class="callout"><div class="callout-title">Продлить</div><div class="callout-sub">Запросить продление при наличии подтверждающих материалов.</div></div>
            <div class="callout"><div class="callout-title">Оспорить</div><div class="callout-sub">Инициировать спор по отказу, дублю или нарушению регламента.</div></div>
            <div class="callout"><div class="callout-title">Снять</div><div class="callout-sub">Аннулировать регистрацию по подтвержденному основанию.</div></div>
          </div>
        </div>
      </div>
    </div>
  `);
}

function openDispute(id){
  const d = disputes.find(x => x.id === id); if(!d) return;
  openModal(`Карточка спора ${d.id}`, 'Материалы дела, протокол решений и финальное воздействие на репутацию', `
    <div class="detail-grid">
      <div class="detail-card">
        <h4>Основание и стороны</h4>
        <div class="card-body">
          <p><strong>Сделка:</strong> ${d.deal}</p>
          <p><strong>Тип:</strong> ${d.type}</p>
          <p><strong>Стороны:</strong> ${d.sides}</p>
          <p><strong>Основание:</strong> ${d.basis}</p>
        </div>
      </div>
      <div class="detail-card">
        <h4>Статус рассмотрения</h4>
        <div class="card-body">
          <p><strong>Уровень:</strong> ${d.level}</p>
          <p><strong>Статус:</strong> ${d.status}</p>
          <p><strong>SLA:</strong> ${d.sla}</p>
          <p><strong>Финальное решение:</strong> ${d.final}</p>
          <p><strong>Влияние на рейтинг:</strong> ${d.ratingImpact}</p>
        </div>
      </div>
      <div class="detail-card">
        <h4>Аргументы сторон</h4>
        <div class="card-body"><ul class="list-plain">${d.arguments.map(a => `<li>${a}</li>`).join('')}</ul></div>
      </div>
      <div class="detail-card">
        <h4>Материалы</h4>
        <div class="card-body"><div class="entity-list">${d.materials.map(a => `<div class="entity">${a}</div>`).join('')}</div></div>
      </div>
      <div class="detail-card">
        <h4>Результат автопроверки</h4>
        <div class="card-body">${d.checks}</div>
      </div>
      <div class="detail-card">
        <h4>Протокол решений</h4>
        <div class="card-body"><ul class="list-plain">${d.protocol.map(a => `<li>${a}</li>`).join('')}</ul></div>
      </div>
    </div>
  `);
}

function openVendor(name){
  const v = vendors.find(x => x.name===name); if(!v) return;
  openModal(`Карточка вендора: ${v.name}`, 'Профиль участника, рейтинг, индекс чистоты и история участия в реестре', `
    <div class="detail-grid">
      <div class="detail-card"><h4>Профиль</h4><div class="card-body">
        <p><strong>Категория:</strong> ${v.category}</p>
        <p><strong>Рейтинг:</strong> ${v.rating}/100</p>
        <p><strong>Активность:</strong> ${v.activity}</p>
        <p><strong>Споры:</strong> ${v.disputes}</p>
      </div></div>
      <div class="detail-card"><h4>Показатели участия</h4><div class="card-body">
        <ul class="list-plain">
          <li>Соблюдение регламента: ${Math.min(99,v.rating+2)}/100</li>
          <li>Скорость решений: ${Math.max(74,v.rating-3)}/100</li>
          <li>Конфликтность: ${Math.max(62,v.rating-9)}/100</li>
          <li>Качество решений: ${Math.max(70,v.rating-4)}/100</li>
          <li>Индекс чистоты: ${v.cleanliness}</li>
        </ul>
      </div></div>
      <div class="detail-card"><h4>История участия</h4><div class="card-body">${v.history}</div></div>
      <div class="detail-card"><h4>Нарушения и замечания</h4><div class="card-body">${v.violations}</div></div>
      <div class="detail-card"><h4>Текущая активность</h4><div class="card-body">${v.perf}</div></div>
    </div>
  `);
}

function openPartner(name){
  const v = partners.find(x => x.name===name); if(!v) return;
  openModal(`Карточка партнера: ${v.name}`, 'Профиль участника, рейтинг, индекс чистоты и история участия в реестре', `
    <div class="detail-grid">
      <div class="detail-card"><h4>Профиль</h4><div class="card-body">
        <p><strong>Специализация:</strong> ${v.spec}</p>
        <p><strong>Рейтинг:</strong> ${v.rating}/100</p>
        <p><strong>Активные сделки:</strong> ${v.open}</p>
        <p><strong>Историческая результативность:</strong> ${v.win}</p>
      </div></div>
      <div class="detail-card"><h4>Показатели участия</h4><div class="card-body">
        <ul class="list-plain">
          <li>Соблюдение регламента: ${Math.min(99,v.rating+1)}/100</li>
          <li>Скорость действий: ${Math.max(70,v.rating-2)}/100</li>
          <li>Конфликтность: ${Math.max(60,v.rating-8)}/100</li>
          <li>Результат решений: ${Math.max(66,v.rating-5)}/100</li>
          <li>Индекс чистоты: ${v.cleanliness}</li>
        </ul>
      </div></div>
      <div class="detail-card"><h4>История участия</h4><div class="card-body">${v.history}</div></div>
      <div class="detail-card"><h4>Нарушения и замечания</h4><div class="card-body">${v.violations}</div></div>
      <div class="detail-card"><h4>Текущая активность</h4><div class="card-body">${v.perf}</div></div>
    </div>
  `);
}

init();
