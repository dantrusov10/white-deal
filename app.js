const state = {
  role: 'partner',
  section: 'dashboard',
  newDealStep: 1,
  newDealForm: {
    type: 'Проект',
    vendor: 'Инферит ИТМен',
    title: 'Модернизация CMDB и инвентаризации ИТ-активов',
    client: 'АО ВолгаЭнерго',
    inn: '7728451903',
    amount: '27 800 000 ₽',
    closeDate: '30.06.2026',
    description: 'Комплексный проект по инвентаризации инфраструктуры, нормализации каталога ПО и построению управленческой отчетности для CIO.',
    basis: 'Проведены интервью, подтвержден интерес ИТ-директора, подготовлен верхнеуровневый контур решения и предварительная финансовая модель.',
    docs: 'Коммерческое предложение v0.3, протокол встречи от 14.03, список пилотных серверов и рабочих мест.',
  },
};

const roles = {
  partner: {
    title: 'Кабинет партнера',
    subtitle: 'Защищенные сделки, продления, жалобы и единый интерфейс взаимодействия с вендорами.',
    nav: [
      ['dashboard','Дашборд','Главный обзор портфеля'],
      ['newDeal','Новая регистрация','Подача сделки или проекта'],
      ['portfolio','Мои сделки','Весь список защит и статусов'],
      ['extend','Продления','Подтверждение активности'],
      ['complaints','Жалобы и споры','Апелляции и обращения'],
      ['history','История','Журнал действий'],
      ['ratings','Рейтинги','Репутационный слой рынка'],
    ],
    kpis: [
      ['Активные защиты','18','+3 за неделю'],
      ['Требуют продления','2','1 срочно до завтра'],
      ['Открытые споры','1','SLA 18 часов'],
      ['Рейтинг партнера','93/100','Platinum tier'],
    ],
  },
  vendor: {
    title: 'Кабинет вендора',
    subtitle: 'Входящие регистрации, продления, конкурентные сигналы и контроль каналов продаж.',
    nav: [
      ['dashboard','Дашборд','Операционная сводка вендора'],
      ['inbox','Входящие регистрации','Подтвердить или мотивированно отклонить'],
      ['portfolio','Портфель защит','Все активные привязки'],
      ['alerts','Конкурентные алерты','Обезличенные сигналы по рынку'],
      ['disputes','Споры и апелляции','Жалобы и спорные случаи'],
      ['ratings','Рейтинг партнеров','Надежность участников'],
      ['analytics','Аналитика','Динамика, конверсии, паттерны'],
    ],
    kpis: [
      ['Новые регистрации','7','3 требуют решения сегодня'],
      ['Активные защиты','64','Средний срок 29 дней'],
      ['Рейтинг вендора','91/100','Надежный оператор канала'],
      ['Выявлено конфликтов','4','2 уже урегулированы'],
    ],
  },
  arbitrage: {
    title: 'Операционный центр арбитража',
    subtitle: 'Независимая проверка, контроль SLA, разбор обращений и репутационный след участников.',
    nav: [
      ['dashboard','Операционный центр','Сводка по системе'],
      ['queue','Очередь проверки','Кейсы на входе'],
      ['cases','Арбитражные кейсы','Подробный разбор'],
      ['decisions','Решения и SLA','Финальные итоги'],
      ['ratings','Репутационный контур','Кто как себя ведет'],
      ['history','Журнал действий','Лог арбитража'],
    ],
    kpis: [
      ['В очереди','12','4 новых кейса за сутки'],
      ['Нарушение SLA','1','Требует приоритизации'],
      ['Авторазбор','73%','без участия человека'],
      ['Репутационный эффект','+2.4','средний рост доверия'],
    ],
  },
  market: {
    title: 'Публичный обзор рынка',
    subtitle: 'Обезличенная прозрачность до торгов: кто активен, где растет конкуренция и как меняется рейтинг доверия.',
    nav: [
      ['dashboard','Обзор рынка','Основные показатели'],
      ['feed','Лента регистраций','Обезличенные события'],
      ['ratings','Публичные рейтинги','Надежность участников'],
      ['patterns','Паттерны конкуренции','Классы решений и динамика'],
      ['method','Как это работает','Правила и механика'],
    ],
    kpis: [
      ['Новых регистраций','147','+18% к прошлой неделе'],
      ['Активных вендоров','26','11 с рейтингом 85+'],
      ['Активных партнеров','94','24 platinum/gold'],
      ['Открытых споров','9','SLA 94%'],
    ],
  },
};

const deals = [
  {id:'DR-2026-00124', title:'Модернизация CMDB и инвентаризации ИТ-активов', client:'АО ВолгаЭнерго', masked:'Крупная энергокомпания, ПФО', vendor:'Инферит ИТМен', partner:'Softline Integration', status:'active', statusLabel:'Защита активна', amount:'27 800 000 ₽', closeDate:'30.06.2026', expires:'15.05.2026', risk:'Низкий', score:86, tags:['ITAM','CMDB','Импортозамещение']},
  {id:'DR-2026-00129', title:'Пилот FinOps и контроль неиспользуемых VM', client:'ООО СеверЛогистика', masked:'Логистический холдинг, ЦФО', vendor:'CloudMaster', partner:'Rubytech Solutions', status:'pending', statusLabel:'Ожидает решения вендора', amount:'8 400 000 ₽', closeDate:'12.07.2026', expires:'—', risk:'Средний', score:74, tags:['FinOps','Cloud','Оптимизация затрат']},
  {id:'DR-2026-00111', title:'Комплексное BI + каталог ПО + витрина отчетности', client:'ПАО РегионБанк', masked:'Федеральный банк, ТОП-50', vendor:'Polymatica', partner:'T1 Infra Projects', status:'extension', statusLabel:'Требует продления', amount:'42 000 000 ₽', closeDate:'25.08.2026', expires:'02.04.2026', risk:'Средний', score:58, tags:['BI','Software Catalog','Board Reporting']},
  {id:'DR-2026-00103', title:'Сервис-деск и управление изменениями', client:'ГК СтройИнвест', masked:'Строительный холдинг, СЗФО', vendor:'Naumen', partner:'ICL Services', status:'dispute', statusLabel:'Спор / арбитраж', amount:'19 600 000 ₽', closeDate:'19.05.2026', expires:'08.04.2026', risk:'Высокий', score:68, tags:['ITSM','Change','SLA']},
];

const disputes = [
  {id:'ARB-2026-0081', dealId:'DR-2026-00103', type:'Попытка параллельной регистрации', level:'Уровень 2 — специалист', status:'В рассмотрении', sla:'18 часов', summary:'Партнер сообщает, что второй участник пытается получить подтверждение по уже действующей защите.'},
  {id:'ARB-2026-0072', dealId:'DR-2026-00094', type:'Отказ в продлении', level:'Уровень 3 — руководитель проверки', status:'Назначено финальное решение', sla:'6 часов', summary:'Партнер загрузил доказательства активности; вендор указал на недостаточный прогресс и просит снять защиту.'},
  {id:'ARB-2026-0065', dealId:'DR-2026-00088', type:'Непрозрачный отказ', level:'Уровень 1 — автоматический', status:'Закрыто', sla:'Завершено', summary:'Система выявила отсутствие дубля и нарушение внутреннего правила вендора. Рекомендация — пересмотр решения.'},
];

const publicFeed = [
  {date:'30 марта', partner:'Softline Integration', vendor:'Polymatica', note:'Зарегистрирован обезличенный проект класса BI + Data Catalog в банковском секторе.', competition:'Зафиксировано 2 смежных вендора и 1 технологический партнер.'},
  {date:'29 марта', partner:'Rubytech Solutions', vendor:'CloudMaster', note:'Зарегистрирована сделка класса FinOps / Cloud cost control в логистическом холдинге.', competition:'Зафиксирована связка с 1 интеграционным партнером.'},
  {date:'28 марта', partner:'ICL Services', vendor:'Naumen', note:'Открыт обезличенный проект класса ITSM / Change Management.', competition:'Наблюдается конкуренция 2 партнеров на adjacent-решения без нарушения защиты.'},
];

const ratings = {
  vendors: [
    ['Инферит ИТМен',96,'Эталон поведения'],
    ['Polymatica',91,'Надежный'],
    ['CloudMaster',88,'Стабильный'],
    ['Billogic',89,'Надежный'],
    ['Naumen',84,'Под наблюдением'],
  ],
  partners: [
    ['Softline Integration',93,'Platinum'],
    ['Rubytech Solutions',87,'Gold'],
    ['ICL Services',82,'Gold'],
    ['T1 Infra Projects',85,'Silver'],
  ]
};

const historyLog = [
  ['30.03 11:42','DR-2026-00129','Партнер подал новую регистрацию','Система передала вендору на подтверждение'],
  ['30.03 10:10','DR-2026-00111','Система запросила продление','Партнеру отправлен запрос на доказательство активности'],
  ['29.03 16:21','ARB-2026-0081','Жалоба повышена на уровень 2','Назначен специалист проверки'],
  ['29.03 09:15','DR-2026-00124','Вендор подтвердил продление','Защита продлена еще на 30 дней'],
  ['28.03 18:03','DR-2026-00103','Обнаружена попытка дубля','Создан спорный кейс в арбитраже'],
];

function el(id){ return document.getElementById(id); }

function setRole(role){
  state.role = role;
  state.section = roles[role].nav[0][0];
  render();
}
function setSection(section){ state.section = section; render(); }

function badgeClass(status){
  return status === 'active' ? 'success' : status === 'pending' || status === 'extension' ? 'warning' : status === 'dispute' ? 'danger' : 'info';
}

function renderRoleSwitcher(){
  el('roleSwitcher').innerHTML = Object.entries(roles).map(([key, value]) => `
    <button class="role-chip ${state.role===key?'active':''}" onclick="setRole('${key}')">${value.title}</button>
  `).join('');
}

function renderNav(){
  el('navList').innerHTML = roles[state.role].nav.map(([id, title, sub]) => `
    <button class="nav-link ${state.section===id?'active':''}" onclick="setSection('${id}')">${title}<small>${sub}</small></button>
  `).join('');
}

function renderHeader(){
  el('pageTitle').textContent = roles[state.role].title;
  el('pageSubtitle').textContent = roles[state.role].subtitle;
  el('heroAction').onclick = () => {
    if(state.role==='partner'){ state.section='newDeal'; }
    else if(state.role==='vendor'){ state.section='inbox'; }
    else if(state.role==='arbitrage'){ state.section='queue'; }
    else { state.section='feed'; }
    render();
  };
}

function renderKpis(){
  el('kpis').innerHTML = roles[state.role].kpis.map(([label, value, note]) => `
    <div class="kpi">
      <div class="kpi__top"><div class="kpi__label">${label}</div><div>◌</div></div>
      <div class="kpi__value">${value}</div>
      <div class="kpi__note">${note}</div>
    </div>
  `).join('');
}

function dealCard(deal, actions=[]){
  return `
  <div class="deal">
    <div class="deal__head">
      <div>
        <div class="badges">
          <span class="badge ${badgeClass(deal.status)}">${deal.statusLabel}</span>
          <span class="badge">${deal.id}</span>
        </div>
        <div class="deal__title">${deal.title}</div>
      </div>
      <div class="badge">${deal.amount}</div>
    </div>
    <div class="deal__meta">
      <div><strong>Клиент:</strong> ${deal.client}</div>
      <div><strong>Вендор:</strong> ${deal.vendor}</div>
      <div><strong>Партнер:</strong> ${deal.partner}</div>
      <div><strong>План закрытия:</strong> ${deal.closeDate}</div>
      <div><strong>Защита до:</strong> ${deal.expires}</div>
      <div><strong>Индекс активности:</strong> ${deal.score}/100 • риск: ${deal.risk}</div>
    </div>
    <div class="badges" style="margin-top:12px">${deal.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div>
    ${actions.length ? `<div class="actions">${actions.join('')}</div>` : ''}
  </div>`;
}

function renderPartnerDashboard(){
  return `
  <div class="grid grid--2">
    <section class="card">
      <div class="card__header"><h3 class="card__title">Приоритетные сделки</h3><p class="card__subtitle">Предзаполненный портфель для демонстрации реального сценария работы.</p></div>
      <div class="card__body deal-list">
        ${dealCard(deals[0],[`<button class="btn btn--secondary" onclick="openDeal('DR-2026-00124')">Открыть карточку</button>`])}
        ${dealCard(deals[1],[`<button class="btn btn--secondary" onclick="openDeal('DR-2026-00129')">Открыть карточку</button>`])}
        ${dealCard(deals[2],[`<button class="btn btn--secondary" onclick="goToExtend()">Продлить защиту</button>`])}
      </div>
    </section>
    <div class="grid">
      <section class="card"><div class="card__header"><h3 class="card__title">Ключевые уведомления</h3><p class="card__subtitle">Что требует действия прямо сейчас.</p></div>
        <div class="card__body alert-list">
          <div class="alert-item"><small>Срок защиты</small>Через 3 дня истекает защита по DR-2026-00111</div>
          <div class="alert-item"><small>Решение вендора</small>CloudMaster рассматривает регистрацию DR-2026-00129</div>
          <div class="alert-item"><small>Рыночный сигнал</small>По одному из ваших проектов замечен смежный технологический партнер</div>
        </div></section>
      <section class="card"><div class="card__header"><h3 class="card__title">Прозрачность по рынку</h3><p class="card__subtitle">Обезличенная видимость конкурентной активности.</p></div>
        <div class="card__body simple-list">
          ${publicFeed.slice(0,2).map(x=>`<div class="simple-item"><small>${x.date}</small><strong>${x.note}</strong><div style="margin-top:8px;color:var(--muted)">${x.competition}</div></div>`).join('')}
        </div></section>
    </div>
  </div>`;
}

function renderNewDeal(){
  const steps = ['Объект регистрации','Коммерческий контур','Доказательная база','Подтверждение'];
  const f = state.newDealForm;
  return `
  <section class="card">
    <div class="card__header"><h3 class="card__title">Новая регистрация сделки / проекта</h3><p class="card__subtitle">Поля можно менять. Дальше прототип переведет на следующий логический экран.</p></div>
    <div class="card__body">
      <div class="stepper">${steps.map((s,i)=>`<div class="step ${state.newDealStep===i+1?'active':''}">${i+1}. ${s}</div>`).join('')}</div>
      ${state.newDealStep===1 ? `
        <div class="form-grid">
          <div class="field"><label>Тип регистрации</label><select onchange="upd('type',this.value)"><option ${f.type==='Проект'?'selected':''}>Проект</option><option ${f.type==='Сделка'?'selected':''}>Сделка</option></select></div>
          <div class="field"><label>Вендор</label><select onchange="upd('vendor',this.value)">${['Инферит ИТМен','CloudMaster','Polymatica','Naumen','Billogic'].map(v=>`<option ${f.vendor===v?'selected':''}>${v}</option>`).join('')}</select></div>
          <div class="field field--full"><label>Название проекта / сделки</label><input value="${f.title}" oninput="upd('title',this.value)"></div>
          <div class="field"><label>Компания клиента</label><input value="${f.client}" oninput="upd('client',this.value)"></div>
          <div class="field"><label>ИНН / идентификатор клиента</label><input value="${f.inn}" oninput="upd('inn',this.value)"></div>
        </div>` : ''}
      ${state.newDealStep===2 ? `
        <div class="form-grid">
          <div class="field"><label>Планируемая сумма</label><input value="${f.amount}" oninput="upd('amount',this.value)"></div>
          <div class="field"><label>Плановая дата закрытия</label><input value="${f.closeDate}" oninput="upd('closeDate',this.value)"></div>
          <div class="field field--full"><label>Краткое описание проекта</label><textarea oninput="upd('description',this.value)">${f.description}</textarea></div>
        </div>
        <div class="mini-note" style="margin-top:16px">Условная логика: система готовит индекс достоверности заявки и проверяет вероятность дубля до передачи вендору.</div>` : ''}
      ${state.newDealStep===3 ? `
        <div class="grid grid--2">
          <div class="form-grid">
            <div class="field field--full"><label>Основание для регистрации</label><textarea oninput="upd('basis',this.value)">${f.basis}</textarea></div>
            <div class="field field--full"><label>Документы / комментарий по доказательной базе</label><textarea oninput="upd('docs',this.value)">${f.docs}</textarea></div>
          </div>
          <div>
            <div class="inline-stats">
              <div class="inline-stat"><small>Индекс достоверности</small><strong>91/100</strong></div>
              <div class="inline-stat"><small>Вероятность дубля</small><strong>Низкая</strong></div>
              <div class="inline-stat"><small>Рекомендация</small><strong>Передать</strong></div>
            </div>
            <div class="mini-note" style="margin-top:14px">В прототипе показывается логика: сперва валидация системой, только потом уведомление вендора.</div>
          </div>
        </div>` : ''}
      ${state.newDealStep===4 ? `
        <div class="grid grid--2">
          <div class="simple-list">
            <div class="simple-item"><small>Тип</small>${f.type}</div>
            <div class="simple-item"><small>Вендор</small>${f.vendor}</div>
            <div class="simple-item"><small>Клиент</small>${f.client}</div>
            <div class="simple-item"><small>Сумма</small>${f.amount}</div>
            <div class="simple-item"><small>Предмет</small>${f.title}</div>
          </div>
          <div class="simple-list">
            <div class="simple-item"><small>Что будет дальше</small>Система присвоит номер регистрации, покажет индекс автопроверки и переведет заявку во входящие вендора.</div>
            <div class="simple-item"><small>Сценарий прототипа</small>После отправки откроется модальное окно и кнопка перехода в кабинет вендора.</div>
          </div>
        </div>` : ''}
      <div class="actions">
        <button class="btn btn--secondary" ${state.newDealStep===1?'disabled':''} onclick="stepDeal(-1)">Назад</button>
        ${state.newDealStep<4 ? `<button class="btn btn--primary" onclick="stepDeal(1)">Далее</button>` : `<button class="btn btn--primary" onclick="submitDeal()">Отправить на регистрацию</button>`}
      </div>
    </div>
  </section>`;
}

function renderPortfolio(){
  return `
  <section class="card">
    <div class="card__header"><h3 class="card__title">Портфель сделок</h3><p class="card__subtitle">Все защиты, статусы, сроки, связанные действия и псевдо-реальные данные.</p></div>
    <div class="card__body deal-list">${deals.map(d=>dealCard(d,[`<button class="btn btn--secondary" onclick="openDeal('${d.id}')">Открыть</button>`])).join('')}</div>
  </section>`;
}

function renderExtend(){
  return `
  <div class="grid grid--2">
    <section class="card">
      <div class="card__header"><h3 class="card__title">Запрос на продление защиты</h3><p class="card__subtitle">Партнер должен доказать, что реально ведет проект.</p></div>
      <div class="card__body">
        <div class="form-grid">
          <div class="field"><label>Сделка</label><select><option>DR-2026-00111 — BI + каталог ПО + отчетность</option><option>DR-2026-00124 — CMDB и инвентаризация</option></select></div>
          <div class="field"><label>Срок продления</label><select><option>30 дней</option><option>45 дней</option><option>60 дней</option></select></div>
          <div class="field field--full"><label>Что сделано за период защиты</label><textarea>Проведены 2 рабочие встречи, уточнен состав пилота, согласован черновик KPI для финансовой функции, подготовлена обновленная архитектурная схема.</textarea></div>
          <div class="field field--full"><label>Какие документы / доказательства приложены</label><textarea>Протокол встречи от 24.03, обновленное КП v0.5, письмо клиента с подтверждением продолжения проработки, список пилотных сущностей.</textarea></div>
        </div>
        <div class="actions"><button class="btn btn--primary" onclick="submitExtension()">Отправить на продление</button></div>
      </div>
    </section>
    <section class="card">
      <div class="card__header"><h3 class="card__title">Как это оценивается</h3><p class="card__subtitle">Прототип показывает механику контроля качества продления.</p></div>
      <div class="card__body simple-list">
        <div class="simple-item"><small>Автопроверка</small>Полнота описания активности, наличие документов, срок с последнего действия, связность доказательной базы.</div>
        <div class="simple-item"><small>Порог допуска</small>Индекс 70+/100 — передача вендору. Ниже — уход на допроверку специалистом.</div>
        <div class="simple-item"><small>Оспаривание</small>Вендор может мотивированно возразить, партнер — подать апелляцию в арбитраж.</div>
      </div>
    </section>
  </div>`;
}

function renderComplaints(){
  return `
  <div class="grid grid--2">
    <section class="card">
      <div class="card__header"><h3 class="card__title">Подать жалобу / апелляцию</h3><p class="card__subtitle">Сценарий обращения в независимый арбитраж.</p></div>
      <div class="card__body">
        <div class="form-grid">
          <div class="field"><label>Повод обращения</label><select><option>Попытка параллельной регистрации</option><option>Непрозрачный отказ</option><option>Отказ в продлении</option><option>Нарушение защиты вендором</option></select></div>
          <div class="field"><label>Связанная сделка</label><select><option>DR-2026-00103 — Сервис-деск и управление изменениями</option><option>DR-2026-00111 — BI + каталог ПО + отчетность</option></select></div>
          <div class="field field--full"><label>Описание жалобы</label><textarea>Партнер считает, что по активной сделке была допущена попытка параллельной регистрации со стороны другого участника канала, несмотря на действующую защиту и историю активности.</textarea></div>
          <div class="field field--full"><label>Что просим сделать</label><textarea>Проверить таймлайн, подтвердить действующую защиту, зафиксировать попытку нарушения и отразить результат в репутационном контуре.</textarea></div>
        </div>
        <div class="actions"><button class="btn btn--primary" onclick="submitComplaint()">Отправить в арбитраж</button></div>
      </div>
    </section>
    <section class="card">
      <div class="card__header"><h3 class="card__title">Текущие обращения</h3><p class="card__subtitle">Псевдо-реальные кейсы для демонстрации.</p></div>
      <div class="card__body simple-list">${disputes.map(d=>`<div class="simple-item"><small>${d.id} • ${d.level}</small><strong>${d.type}</strong><div style="margin-top:8px;color:var(--muted)">${d.summary}</div></div>`).join('')}</div>
    </section>
  </div>`;
}

function renderHistory(){
  return `
    <section class="card">
      <div class="card__header"><h3 class="card__title">Журнал действий</h3><p class="card__subtitle">История системы по портфелю пользователя.</p></div>
      <div class="card__body"><div class="table-wrap"><table><thead><tr><th>Время</th><th>Объект</th><th>Событие</th><th>Комментарий</th></tr></thead><tbody>${historyLog.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table></div></div>
    </section>`;
}

function renderRatings(type='partners'){
  const rows = type==='partners' ? ratings.partners : ratings.vendors;
  return `
  <section class="card">
    <div class="card__header"><h3 class="card__title">${type==='partners'?'Рейтинг партнеров':'Рейтинг вендоров'}</h3><p class="card__subtitle">Публичный и полуоткрытый контур доверия.</p></div>
    <div class="card__body">
      <div class="tabs">
        <button class="tab ${type==='partners'?'active':''}" onclick="setRatingsTab('partners')">Партнеры</button>
        <button class="tab ${type==='vendors'?'active':''}" onclick="setRatingsTab('vendors')">Вендоры</button>
      </div>
      <div class="simple-list">${rows.map(r=>`<div class="rating-row"><div><strong>${r[0]}</strong><div style="color:var(--muted);font-size:13px;margin-top:4px">${r[2]}</div></div><div style="min-width:210px"><div style="display:flex;justify-content:space-between"><span>${r[1]}/100</span><span>${r[1] >= 90 ? 'Высокое доверие' : r[1] >= 85 ? 'Стабильно' : 'Под наблюдением'}</span></div><div class="progress"><span style="width:${r[1]}%"></span></div></div></div>`).join('')}</div>
    </div>
  </section>`;
}

function renderVendorDashboard(){
  return `
  <div class="grid grid--2">
    <section class="card"><div class="card__header"><h3 class="card__title">Регистрации, ожидающие решения</h3><p class="card__subtitle">Система уже отфильтровала мусор и проверила достоверность до передачи вендору.</p></div>
      <div class="card__body deal-list">
        ${dealCard(deals[1],[`<button class="btn btn--primary" onclick="approveDeal('DR-2026-00129')">Подтвердить</button>`,`<button class="btn btn--secondary" onclick="rejectDeal('DR-2026-00129')">Отклонить</button>`])}
        ${dealCard(deals[2],[`<button class="btn btn--primary" onclick="approveExtension()">Продлить</button>`,`<button class="btn btn--secondary" onclick="sendToArbitrage()">Оспорить</button>`])}
      </div></section>
    <div class="grid">
      <section class="card"><div class="card__header"><h3 class="card__title">Конкурентные алерты</h3><p class="card__subtitle">Обезличенные сигналы по смежным и конкурентным регистрациям.</p></div>
      <div class="card__body alert-list">
        <div class="alert-item"><small>DR-2026-00124</small>Тот же партнер зарегистрировал 2 смежных решения у соседних вендоров.</div>
        <div class="alert-item"><small>DR-2026-00129</small>Зафиксирован 1 технологический партнер в составе комплексного предложения.</div>
        <div class="alert-item"><small>Класс BI + Data Catalog</small>За последние 7 дней конкуренция выросла на 18%.</div>
      </div></section>
      <section class="card"><div class="card__header"><h3 class="card__title">Рейтинг поведения</h3><p class="card__subtitle">Из чего складывается доверие к вендору.</p></div>
      <div class="card__body simple-list">
        <div class="simple-item"><small>Индекс прозрачности</small><strong>91/100</strong><div class="progress"><span style="width:91%"></span></div></div>
        <div class="simple-item"><small>Индекс скорости решений</small><strong>88/100</strong><div class="progress"><span style="width:88%"></span></div></div>
        <div class="simple-item"><small>Индекс соблюдения защит</small><strong>95/100</strong><div class="progress"><span style="width:95%"></span></div></div>
      </div></section>
    </div>
  </div>`;
}

function renderInbox(){ return renderVendorDashboard(); }
function renderVendorPortfolio(){ return renderPortfolio(); }
function renderAlerts(){ return renderVendorDashboard(); }
function renderDisputes(){
  return `
  <section class="card">
    <div class="card__header"><h3 class="card__title">Споры и апелляции</h3><p class="card__subtitle">Все спорные ситуации, статусы и сроки решения.</p></div>
    <div class="card__body simple-list">${disputes.map(d=>`<div class="simple-item"><small>${d.id} • ${d.level} • SLA ${d.sla}</small><strong>${d.type}</strong><div style="margin-top:8px;color:var(--muted)">${d.summary}</div><div class="actions"><button class="btn btn--secondary" onclick="openDispute('${d.id}')">Открыть кейс</button></div></div>`).join('')}</div>
  </section>`;
}
function renderAnalytics(){
  return `
    <div class="grid grid--cards">
      <section class="card"><div class="card__header"><h3 class="card__title">Динамика регистраций</h3><p class="card__subtitle">Сводка по последним 8 неделям.</p></div><div class="card__body simple-list"><div class="simple-item"><small>Неделя 1</small><strong>31 регистрации</strong></div><div class="simple-item"><small>Неделя 2</small><strong>37 регистраций</strong></div><div class="simple-item"><small>Неделя 3</small><strong>42 регистрации</strong></div><div class="simple-item"><small>Неделя 4</small><strong>39 регистраций</strong></div></div></section>
      <section class="card"><div class="card__header"><h3 class="card__title">Конверсия по партнерам</h3><p class="card__subtitle">Псевдо-реальные цифры для демонстрации ценности аналитики.</p></div><div class="card__body simple-list"><div class="simple-item"><small>Softline Integration</small><strong>41% win rate</strong></div><div class="simple-item"><small>Rubytech Solutions</small><strong>38% win rate</strong></div><div class="simple-item"><small>T1 Infra Projects</small><strong>32% win rate</strong></div></div></section>
    </div>`;
}

function renderArbitrageDashboard(){
  return `
  <div class="grid grid--2">
    <section class="card"><div class="card__header"><h3 class="card__title">Очередь текущих дел</h3><p class="card__subtitle">Что должен видеть независимый оператор системы.</p></div><div class="card__body simple-list">${disputes.map(d=>`<div class="simple-item"><small>${d.id} • ${d.level} • ${d.status}</small><strong>${d.type}</strong><div style="margin-top:8px;color:var(--muted)">${d.summary}</div></div>`).join('')}</div></section>
    <section class="card"><div class="card__header"><h3 class="card__title">Как устроена независимая проверка</h3><p class="card__subtitle">Три уровня принятия решения.</p></div><div class="card__body simple-list"><div class="simple-item"><small>Уровень 1 — авто</small><strong>Проверка дублей, полноты данных, сходства клиента и предмета проекта.</strong></div><div class="simple-item"><small>Уровень 2 — специалист</small><strong>Верификация документов, обзвон, сверка активности и контекста.</strong></div><div class="simple-item"><small>Уровень 3 — финальное решение</small><strong>Руководитель проверки выносит итог и влияет на публичный рейтинг.</strong></div></div></section>
  </div>`;
}
function renderQueue(){ return renderArbitrageDashboard(); }
function renderCases(){ return renderDisputes(); }
function renderDecisions(){
  return `
    <section class="card">
      <div class="card__header"><h3 class="card__title">Решения и SLA</h3><p class="card__subtitle">Сводка по качеству и скорости работы арбитража.</p></div>
      <div class="card__body"><div class="table-wrap"><table><thead><tr><th>Кейс</th><th>Решение</th><th>SLA</th><th>Репутационный эффект</th></tr></thead><tbody>
      <tr><td>ARB-2026-0065</td><td>Решение в пользу партнера, вендор изменил статус</td><td>1ч 20м</td><td>+3 к прозрачности вендора после исправления</td></tr>
      <tr><td>ARB-2026-0072</td><td>Передано на финальный уровень</td><td>в процессе</td><td>ожидает решения</td></tr>
      <tr><td>ARB-2026-0081</td><td>Промежуточно подтверждена действующая защита</td><td>18ч</td><td>+1 к рейтингу партнера</td></tr>
      </tbody></table></div></div>
    </section>`;
}

function renderMarketDashboard(){
  return `
  <div class="grid grid--2">
    <section class="card"><div class="card__header"><h3 class="card__title">Лента обезличенных регистраций</h3><p class="card__subtitle">Показывает паттерны конкуренции без раскрытия чувствительных данных.</p></div><div class="card__body simple-list">${publicFeed.map(x=>`<div class="simple-item"><small>${x.date} • ${x.partner} → ${x.vendor}</small><strong>${x.note}</strong><div style="margin-top:8px;color:var(--muted)">${x.competition}</div></div>`).join('')}</div></section>
    <section class="card"><div class="card__header"><h3 class="card__title">Смысл системы</h3><p class="card__subtitle">Почему рынок готов ей пользоваться.</p></div><div class="card__body simple-list"><div class="simple-item"><strong>Партнер получает защищенное право на ведение сделки на ограниченный срок.</strong></div><div class="simple-item"><strong>Вендор получает прозрачный pipeline и контроль конфликтов без хаоса Excel.</strong></div><div class="simple-item"><strong>Рынок получает объективный слой доверия и обезличенную прозрачность до торгов.</strong></div></div></section>
  </div>`;
}
function renderFeed(){ return renderMarketDashboard(); }
function renderPatterns(){ return renderAnalytics(); }
function renderMethod(){
  return `
    <section class="card">
      <div class="card__header"><h3 class="card__title">Как работает система</h3><p class="card__subtitle">Коротко и по делу для рынка и инвестора.</p></div>
      <div class="card__body simple-list">
        <div class="simple-item"><small>Шаг 1</small><strong>Партнер регистрирует сделку или проект.</strong><div style="margin-top:8px;color:var(--muted)">До передачи вендору система проверяет полноту, достоверность и признаки дубля.</div></div>
        <div class="simple-item"><small>Шаг 2</small><strong>Вендор подтверждает или мотивированно отклоняет.</strong><div style="margin-top:8px;color:var(--muted)">Если есть конфликт, возможна апелляция.</div></div>
        <div class="simple-item"><small>Шаг 3</small><strong>На срок защиты действует приоритетное право партнера на ведение сделки.</strong><div style="margin-top:8px;color:var(--muted)">Для продления нужна доказанная активность.</div></div>
        <div class="simple-item"><small>Шаг 4</small><strong>Независимый арбитраж разбирает спор и влияет на рейтинг доверия.</strong></div>
      </div>
    </section>`;
}

function renderContent(){
  const map = {
    partner: {
      dashboard: renderPartnerDashboard,
      newDeal: renderNewDeal,
      portfolio: renderPortfolio,
      extend: renderExtend,
      complaints: renderComplaints,
      history: renderHistory,
      ratings: () => renderRatings('partners'),
    },
    vendor: {
      dashboard: renderVendorDashboard,
      inbox: renderInbox,
      portfolio: renderVendorPortfolio,
      alerts: renderAlerts,
      disputes: renderDisputes,
      ratings: () => renderRatings('partners'),
      analytics: renderAnalytics,
    },
    arbitrage: {
      dashboard: renderArbitrageDashboard,
      queue: renderQueue,
      cases: renderCases,
      decisions: renderDecisions,
      ratings: () => renderRatings('vendors'),
      history: renderHistory,
    },
    market: {
      dashboard: renderMarketDashboard,
      feed: renderFeed,
      ratings: () => renderRatings('vendors'),
      patterns: renderPatterns,
      method: renderMethod,
    }
  };
  el('content').innerHTML = map[state.role][state.section]();
}

function openModal(title, subtitle, body, actions=[]){
  el('modalTitle').textContent = title;
  el('modalSubtitle').textContent = subtitle;
  el('modalBody').innerHTML = body;
  el('modalFooter').innerHTML = actions.map(a=>`<button class="btn ${a.kind || 'btn--secondary'}" onclick="${a.onClick}">${a.label}</button>`).join('');
  el('modal').classList.remove('hidden');
}
function closeModal(){ el('modal').classList.add('hidden'); }

function stepDeal(delta){
  state.newDealStep = Math.max(1, Math.min(4, state.newDealStep + delta));
  renderContent();
}
function upd(key, val){ state.newDealForm[key]=val; }
function submitDeal(){
  closeModal();
  openModal(
    'Регистрация создана',
    'Сделке присвоен номер DR-2026-00131',
    `<div class="simple-list">
      <div class="simple-item"><small>Автопроверка</small><strong>91/100</strong><div style="margin-top:8px;color:var(--muted)">Вероятность дубля — низкая. Рекомендация — передать вендору.</div></div>
      <div class="simple-item"><small>Что происходит дальше</small><strong>Заявка попадает во входящие вендора.</strong><div style="margin-top:8px;color:var(--muted)">Прототип сейчас может сразу перевести тебя в кабинет вендора.</div></div>
    </div>`,
    [
      {label:'Остаться здесь', kind:'btn--secondary', onClick:'closeModal()'},
      {label:'Перейти во входящие вендора', kind:'btn--primary', onClick:`closeModal(); state.role='vendor'; state.section='inbox'; render();`}
    ]
  );
}
function submitExtension(){
  openModal('Запрос на продление отправлен','Система передаст его вендору после проверки',`<div class="simple-item"><small>Результат</small><strong>Индекс продления: 84/100</strong><div style="margin-top:8px;color:var(--muted)">Запрос допущен до решения вендора. В прототипе можно сразу открыть кабинет вендора.</div></div>`,[
    {label:'Закрыть', kind:'btn--secondary', onClick:'closeModal()'},
    {label:'Открыть кабинет вендора', kind:'btn--primary', onClick:`closeModal(); state.role='vendor'; state.section='inbox'; render();`}
  ]);
}
function submitComplaint(){
  openModal('Жалоба зарегистрирована','Создан кейс ARB-2026-0089',`<div class="simple-list"><div class="simple-item"><small>Уровень</small><strong>Уровень 1 — автоматический разбор</strong></div><div class="simple-item"><small>SLA</small><strong>До 24 часов</strong></div></div>`,[
    {label:'Закрыть', kind:'btn--secondary', onClick:'closeModal()'},
    {label:'Перейти в арбитраж', kind:'btn--primary', onClick:`closeModal(); state.role='arbitrage'; state.section='queue'; render();`}
  ]);
}
function approveDeal(id){
  openModal('Регистрация подтверждена','Партнер получил защиту на срок 30 дней',`<div class="simple-item"><small>${id}</small><strong>Статус изменен на «Защита активна»</strong><div style="margin-top:8px;color:var(--muted)">В реальной системе это повлияло бы и на историю, и на рейтинг.</div></div>`,[{label:'Ок',kind:'btn--primary',onClick:'closeModal()'}]);
}
function rejectDeal(id){
  openModal('Подготовлен мотивированный отказ','Партнер может подать апелляцию',`<div class="simple-item"><small>${id}</small><strong>Причина отказа: недостаточная уникальность проекта и неполный контур доказательной базы.</strong></div>`,[{label:'Закрыть',kind:'btn--secondary',onClick:'closeModal()'},{label:'Передать в арбитраж',kind:'btn--primary',onClick:`closeModal(); state.role='arbitrage'; state.section='queue'; render();`}]);
}
function approveExtension(){
  openModal('Продление подтверждено','Защита продлена еще на 30 дней',`<div class="simple-item"><small>Результат</small><strong>Новый срок защиты: до 02.05.2026</strong></div>`,[{label:'Закрыть',kind:'btn--primary',onClick:'closeModal()'}]);
}
function sendToArbitrage(){
  openModal('Создан спорный кейс','Запрос передан в независимый арбитраж',`<div class="simple-item"><small>Класс кейса</small><strong>Отказ в продлении</strong></div>`,[{label:'Закрыть',kind:'btn--secondary',onClick:'closeModal()'},{label:'Открыть арбитраж',kind:'btn--primary',onClick:`closeModal(); state.role='arbitrage'; state.section='cases'; render();`}]);
}
function openDeal(id){
  const d = deals.find(x=>x.id===id);
  openModal(d.id,d.title,`
    <div class="simple-list">
      <div class="simple-item"><small>Клиент</small><strong>${d.client}</strong><div style="margin-top:8px;color:var(--muted)">В публичном контуре это выглядело бы как: ${d.masked}</div></div>
      <div class="simple-item"><small>Связка</small><strong>${d.partner} → ${d.vendor}</strong></div>
      <div class="simple-item"><small>Рыночные метки</small><strong>${d.tags.join(' • ')}</strong></div>
      <div class="simple-item"><small>Индекс активности</small><strong>${d.score}/100</strong><div class="progress"><span style="width:${d.score}%"></span></div></div>
    </div>`,[{label:'Закрыть',kind:'btn--primary',onClick:'closeModal()'}]);
}
function openDispute(id){
  const d = disputes.find(x=>x.id===id);
  openModal(d.id,d.type,`<div class="simple-list"><div class="simple-item"><small>Статус</small><strong>${d.status}</strong></div><div class="simple-item"><small>Уровень</small><strong>${d.level}</strong></div><div class="simple-item"><small>Содержание</small><strong>${d.summary}</strong></div></div>`,[{label:'Закрыть',kind:'btn--primary',onClick:'closeModal()'}]);
}
function goToExtend(){ state.section='extend'; render(); }
function setRatingsTab(tab){ el('content').innerHTML = renderRatings(tab); }

function render(){
  renderRoleSwitcher();
  renderNav();
  renderHeader();
  renderKpis();
  renderContent();
}

el('modalClose').onclick = closeModal;
el('modalBackdrop').onclick = closeModal;
window.setRole = setRole;
window.setSection = setSection;
window.stepDeal = stepDeal;
window.upd = upd;
window.submitDeal = submitDeal;
window.submitExtension = submitExtension;
window.submitComplaint = submitComplaint;
window.approveDeal = approveDeal;
window.rejectDeal = rejectDeal;
window.approveExtension = approveExtension;
window.sendToArbitrage = sendToArbitrage;
window.openDeal = openDeal;
window.openDispute = openDispute;
window.goToExtend = goToExtend;
window.setRatingsTab = setRatingsTab;
window.state = state;
window.render = render;
render();
