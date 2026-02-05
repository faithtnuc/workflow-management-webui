import React, { useState } from 'react';
import {
    Search,
    Bell,
    LayoutDashboard,
    Briefcase,
    Clock,
    FileText,
    Users,
    Settings,
    MoreHorizontal,
    Plus,
    Filter,
    CheckCircle2,
    Clock3,
    AlertCircle,
    MessageSquare,
    MessageCircle
} from 'lucide-react';

// Import Logos
import logoSienna from './assets/logos/logo_sienna.svg';
import logoAbramind from './assets/logos/logo_abramind.svg';
import logoMaison from './assets/logos/logo_maison.svg';
import logoPhyllant from './assets/logos/logo_phyllant.svg';
import logoPithema from './assets/logos/logo_pithema.svg';
import logoProwa from './assets/logos/logo_prowa.svg';

/* -------------------------------------------------------------------------- */
/*                                CONSTANTS                                   */
/* -------------------------------------------------------------------------- */

const THEME = {
    colors: {
        primary: '#4F46E5', // Indigo 600
        primaryLight: '#818CF8', // Indigo 400
        background: '#F9FAFB', // Slate 50
        surface: '#FFFFFF',
        textMain: '#111827', // Slate 900
        textSecondary: '#6B7280', // Slate 500
        border: '#E5E7EB', // Slate 200

        // Status Colors
        success: '#10B981', // Emerald 500
        successBg: '#ECFDF5', // Emerald 50
        warning: '#F59E0B', // Amber 500
        warningBg: '#FFFBEB', // Amber 50
        danger: '#EF4444', // Red 500
        dangerBg: '#FEF2F2', // Red 50
        info: '#3B82F6', // Blue 500
        infoBg: '#EFF6FF', // Blue 50
    }
};

const TRANSLATIONS = {
    TR: {
        dashboard: 'İşler',
        jobs: 'İş Ekle',
        timesheets: 'Kullanıcılar',
        reporting: 'Müşteriler',
        users: 'Raporlama',
        settings: 'Ayarlar',
        workspaces: 'Çalışma Alanları',
        searchPlaceholder: 'İş, müşteri veya kullanıcı ara...',
        overviewTitle: 'Panel Özeti',
        activeJobs: 'Aktif İşler',
        viewAll: 'Tümünü Gör',
        newJob: 'Yeni İş',
        filter: 'Filtrele',
        welcomeBack: 'Tekrar hoşgeldiniz, işte bugün olanlar.',
        viewingFor: 'Görüntülenen Müşteri:',
        // Table Columns
        colId: 'Job No',
        colClient: 'Müşteri',
        colJob: 'İş Tanımı',
        colAssignee: 'Kişi',
        colDeadline: 'Termin',
        colInternalDeadline: 'Ajans Termin',
        colStatus: 'Durum',
        colChat: 'Yazışma',
        colInternalChat: 'İç Yazışma',
        noJobs: 'Bu müşteri için aktif iş bulunamadı.'
    },
    EN: {
        dashboard: 'Dashboard',
        jobs: 'Add Job',
        timesheets: 'Users',
        reporting: 'Clients',
        users: 'Reporting',
        settings: 'Settings',
        workspaces: 'Workspaces',
        searchPlaceholder: 'Search jobs, clients, or users...',
        overviewTitle: 'Dashboard Overview',
        activeJobs: 'Active Jobs',
        viewAll: 'View All Jobs',
        newJob: 'New Job',
        filter: 'Filter',
        welcomeBack: 'Welcome back, here is what is happening today.',
        viewingFor: 'Viewing jobs for',
        // Table Columns
        colId: '#ID',
        colClient: 'Client',
        colJob: 'Job Title',
        colAssignee: 'Assignee',
        colDeadline: 'Deadline',
        colInternalDeadline: 'Int. Deadline',
        colStatus: 'Status',
        colChat: 'Chat',
        colInternalChat: 'Int. Chat',
        noJobs: 'No active jobs found for this client.'
    }
};

const MOCK_DB = {
    user: {
        name: 'Alex Jensen',
        role: 'Senior Producer',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        notifications: 3
    },
    stats: {
        activeJobs: 12,
        pendingReviews: 4,
        completedMonth: 28,
        totalHours: 142.5
    },
    clients: [
        { id: 'c1', name: 'Sienna', logo: logoSienna, activeJobs: 3, unreadMessages: 2, totalMessages: 15 },
        { id: 'c2', name: 'Abramind', logo: logoAbramind, activeJobs: 7, unreadMessages: 4, totalMessages: 22 },
        { id: 'c3', name: 'Maison', logo: logoMaison, activeJobs: 1, unreadMessages: 0, totalMessages: 8 },
        { id: 'c4', name: 'Phyllant', logo: logoPhyllant, activeJobs: 4, unreadMessages: 12, totalMessages: 45 },
        { id: 'c5', name: 'Pithema', logo: logoPithema, activeJobs: 2, unreadMessages: 1, totalMessages: 6 },
        { id: 'c6', name: 'Prowa', logo: logoProwa, activeJobs: 5, unreadMessages: 3, totalMessages: 19 },
    ],
    jobs: [
        {
            id: '10022',
            clientId: 'c1',
            title: 'Q3 Marketing Assets',
            requester: 'Sarah Connor',
            deadline: '2023-11-15',
            internalDeadline: '2023-11-13',
            status: 'In Progress',
            messages: 2,
            internalMessages: 5
        },
        {
            id: '10023',
            clientId: 'c2',
            title: 'Homepage Redesign V2',
            requester: 'Hank Scorpio',
            deadline: '2023-11-12',
            internalDeadline: '2023-11-10',
            status: 'Review',
            messages: 0,
            internalMessages: 1
        },
        {
            id: '10024',
            clientId: 'c3',
            title: 'Nutritional PDF',
            requester: 'Richard T.',
            deadline: '2023-11-20',
            internalDeadline: '2023-11-18',
            status: 'Waiting',
            messages: 5,
            internalMessages: 0
        },
        {
            id: '10025',
            clientId: 'c1',
            title: 'Social Media Campaign',
            requester: 'John Doe',
            deadline: '2023-11-14',
            internalDeadline: '2023-11-12',
            status: 'Completed',
            messages: 0,
            internalMessages: 0
        },
        {
            id: '10026',
            clientId: 'c4',
            title: 'Safety Protocols Video',
            requester: 'Albert W.',
            deadline: '2023-11-10',
            internalDeadline: '2023-11-08',
            status: 'Urgent',
            messages: 1,
            internalMessages: 3
        },
        {
            id: '10027',
            clientId: 'c5',
            title: 'Suit Interface Mockups',
            requester: 'Pepper Potts',
            deadline: '2023-11-25',
            internalDeadline: '2023-11-22',
            status: 'In Progress',
            messages: 0,
            internalMessages: 2
        },
    ]
};

/* -------------------------------------------------------------------------- */
/*                                COMPONENTS                                  */
/* -------------------------------------------------------------------------- */

// Status Badge Component
const StatusBadge = ({ status }) => {
    let styles = '';
    let icon = null;

    switch (status) {
        case 'Completed':
            styles = 'bg-emerald-50 text-emerald-700 border-emerald-200';
            icon = <CheckCircle2 className="w-3 h-3 mr-1" />;
            break;
        case 'Review':
            styles = 'bg-indigo-50 text-indigo-700 border-indigo-200';
            icon = <FileText className="w-3 h-3 mr-1" />;
            break;
        case 'Waiting':
            styles = 'bg-amber-50 text-amber-700 border-amber-200';
            icon = <Clock3 className="w-3 h-3 mr-1" />;
            break;
        case 'Urgent':
            styles = 'bg-red-50 text-red-700 border-red-200';
            icon = <AlertCircle className="w-3 h-3 mr-1" />;
            break;
        default: // In Progress
            styles = 'bg-blue-50 text-blue-700 border-blue-200';
            icon = <Clock className="w-3 h-3 mr-1" />;
    }

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles}`}>
            {icon}
            {status}
        </span>
    );
};

// Sidebar Component
const Sidebar = ({ activeClient, setActiveClient, lang }) => {
    const t = TRANSLATIONS[lang];

    return (
        <div className="h-screen bg-slate-900 border-r border-slate-800 flex flex-shrink-0 z-20">
            {/* Left Rail - Clients */}
            <div className="w-16 flex flex-col items-center py-6 border-r border-slate-800 bg-slate-900 gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold cursor-pointer hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/20">
                    FB
                </div>
                <div className="w-8 h-px bg-slate-800 my-2" />

                {MOCK_DB.clients.map((client) => (
                    <div
                        key={client.id}
                        onClick={() => setActiveClient(client.id === activeClient ? null : client.id)}
                        className={`
              w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 relative
              ${activeClient === client.id ? 'ring-2 ring-offset-2 ring-offset-slate-900 ring-indigo-500 scale-110' : 'hover:scale-105 opacity-70 hover:opacity-100'}
            `}
                    >
                        <img
                            src={client.logo}
                            alt={client.name}
                            className="w-full h-full object-cover rounded-full bg-slate-800 shadow-sm"
                        />

                        {/* Notification Badge for Active Jobs */}
                        {client.activeJobs > 0 && (
                            <span className="absolute -top-1 -right-1 block px-1.5 py-0.5 rounded-full bg-indigo-500 border border-slate-900 text-[10px] font-bold text-white shadow-sm z-10 leading-none">
                                {client.activeJobs}
                            </span>
                        )}

                        {activeClient === client.id && (
                            <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs py-1.5 px-3 rounded-md shadow-xl border border-slate-700 z-50 animate-in fade-in slide-in-from-left-2 whitespace-nowrap font-medium">
                                {client.name}
                                {/* Little triangle pointer */}
                                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 border-l border-t border-slate-700 transform -rotate-45"></div>
                            </div>
                        )}
                    </div>
                ))}

                <div className="mt-auto">
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-400 cursor-pointer transition-colors hover:bg-slate-800">
                        <Plus className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Right Rail - Menu */}
            <div className="w-64 flex flex-col py-6 px-4 bg-white">
                <div className="mb-8 px-2">
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">FluxBoard</h2>
                    <p className="text-xs text-slate-500">Agency Workflow</p>
                </div>

                <nav className="flex-1 space-y-1">
                    <NavItem icon={<LayoutDashboard />} label={t.dashboard} active />
                    <NavItem icon={<Briefcase />} label={t.jobs} badge="12" />
                    <NavItem icon={<Users />} label={t.timesheets} />
                    <NavItem icon={<Users />} label={t.reporting} />
                    <NavItem icon={<FileText />} label={t.users} />

                    <div className="pt-6 mt-6 border-t border-slate-100">
                        <h3 className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t.workspaces}</h3>
                        {['Design Team', 'Dev Squad', 'Marketing'].map((item, i) => (
                            <div key={i} className="flex items-center px-2 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 cursor-pointer group">
                                <span className={`w-2 h-2 rounded-full mr-3 ${['bg-purple-400', 'bg-blue-400', 'bg-pink-400'][i]}`}></span>
                                {item}
                            </div>
                        ))}
                    </div>
                </nav>

                <div className="mt-auto px-2">
                    <NavItem icon={<Settings />} label={t.settings} />
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, active = false, badge }) => (
    <a href="#" className={`
    group flex items-center px-2 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
    ${active
            ? 'bg-indigo-50 text-indigo-700'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
  `}>
        <span className={`mr-3 ${active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-500'}`}>
            {React.cloneElement(icon, { size: 20 })}
        </span>
        {label}
        {badge && (
            <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-medium ${active ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-600'}`}>
                {badge}
            </span>
        )}
    </a>
);


// Metric Card
const MetricCard = ({ title, value, subtext, trend, icon: Icon }) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] hover:shadow-lg transition-all duration-300 group">
        <div className="flex items-start justify-between mb-4">
            <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{value}</h3>
            </div>
            <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Icon size={22} strokeWidth={2} />
            </div>
        </div>
        <div className="flex items-center text-sm">
            {trend === 'up' && <span className="text-emerald-600 font-medium flex items-center">↑ 12% <span className="text-slate-400 ml-1 font-normal">vs last month</span></span>}
            {trend === 'down' && <span className="text-red-500 font-medium flex items-center">↓ 2% <span className="text-slate-400 ml-1 font-normal">vs last month</span></span>}
            {!trend && <span className="text-slate-400">{subtext}</span>}
        </div>
    </div>
);


/* -------------------------------------------------------------------------- */
/*                               MAIN LAYOUT                                  */
/* -------------------------------------------------------------------------- */

const App = () => {
    const [activeClient, setActiveClient] = useState(null);
    const [lang, setLang] = useState('TR');
    const t = TRANSLATIONS[lang];

    const filteredJobs = activeClient
        ? MOCK_DB.jobs.filter(job => job.clientId === activeClient)
        : MOCK_DB.jobs;

    // Calculate total unread messages from all clients
    const totalUnreadMessages = MOCK_DB.clients.reduce((sum, client) => sum + client.unreadMessages, 0);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-700">

            {/* Sidebar Navigation */}
            <Sidebar activeClient={activeClient} setActiveClient={setActiveClient} lang={lang} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">

                {/* Header */}
                <header className="h-16 bg-white border-b border-slate-200 grid grid-cols-3 items-center px-8 flex-shrink-0 z-10">

                    {/* Left - Language Toggle */}
                    <div className="flex items-center">
                        <div className="flex items-center bg-slate-100 p-1 rounded-lg">
                            <button
                                onClick={() => setLang('TR')}
                                className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${lang === 'TR' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-indigo-600'}`}
                            >
                                TR
                            </button>
                            <button
                                onClick={() => setLang('EN')}
                                className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${lang === 'EN' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-indigo-600'}`}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    {/* Global Search - Centered & Widened */}
                    <div className="relative w-full max-w-2xl justify-self-center group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 sm:text-sm transition-all shadow-sm"
                            placeholder={t.searchPlaceholder}
                        />
                    </div>

                    {/* Right Header Actions */}
                    <div className="flex items-center gap-6 justify-self-end">
                        {/* Messages */}
                        <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors rounded-full hover:bg-slate-50">
                            <div className="relative">
                                <MessageSquare className="w-5 h-5" />
                                {totalUnreadMessages > 0 && (
                                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white leading-none min-w-[1rem] h-4">
                                        {totalUnreadMessages}
                                    </span>
                                )}
                            </div>
                        </button>

                        {/* Notifications */}
                        <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-colors rounded-full hover:bg-slate-50">
                            <Bell className="w-5 h-5" />
                            {MOCK_DB.user.notifications > 0 && (
                                <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                            )}
                        </button>

                        <div className="h-6 w-px bg-slate-200"></div>

                        <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-semibold text-slate-700">{MOCK_DB.user.name}</p>
                                <p className="text-xs text-slate-500">{MOCK_DB.user.role}</p>
                            </div>
                            <img
                                className="h-9 w-9 rounded-full ring-2 ring-white shadow-sm"
                                src={MOCK_DB.user.avatar}
                                alt={MOCK_DB.user.name}
                            />
                        </div>
                    </div>
                </header>

                {/* Dashboard Content - Scrollable */}
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* Header Section */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{t.overviewTitle}</h1>
                                <p className="text-slate-500 mt-1">
                                    {activeClient
                                        ? `${t.viewingFor} ${MOCK_DB.clients.find(c => c.id === activeClient)?.name}`
                                        : t.welcomeBack}
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 text-sm font-medium shadow-sm transition-all">
                                    <Filter className="w-4 h-4 mr-2 text-slate-400" />
                                    {t.filter}
                                </button>
                                <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md shadow-indigo-200 text-sm font-medium transition-all transform hover:translate-y-px">
                                    <Plus className="w-4 h-4 mr-2" />
                                    {t.newJob}
                                </button>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <MetricCard
                                title="Active Jobs"
                                value={MOCK_DB.stats.activeJobs}
                                trend="up"
                                icon={Briefcase}
                            />
                            <MetricCard
                                title="Pending Reviews"
                                value={MOCK_DB.stats.pendingReviews}
                                subtext="Needs attention"
                                icon={AlertCircle}
                            />
                            <MetricCard
                                title="Completed (Nov)"
                                value={MOCK_DB.stats.completedMonth}
                                trend="up"
                                icon={CheckCircle2}
                            />
                            <MetricCard
                                title="Total Hours"
                                value={MOCK_DB.stats.totalHours}
                                trend="down"
                                icon={Clock}
                            />
                        </div>

                        {/* Main Table Section */}
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white">
                                <h3 className="font-bold text-lg text-slate-900">{t.activeJobs}</h3>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline decoration-2 underline-offset-2">{t.viewAll} &rarr;</a>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50/50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                            {/* Column 1: ID */}
                                            <th className="px-6 py-4">{t.colId}</th>
                                            {/* Column 2: Client */}
                                            <th className="px-6 py-4">{t.colClient}</th>
                                            {/* Column 3: Job Title */}
                                            <th className="px-6 py-4">{t.colJob}</th>
                                            {/* Column 4: Assignee */}
                                            <th className="px-6 py-4">{t.colAssignee}</th>
                                            {/* Column 5: Deadline */}
                                            <th className="px-6 py-4">{t.colDeadline}</th>
                                            {/* Column 6: Internal Deadline (New) */}
                                            <th className="px-6 py-4">{t.colInternalDeadline}</th>
                                            {/* Column 7: Status */}
                                            <th className="px-6 py-4">{t.colStatus}</th>
                                            {/* Column 8: Client Chat */}
                                            <th className="px-6 py-4 text-center">{t.colChat}</th>
                                            {/* Column 9: Internal Chat (New) */}
                                            <th className="px-6 py-4 text-center">{t.colInternalChat}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {filteredJobs.map((job) => {
                                            const client = MOCK_DB.clients.find(c => c.id === job.clientId);
                                            return (
                                                <tr key={job.id} className="hover:bg-slate-50/80 transition-colors group">
                                                    {/* ID */}
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">#{job.id}</td>

                                                    {/* Client */}
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 ring-2 ring-white shadow-sm overflow-hidden`}>
                                                                {client?.logo ? (
                                                                    <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
                                                                ) : (
                                                                    <div className="w-full h-full bg-slate-400" />
                                                                )}
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-700">{client?.name || 'Unknown'}</span>
                                                        </div>
                                                    </td>

                                                    {/* Job Title */}
                                                    <td className="px-6 py-4">
                                                        <p className="text-sm font-semibold text-slate-900">{job.title}</p>
                                                    </td>

                                                    {/* Assignee / Requester */}
                                                    <td className="px-6 py-4 text-sm text-slate-500">{job.requester}</td>

                                                    {/* Deadline */}
                                                    <td className="px-6 py-4">
                                                        <p className={`text-sm font-medium ${job.deadline === '2023-11-10' ? 'text-red-600' : 'text-slate-600'
                                                            }`}>
                                                            {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                        </p>
                                                    </td>

                                                    {/* Internal Deadline */}
                                                    <td className="px-6 py-4">
                                                        <p className="text-sm font-medium text-slate-500">
                                                            {new Date(job.internalDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                        </p>
                                                    </td>

                                                    {/* Status */}
                                                    <td className="px-6 py-4">
                                                        <StatusBadge status={job.status} />
                                                    </td>

                                                    {/* Client Chat (Blue) */}
                                                    <td className="px-6 py-4 text-center">
                                                        <div className="inline-flex items-center justify-center px-2 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer">
                                                            <MessageMessageSquareWithBadge count={job.messages} color="text-blue-600" />
                                                        </div>
                                                    </td>

                                                    {/* Internal Chat (Red/Gray) */}
                                                    <td className="px-6 py-4 text-center">
                                                        <div className={`inline-flex items-center justify-center px-2 py-1 rounded-full transition-colors cursor-pointer ${job.internalMessages > 0 ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                                                            <MessageMessageSquareWithBadge count={job.internalMessages} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        {filteredJobs.length === 0 && (
                                            <tr>
                                                <td colSpan="9" className="px-6 py-12 text-center text-slate-500">
                                                    {t.noJobs}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

// Helper for Chat Icons
const MessageMessageSquareWithBadge = ({ count, color }) => {
    // If no count, show plain icon
    if (!count || count === 0) {
        return <MessageCircle className="w-4 h-4" />;
    }
    return (
        <div className="flex items-center gap-1 font-bold text-xs">
            <MessageCircle className="w-4 h-4" />
            <span>{count}</span>
        </div>
    );
}

export default App;
