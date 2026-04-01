
const state = {
  role: 'partner',
  section: 'summary',
  selected: null,
  modal: null,
  filters: {
    registryStatus: '',
    registrySegment: '',
    registryClass: '',
    disputesStatus: '',
    catalogTab: 'vendors',
    ratingsTab: 'vendors',
    analyticsSegment: 'all',
    analyticsClass: 'all',
    analyticsPeriod: 'quarter'
  }
};

const navConfig = {
  partner: [
    ['summary','Сводка'],
    ['registry','Реестр регистраций'],
    ['disputes','Реестр споров'],
    ['catalog','Каталог участников'],
    ['ratings','Рейтинги'],
    ['analytics','Аналитика рынка'],
    ['journal','Журнал действий']
  ],
  vendor: [
    ['summary','Сводка'],
    ['registry','Реестр регистраций'],
    ['disputes','Реестр споров'],
    ['catalog','Каталог участников'],
    ['ratings','Рейтинги'],
    ['analytics','Аналитика рынка'],
    ['journal','Журнал действий']
  ],
  arbitrage: [
    ['summary','Сводка'],
    ['registry','Реестр регистраций'],
    ['disputes','Реестр споров'],
    ['catalog','Каталог участников'],
    ['ratings','Рейтинги'],
    ['analytics','Аналитика рынка'],
    ['journal','Журнал действий']
  ],
  market: [
    ['summary','Сводка'],
    ['catalog','Каталог участников'],
    ['ratings','Рейтинги'],
    ['analytics','Аналитика рынка'],
    ['journal','Журнал действий']
  ]
};

const data = {
  registrations: [
    {id:'WD-2026-00121',date:'28.03.2026',partner:'Softline Integration',vendor:'Инферит ИТМен',client:'АО ВолгаЭнерго',subject:'Модернизация Discovery и инвентаризации',status:'Активна',statusKey:'active',term:'15.05.2026',risk:'Низкий',riskKey:'low',segment:'Промышленность',class:'Discovery',amount:'27 800 000 ₽',materials:['Встреча от 21.03','Коммерческое предложение № КП-114','Пилотный контур согласован','Контакт ЛПР подтвержден'],signals:['Зафиксирован 1 смежный технологический вендор','Мультивендорная связка: Discovery + BI'],history:['28.03 10:14 — регистрация принята системой','28.03 10:19 — автопроверка завершена: 92/100','28.03 13:20 — вендор подтвердил защиту','30.03 11:40 — добавлено КП'],lifecycle:'Активна',violation:'Нет'},
    {id:'WD-2026-00122',date:'29.03.2026',partner:'Rubytech Solutions',vendor:'CloudMaster',client:'ООО СеверЛогистика',subject:'Пилот FinOps и контроль неиспользуемых VM',status:'Ожидает',statusKey:'waiting',term:'—',risk:'Средний',riskKey:'mid',segment:'Логистика',class:'FinOps',amount:'8 400 000 ₽',materials:['Встреча от 26.03','Черновое КП','Контакт ИТ-директора'],signals:['Смежная регистрация по BI отсутствует','Конкурирующие сигналы не выявлены'],history:['29.03 09:20 — регистрация подана','29.03 09:21 — автопроверка завершена: 84/100','29.03 09:22 — направлено вендору'],lifecycle:'На рассмотрении',violation:'Нет'},
    {id:'WD-2026-00118',date:'22.03.2026',partner:'T1 Infra Projects',vendor:'Polymatica',client:'ПАО РегионБанк',subject:'BI и витрина управленческой отчетности',status:'Продление',statusKey:'extend',term:'02.04.2026',risk:'Средний',riskKey:'mid',segment:'Финансы',class:'BI',amount:'42 000 000 ₽',materials:['Встреча от 14.03','КП № 52-РБ','Пилотный план'],signals:['На проекте отмечен технологический партнер по каталогу ПО','Рост активности класса BI в сегменте финансы'],history:['22.03 11:05 — защита подтверждена','29.03 09:00 — системой запрошено продление','31.03 12:00 — партнер загрузил материалы на продление'],lifecycle:'Требует решения',violation:'Нет'},
    {id:'WD-2026-00103',date:'14.03.2026',partner:'ICL Services',vendor:'Naumen',client:'ГК СтройИнвест',subject:'ITSM и управление изменениями',status:'Спор',statusKey:'dispute',term:'08.04.2026',risk:'Высокий',riskKey:'high',segment:'Строительство',class:'ITSM',amount:'19 600 000 ₽',materials:['Встреча от 10.03','КП по базовому контуру','Контакт заказчика подтвержден'],signals:['Поступил сигнал о конкурирующей активности','Есть challenge со стороны второго партнера'],history:['14.03 16:18 — регистрация принята','14.03 18:10 — защита подтверждена','27.03 13:10 — открыт спор','30.03 17:40 — передано на уровень 2'],lifecycle:'В споре',violation:'Потенциальное нарушение порядка подтверждения'},
    {id:'WD-2026-00125',date:'30.03.2026',partner:'К2Тех Альянс',vendor:'Billogic',client:'Федеральная розница',subject:'Контур биллинга и отчетности по потреблению услуг',status:'Активна',statusKey:'active',term:'17.05.2026',risk:'Низкий',riskKey:'low',segment:'Retail',class:'Billing',amount:'13 200 000 ₽',materials:['Встреча от 28.03','КП № B-19','Схема интеграции'],signals:['Конкурирующих регистраций не выявлено'],history:['30.03 10:10 — регистрация принята','30.03 10:14 — автопроверка 90/100','30.03 11:40 — защита подтверждена'],lifecycle:'Активна',violation:'Нет'},
    {id:'WD-2026-00117',date:'21.03.2026',partner:'Softline Integration',vendor:'Инферит ИТМен',client:'АО СеверНефть',subject:'Аудит ИТ-активов и лицензионных рисков',status:'Выиграна',statusKey:'active',term:'Закрыта',risk:'Низкий',riskKey:'low',segment:'Промышленность',class:'Discovery',amount:'31 500 000 ₽',materials:['Встреча от 13.03','Финальное КП','Пилот завершен'],signals:['Проект закрыт без спора'],history:['21.03 09:00 — регистрация принята','23.03 15:15 — защита подтверждена','31.03 18:00 — отмечено закрытие сделки: выиграна'],lifecycle:'Выиграна',violation:'Нет'}
  ],
  disputes: [
    {id:'ARB-2026-0081',deal:'WD-2026-00103',type:'Оспаривание действующей защиты',parties:'ICL Services / Naumen / второй партнер',level:'Уровень 2',status:'В рассмотрении',statusKey:'waiting',sla:'18 часов',basis:'Заявитель сообщает о попытке параллельного подтверждения по уже действующей защите.',arguments:['Партнер указывает на приоритет по дате регистрации','Вендор ссылается на неполноту активности','Второй партнер подал challenge по качеству ведения'],materials:['Карточка регистрации','История действий','Загруженное КП','Комментарии вендора'],auto:'Совпадение по клиенту и предмету проекта: высокое. Риск нарушения порядка подтверждения: высокий.',levels:['Уровень 1: выявлено совпадение','Уровень 2: назначена ручная верификация'],final:'Решение не вынесено'},
    {id:'ARB-2026-0072',deal:'WD-2026-00118',type:'Спор по продлению',parties:'T1 Infra Projects / Polymatica',level:'Уровень 3',status:'Финальное рассмотрение',statusKey:'extend',sla:'6 часов',basis:'Вендор отклонил продление, партнер оспорил решение и приложил дополнительные подтверждающие материалы.',arguments:['Партнер приложил материалы о реальном ведении проекта','Вендор считает прогресс недостаточным'],materials:['Протокол встречи','Обновленное КП','Письмо клиента'],auto:'Материалы релевантны, однако интервал обновлений выше среднего.',levels:['Уровень 1: формальная проверка пройдена','Уровень 2: решение не достигнуто','Уровень 3: вынесение итогового решения'],final:'Ожидается'},
    {id:'ARB-2026-0065',deal:'WD-2026-00088',type:'Жалоба на непрозрачный отказ',parties:'Softline Integration / Polymatica',level:'Уровень 1',status:'Закрыто',statusKey:'active',sla:'Исполнено',basis:'Партнер указал на отсутствие мотивировки при первичном отказе.',arguments:['В протоколе отказа не были раскрыты основания'],materials:['Первичный отказ','Комментарий вендора'],auto:'Формулировка отказа не соответствовала регламенту прозрачности.',levels:['Уровень 1: рекомендация вендору пересмотреть решение'],final:'Статус регистрации изменен на подтверждено'}
  ],
  vendors: [
    {name:'Инферит ИТМен',rating:96,category:'Discovery / ITAM / CMDB',activity:'18 активных регистраций',disputes:'1',history:'Стабильный рост активности 4 месяца подряд',violations:'Нет значимых нарушений',scoreFactors:{protection:98,speed:95,conflicts:93,decisions:97}},
    {name:'CloudMaster',rating:88,category:'FinOps / Cloud',activity:'12 активных регистраций',disputes:'2',history:'Резкий рост в логистике и retail',violations:'1 спор по срокам решения',scoreFactors:{protection:90,speed:84,conflicts:86,decisions:89}},
    {name:'Polymatica',rating:91,category:'BI / Аналитика',activity:'14 активных регистраций',disputes:'2',history:'Устойчивый спрос в фин секторе',violations:'1 кейс по непрозрачному отказу',scoreFactors:{protection:92,speed:89,conflicts:90,decisions:93}},
    {name:'Naumen',rating:84,category:'ITSM / Service Desk',activity:'9 активных регистраций',disputes:'3',history:'Падение активности в enterprise',violations:'2 кейса challenge',scoreFactors:{protection:83,speed:82,conflicts:79,decisions:90}},
    {name:'Billogic',rating:89,category:'Billing / Usage',activity:'7 активных регистраций',disputes:'0',history:'Рост в retail и сервисных компаниях',violations:'Нет',scoreFactors:{protection:90,speed:88,conflicts:87,decisions:91}}
  ],
  partners: [
    {name:'Softline Integration',rating:93,special:'Discovery / BI / комплексные проекты',winRate:'41%',activeDeals:'18',history:'Высокая дисциплина ведения материалов',violations:'Нет',scoreFactors:{protection:94,speed:91,conflicts:90,decisions:95}},
    {name:'Rubytech Solutions',rating:87,special:'Cloud / FinOps',winRate:'38%',activeDeals:'12',history:'Рост активности в инфраструктурных проектах',violations:'Нет',scoreFactors:{protection:88,speed:86,conflicts:84,decisions:90}},
    {name:'ICL Services',rating:82,special:'ITSM / интеграция',winRate:'36%',activeDeals:'9',history:'Снижение качества в спорных кейсах',violations:'1 активный challenge',scoreFactors:{protection:82,speed:80,conflicts:78,decisions:88}},
    {name:'T1 Infra Projects',rating:85,special:'BI / enterprise',winRate:'34%',activeDeals:'11',history:'Сильные long-cycle проекты',violations:'1 спор по продлению',scoreFactors:{protection:86,speed:81,conflicts:84,decisions:89}},
    {name:'К2Тех Альянс',rating:89,special:'Billing / infra',winRate:'39%',activeDeals:'7',history:'Стабильный контур без споров',violations:'Нет',scoreFactors:{protection:90,speed:87,conflicts:88,decisions:90}}
  ],
  journal: [
    '01.04 09:20 — роль пользователя изменена на "Партнер"',
    '01.04 09:24 — открыта карточка регистрации WD-2026-00118',
    '01.04 09:27 — инициирована процедура продления по WD-2026-00118',
    '01.04 09:31 — открыт арбитражный кейс ARB-2026-0081',
    '01.04 09:36 — просмотрен рейтинг вендора "Инферит ИТМен"',
    '01.04 09:42 — открыт аналитический срез: сегмент "Финансы", класс "BI", период "Квартал"'
  ],
  marketSignals: [
    {title:'В марте рост регистраций в финансовом секторе +32%', detail:'Основной вклад дали BI, Data Catalog и решения класса Discovery. Пик новых регистраций пришелся на последнюю неделю месяца.'},
    {title:'Класс решений Discovery растет 18% на горизонте 6 месяцев', detail:'Наиболее выраженная динамика — в промышленности и энергетике, где формируется устойчивый спрос на инвентаризацию и контроль активов.'},
    {title:'Промышленность показывает падение активности по ITSM на 12%', detail:'На фоне роста инфраструктурных и discovery-инициатив service management-проекты переходят в более длинный цикл.'}
  ],
  analytics: {
    monthly: [64,72,79,85,96,104,117,121,130,138,145,156],
    quarterly: [218,285,368,439],
    yearly: [1310,1488,1672],
    bySegment: [
      {name:'Финансы', value:34},
      {name:'Промышленность', value:28},
      {name:'Госсектор', value:16},
      {name:'Логистика', value:12},
      {name:'Retail', value:10}
    ],
    byClass: [
      {name:'Discovery', value:29},
      {name:'BI', value:23},
      {name:'FinOps', value:18},
      {name:'ITSM', value:17},
      {name:'Billing', value:13}
    ],
    insights: [
      'Рост Discovery в промышленности фиксируется 6 месяцев подряд.',
      'Снижение ITSM в фин секторе сохраняется второй квартал.',
      'Пик регистрационной активности в Q2 ожидается по BI и FinOps.',
      'Объем регистраций в классе Discovery превысил BI в конце квартала.',
      'Госсектор сохраняет стабильный, но медленный рост без резких всплесков.'
    ]
  }
};

function el(id){ return document.getElementById(id); }
function escapeHtml(v){ return String(v).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }
function statusClass(key){
  if(key === 'active') return 'active';
  if(key === 'waiting') return 'waiting';
  if(key === 'dispute') return 'dispute';
  return 'extend';
}
function navLabel(section){
  const map = {
    summary:['Сводка','Операционная панель участника рынка'],
    registry:['Реестр регистраций','Единый список зарегистрированных сделок и проектов'],
    disputes:['Реестр споров','Контур рассмотрения жалоб, challenge и продлений'],
    catalog:['Каталог участников','Вендоры и партнеры рынка с раскрытием карточек'],
    ratings:['Рейтинги','Репутационный контур вендоров и партнеров'],
    analytics:['Аналитика рынка','Обезличенные сигналы, динамика сегментов и классов решений'],
    journal:['Журнал действий','Служебный протокол действий пользователя в системе']
  };
  return map[section] || ['Раздел',''];
}

function renderNav(){
  const nav = el('nav');
  const items = navConfig[state.role];
  nav.innerHTML = `<div class="nav-group-title">Разделы</div>` + items.map(([id,label]) =>
    `<button class="nav-item ${state.section===id?'active':''}" data-id="${id}"><span>${label}</span><span>›</span></button>`
  ).join('');
  nav.querySelectorAll('.nav-item').forEach(btn => btn.onclick = ()=> {
    state.section = btn.dataset.id;
    render();
  });
}

function render(){
  renderNav();
  const [t, s] = navLabel(state.section);
  el('pageTitle').textContent = t;
  el('pageSubtitle').textContent = s;
  if(state.section === 'summary') renderSummary();
  if(state.section === 'registry') renderRegistry();
  if(state.section === 'disputes') renderDisputes();
  if(state.section === 'catalog') renderCatalog();
  if(state.section === 'ratings') renderRatings();
  if(state.section === 'analytics') renderAnalytics();
  if(state.section === 'journal') renderJournal();
}

function openDetail(html){
  el('detailPane').innerHTML = html;
  bindDetailActions();
}
function bindDetailActions(){
  document.querySelectorAll('[data-open-modal]').forEach(btn => btn.onclick = ()=> openModal(btn.dataset.openModal, btn.dataset.entity || ''));
}

function tooltip(text){
  return `<span class="tooltip" data-tip="${escapeHtml(text)}">?</span>`;
}

function renderSummary(){
  const roleTexts = {
    partner: {
      action1:'2 регистрации требуют продления',
      action2:'1 спор в процессе',
      action3:'3 новых входящих решения вендоров',
      rep:'Рейтинг партнера: 93/100',
      tableTitle:'Мои регистрации',
      repBlock:'Репутационный статус партнера'
    },
    vendor: {
      action1:'2 регистрации требуют решения',
      action2:'1 спор в процессе',
      action3:'3 новых входящих регистрации',
      rep:'Рейтинг вендора: 91/100',
      tableTitle:'Входящие регистрации',
      repBlock:'Репутационный статус вендора'
    },
    arbitrage: {
      action1:'2 кейса требуют ручной верификации',
      action2:'1 спор с критичным SLA',
      action3:'3 новых обращения за сутки',
      rep:'Индекс соблюдения SLA: 94/100',
      tableTitle:'Очередь рассмотрения',
      repBlock:'Операционный статус арбитража'
    },
    market: {
      action1:'3 заметных рыночных сигнала',
      action2:'1 сегмент показывает отрицательную динамику',
      action3:'3 новых аналитических вывода за период',
      rep:'Рейтинг надежности рынка доступен по участникам',
      tableTitle:'Последние обезличенные сигналы',
      repBlock:'Общий статус прозрачности рынка'
    }
  }[state.role];

  const rows = (state.role === 'market' ? data.marketSignals.map((s, i)=>({id:i+1,date:'Март 2026',partner:'—',vendor:'—',client:'—',subject:s.title,status:'Сигнал',statusKey:'extend',term:'—',risk:'—'})) : data.registrations.slice(0,5));
  el('centerPane').innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Требуют действий</div>
          <div class="panel-subtitle">Приоритетные события, которые требуют перехода к реестрам и процедурным действиям.</div>
        </div>
      </div>
      <div class="panel-body">
        <div class="kpi-list">
          <div class="kpi-card link-card" data-go="registry"><div class="kpi-title">${tooltip('Количество объектов, по которым требуется продление защиты в пределах текущего SLA.')}Продления</div><div class="kpi-value">2</div><div class="kpi-note">${roleTexts.action1}</div></div>
          <div class="kpi-card link-card" data-go="disputes"><div class="kpi-title">${tooltip('Открытые процедурные случаи: споры, challenge, апелляции, нарушения.')}Споры и оспаривания</div><div class="kpi-value">1</div><div class="kpi-note">${roleTexts.action2}</div></div>
          <div class="kpi-card link-card" data-go="registry"><div class="kpi-title">${tooltip('Входящие новые элементы процесса: регистрации, решения, материалы, уведомления.')}Новые входящие</div><div class="kpi-value">3</div><div class="kpi-note">${roleTexts.action3}</div></div>
          <div class="kpi-card link-card" data-go="ratings"><div class="kpi-title">${tooltip('Репутационный индекс рассчитывается по соблюдению защит, скорости решений, конфликтности и качеству решений.')}${roleTexts.repBlock}</div><div class="kpi-value">${roleTexts.rep.split(': ')[1] || roleTexts.rep}</div><div class="kpi-note">${roleTexts.rep}</div></div>
        </div>
      </div>
    </section>

    <div class="panel-grid">
      <section class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">${roleTexts.tableTitle}</div>
            <div class="panel-subtitle">Список объектов со сжатыми сведениями и переходом в подробную карточку справа.</div>
          </div>
        </div>
        <div class="panel-body">
          ${renderSimpleTable(rows)}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Сигналы рынка</div>
            <div class="panel-subtitle">Обезличенная сводка динамики сегментов и классов решений.</div>
          </div>
        </div>
        <div class="panel-body">
          <div class="signal-list">
            ${data.marketSignals.map((s,i)=>`<div class="signal-item" data-signal="${i}"><strong>${escapeHtml(s.title)}</strong><div class="small muted">${escapeHtml(s.detail)}</div></div>`).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
  document.querySelectorAll('.link-card').forEach(card=>card.onclick=()=>{state.section=card.dataset.go;render();});
  bindSummaryRows(rows);
  document.querySelectorAll('[data-signal]').forEach(node => node.onclick = ()=>{
    const sig = data.marketSignals[Number(node.dataset.signal)];
    openDetail(detailSignal(sig));
  });
}

function renderSimpleTable(rows){
  return `<div class="table-wrap"><table><thead><tr>
    <th>№</th><th>Дата</th><th>Партнер</th><th>Вендор</th><th>Предмет</th><th>Статус</th>
  </tr></thead><tbody>
  ${rows.map((r, idx)=>`
    <tr data-row="${idx}">
      <td>${escapeHtml(r.id || idx+1)}</td>
      <td>${escapeHtml(r.date || '—')}</td>
      <td>${escapeHtml(r.partner || '—')}</td>
      <td>${escapeHtml(r.vendor || '—')}</td>
      <td>${escapeHtml(r.subject || r.title)}</td>
      <td>${r.statusKey ? `<span class="status ${statusClass(r.statusKey)}">${escapeHtml(r.status)}</span>` : escapeHtml(r.status || '—')}</td>
    </tr>`).join('')}
  </tbody></table></div>`;
}
function bindSummaryRows(rows){
  document.querySelectorAll('[data-row]').forEach(tr=>tr.onclick=()=>{
    const row = rows[Number(tr.dataset.row)];
    if(row.id && String(row.id).startsWith('WD-')) openDetail(detailRegistration(row));
    else if(row.title) openDetail(detailSignal(row));
  });
}

function renderRegistry(){
  let rows = [...data.registrations];
  const search = el('globalSearch').value.trim().toLowerCase();
  if(search){
    rows = rows.filter(r => Object.values(r).join(' ').toLowerCase().includes(search));
  }
  const f = state.filters;
  if(f.registryStatus) rows = rows.filter(r => r.status === f.registryStatus);
  if(f.registrySegment) rows = rows.filter(r => r.segment === f.registrySegment);
  if(f.registryClass) rows = rows.filter(r => r.class === f.registryClass);

  el('centerPane').innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Реестр регистраций</div>
          <div class="panel-subtitle">Основной список зарегистрированных сделок и проектов. Клик по строке открывает карточку справа без перехода на отдельный экран.</div>
        </div>
        <div class="split-actions">
          <button class="button" id="newRegBtn">Новая регистрация</button>
        </div>
      </div>
      <div class="panel-body">
        <div class="table-toolbar">
          <select class="filter-select" id="registryStatusFilter">
            <option value="">Статус: все</option>
            <option ${f.registryStatus==='Активна'?'selected':''}>Активна</option>
            <option ${f.registryStatus==='Ожидает'?'selected':''}>Ожидает</option>
            <option ${f.registryStatus==='Продление'?'selected':''}>Продление</option>
            <option ${f.registryStatus==='Спор'?'selected':''}>Спор</option>
            <option ${f.registryStatus==='Выиграна'?'selected':''}>Выиграна</option>
          </select>
          <select class="filter-select" id="registrySegmentFilter">
            <option value="">Сегмент: все</option>
            ${[...new Set(data.registrations.map(r=>r.segment))].map(s=>`<option ${f.registrySegment===s?'selected':''}>${s}</option>`).join('')}
          </select>
          <select class="filter-select" id="registryClassFilter">
            <option value="">Класс решений: все</option>
            ${[...new Set(data.registrations.map(r=>r.class))].map(s=>`<option ${f.registryClass===s?'selected':''}>${s}</option>`).join('')}
          </select>
          <span class="muted small">Риск ${tooltip('Риск рассчитывается по конфликтности, полноте материалов, наличию challenge и активности вендора/партнера.')}</span>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>№</th><th>Дата</th><th>Партнер</th><th>Вендор</th><th>Клиент</th><th>Предмет</th><th>Статус</th><th>Срок</th><th>Риск</th><th>Действия</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((r,idx)=>`
                <tr data-reg="${r.id}">
                  <td>${escapeHtml(r.id)}</td>
                  <td>${escapeHtml(r.date)}</td>
                  <td>${escapeHtml(r.partner)}</td>
                  <td>${escapeHtml(r.vendor)}</td>
                  <td>${escapeHtml(r.client)}</td>
                  <td>${escapeHtml(r.subject)}</td>
                  <td><span class="status ${statusClass(r.statusKey)}">${escapeHtml(r.status)}</span></td>
                  <td>${escapeHtml(r.term)}</td>
                  <td>${escapeHtml(r.risk)}</td>
                  <td><span class="linklike" data-row-action="${r.id}">Открыть</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
  el('registryStatusFilter').onchange = e => { state.filters.registryStatus = e.target.value; renderRegistry(); };
  el('registrySegmentFilter').onchange = e => { state.filters.registrySegment = e.target.value; renderRegistry(); };
  el('registryClassFilter').onchange = e => { state.filters.registryClass = e.target.value; renderRegistry(); };
  document.querySelectorAll('[data-reg]').forEach(row => row.onclick = ()=> {
    const rec = data.registrations.find(r=>r.id===row.dataset.reg);
    openDetail(detailRegistration(rec));
  });
  document.querySelectorAll('[data-row-action]').forEach(a => a.onclick = (e)=> {
    e.stopPropagation();
    const rec = data.registrations.find(r=>r.id===a.dataset.rowAction);
    openDetail(detailRegistration(rec));
  });
  el('newRegBtn').onclick = ()=> openModal('newRegistration');
}

function renderDisputes(){
  const rows = [...data.disputes];
  el('centerPane').innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Реестр споров</div>
          <div class="panel-subtitle">Контур жалоб, challenge, продлений, нарушений и апелляций. Карточка открывается в правой панели.</div>
        </div>
      </div>
      <div class="panel-body">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>№</th><th>Сделка</th><th>Тип</th><th>Стороны</th><th>Уровень</th><th>Статус</th><th>SLA</th><th>Действие</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(d=>`
                <tr data-dispute="${d.id}">
                  <td>${escapeHtml(d.id)}</td>
                  <td>${escapeHtml(d.deal)}</td>
                  <td>${escapeHtml(d.type)}</td>
                  <td>${escapeHtml(d.parties)}</td>
                  <td>${escapeHtml(d.level)}</td>
                  <td><span class="status ${statusClass(d.statusKey)}">${escapeHtml(d.status)}</span></td>
                  <td>${escapeHtml(d.sla)}</td>
                  <td><span class="linklike" data-dispute-action="${d.id}">Открыть</span></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
  document.querySelectorAll('[data-dispute]').forEach(row=>row.onclick=()=>{
    const item = data.disputes.find(d=>d.id===row.dataset.dispute);
    openDetail(detailDispute(item));
  });
  document.querySelectorAll('[data-dispute-action]').forEach(a=>a.onclick=(e)=>{
    e.stopPropagation();
    const item = data.disputes.find(d=>d.id===a.dataset.disputeAction);
    openDetail(detailDispute(item));
  });
}

function renderCatalog(){
  const tab = state.filters.catalogTab;
  const table = tab === 'vendors' ? `
    <table><thead><tr><th>Название</th><th>Рейтинг</th><th>Категория</th><th>Активность</th><th>Споры</th></tr></thead>
    <tbody>${data.vendors.map(v=>`<tr data-vendor="${v.name}"><td>${escapeHtml(v.name)}</td><td>${v.rating}/100</td><td>${escapeHtml(v.category)}</td><td>${escapeHtml(v.activity)}</td><td>${escapeHtml(v.disputes)}</td></tr>`).join('')}</tbody></table>
  ` : `
    <table><thead><tr><th>Название</th><th>Рейтинг</th><th>Специализация</th><th>Win-rate</th><th>Активные сделки</th></tr></thead>
    <tbody>${data.partners.map(v=>`<tr data-partner="${v.name}"><td>${escapeHtml(v.name)}</td><td>${v.rating}/100</td><td>${escapeHtml(v.special)}</td><td>${escapeHtml(v.winRate)}</td><td>${escapeHtml(v.activeDeals)}</td></tr>`).join('')}</tbody></table>
  `;
  el('centerPane').innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Каталог участников</div>
          <div class="panel-subtitle">Единый каталог вендоров и партнеров с раскрытием карточки участника и репутационного профиля.</div>
        </div>
      </div>
      <div class="panel-body">
        <div class="tabs">
          <button class="tab ${tab==='vendors'?'active':''}" id="vendorsTab">Вендоры</button>
          <button class="tab ${tab==='partners'?'active':''}" id="partnersTab">Партнеры</button>
        </div>
        <div class="table-wrap">${table}</div>
      </div>
    </section>
  `;
  el('vendorsTab').onclick = ()=>{state.filters.catalogTab='vendors';renderCatalog();};
  el('partnersTab').onclick = ()=>{state.filters.catalogTab='partners';renderCatalog();};
  document.querySelectorAll('[data-vendor]').forEach(r=>r.onclick=()=>{
    const item=data.vendors.find(v=>v.name===r.dataset.vendor); openDetail(detailParticipant(item,'vendor'));
  });
  document.querySelectorAll('[data-partner]').forEach(r=>r.onclick=()=>{
    const item=data.partners.find(v=>v.name===r.dataset.partner); openDetail(detailParticipant(item,'partner'));
  });
}

function renderRatings(){
  const tab = state.filters.ratingsTab;
  const list = tab === 'vendors' ? data.vendors : data.partners;
  const table = `
    <table><thead><tr><th>Участник</th><th>Итог</th><th>Соблюдение защит ${tooltip('Насколько участник соблюдает режим зарегистрированных защит и не нарушает приоритеты.')}</th><th>Скорость ${tooltip('Скорость реакции на процедуру: подтверждение, ответ, завершение, мотивировка.')}</th><th>Конфликты ${tooltip('Частота и тяжесть конфликтных кейсов и challenge.')}</th><th>Решения ${tooltip('Качество и прозрачность вынесенных решений или поведения в рамках процесса.')}</th></tr></thead>
    <tbody>${list.map(i=>`<tr data-rate="${i.name}" data-kind="${tab.slice(0,-1)}"><td>${escapeHtml(i.name)}</td><td>${i.rating}/100</td><td>${i.scoreFactors.protection}</td><td>${i.scoreFactors.speed}</td><td>${i.scoreFactors.conflicts}</td><td>${i.scoreFactors.decisions}</td></tr>`).join('')}</tbody></table>`;
  el('centerPane').innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Рейтинги</div>
          <div class="panel-subtitle">Отдельный репутационный контур вендоров и партнеров с факторами расчета и историей изменений.</div>
        </div>
      </div>
      <div class="panel-body">
        <div class="tabs">
          <button class="tab ${tab==='vendors'?'active':''}" id="ratingsVendorsTab">Вендоры</button>
          <button class="tab ${tab==='partners'?'active':''}" id="ratingsPartnersTab">Партнеры</button>
        </div>
        <div class="table-wrap">${table}</div>
      </div>
    </section>
  `;
  el('ratingsVendorsTab').onclick = ()=>{state.filters.ratingsTab='vendors';renderRatings();};
  el('ratingsPartnersTab').onclick = ()=>{state.filters.ratingsTab='partners';renderRatings();};
  document.querySelectorAll('[data-rate]').forEach(r=>r.onclick=()=>{
    const kind = r.dataset.kind;
    const item = kind === 'vendor' ? data.vendors.find(v=>v.name===r.dataset.rate) : data.partners.find(v=>v.name===r.dataset.rate);
    openDetail(detailRating(item, kind));
  });
}

function lineSvg(points, width=520, height=180){
  const max = Math.max(...points), min = Math.min(...points);
  const step = width / (points.length - 1 || 1);
  const path = points.map((p,i)=>{
    const x = i*step;
    const y = height - ((p-min)/(max-min||1))* (height-20) - 10;
    return `${i===0?'M':'L'}${x},${y}`;
  }).join(' ');
  return `<svg width="100%" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="height:180px;border:1px solid var(--line);background:#fff">
    <path d="${path}" fill="none" stroke="#1E3A8A" stroke-width="2"/>
  </svg>`;
}

function renderAnalytics(){
  const period = state.filters.analyticsPeriod;
  const series = period === 'month' ? data.analytics.monthly : period === 'quarter' ? data.analytics.quarterly : data.analytics.yearly;
  const labels = period === 'month' ? ['Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек','Янв','Фев','Мар'] : period === 'quarter' ? ['Q1','Q2','Q3','Q4'] : ['2024','2025','2026'];
  const growth = Math.round(((series[series.length-1]-series[0])/(series[0]||1))*100);
  el('centerPane').innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Аналитика рынка</div>
          <div class="panel-subtitle">Обезличенный аналитический слой без клиентов и компаний: динамика, распределение, срезы сегментов и классов решений.</div>
        </div>
      </div>
      <div class="panel-body">
        <div class="table-toolbar">
          <select class="filter-select" id="analyticsSegment"><option value="all">Сегмент: все</option><option ${state.filters.analyticsSegment==='Финансы'?'selected':''}>Финансы</option><option ${state.filters.analyticsSegment==='Промышленность'?'selected':''}>Промышленность</option><option ${state.filters.analyticsSegment==='Госсектор'?'selected':''}>Госсектор</option></select>
          <select class="filter-select" id="analyticsClass"><option value="all">Класс: все</option><option ${state.filters.analyticsClass==='ITSM'?'selected':''}>ITSM</option><option ${state.filters.analyticsClass==='Discovery'?'selected':''}>Discovery</option><option ${state.filters.analyticsClass==='FinOps'?'selected':''}>FinOps</option><option ${state.filters.analyticsClass==='BI'?'selected':''}>BI</option></select>
          <select class="filter-select" id="analyticsPeriod"><option value="month" ${period==='month'?'selected':''}>Месяц</option><option value="quarter" ${period==='quarter'?'selected':''}>Квартал</option><option value="year" ${period==='year'?'selected':''}>Год</option></select>
        </div>

        <div class="metric-strip">
          <div class="kpi-card"><div class="kpi-title">Динамика регистраций ${tooltip('Показывает общий объем новых регистраций без раскрытия конкретных участников рынка.')}</div><div class="kpi-value">${series[series.length-1]}</div><div class="kpi-note">Текущее значение периода</div></div>
          <div class="kpi-card"><div class="kpi-title">Рост / падение</div><div class="kpi-value">${growth > 0 ? '+' : ''}${growth}%</div><div class="kpi-note">Относительно начала выбранного периода</div></div>
          <div class="kpi-card"><div class="kpi-title">Объем наблюдаемого рынка</div><div class="kpi-value">156</div><div class="kpi-note">Условный индекс объема по текущему срезу</div></div>
        </div>

        <div class="analytics-grid">
          <div class="chart-box">
            <div class="chart-title">Динамика регистраций</div>
            <div class="chart-note">Линейная динамика выбранного периода; отображает только агрегированные значения.</div>
            ${lineSvg(series)}
            <div class="legend">${labels.map(l=>`<span>${l}</span>`).join('')}</div>
          </div>

          <div class="chart-box">
            <div class="chart-title">Распределение по сегментам</div>
            <div class="chart-note">Сводка долей в общем объеме наблюдаемой активности.</div>
            ${data.analytics.bySegment.map(s=>`<div class="bar-row"><div>${escapeHtml(s.name)}</div><div class="bar"><div class="bar-fill" style="width:${s.value}%"></div></div><div>${s.value}%</div></div>`).join('')}
          </div>
        </div>

        <div class="analytics-grid" style="margin-top:16px;">
          <div class="chart-box">
            <div class="chart-title">Распределение по классам решений</div>
            <div class="chart-note">Срез спроса по типам решений и регистрационной активности.</div>
            ${data.analytics.byClass.map(s=>`<div class="bar-row"><div>${escapeHtml(s.name)}</div><div class="bar"><div class="bar-fill" style="width:${s.value}%"></div></div><div>${s.value}%</div></div>`).join('')}
          </div>
          <div class="chart-box">
            <div class="chart-title">Обезличенные инсайты</div>
            <div class="chart-note">Выводы для оценки объема рынка, триггеров и стратегических решений.</div>
            ${data.analytics.insights.map(i=>`<div class="insight">${escapeHtml(i)}</div>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
  el('analyticsSegment').onchange = e=>{state.filters.analyticsSegment=e.target.value; renderAnalytics();};
  el('analyticsClass').onchange = e=>{state.filters.analyticsClass=e.target.value; renderAnalytics();};
  el('analyticsPeriod').onchange = e=>{state.filters.analyticsPeriod=e.target.value; renderAnalytics();};
}

function renderJournal(){
  el('centerPane').innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">Журнал действий</div>
          <div class="panel-subtitle">Служебный протокол пользовательских и системных действий в рамках демонстрационного контура.</div>
        </div>
      </div>
      <div class="panel-body">
        <div class="journal-list">
          ${data.journal.map(x=>`<div class="journal-item">${escapeHtml(x)}</div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

function detailRegistration(r){
  return `
    <div class="detail-title">Карточка регистрации</div>
    <div class="detail-subtitle">${escapeHtml(r.id)} · ${escapeHtml(r.subject)}</div>

    <div class="section">
      <div class="section-title">1. Статус ${tooltip('Статус жизненного цикла регистрации: активна, ожидает, спор, продление, выиграна, проиграна, отменена.')}</div>
      <div><span class="status ${statusClass(r.statusKey)}">${escapeHtml(r.status)}</span> <span class="badge">${escapeHtml(r.lifecycle)}</span></div>
    </div>

    <div class="section">
      <div class="section-title">2. Основные сведения</div>
      <div class="definition-list">
        <div>Партнер</div><div>${escapeHtml(r.partner)}</div>
        <div>Вендор</div><div>${escapeHtml(r.vendor)}</div>
        <div>Клиент</div><div>${escapeHtml(r.client)}</div>
        <div>Предмет</div><div>${escapeHtml(r.subject)}</div>
        <div>Сумма</div><div>${escapeHtml(r.amount)}</div>
        <div>Сегмент</div><div>${escapeHtml(r.segment)}</div>
        <div>Класс решений</div><div>${escapeHtml(r.class)}</div>
        <div>Риск</div><div>${escapeHtml(r.risk)}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">3. Подтверждающие материалы</div>
      <ul class="list">${r.materials.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <div class="section-title">4. История действий</div>
      <div class="timeline">${r.history.map(x=>`<div class="timeline-item"><div class="timeline-date">${escapeHtml(x.split(' — ')[0])}</div><div>${escapeHtml(x.split(' — ')[1] || x)}</div></div>`).join('')}</div>
    </div>

    <div class="section">
      <div class="section-title">5. Сигналы ${tooltip('Обезличенные сигналы конкурирующей активности и связи с соседними классами решений, не раскрывающие иных клиентов.')}</div>
      <ul class="list">${r.signals.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <div class="section-title">6. Нарушения и challenge</div>
      <div class="notice"><strong>Нарушения</strong>${escapeHtml(r.violation)}</div>
      <div class="notice"><strong>Challenge</strong>${r.signals.some(s=>s.toLowerCase().includes('challenge')) ? 'Есть активное оспаривание' : 'Активных challenge нет'}</div>
    </div>

    <div class="section">
      <div class="section-title">7. Действия</div>
      <div class="split-actions">
        <button class="button button-secondary" data-open-modal="extend" data-entity="${escapeHtml(r.id)}">Продлить</button>
        <button class="button button-secondary" data-open-modal="challenge" data-entity="${escapeHtml(r.id)}">Оспорить</button>
        <button class="button button-danger" data-open-modal="removeProtection" data-entity="${escapeHtml(r.id)}">Снять</button>
        <button class="button button-muted" data-open-modal="openDispute" data-entity="${escapeHtml(r.id)}">Открыть спор</button>
      </div>
    </div>
  `;
}
function detailDispute(d){
  return `
    <div class="detail-title">Карточка спора</div>
    <div class="detail-subtitle">${escapeHtml(d.id)} · ${escapeHtml(d.type)}</div>

    <div class="section"><div class="section-title">Основание</div><div>${escapeHtml(d.basis)}</div></div>
    <div class="section"><div class="section-title">Стороны</div><div>${escapeHtml(d.parties)}</div></div>
    <div class="section"><div class="section-title">Аргументы</div><ul class="list">${d.arguments.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div>
    <div class="section"><div class="section-title">Материалы</div><ul class="list">${d.materials.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div>
    <div class="section"><div class="section-title">Результат автопроверки</div><div>${escapeHtml(d.auto)}</div></div>
    <div class="section"><div class="section-title">Решения уровней</div><ul class="list">${d.levels.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul></div>
    <div class="section"><div class="section-title">Финальное решение</div><div>${escapeHtml(d.final)}</div></div>
    <div class="section"><div class="section-title">Действия</div>
      <div class="split-actions">
        <button class="button button-secondary" data-open-modal="decision" data-entity="${escapeHtml(d.id)}">Вынести решение</button>
        <button class="button button-muted" data-open-modal="requestDocs" data-entity="${escapeHtml(d.id)}">Запросить материалы</button>
      </div>
    </div>
  `;
}
function detailParticipant(item, kind){
  return `
    <div class="detail-title">Карточка участника</div>
    <div class="detail-subtitle">${escapeHtml(item.name)} · ${kind==='vendor'?'Вендор':'Партнер'}</div>
    <div class="section"><div class="section-title">Рейтинг</div><div class="kpi-value">${item.rating}/100</div></div>
    <div class="section"><div class="section-title">Профиль</div>
      <div class="definition-list">
        <div>${kind==='vendor'?'Категория':'Специализация'}</div><div>${escapeHtml(kind==='vendor'?item.category:item.special)}</div>
        <div>Активность</div><div>${escapeHtml(kind==='vendor'?item.activity:item.activeDeals + ' активных сделок')}</div>
        <div>${kind==='vendor'?'Споры':'Win-rate'}</div><div>${escapeHtml(kind==='vendor'?item.disputes:item.winRate)}</div>
      </div>
    </div>
    <div class="section"><div class="section-title">История</div><div>${escapeHtml(item.history)}</div></div>
    <div class="section"><div class="section-title">Нарушения</div><div>${escapeHtml(item.violations)}</div></div>
    <div class="section"><div class="section-title">Активность и факторы</div>
      <ul class="list">
        <li>Соблюдение защит: ${item.scoreFactors.protection}</li>
        <li>Скорость: ${item.scoreFactors.speed}</li>
        <li>Конфликты: ${item.scoreFactors.conflicts}</li>
        <li>Решения: ${item.scoreFactors.decisions}</li>
      </ul>
    </div>
  `;
}
function detailRating(item, kind){
  return `
    <div class="detail-title">Карточка рейтинга</div>
    <div class="detail-subtitle">${escapeHtml(item.name)} · ${kind==='vendor'?'Вендор':'Партнер'}</div>
    <div class="section"><div class="section-title">Итог</div><div class="kpi-value">${item.rating}/100</div></div>
    <div class="section"><div class="section-title">Факторы</div>
      <ul class="list">
        <li>Соблюдение защит: ${item.scoreFactors.protection}</li>
        <li>Скорость: ${item.scoreFactors.speed}</li>
        <li>Конфликты: ${item.scoreFactors.conflicts}</li>
        <li>Решения: ${item.scoreFactors.decisions}</li>
      </ul>
    </div>
    <div class="section"><div class="section-title">История изменений</div>
      <div class="timeline">
        <div class="timeline-item"><div class="timeline-date">Январь 2026</div><div>88/100</div></div>
        <div class="timeline-item"><div class="timeline-date">Февраль 2026</div><div>90/100</div></div>
        <div class="timeline-item"><div class="timeline-date">Март 2026</div><div>${item.rating}/100</div></div>
      </div>
    </div>
  `;
}
function detailSignal(sig){
  return `
    <div class="detail-title">Аналитический сигнал</div>
    <div class="detail-subtitle">Обезличенный рыночный вывод</div>
    <div class="section"><div class="section-title">Сигнал</div><div>${escapeHtml(sig.title || sig.subject)}</div></div>
    <div class="section"><div class="section-title">Раскрытие</div><div>${escapeHtml(sig.detail || 'Детальное описание сигнала и его значения для стратегии участника рынка.')}</div></div>
    <div class="section"><div class="section-title">Действие</div><button class="button button-secondary" id="gotoAnalyticsBtn">Открыть аналитику рынка</button></div>
  `;
}

function openModal(type, entity=''){
  const backdrop = el('modalBackdrop');
  const title = el('modalTitle');
  const subtitle = el('modalSubtitle');
  const body = el('modalBody');
  const footer = el('modalFooter');
  let html = '', foot = '';
  if(type==='newRegistration'){
    title.textContent = 'Новая регистрация';
    subtitle.textContent = 'Официальная форма подачи регистрации сделки / проекта';
    html = `
      <div class="form-grid">
        <div><label class="form-label">Тип регистрации</label><select class="form-select"><option>Проект</option><option>Сделка</option></select></div>
        <div><label class="form-label">Вендор</label><select class="form-select">${data.vendors.map(v=>`<option>${escapeHtml(v.name)}</option>`).join('')}</select></div>
        <div class="full"><label class="form-label">Предмет регистрации</label><input class="form-input" value="Проект по контролю ИТ-активов и лицензионных рисков" /></div>
        <div><label class="form-label">Клиент</label><input class="form-input" value="АО ВостокТранс" /></div>
        <div><label class="form-label">Плановая сумма</label><input class="form-input" value="18 500 000 ₽" /></div>
        <div><label class="form-label">Сегмент</label><select class="form-select"><option>Промышленность</option><option>Финансы</option></select></div>
        <div><label class="form-label">Класс решений</label><select class="form-select"><option>Discovery</option><option>BI</option></select></div>
        <div class="full"><label class="form-label">Подтверждающие материалы</label><textarea class="form-textarea">Встреча проведена, КП подготовлено, контакт ЛПР подтвержден, пилот согласован на апрель.</textarea></div>
      </div>`;
    foot = `<button class="button button-secondary" id="modalCancel">Отмена</button><button class="button" id="modalProceed">Отправить на регистрацию</button>`;
  }
  if(type==='extend'){
    title.textContent = 'Продление защиты';
    subtitle.textContent = `Регистрация ${entity}`;
    html = `<div class="notice"><strong>Основание</strong>Для продления требуется подтвердить фактическую активность по сделке: встреча, КП, пилот, согласование, переписка.</div>
      <div class="form-grid">
        <div class="full"><label class="form-label">Основание продления</label><textarea class="form-textarea">Добавлены материалы по пилоту и обновленное КП, подтверждена новая встреча с заказчиком.</textarea></div>
        <div><label class="form-label">Последняя активность</label><input class="form-input" value="31.03.2026" /></div>
        <div><label class="form-label">Запрашиваемый срок</label><input class="form-input" value="30 дней" /></div>
      </div>`;
    foot = `<button class="button button-secondary" id="modalCancel">Отмена</button><button class="button" id="modalProceed">Передать на продление</button>`;
  }
  if(type==='challenge'){
    title.textContent = 'Оспаривание регистрации';
    subtitle.textContent = `Объект ${entity}`;
    html = `<div class="form-grid">
      <div class="full"><label class="form-label">Основание challenge</label><textarea class="form-textarea">Считаем, что текущая защита должна быть пересмотрена: проект фактически ведется другой стороной, материалы недостаточны, клиент не подтверждает активное сопровождение.</textarea></div>
      <div><label class="form-label">Тип обращения</label><select class="form-select"><option>Challenge по качеству ведения</option><option>Спор по приоритету</option></select></div>
      <div><label class="form-label">Срочность</label><select class="form-select"><option>Обычная</option><option>Высокая</option></select></div>
    </div>`;
    foot = `<button class="button button-secondary" id="modalCancel">Отмена</button><button class="button" id="modalProceed">Зарегистрировать challenge</button>`;
  }
  if(type==='removeProtection'){
    title.textContent = 'Снятие защиты';
    subtitle.textContent = `Объект ${entity}`;
    html = `<div class="notice"><strong>Внимание</strong>Снятие защиты влияет на историю действий и может повлиять на рейтинг участника.</div>
      <label class="form-label">Основание</label><textarea class="form-textarea">Отсутствие подтвержденной активности в установленный срок и истечение периода защиты.</textarea>`;
    foot = `<button class="button button-secondary" id="modalCancel">Отмена</button><button class="button button-danger" id="modalProceed">Снять защиту</button>`;
  }
  if(type==='openDispute'){
    title.textContent = 'Открытие спора';
    subtitle.textContent = `Объект ${entity}`;
    html = `<label class="form-label">Описание спора</label><textarea class="form-textarea">Просим открыть спор по нарушению порядка подтверждения и проверить наличие конкурирующей активности по данному проекту.</textarea>`;
    foot = `<button class="button button-secondary" id="modalCancel">Отмена</button><button class="button" id="modalProceed">Открыть спор</button>`;
  }
  if(type==='decision'){
    title.textContent = 'Процедура вынесения решения';
    subtitle.textContent = `Арбитражный кейс ${entity}`;
    html = `<div class="form-grid">
      <div><label class="form-label">Результат</label><select class="form-select"><option>Подтвердить текущую защиту</option><option>Снять защиту</option><option>Назначить повторную проверку</option></select></div>
      <div><label class="form-label">Уровень решения</label><select class="form-select"><option>Уровень 2</option><option>Уровень 3</option></select></div>
      <div class="full"><label class="form-label">Мотивировка</label><textarea class="form-textarea">По результатам анализа истории действий, материалов и автопроверки установлено, что приоритет регистрации подтверждается, нарушение не доказано.</textarea></div>
    </div>`;
    foot = `<button class="button button-secondary" id="modalCancel">Отмена</button><button class="button" id="modalProceed">Зафиксировать решение</button>`;
  }
  if(type==='requestDocs'){
    title.textContent = 'Запрос дополнительных материалов';
    subtitle.textContent = `Арбитражный кейс ${entity}`;
    html = `<label class="form-label">Что требуется</label><textarea class="form-textarea">Просим предоставить подтверждение последней активности, обновленное КП и протокол последней встречи с заказчиком.</textarea>`;
    foot = `<button class="button button-secondary" id="modalCancel">Отмена</button><button class="button" id="modalProceed">Направить запрос</button>`;
  }
  body.innerHTML = html;
  footer.innerHTML = foot;
  backdrop.classList.remove('hidden');
  if(el('modalCancel')) el('modalCancel').onclick = closeModal;
  if(el('modalProceed')) el('modalProceed').onclick = ()=> {
    closeModal();
    openToastDetail(type, entity);
  };
}
function openToastDetail(type, entity){
  const map = {
    newRegistration: `Процедура завершена: регистрация сформирована и передана на автоматическую проверку.`,
    extend: `Процедура завершена: запрос на продление по ${entity} зарегистрирован.`,
    challenge: `Процедура завершена: challenge по ${entity} направлен в контур спора.`,
    removeProtection: `Процедура завершена: инициировано снятие защиты по ${entity}.`,
    openDispute: `Процедура завершена: спор по ${entity} открыт.`,
    decision: `Процедура завершена: решение по ${entity} зафиксировано.`,
    requestDocs: `Процедура завершена: запрос материалов по ${entity} направлен участникам.`
  };
  openDetail(`<div class="detail-title">Результат процедуры</div><div class="detail-subtitle">Формальное подтверждение действия</div><div class="notice"><strong>Статус</strong>${map[type]}</div><div class="notice"><strong>Примечание</strong>Прототип не сохраняет изменения, но показывает реалистичный следующий шаг делопроизводства.</div>`);
}
function closeModal(){ el('modalBackdrop').classList.add('hidden'); }

el('modalClose').onclick = closeModal;
el('modalBackdrop').addEventListener('click', (e)=>{ if(e.target === el('modalBackdrop')) closeModal(); });
el('openJournalBtn').onclick = ()=> { state.section = 'journal'; render(); };
el('roleSelect').onchange = (e)=>{ state.role = e.target.value; state.section = 'summary'; render(); };
el('globalSearch').oninput = ()=> { if(state.section === 'registry') renderRegistry(); };

render();
