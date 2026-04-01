
const state = {
  role: "partner",
  page: "summary",
  detail: { type: "welcome" },
  tabs: { catalog: "vendors", ratings: "vendors" },
  analytics: { segment: "all", clazz: "all", period: "quarter" }
};

const roles = {
  partner: {
    label: "Партнер",
    eyebrow: "Операционный контур партнера",
    sections: [
      ["summary","Сводка"],
      ["registrations","Реестр регистраций"],
      ["disputes","Реестр споров"],
      ["catalog","Каталог участников"],
      ["ratings","Рейтинги"],
      ["analytics","Аналитика рынка"],
      ["journal","Журнал действий"]
    ]
  },
  vendor: {
    label: "Вендор",
    eyebrow: "Операционный контур вендора",
    sections: [
      ["summary","Сводка"],
      ["registrations","Входящие и активные регистрации"],
      ["disputes","Споры и оспаривания"],
      ["catalog","Каталог участников"],
      ["ratings","Рейтинги"],
      ["analytics","Аналитика рынка"],
      ["journal","Журнал действий"]
    ]
  },
  arbitrage: {
    label: "Арбитраж",
    eyebrow: "Контур рассмотрения дел",
    sections: [
      ["summary","Операционная сводка"],
      ["disputes","Реестр дел"],
      ["violations","Нарушения и репутация"],
      ["ratings","Рейтинги"],
      ["analytics","Аналитика рынка"],
      ["journal","Журнал решений"]
    ]
  }
};

const registrations = [
  {
    id:"WD-2026-00121", date:"28.03.2026", partner:"Softline Integration", vendor:"Инферит ИТМен", client:"АО ВолгаЭнерго",
    subject:"Модернизация Discovery и инвентаризации", status:"active", deadline:"15.05.2026", risk:"Низкий", segment:"Промышленность", clazz:"Discovery",
    sum:"27 800 000 ₽", materials:["Встреча от 26.03","КП v2","План пилота","Контакт CIO"], timeline:["Регистрация подана","Автопроверка 94/100","Вендор подтвердил","Загружено КП"],
    signals:["Конкурирующих регистраций не выявлено","Есть связка с BI-решением смежного класса"], lifecycle:"Активна"
  },
  {
    id:"WD-2026-00122", date:"29.03.2026", partner:"Rubytech Solutions", vendor:"CloudMaster", client:"ООО СеверЛогистика",
    subject:"Пилот FinOps и контроль неиспользуемых VM", status:"pending", deadline:"—", risk:"Средний", segment:"Логистика", clazz:"FinOps",
    sum:"8 400 000 ₽", materials:["Квалификация потребности","Черновик пилота","Контакт IT Director"], timeline:["Регистрация подана","Автопроверка 82/100","Ожидает решения вендора"],
    signals:["Обнаружен 1 технологический партнер в составе комплексного предложения"], lifecycle:"Ожидает"
  },
  {
    id:"WD-2026-00118", date:"22.03.2026", partner:"T1 Infra Projects", vendor:"Polymatica", client:"ПАО РегионБанк",
    subject:"BI и витрина управленческой отчетности", status:"extension", deadline:"02.04.2026", risk:"Средний", segment:"Финансы", clazz:"BI",
    sum:"42 000 000 ₽", materials:["Протокол встречи","КП","Матрица требований"], timeline:["Подтверждена","Добавлен протокол встречи","Система запросила продление"],
    signals:["Мультивендорная связка: Catalog + BI","Нужны подтверждающие материалы по прогрессу"], lifecycle:"Продление"
  },
  {
    id:"WD-2026-00103", date:"14.03.2026", partner:"ICL Services", vendor:"Naumen", client:"ГК СтройИнвест",
    subject:"ITSM и управление изменениями", status:"dispute", deadline:"08.04.2026", risk:"Высокий", segment:"Строительство", clazz:"ITSM",
    sum:"19 600 000 ₽", materials:["Регистрация","Спецификация","История писем"], timeline:["Подтверждена","Подана жалоба","Передано в арбитраж"],
    signals:["Попытка параллельной регистрации","Повышенный риск конфликта"], lifecycle:"Спор"
  }
];

const disputes = [
  {
    id:"ARB-2026-0081", deal:"WD-2026-00103", type:"Попытка параллельной регистрации", parties:"ICL Services / Naumen / третий партнер",
    level:"Уровень 2", status:"В рассмотрении", sla:"18 часов", basis:"Партнер сообщает о попытке подтверждения другой регистрации по действующей защите.",
    arguments:["Первая регистрация подтверждена 14.03","Срок защиты не истек","Есть совпадение клиента и предмета"], materials:["Карточка сделки","История подтверждений","Сравнение предметов"],
    auto:"Совпадение клиента и предмета проекта: 0.92", decisions:["Автоуровень: найдено существенное совпадение","Специалист: требуется позиция вендора"], final:"Ожидается"
  },
  {
    id:"ARB-2026-0072", deal:"WD-2026-00094", type:"Отказ в продлении", parties:"Rubytech Solutions / CloudMaster",
    level:"Уровень 3", status:"Назначено финальное решение", sla:"6 часов", basis:"Вендор отклонил продление при наличии подтверждающих материалов.",
    arguments:["Партнер загрузил протоколы и КП","Вендор указал на недостаточный прогресс"], materials:["Запрос на продление","Протоколы","Комментарии вендора"],
    auto:"Достаточность материалов — средняя", decisions:["Автоуровень: недостаточно для автоматического решения","Руководитель: назначено финальное рассмотрение"], final:"Готовится"
  }
];

const vendors = [
  {name:"Инферит ИТМен", rating:96, category:"Discovery / ITAM / CMDB", activity:"Высокая", disputes:1, history:"Стабильное соблюдение защит", violations:"Нет существенных нарушений"},
  {name:"CloudMaster", rating:88, category:"FinOps / Cloud", activity:"Средняя", disputes:2, history:"Рост входящих в логистике", violations:"1 спор по продлению"},
  {name:"Polymatica", rating:91, category:"BI / Analytics", activity:"Высокая", disputes:1, history:"Рост активности в финсекторе", violations:"Нет"},
  {name:"Naumen", rating:84, category:"ITSM / Service Management", activity:"Средняя", disputes:3, history:"Есть напряжение по конкурирующим регистрациям", violations:"2 конфликтных кейса"}
];

const partners = [
  {name:"Softline Integration", rating:93, category:"Enterprise integration", winRate:"41%", activeDeals:18, history:"Высокая активность в промышленности", violations:"Нет"},
  {name:"Rubytech Solutions", rating:87, category:"Cloud / Infra", winRate:"38%", activeDeals:12, history:"Рост в логистике и финсекторе", violations:"1 спор по продлению"},
  {name:"ICL Services", rating:82, category:"ITSM / Infra", winRate:"36%", activeDeals:9, history:"Средняя активность, больше споров", violations:"2 конфликтных кейса"},
  {name:"T1 Infra Projects", rating:85, category:"BI / Infra", winRate:"34%", activeDeals:11, history:"Сильные комплексные проекты", violations:"Нет"}
];

const violations = [
  {id:"VIO-2026-011", participant:"Naumen", type:"Непрозрачная попытка повторного подтверждения", impact:"-4 к рейтингу", status:"Зафиксировано"},
  {id:"VIO-2026-012", participant:"Партнер X", type:"Недостоверные материалы при продлении", impact:"-6 к рейтингу", status:"На проверке"}
];

const journal = [
  ["30.03.2026 09:15","Система","Сформирован сигнал по росту Discovery в промышленности"],
  ["29.03.2026 14:22","Вендор","Открыт входящий кейс WD-2026-00122"],
  ["29.03.2026 13:41","Арбитраж","ARB-2026-0081 переведен на уровень 2"],
  ["28.03.2026 12:08","Инферит ИТМен","Подтверждена регистрация WD-2026-00121"],
  ["28.03.2026 10:44","Партнер","Создана регистрация WD-2026-00121"]
];

const insights = [
  {title:"В марте рост регистраций в финансовом секторе +32%", text:"Основной вклад дали BI, Data Catalog и решения класса Discovery. Пик новых регистраций пришелся на последнюю неделю месяца."},
  {title:"Класс решений Discovery растет 18% на горизонте 6 месяцев", text:"Наиболее выраженная динамика — в промышленности и энергетике, где формируется устойчивый спрос на инвентаризацию и контроль активов."},
  {title:"Промышленность показывает падение активности по ITSM на 12%", text:"На фоне роста инфраструктурных и discovery-инициатив service management-проекты переходят в более длинный цикл."}
];

const analyticsData = {
  monthly:[18,22,24,27,31,36,42,46],
  quarter:[61,70,78,89,102,111,124,137],
  year:[180,196,210,238,264,286,309,342],
  segments:[
    {name:"Финансы", val:78},
    {name:"Промышленность", val:92},
    {name:"Госсектор", val:54},
    {name:"Логистика", val:46}
  ],
  classes:[
    {name:"Discovery", val:88},
    {name:"ITSM", val:41},
    {name:"FinOps", val:57},
    {name:"BI", val:63}
  ]
};

function statusBadge(status){
  const map = {
    active:['Активна','green'],
    pending:['Ожидает','amber'],
    dispute:['Спор','red'],
    extension:['Продление','blue'],
    won:['Выиграна','green'],
    lost:['Проиграна','red'],
    canceled:['Отменена','gray']
  };
  const [label, cls] = map[status] || [status,'gray'];
  return `<span class="badge ${cls}">${label}</span>`;
}

function init(){
  const rs = document.getElementById('roleSelect');
  Object.keys(roles).forEach(key=>{
    const opt = document.createElement('option');
    opt.value = key; opt.textContent = roles[key].label;
    rs.appendChild(opt);
  });
  rs.value = state.role;
  rs.addEventListener('change', e => {
    state.role = e.target.value;
    const allowed = roles[state.role].sections.map(s=>s[0]);
    if(!allowed.includes(state.page)) state.page = allowed[0];
    render();
  });

  document.getElementById('openJournalBtn').addEventListener('click', ()=>{
    state.page = 'journal'; render();
  });

  render();
}

function render(){
  renderNav();
  renderHeader();
  renderMain();
  renderDetail();
}

function renderNav(){
  const nav = document.getElementById('navMenu');
  nav.innerHTML = roles[state.role].sections.map(([id,label])=>`
    <button class="nav-item ${state.page===id?'active':''}" onclick="goPage('${id}')">
      <span>${label}</span><span>›</span>
    </button>
  `).join('');
}

function renderHeader(){
  document.getElementById('pageEyebrow').textContent = roles[state.role].eyebrow;
  const titles = {
    summary:'Сводка',
    registrations:'Реестр регистраций',
    disputes:'Реестр споров',
    catalog:'Каталог участников',
    ratings:'Рейтинги',
    analytics:'Аналитика рынка',
    journal:'Журнал действий',
    violations:'Нарушения и репутация'
  };
  document.getElementById('pageTitle').textContent = titles[state.page] || 'Сводка';
}

function goPage(page){
  state.page = page;
  if(page==='summary') state.detail={type:'welcome'};
  render();
}

function openDetail(type, payload){
  state.detail = {type, payload};
  renderDetail();
}

function renderMain(){
  const el = document.getElementById('mainContent');
  if(state.page==='summary') return el.innerHTML = summaryView();
  if(state.page==='registrations') return el.innerHTML = registrationsView();
  if(state.page==='disputes') return el.innerHTML = disputesView();
  if(state.page==='catalog') return el.innerHTML = catalogView();
  if(state.page==='ratings') return el.innerHTML = ratingsView();
  if(state.page==='analytics') return el.innerHTML = analyticsView();
  if(state.page==='journal') return el.innerHTML = journalView();
  if(state.page==='violations') return el.innerHTML = violationsView();
}

function summaryView(){
  const role = state.role;
  const roleSummary = {
    partner: {
      rep: 'Репутационный статус партнера',
      repValue: '93/100',
      repNote: 'Рейтинг партнера: 93/100',
      tableTitle: 'Мои регистрации',
      tableRows: registrations
    },
    vendor: {
      rep: 'Репутационный статус вендора',
      repValue: '91/100',
      repNote: 'Рейтинг вендора: 91/100',
      tableTitle: 'Входящие и активные регистрации',
      tableRows: registrations
    },
    arbitrage: {
      rep: 'Нагрузка арбитражного контура',
      repValue: '12',
      repNote: 'Дел в текущей очереди рассмотрения',
      tableTitle: 'Дела в работе',
      tableRows: registrations.filter(r=>r.status==='dispute' || r.status==='extension')
    }
  }[role];

  const cards = role==='arbitrage'
    ? [
      ['Приоритетные дела','2','2 дела требуют перехода на финальный уровень','Показывает объем дел с истекающим SLA.'],
      ['Нарушения','1','1 нарушение требует фиксации','Отдельный контур фиксации нарушений влияет на рейтинг.'],
      ['Новые обращения','4','4 новых обращения поступили за сутки','Первичные обращения, ожидающие маршрутизации.'],
      [roleSummary.rep,roleSummary.repValue,roleSummary.repNote,'Операционная сводка по текущей загрузке.']
    ]
    : [
      ['Продления','2','2 регистрации требуют продления','Показывает сделки, где защита скоро истечет и нужно подтвердить активность.'],
      ['Споры и оспаривания','1','1 спор в процессе','Отражает открытые конфликтные кейсы по текущему портфелю.'],
      ['Новые входящие','3','3 новых входящих решения вендоров','Для партнера — ответы вендоров; для вендора — новые регистрации на подтверждение.'],
      [roleSummary.rep,roleSummary.repValue,roleSummary.repNote,'Сводный рейтинг по соблюдению правил, скорости и качеству решений.']
    ];

  return `
    <div class="section-card">
      <div class="section-header">
        <div>
          <div class="section-title">Требуют действий</div>
          <div class="section-subtitle">Приоритетные события, которые требуют перехода к реестрам и процедурным действиям.</div>
        </div>
      </div>
      <div class="section-body">
        <div class="grid-2">
          ${cards.map(c=>`
            <div class="kpi" onclick="openKpi('${c[0]}')">
              <div class="kpi-top"><span class="help" data-tip="${c[3]}">?</span> <span>${c[0]}</span></div>
              <div class="kpi-value">${c[1]}</div>
              <div class="kpi-note">${c[2]}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="split" style="margin-top:16px;">
      <div class="section-card">
        <div class="section-header">
          <div>
            <div class="section-title">${roleSummary.tableTitle}</div>
            <div class="section-subtitle">Список объектов со сжатыми сведениями и переходом в подробную карточку справа.</div>
          </div>
        </div>
        <div class="section-body">
          ${registrationsTable(roleSummary.tableRows.slice(0,4), false)}
        </div>
      </div>

      <div class="section-card">
        <div class="section-header">
          <div>
            <div class="section-title">Сигналы рынка</div>
            <div class="section-subtitle">Обезличенная сводка динамики сегментов и классов решений.</div>
          </div>
        </div>
        <div class="section-body">
          <div class="signal-list">
            ${insights.map((s,i)=>`
              <div class="signal-item" onclick="goPage('analytics'); openDetail('signal', ${i})">
                <div class="signal-title">${s.title}</div>
                <div class="signal-text">${s.text}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function registrationsTable(rows, withToolbar=true){
  return `
    <div class="table-wrap">
      ${withToolbar ? `
        <div class="table-toolbar">
          <div class="toolbar-filters">
            <select class="filter"><option>Статус: все</option><option>Активна</option><option>Ожидает</option><option>Продление</option><option>Спор</option></select>
            <select class="filter"><option>Сегмент: все</option><option>Финансы</option><option>Промышленность</option><option>Логистика</option></select>
            <select class="filter"><option>Класс решений: все</option><option>Discovery</option><option>ITSM</option><option>FinOps</option><option>BI</option></select>
            <select class="filter"><option>Риск: все</option><option>Низкий</option><option>Средний</option><option>Высокий</option></select>
          </div>
        </div>` : ``}
      <table>
        <thead>
          <tr>
            <th>№</th><th>Дата</th><th>Партнер</th><th>Вендор</th><th>Клиент</th><th>Предмет</th><th>Статус <span class="help" data-tip="Текущая стадия процессуального состояния регистрации.">?</span></th><th>Срок</th><th>Риск <span class="help" data-tip="Сводный риск конфликта, просрочки или повторной регистрации.">?</span></th><th>Действия</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((r, idx)=>`
            <tr class="data-row" onclick='openDetail("registration", ${JSON.stringify(JSON.stringify(r))})'>
              <td>${r.id}</td>
              <td>${r.date}</td>
              <td>${r.partner}</td>
              <td>${r.vendor}</td>
              <td>${r.client}</td>
              <td>${r.subject}</td>
              <td>${statusBadge(r.status)}</td>
              <td>${r.deadline}</td>
              <td>${r.risk}</td>
              <td><button class="link-button" onclick='event.stopPropagation(); openDetail("registration", ${JSON.stringify(JSON.stringify(r))})'>Открыть</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function registrationsView(){
  return `
    <div class="section-card">
      <div class="section-header">
        <div>
          <div class="section-title">${state.role==='vendor' ? 'Входящие и активные регистрации' : 'Реестр регистраций'}</div>
          <div class="section-subtitle">Табличный реестр с фильтрами и открытием карточки в правой панели без перехода на новый экран.</div>
        </div>
      </div>
      <div class="section-body">${registrationsTable(registrations, true)}</div>
    </div>
  `;
}

function disputesView(){
  return `
    <div class="section-card">
      <div class="section-header">
        <div>
          <div class="section-title">${state.role==='arbitrage' ? 'Реестр дел' : 'Реестр споров'}</div>
          <div class="section-subtitle">Процессуальные обращения, оспаривания, продления и конфликтные кейсы.</div>
        </div>
      </div>
      <div class="section-body">
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>№</th><th>Сделка</th><th>Тип</th><th>Стороны</th><th>Уровень</th><th>Статус</th><th>SLA</th><th>Действие</th></tr>
            </thead>
            <tbody>
              ${disputes.map(d=>`
                <tr class="data-row" onclick='openDetail("dispute", ${JSON.stringify(JSON.stringify(d))})'>
                  <td>${d.id}</td>
                  <td>${d.deal}</td>
                  <td>${d.type}</td>
                  <td>${d.parties}</td>
                  <td>${d.level}</td>
                  <td>${d.status}</td>
                  <td>${d.sla}</td>
                  <td><button class="link-button" onclick='event.stopPropagation(); openDetail("dispute", ${JSON.stringify(JSON.stringify(d))})'>Открыть</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function catalogView(){
  const active = state.tabs.catalog;
  const data = active==='vendors' ? vendors : partners;
  const cols = active==='vendors'
    ? `<th>Название</th><th>Рейтинг</th><th>Категория</th><th>Активность</th><th>Споры</th><th>Действие</th>`
    : `<th>Название</th><th>Рейтинг</th><th>Специализация</th><th>Win-rate</th><th>Активные сделки</th><th>Действие</th>`;
  return `
    <div class="section-card">
      <div class="section-header">
        <div>
          <div class="section-title">Каталог участников</div>
          <div class="section-subtitle">Поиск и выбор участников рынка по категориям, активности и репутационному статусу.</div>
        </div>
      </div>
      <div class="section-body">
        <div class="segmented" style="margin-bottom:14px">
          <button class="${active==='vendors'?'active':''}" onclick="state.tabs.catalog='vendors'; renderMain()">Вендоры</button>
          <button class="${active==='partners'?'active':''}" onclick="state.tabs.catalog='partners'; renderMain()">Партнеры</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr>${cols}</tr></thead>
            <tbody>
              ${data.map(item=>`
                <tr class="data-row" onclick='openDetail("participant", ${JSON.stringify(JSON.stringify({...item, entity:active}))})'>
                  <td>${item.name}</td>
                  <td>${item.rating}/100</td>
                  <td>${item.category}</td>
                  <td>${item.activity || item.winRate}</td>
                  <td>${item.disputes ?? item.activeDeals}</td>
                  <td><button class="link-button" onclick='event.stopPropagation(); openDetail("participant", ${JSON.stringify(JSON.stringify({...item, entity:active}))})'>Открыть</button></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function ratingsView(){
  const active = state.tabs.ratings;
  const data = active==='vendors' ? vendors : partners;
  return `
    <div class="section-card">
      <div class="section-header">
        <div>
          <div class="section-title">Рейтинги</div>
          <div class="section-subtitle">Отдельный репутационный слой для партнеров и вендоров с методикой расчета и историей изменений.</div>
        </div>
      </div>
      <div class="section-body">
        <div class="segmented" style="margin-bottom:14px">
          <button class="${active==='vendors'?'active':''}" onclick="state.tabs.ratings='vendors'; renderMain()">Вендоры</button>
          <button class="${active==='partners'?'active':''}" onclick="state.tabs.ratings='partners'; renderMain()">Партнеры</button>
        </div>
        <div class="grid-2">
          ${data.map(item=>`
            <div class="detail-box" onclick='openDetail("rating", ${JSON.stringify(JSON.stringify({...item, entity:active}))})' style="cursor:pointer">
              <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start;">
                <div>
                  <div style="font-size:18px;font-weight:700">${item.name}</div>
                  <div class="muted" style="margin-top:6px">${item.category}</div>
                </div>
                <div class="badge blue">${item.rating}/100</div>
              </div>
              <div class="detail-list" style="margin-top:12px">
                <div class="kv"><div class="k">Соблюдение защит</div><div>${Math.max(item.rating-2,70)}/100</div></div>
                <div class="kv"><div class="k">Скорость</div><div>${Math.max(item.rating-5,68)}/100</div></div>
                <div class="kv"><div class="k">Конфликты</div><div>${Math.max(item.rating-9,61)}/100</div></div>
                <div class="kv"><div class="k">Решения</div><div>${Math.max(item.rating-4,66)}/100</div></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderLineSvg(values){
  const w=760,h=220,p=24;
  const min=Math.min(...values), max=Math.max(...values);
  const step=(w-p*2)/(values.length-1);
  const norm = v => h-p-((v-min)/(max-min||1))*(h-p*2);
  const pts = values.map((v,i)=>`${p+i*step},${norm(v)}`).join(' ');
  const circles = values.map((v,i)=>`<circle cx="${p+i*step}" cy="${norm(v)}" r="4" fill="#2643A3"/>`).join('');
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <polyline fill="none" stroke="#2643A3" stroke-width="3" points="${pts}" />
    ${circles}
  </svg>`;
}

function analyticsView(){
  const periodMap = {month:'monthly', quarter:'quarter', year:'year'};
  const vals = analyticsData[periodMap[state.analytics.period]];
  return `
    <div class="section-card">
      <div class="section-header">
        <div>
          <div class="section-title">Аналитика рынка</div>
          <div class="section-subtitle">Обезличенная динамика сегментов и классов решений без раскрытия клиентов, компаний и конкретных участников.</div>
        </div>
      </div>
      <div class="section-body">
        <div class="toolbar-filters" style="margin-bottom:16px">
          <select class="filter" onchange="state.analytics.segment=this.value; renderMain()">
            <option value="all" ${state.analytics.segment==='all'?'selected':''}>Сегмент: все</option>
            <option value="finance" ${state.analytics.segment==='finance'?'selected':''}>Финансы</option>
            <option value="industry" ${state.analytics.segment==='industry'?'selected':''}>Промышленность</option>
            <option value="gov" ${state.analytics.segment==='gov'?'selected':''}>Госсектор</option>
          </select>
          <select class="filter" onchange="state.analytics.clazz=this.value; renderMain()">
            <option value="all" ${state.analytics.clazz==='all'?'selected':''}>Класс решений: все</option>
            <option value="itsm" ${state.analytics.clazz==='itsm'?'selected':''}>ITSM</option>
            <option value="discovery" ${state.analytics.clazz==='discovery'?'selected':''}>Discovery</option>
            <option value="finops" ${state.analytics.clazz==='finops'?'selected':''}>FinOps</option>
            <option value="bi" ${state.analytics.clazz==='bi'?'selected':''}>BI</option>
          </select>
          <select class="filter" onchange="state.analytics.period=this.value; renderMain()">
            <option value="month" ${state.analytics.period==='month'?'selected':''}>Период: месяц</option>
            <option value="quarter" ${state.analytics.period==='quarter'?'selected':''}>Период: квартал</option>
            <option value="year" ${state.analytics.period==='year'?'selected':''}>Период: год</option>
          </select>
        </div>

        <div class="stat-row" style="margin-bottom:16px">
          <div class="stat"><div class="stat-label">Динамика регистраций</div><div class="stat-value">+18%</div></div>
          <div class="stat"><div class="stat-label">Рост / падение</div><div class="stat-value">+32%</div></div>
          <div class="stat"><div class="stat-label">Наиболее активный сегмент</div><div class="stat-value">Финансы</div></div>
          <div class="stat"><div class="stat-label">Наиболее активный класс</div><div class="stat-value">Discovery</div></div>
        </div>

        <div class="grid-2">
          <div class="chart-box">
            <div class="section-title" style="font-size:20px;margin-bottom:10px">Динамика регистраций</div>
            <div class="line-chart">${renderLineSvg(vals)}</div>
          </div>

          <div class="chart-box">
            <div class="section-title" style="font-size:20px;margin-bottom:10px">Распределение</div>
            <div class="bar-grid">
              <div>
                <div class="muted" style="margin-bottom:8px">По сегментам</div>
                <div class="bar-list">
                  ${analyticsData.segments.map(s=>`
                    <div class="bar-item"><div>${s.name}</div><div class="bar-track"><div class="bar-fill" style="width:${s.val}%"></div></div><div>${s.val}</div></div>
                  `).join('')}
                </div>
              </div>
              <div>
                <div class="muted" style="margin-bottom:8px">По классам решений</div>
                <div class="bar-list">
                  ${analyticsData.classes.map(s=>`
                    <div class="bar-item"><div>${s.name}</div><div class="bar-track"><div class="bar-fill" style="width:${s.val}%"></div></div><div>${s.val}</div></div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-card" style="margin-top:16px;box-shadow:none">
          <div class="section-header">
            <div>
              <div class="section-title" style="font-size:20px">Обезличенные инсайты</div>
              <div class="section-subtitle">Агрегированные сигналы для отслеживания объемов рынка, взлетов и падений сегментов и триггеров для стратегий.</div>
            </div>
          </div>
          <div class="section-body">
            <div class="signal-list">
              ${insights.map((s,i)=>`
                <div class="signal-item" onclick='openDetail("signal", ${i})'>
                  <div class="signal-title">${s.title}</div>
                  <div class="signal-text">${s.text}</div>
                </div>`).join('')}
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

function journalView(){
  return `
    <div class="section-card">
      <div class="section-header">
        <div>
          <div class="section-title">Журнал действий</div>
          <div class="section-subtitle">Последовательность процессуальных действий, событий, решений и автоматических сигналов.</div>
        </div>
      </div>
      <div class="section-body">
        <div class="table-wrap">
          <table>
            <thead><tr><th>Дата и время</th><th>Источник</th><th>Событие</th></tr></thead>
            <tbody>
              ${journal.map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function violationsView(){
  return `
    <div class="section-card">
      <div class="section-header">
        <div>
          <div class="section-title">Нарушения и репутация</div>
          <div class="section-subtitle">Фиксация нарушений, их процессуальный статус и влияние на рейтинг участников.</div>
        </div>
      </div>
      <div class="section-body">
        <div class="table-wrap">
          <table>
            <thead><tr><th>№</th><th>Участник</th><th>Тип</th><th>Влияние</th><th>Статус</th></tr></thead>
            <tbody>
              ${violations.map(v=>`
                <tr class="data-row" onclick='openDetail("violation", ${JSON.stringify(JSON.stringify(v))})'>
                  <td>${v.id}</td><td>${v.participant}</td><td>${v.type}</td><td>${v.impact}</td><td>${v.status}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderDetail(){
  const panel = document.getElementById('detailPanel');
  const d = state.detail;
  if(d.type==='welcome'){
    panel.innerHTML = `
      <div class="detail-header">
        <div class="page-eyebrow">Панель сведений</div>
        <div class="detail-title">Рабочая карточка</div>
      </div>
      <div class="detail-body">
        <div class="empty-state">Выберите запись из реестра, уведомление, сигнал или участника. Подробная карточка откроется здесь без перехода на отдельный экран.</div>
      </div>`;
    return;
  }
  if(d.type==='registration'){
    const r = JSON.parse(d.payload);
    panel.innerHTML = `
      <div class="detail-header">
        <div class="page-eyebrow">Карточка регистрации</div>
        <div class="detail-title">${r.id}</div>
        <div style="margin-top:8px">${statusBadge(r.status)}</div>
      </div>
      <div class="detail-body">
        <div>
          <div class="detail-section-title">Основные сведения</div>
          <div class="detail-list">
            <div class="detail-box">
              <div class="kv"><div class="k">Партнер</div><div>${r.partner}</div></div>
              <div class="kv"><div class="k">Вендор</div><div>${r.vendor}</div></div>
              <div class="kv"><div class="k">Клиент</div><div>${r.client}</div></div>
              <div class="kv"><div class="k">Предмет</div><div>${r.subject}</div></div>
              <div class="kv"><div class="k">Сумма</div><div>${r.sum}</div></div>
              <div class="kv"><div class="k">Жизненный цикл <span class="help" data-tip="Итоговое или текущее процессуальное состояние регистрации.">?</span></div><div>${r.lifecycle}</div></div>
            </div>
          </div>
        </div>

        <div>
          <div class="detail-section-title">Подтверждающие материалы</div>
          <div class="detail-list">${r.materials.map(m=>`<div class="detail-box">${m}</div>`).join('')}</div>
        </div>

        <div>
          <div class="detail-section-title">История действий</div>
          <div class="timeline">${r.timeline.map(t=>`<div class="timeline-item">${t}</div>`).join('')}</div>
        </div>

        <div>
          <div class="detail-section-title">Сигналы</div>
          <div class="detail-list">${r.signals.map(s=>`<div class="detail-box">${s}</div>`).join('')}</div>
        </div>

        <div>
          <div class="detail-section-title">Действия</div>
          <div class="action-row">
            <button class="button" onclick="openProcedure('Продление регистрации')">Продлить</button>
            <button class="button button-secondary" onclick="openProcedure('Оспаривание регистрации')">Оспорить</button>
            <button class="button button-secondary" onclick="openProcedure('Открытие спора')">Открыть спор</button>
            <button class="button button-danger" onclick="openProcedure('Снятие регистрации')">Снять</button>
          </div>
        </div>
      </div>`;
    return;
  }
  if(d.type==='dispute'){
    const x = JSON.parse(d.payload);
    panel.innerHTML = `
      <div class="detail-header">
        <div class="page-eyebrow">Карточка спора</div>
        <div class="detail-title">${x.id}</div>
      </div>
      <div class="detail-body">
        <div class="detail-box">
          <div class="kv"><div class="k">Сделка</div><div>${x.deal}</div></div>
          <div class="kv"><div class="k">Тип</div><div>${x.type}</div></div>
          <div class="kv"><div class="k">Стороны</div><div>${x.parties}</div></div>
          <div class="kv"><div class="k">Уровень</div><div>${x.level}</div></div>
          <div class="kv"><div class="k">Статус</div><div>${x.status}</div></div>
          <div class="kv"><div class="k">SLA</div><div>${x.sla}</div></div>
        </div>
        <div>
          <div class="detail-section-title">Основание</div>
          <div class="detail-box">${x.basis}</div>
        </div>
        <div>
          <div class="detail-section-title">Аргументы</div>
          <div class="detail-list">${x.arguments.map(a=>`<div class="detail-box">${a}</div>`).join('')}</div>
        </div>
        <div>
          <div class="detail-section-title">Материалы</div>
          <div class="detail-list">${x.materials.map(a=>`<div class="detail-box">${a}</div>`).join('')}</div>
        </div>
        <div>
          <div class="detail-section-title">Результат автопроверки</div>
          <div class="detail-box">${x.auto}</div>
        </div>
        <div>
          <div class="detail-section-title">Решение уровней</div>
          <div class="detail-list">${x.decisions.map(a=>`<div class="detail-box">${a}</div>`).join('')}</div>
        </div>
        <div>
          <div class="detail-section-title">Финальное решение</div>
          <div class="detail-box">${x.final}</div>
        </div>
      </div>`;
    return;
  }
  if(d.type==='participant'){
    const x = JSON.parse(d.payload);
    panel.innerHTML = `
      <div class="detail-header">
        <div class="page-eyebrow">Карточка участника</div>
        <div class="detail-title">${x.name}</div>
      </div>
      <div class="detail-body">
        <div class="detail-box">
          <div class="kv"><div class="k">Тип</div><div>${x.entity==='vendors' ? 'Вендор' : 'Партнер'}</div></div>
          <div class="kv"><div class="k">Рейтинг</div><div>${x.rating}/100</div></div>
          <div class="kv"><div class="k">Категория</div><div>${x.category}</div></div>
          <div class="kv"><div class="k">${x.entity==='vendors' ? 'Активность' : 'Win-rate'}</div><div>${x.activity || x.winRate}</div></div>
          <div class="kv"><div class="k">${x.entity==='vendors' ? 'Споры' : 'Активные сделки'}</div><div>${x.disputes ?? x.activeDeals}</div></div>
        </div>
        <div><div class="detail-section-title">История</div><div class="detail-box">${x.history}</div></div>
        <div><div class="detail-section-title">Нарушения</div><div class="detail-box">${x.violations}</div></div>
      </div>`;
    return;
  }
  if(d.type==='rating'){
    const x = JSON.parse(d.payload);
    panel.innerHTML = `
      <div class="detail-header">
        <div class="page-eyebrow">Карточка рейтинга</div>
        <div class="detail-title">${x.name}</div>
      </div>
      <div class="detail-body">
        <div class="detail-box">
          <div class="kv"><div class="k">Итог</div><div>${x.rating}/100</div></div>
          <div class="kv"><div class="k">Соблюдение защит</div><div>${Math.max(x.rating-2,70)}/100</div></div>
          <div class="kv"><div class="k">Скорость</div><div>${Math.max(x.rating-5,68)}/100</div></div>
          <div class="kv"><div class="k">Конфликты</div><div>${Math.max(x.rating-9,61)}/100</div></div>
          <div class="kv"><div class="k">Решения</div><div>${Math.max(x.rating-4,66)}/100</div></div>
        </div>
        <div>
          <div class="detail-section-title">История изменений</div>
          <div class="timeline">
            <div class="timeline-item">Январь: ${Math.max(x.rating-4,70)}/100</div>
            <div class="timeline-item">Февраль: ${Math.max(x.rating-2,72)}/100</div>
            <div class="timeline-item">Март: ${x.rating}/100</div>
          </div>
        </div>
      </div>`;
    return;
  }
  if(d.type==='signal'){
    const x = insights[d.payload];
    panel.innerHTML = `
      <div class="detail-header">
        <div class="page-eyebrow">Сигнал рынка</div>
        <div class="detail-title">Обезличенный аналитический сигнал</div>
      </div>
      <div class="detail-body">
        <div class="detail-box"><strong>${x.title}</strong><div class="muted" style="margin-top:8px">${x.text}</div></div>
        <div class="detail-box">
          <div class="kv"><div class="k">Сегмент</div><div>Агрегированный</div></div>
          <div class="kv"><div class="k">Класс решений</div><div>Без раскрытия участников</div></div>
          <div class="kv"><div class="k">Источник</div><div>Реестр обезличенных регистраций</div></div>
        </div>
      </div>`;
    return;
  }
  if(d.type==='violation'){
    const x = JSON.parse(d.payload);
    panel.innerHTML = `
      <div class="detail-header">
        <div class="page-eyebrow">Фиксация нарушения</div>
        <div class="detail-title">${x.id}</div>
      </div>
      <div class="detail-body">
        <div class="detail-box">
          <div class="kv"><div class="k">Участник</div><div>${x.participant}</div></div>
          <div class="kv"><div class="k">Тип</div><div>${x.type}</div></div>
          <div class="kv"><div class="k">Влияние на рейтинг</div><div>${x.impact}</div></div>
          <div class="kv"><div class="k">Статус</div><div>${x.status}</div></div>
        </div>
      </div>`;
    return;
  }
}

function openKpi(label){
  const routeMap = {
    'Продления':'registrations',
    'Споры и оспаривания':'disputes',
    'Новые входящие':'registrations',
    'Репутационный статус партнера':'ratings',
    'Репутационный статус вендора':'ratings',
    'Нагрузка арбитражного контура':'disputes',
    'Приоритетные дела':'disputes',
    'Нарушения':'violations',
    'Новые обращения':'disputes'
  };
  state.page = routeMap[label] || 'summary';
  render();
}

function openProcedure(title){
  document.getElementById('modalEyebrow').textContent = 'Процедура';
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = `
    <div class="form-grid">
      <div><div class="field-label">Основание</div><input class="input" value="${title}" /></div>
      <div><div class="field-label">Срок</div><input class="input" value="В рамках демо" /></div>
    </div>
    <div><div class="field-label">Комментарий</div><textarea class="textarea">Демо-форма процедуры. Данные не сохраняются, но логика имитирует рабочую систему.</textarea></div>
    <div class="muted">После подтверждения окно закроется. В рабочей системе здесь был бы маршрут согласования, арбитража или продления.</div>
  `;
  document.getElementById('modalBackdrop').classList.remove('hidden');
}

function closeModal(){
  document.getElementById('modalBackdrop').classList.add('hidden');
}

window.goPage = goPage;
window.openDetail = openDetail;
window.openProcedure = openProcedure;
window.closeModal = closeModal;
window.state = state;
window.renderMain = renderMain;

init();
