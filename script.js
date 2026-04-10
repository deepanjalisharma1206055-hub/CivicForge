/* ============================================================
   STATE / DATA LAYER
   ============================================================ */
const DB = {
  user: null,
  initiatives: [
    {
      id: 1, title: "Juhu Beach Clean-up Drive", org: "EcoWarriors Mumbai", orgType: "NGO / Non-profit",
      type: "cleanup", date: "2026-04-20", time: "07:00", location: "Juhu Beach, Mumbai",
      slots: 120, filled: 88, goal: 80000, raised: 62000,
      desc: "Join us for a massive beach clean-up effort. We will tackle plastic waste, fishing nets, and general debris across 3km of Juhu coastline. Gloves and bags provided.",
      resources: ["Gloves", "Trash Bags", "First Aid", "Refreshments"],
      status: "active", urgent: true, joined: false,
      tags: ["Environment", "Mumbai", "Coastal"],
    },
    {
      id: 2, title: "Aarey Forest Tree Plantation 2026", org: "GreenLeaf Society", orgType: "Community Group",
      type: "tree", date: "2026-04-27", time: "08:30", location: "Aarey Colony, Mumbai",
      slots: 200, filled: 134, goal: 120000, raised: 95000,
      desc: "Plant 1000 saplings across Aarey Colony to restore native biodiversity. Saplings, tools, and training sessions will be provided. Families are welcome.",
      resources: ["Saplings", "Shovels", "Water Supply", "Refreshments"],
      status: "active", urgent: false, joined: false,
      tags: ["Reforestation", "Mumbai", "Family-friendly"],
    },
    {
      id: 3, title: "Mithi River Restoration Phase 3", org: "BMC + RiverConnect", orgType: "Government Body",
      type: "water", date: "2026-05-03", time: "06:30", location: "Mithi River, Kurla",
      slots: 300, filled: 210, goal: 500000, raised: 480000,
      desc: "Phase 3 of our long-term Mithi River clean-up in partnership with the Brihanmumbai Municipal Corporation. Removing invasive plants, clearing blockages, and planting riparian species.",
      resources: ["Gloves", "Trash Bags", "Shovels", "Transport", "First Aid"],
      status: "active", urgent: false, joined: false,
      tags: ["Water Body", "Government", "Mumbai"],
    },
    {
      id: 4, title: "Dharavi Community Park Build", org: "Dharavi Youth Network", orgType: "Community Group",
      type: "infra", date: "2026-05-10", time: "09:00", location: "Dharavi, Mumbai",
      slots: 80, filled: 78, goal: 200000, raised: 175000,
      desc: "Converting an unused plot into a public park for Dharavi residents. Activities include landscaping, seating installation, and mural painting. Bring your creative energy!",
      resources: ["Shovels", "Refreshments", "First Aid"],
      status: "active", urgent: true, joined: false,
      tags: ["Infrastructure", "Community", "Art"],
    },
    {
      id: 5, title: "Versova Mangrove Revival", org: "Mangrove Cell Maharashtra", orgType: "Government Body",
      type: "tree", date: "2026-05-18", time: "07:00", location: "Versova, Andheri West",
      slots: 60, filled: 22, goal: 90000, raised: 30000,
      desc: "Restore mangrove cover at Versova with expert-guided planting sessions. Mangroves protect coastlines, support marine life, and reduce carbon. Training provided for all volunteers.",
      resources: ["Saplings", "Water Supply", "Gloves"],
      status: "active", urgent: false, joined: false,
      tags: ["Mangrove", "Coastal", "Expert-guided"],
    },
    {
      id: 6, title: "Andheri Recycling Awareness Drive", org: "Zero Waste Mumbai", orgType: "NGO / Non-profit",
      type: "other", date: "2026-04-15", time: "10:00", location: "Andheri Market Area",
      slots: 40, filled: 39, goal: 25000, raised: 25000,
      desc: "Street-level awareness campaign educating residents on segregation at source. We'll set up collection points and distribute free segregation kits.",
      resources: ["Refreshments"],
      status: "active", urgent: true, joined: false,
      tags: ["Recycling", "Education", "Urban"],
    },
  ],
  volunteers: [
    { id: 1, name: "Priya Iyer", role: "Logistics Coordinator", avatar: "PI", skills: ["Logistics", "Event Mgmt"], hours: 142, initiatives: 8, color: "#2e7d52" },
    { id: 2, name: "Rahul Desai", role: "Environmental Engineer", avatar: "RD", skills: ["Engineering", "Analysis"], hours: 98, initiatives: 6, color: "#1a5c34" },
    { id: 3, name: "Sunita Nair", role: "Medical Volunteer", avatar: "SN", skills: ["Medical", "First Aid"], hours: 110, initiatives: 9, color: "#8b5e3c" },
    { id: 4, name: "Arjun Mehta", role: "Photographer", avatar: "AM", skills: ["Photography", "Social Media"], hours: 75, initiatives: 5, color: "#2980b9" },
    { id: 5, name: "Kavya Sharma", role: "Teacher & Educator", avatar: "KS", skills: ["Teaching", "Children"], hours: 88, initiatives: 7, color: "#8e44ad" },
    { id: 6, name: "Dev Patel", role: "Waste Management", avatar: "DP", skills: ["Logistics", "Recycling"], hours: 120, initiatives: 10, color: "#c0392b" },
    { id: 7, name: "Ananya Roy", role: "Community Organizer", avatar: "AR", skills: ["Leadership", "Social Work"], hours: 95, initiatives: 8, color: "#e67e22" },
    { id: 8, name: "Vikram Singh", role: "Civil Engineer", avatar: "VS", skills: ["Engineering", "Construction"], hours: 60, initiatives: 4, color: "#27ae60" },
  ],
  activities: [
    { type: "green", text: "<strong>Priya I.</strong> joined Juhu Beach Clean-up Drive", time: "2 min ago" },
    { type: "amber", text: "<strong>GreenLeaf Society</strong> updated tree planting slots", time: "8 min ago" },
    { type: "blue", text: "<strong>₹15,000</strong> donated to Mithi River Restoration", time: "15 min ago" },
    { type: "green", text: "<strong>Rahul D.</strong> completed Versova Mangrove volunteer sign-up", time: "22 min ago" },
    { type: "amber", text: "<strong>New initiative</strong> posted in Dharavi area", time: "1 hr ago" },
  ],
};

/* ============================================================
   NAVIGATION
   ============================================================ */
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  document.getElementById(page + '-page').classList.add('active');
  const navBtn = document.getElementById('nav-' + page);
  if (navBtn) navBtn.classList.add('active');

  if (page === 'dashboard') renderDashboard();
  if (page === 'analytics') renderAnalytics();
  if (page === 'volunteer') renderVolunteers();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   RENDER DASHBOARD
   ============================================================ */
function renderDashboard() {
  renderKPIs();
  renderFeed(DB.initiatives);
  renderTopVolunteers();
  renderActivityFeed();
  renderMap();
  updateSidebarProfile();
}

function renderKPIs() {
  const row = document.getElementById('kpi-row');
  const total = DB.initiatives.length;
  const volunteers = DB.initiatives.reduce((a, i) => a + i.filled, 0);
  const funded = DB.initiatives.reduce((a, i) => a + i.raised, 0);
  const slots = DB.initiatives.reduce((a, i) => a + i.slots, 0);
  row.innerHTML = `
    <div class="kpi-card"><div class="kpi-label">Active Initiatives</div><div class="kpi-value">${total}<span class="unit">running</span></div><div class="kpi-change">↑ 3 new this week</div></div>
    <div class="kpi-card"><div class="kpi-label">Total Volunteers</div><div class="kpi-value">${volunteers}<span class="unit">enrolled</span></div><div class="kpi-change">↑ 12% this month</div></div>
    <div class="kpi-card"><div class="kpi-label">Funds Raised</div><div class="kpi-value">₹${(funded / 1000).toFixed(0)}<span class="unit">K</span></div><div class="kpi-change">↑ ₹35K this week</div></div>
    <div class="kpi-card"><div class="kpi-label">Slots Available</div><div class="kpi-value">${slots - volunteers}<span class="unit">open</span></div><div class="kpi-change">Across ${total} projects</div></div>
  `;
}

let currentFilter = 'all';
function filterFeed(type) {
  currentFilter = type;
  document.querySelectorAll('.sidebar-menu button').forEach(b => b.classList.remove('active'));
  event.target.closest('button').classList.add('active');
  let filtered = DB.initiatives;
  if (type === 'mine' && DB.user) filtered = DB.initiatives.filter(i => i.org === DB.user.org);
  else if (type === 'joined') filtered = DB.initiatives.filter(i => i.joined);
  else if (['cleanup', 'tree', 'water', 'infra'].includes(type)) filtered = DB.initiatives.filter(i => i.type === type);
  renderFeed(filtered);
}

let currentSort = 'recent';
function setSort(sort, btn) {
  currentSort = sort;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  let arr = [...DB.initiatives];
  if (sort === 'popular') arr.sort((a, b) => b.filled - a.filled);
  else if (sort === 'urgent') arr = arr.filter(i => i.urgent).concat(arr.filter(i => !i.urgent));
  else if (sort === 'funded') arr.sort((a, b) => (b.raised / b.goal) - (a.raised / a.goal));
  renderFeed(arr);
}

const typeMap = { cleanup: '🧹 Clean-up', tree: '🌳 Tree Planting', water: '🌊 Water Restoration', infra: '🏗️ Infrastructure', edu: '📚 Education', other: '✨ Community' };
const bannerClass = { cleanup: '', tree: '', water: 'blue', infra: 'amber', edu: 'blue', other: 'amber' };

function renderFeed(arr) {
  const feed = document.getElementById('initiatives-feed');
  if (!arr.length) { feed.innerHTML = '<div style="text-align:center;padding:40px;color:var(--slate);">No initiatives found.</div>'; return; }
  feed.innerHTML = arr.map(i => {
    const pct = Math.round((i.raised / i.goal) * 100);
    const vPct = Math.round((i.filled / i.slots) * 100);
    const urgTag = i.urgent ? '<span class="tag tag-red">⚡ Urgent</span>' : '';
    const joinLabel = i.joined ? 'Joined ✓' : 'Join Now';
    return `
    <div class="initiative-card fade-in" onclick="openDetail(${i.id})">
      <div class="card-banner ${bannerClass[i.type] || ''}"></div>
      <div class="card-body">
        <div class="card-top">
          <div>
            <div class="card-title">${i.title}</div>
            <div class="card-org">📍 ${i.org}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end;">
            <span class="tag tag-green">${typeMap[i.type] || i.type}</span>
            ${urgTag}
          </div>
        </div>
        <div class="card-desc">${i.desc.substring(0, 160)}…</div>
        <div class="card-meta">
          <span class="card-meta-item">📅 ${formatDate(i.date)}</span>
          <span class="card-meta-item">🕐 ${i.time}</span>
          <span class="card-meta-item">📍 ${i.location}</span>
          <span class="card-meta-item">👥 ${i.filled}/${i.slots} volunteers</span>
        </div>
        <div class="progress-wrap">
          <div class="progress-label"><span>Volunteers</span><span>${vPct}%</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${vPct}%"></div></div>
        </div>
        <div class="progress-wrap">
          <div class="progress-label"><span>Funding ₹${(i.raised / 1000).toFixed(0)}K / ₹${(i.goal / 1000).toFixed(0)}K</span><span>${pct}%</span></div>
          <div class="progress-bar"><div class="progress-fill amber" style="width:${Math.min(pct, 100)}%"></div></div>
        </div>
        <div class="card-actions" onclick="event.stopPropagation()">
          <button class="btn-join ${i.joined ? 'joined' : ''}" onclick="toggleJoin(${i.id},this)">${joinLabel}</button>
          <button class="btn-details" onclick="openDetail(${i.id})">View Details →</button>
          ${i.tags.map(t => `<span class="tag tag-blue">${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleJoin(id, btn) {
  const ini = DB.initiatives.find(i => i.id === id);
  if (!DB.user) { toast('Please sign in to join initiatives.', 'error'); openAuth(); return; }
  ini.joined = !ini.joined;
  if (ini.joined) { ini.filled = Math.min(ini.filled + 1, ini.slots); toast('✅ You joined: ' + ini.title); }
  else { ini.filled = Math.max(ini.filled - 1, 0); toast('Left initiative: ' + ini.title, 'info'); }
  btn.textContent = ini.joined ? 'Joined ✓' : 'Join Now';
  btn.className = 'btn-join ' + (ini.joined ? 'joined' : '');
  renderKPIs();
}

function renderTopVolunteers() {
  const top = [...DB.volunteers].sort((a, b) => b.hours - a.hours).slice(0, 5);
  document.getElementById('top-volunteers').innerHTML = top.map(v => `
    <div class="volunteer-item">
      <div class="vol-avatar" style="background:${v.color}">${v.avatar}</div>
      <div><div class="vol-name">${v.name}</div><div class="vol-detail">${v.role}</div></div>
      <span class="vol-badge">${v.hours}h</span>
    </div>`).join('');
}

function renderActivityFeed() {
  document.getElementById('activity-feed').innerHTML = DB.activities.map(a => `
    <div class="activity-item">
      <div class="activity-dot ${a.type}"></div>
      <div><div class="activity-text">${a.text}</div><div class="activity-time">${a.time}</div></div>
    </div>`).join('');
}

function renderMap() {
  const canvas = document.getElementById('map-canvas');
  const dots = [
    { x: 30, y: 40, label: 'Juhu Beach Clean-up' }, { x: 55, y: 35, label: 'Aarey Forest Planting' },
    { x: 48, y: 55, label: 'Mithi River Restoration' }, { x: 62, y: 70, label: 'Dharavi Park' },
    { x: 20, y: 65, label: 'Versova Mangrove' }, { x: 75, y: 42, label: 'Andheri Recycling' },
  ];
  dots.forEach(d => {
    const el = document.createElement('div');
    el.className = 'map-dot';
    el.style.left = d.x + '%'; el.style.top = d.y + '%';
    el.innerHTML = `<div class="map-tooltip">${d.label}</div>`;
    el.onclick = (e) => { e.stopPropagation(); toast('📍 ' + d.label, 'info'); };
    canvas.appendChild(el);
  });
}

function updateSidebarProfile() {
  if (DB.user) {
    document.getElementById('sidebar-avatar').textContent = DB.user.initials;
    document.getElementById('sidebar-name').textContent = DB.user.name;
    document.getElementById('sidebar-role').textContent = DB.user.role;
  }
}

/* ============================================================
   INITIATIVE DETAIL MODAL
   ============================================================ */
let detailCurrentId = null;
function openDetail(id) {
  const ini = DB.initiatives.find(i => i.id === id);
  detailCurrentId = id;
  document.getElementById('detail-title').textContent = ini.title;
  const pct = Math.round((ini.raised / ini.goal) * 100);
  const vPct = Math.round((ini.filled / ini.slots) * 100);
  document.getElementById('detail-content').innerHTML = `
    <div class="modal-section"><h4>About</h4><p>${ini.desc}</p></div>
    <div class="modal-section"><h4>Details</h4>
      <p>📅 <strong>Date:</strong> ${formatDate(ini.date)} at ${ini.time}<br>
         📍 <strong>Location:</strong> ${ini.location}<br>
         🏢 <strong>Organizer:</strong> ${ini.org} (${ini.orgType})<br>
         🏷️ <strong>Type:</strong> ${typeMap[ini.type]}</p>
    </div>
    <div class="modal-section"><h4>Resources Needed</h4><p>${ini.resources.map(r => `<span class="tag tag-green" style="margin:2px">${r}</span>`).join(' ')}</p></div>
    <div class="modal-section"><h4>Volunteer Progress</h4>
      <div class="progress-wrap"><div class="progress-label"><span>${ini.filled} of ${ini.slots} slots filled</span><span>${vPct}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${vPct}%"></div></div></div>
    </div>
    <div class="modal-section"><h4>Funding Progress</h4>
      <div class="progress-wrap"><div class="progress-label"><span>₹${ini.raised.toLocaleString()} raised of ₹${ini.goal.toLocaleString()}</span><span>${pct}%</span></div>
      <div class="progress-bar"><div class="progress-fill amber" style="width:${Math.min(pct, 100)}%"></div></div></div>
    </div>
    <div class="modal-section"><h4>Tags</h4><p>${ini.tags.map(t => `<span class="tag tag-blue" style="margin:2px">${t}</span>`).join(' ')}</p></div>
  `;
  const joinBtn = document.getElementById('detail-join-btn');
  joinBtn.textContent = ini.joined ? '✓ Already Joined' : '✅ Join Initiative';
  joinBtn.className = 'btn-join ' + (ini.joined ? 'joined' : '');
  openModal('detail-modal');
}

function joinFromDetail() {
  if (!DB.user) { toast('Please sign in to join.', 'error'); closeModal('detail-modal'); openAuth(); return; }
  const ini = DB.initiatives.find(i => i.id === detailCurrentId);
  ini.joined = true; ini.filled = Math.min(ini.filled + 1, ini.slots);
  document.getElementById('detail-join-btn').textContent = '✓ Already Joined';
  document.getElementById('detail-join-btn').className = 'btn-join joined';
  toast('✅ Successfully joined ' + ini.title);
  renderFeed(DB.initiatives); renderKPIs();
}

/* ============================================================
   CREATE INITIATIVE
   ============================================================ */
function toggleResource(el) { el.classList.toggle('selected'); }

document.getElementById('ini-title').addEventListener('input', function () { document.getElementById('title-count').textContent = this.value.length; });
document.getElementById('ini-desc').addEventListener('input', function () { document.getElementById('desc-count').textContent = this.value.length; });

function submitInitiative() {
  if (!DB.user) { toast('Please sign in to create an initiative.', 'error'); openAuth(); return; }
  const title = document.getElementById('ini-title').value.trim();
  const org = document.getElementById('ini-org').value.trim();
  const orgtype = document.getElementById('ini-orgtype').value;
  const desc = document.getElementById('ini-desc').value.trim();
  const type = document.querySelector('input[name="ini-type"]:checked')?.value;
  const date = document.getElementById('ini-date').value;
  const location = document.getElementById('ini-location').value.trim();
  const slots = document.getElementById('ini-slots').value;
  const contact = document.getElementById('ini-contact').value.trim();

  if (!title || !org || !orgtype || !desc || !type || !date || !location || !slots || !contact) {
    toast('Please fill in all required fields.', 'error'); return;
  }
  const resources = [...document.querySelectorAll('.resource-tag.selected')].map(el => el.dataset.val);
  const goal = parseInt(document.getElementById('ini-goal').value) || 0;

  const newIni = {
    id: Date.now(), title, org, orgType: orgtype, type, date, time: document.getElementById('ini-time').value || '09:00',
    location, slots: parseInt(slots), filled: 0, goal, raised: 0, desc,
    resources, status: 'active', urgent: false, joined: false, tags: [typeMap[type]?.replace(/[🧹🌳🌊🏗️📚✨]\s*/, '')],
  };
  DB.initiatives.unshift(newIni);
  DB.activities.unshift({ type: 'green', text: `<strong>${DB.user.name}</strong> launched: ${title}`, time: 'just now' });

  toast('🚀 Initiative launched successfully!');
  showPage('dashboard');
}

/* ============================================================
   ANALYTICS
   ============================================================ */
function renderAnalytics() {
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const vals = [8, 12, 9, 15, 18, 14, 22];
  const maxV = Math.max(...vals);
  document.getElementById('bar-chart').innerHTML = months.map((m, i) => `
    <div class="bar-wrap">
      <div class="bar-val">${vals[i]}</div>
      <div class="bar-col ${i === 6 ? 'amber' : ''}" style="height:${(vals[i] / maxV) * 100}%"></div>
      <div class="bar-label">${m}</div>
    </div>`).join('');

  const topList = document.getElementById('top-initiatives-list');
  const top = [...DB.initiatives].sort((a, b) => b.filled - a.filled).slice(0, 5);
  topList.innerHTML = top.map(i => {
    const pct = Math.round((i.filled / i.slots) * 100);
    return `<div class="impact-metric">
      <div><div class="impact-label" style="font-weight:600;color:var(--forest)">${i.title.substring(0, 32)}…</div>
      <div style="font-size:12px;color:var(--slate);margin-top:2px;">${i.filled} volunteers · ${pct}% filled</div></div>
      <div class="impact-value" style="font-size:16px;">${pct}<span class="impact-unit">%</span></div>
    </div>`;
  }).join('');
}

/* ============================================================
   VOLUNTEERS
   ============================================================ */
function renderVolunteers(list) {
  const arr = list || DB.volunteers;
  document.getElementById('vol-grid').innerHTML = arr.map(v => `
    <div class="vol-card">
      <div class="avatar" style="background:${v.color};color:var(--white)">${v.avatar}</div>
      <h4>${v.name}</h4>
      <p>${v.role}</p>
      <div class="vol-skills">${v.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
      <div class="vol-stat">⏱ ${v.hours} hours · 📋 ${v.initiatives} initiatives</div>
      <button class="btn-join" style="margin-top:14px;" onclick="toast('📨 Message sent to ${v.name}!')">Connect</button>
    </div>`).join('');
}

function searchVolunteers(q) {
  const filtered = DB.volunteers.filter(v => v.name.toLowerCase().includes(q.toLowerCase()) || v.role.toLowerCase().includes(q.toLowerCase()));
  renderVolunteers(filtered);
}
function filterVolunteers(skill) {
  if (!skill) { renderVolunteers(); return; }
  renderVolunteers(DB.volunteers.filter(v => v.skills.some(s => s === skill)));
}

/* ============================================================
   AUTH
   ============================================================ */
function openAuth() { openModal('auth-modal'); }
function switchTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  document.getElementById('auth-login').classList.toggle('hidden', tab !== 'login');
  document.getElementById('auth-register').classList.toggle('hidden', tab !== 'register');
}
function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  if (!email || !pass) { toast('Enter email and password.', 'error'); return; }
  const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  setUser({ name, email, role: 'Volunteer', initials: name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2), org: '' });
  closeModal('auth-modal');
  toast('👋 Welcome back, ' + name + '!');
}
function doRegister() {
  const first = document.getElementById('reg-first').value.trim();
  const last = document.getElementById('reg-last').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const role = document.getElementById('reg-role').value;
  const pass = document.getElementById('reg-pass').value;
  if (!first || !last || !email || !pass) { toast('Please fill all fields.', 'error'); return; }
  if (pass.length < 8) { toast('Password must be at least 8 characters.', 'error'); return; }
  const name = first + ' ' + last;
  setUser({ name, email, role, initials: (first[0] + last[0]).toUpperCase(), org: '' });
  closeModal('auth-modal');
  toast('🎉 Welcome to CivicForge, ' + first + '!');
}
function setUser(user) {
  DB.user = user;
  document.getElementById('nav-user-display').textContent = '👤 ' + user.name.split(' ')[0];
  document.getElementById('auth-btn').textContent = 'Sign Out';
  document.getElementById('auth-btn').onclick = doLogout;
  updateSidebarProfile();
}
function doLogout() {
  DB.user = null;
  document.getElementById('nav-user-display').textContent = '';
  document.getElementById('auth-btn').textContent = 'Sign In';
  document.getElementById('auth-btn').onclick = openAuth;
  toast('Signed out successfully.', 'info');
  updateSidebarProfile();
}

/* ============================================================
   SPONSORS
   ============================================================ */
let selectedAmount = '2500';
function selectAmount(btn, val) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedAmount = val;
  document.getElementById('custom-amount').style.display = val === 'custom' ? 'block' : 'none';
}
function processDonation() {
  const amt = selectedAmount === 'custom' ? document.getElementById('custom-amount').value : selectedAmount;
  const ini = document.getElementById('donate-initiative').value;
  if (!amt || amt <= 0) { toast('Please enter a valid amount.', 'error'); return; }
  toast(`💝 ₹${parseInt(amt).toLocaleString()} donated to "${ini}"`);
  const matched = DB.initiatives.find(i => i.title === ini);
  if (matched) { matched.raised = Math.min(matched.raised + parseInt(amt), matched.goal); renderKPIs(); }
  DB.activities.unshift({ type: 'blue', text: `<strong>₹${parseInt(amt).toLocaleString()}</strong> donated to ${ini}`, time: 'just now' });
}
function openSponsorModal(tier, amount) {
  document.getElementById('sponsor-tier-name').textContent = '🤝 ' + tier + ' — ' + amount;
  openModal('sponsor-modal');
}
function submitSponsor() {
  const org = document.getElementById('sp-org').value.trim();
  const name = document.getElementById('sp-name').value.trim();
  const email = document.getElementById('sp-email').value.trim();
  if (!org || !name || !email) { toast('Please fill required fields.', 'error'); return; }
  toast('✅ Sponsorship request submitted! We\'ll contact you soon.');
  closeModal('sponsor-modal');
}

/* ============================================================
   MODAL HELPERS
   ============================================================ */
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); });
});

/* ============================================================
   TOAST
   ============================================================ */
function toast(msg, type = '') {
  const el = document.createElement('div');
  el.className = 'toast ' + (type || '');
  el.innerHTML = msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(30px)'; el.style.transition = '.3s'; setTimeout(() => el.remove(), 300); }, 3200);
}

/* ============================================================
   NAVBAR SCROLL
   ============================================================ */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

/* ============================================================
   HERO COUNTER ANIMATION
   ============================================================ */
function animateCounter(id, target, suffix = '') {
  let v = 0; const step = Math.ceil(target / 60);
  const t = setInterval(() => {
    v = Math.min(v + step, target);
    document.getElementById(id).innerHTML = v.toLocaleString() + (suffix ? `<span>${suffix}</span>` : '');
    if (v >= target) clearInterval(t);
  }, 20);
}
setTimeout(() => {
  animateCounter('stat-initiatives', 49);
  animateCounter('stat-volunteers', 2847);
  animateCounter('stat-cities', 18);
  animateCounter('stat-impact', 8240, 'kg');
}, 300);

/* ============================================================
   UTILITY
   ============================================================ */
function formatDate(d) {
  if (!d) return '';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Set min date for form
document.getElementById('ini-date').min = new Date().toISOString().split('T')[0];

// Initialize dashboard on first load
renderDashboard();
