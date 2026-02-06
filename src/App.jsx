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
    MessageCircle,
    ChevronDown,
    Lightbulb,
    CreditCard,
    UserCog
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
        workflowManagement: 'İş Akış Yönetimi',
        metricActiveJobs: 'Aktif İşler',
        metricPendingReviews: 'Bekleyen Onaylar',
        metricCompleted: 'Tamamlanan (Ay)',
        metricTotalHours: 'Toplam Saat',
        needsAttention: 'Dikkat gerekiyor',
        vsLastMonth: 'geçen aya göre',
        workspacesList: ['Tasarım Ekibi', 'Yazılım Ekibi', 'Pazarlama'],
        status: {
            Completed: 'Tamamlandı',
            Review: 'İnceleniyor',
            Waiting: 'Beklemede',
            Urgent: 'Acil',
            InProgress: 'Devam Ediyor'
        },
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
        // Job Titles
        jobQ3Marketing: 'Q3 Pazarlama Varlıkları',
        jobHomepageRedesign: 'Anasayfa Yenileme V2',
        jobNutritionalPDF: 'Beslenme Önizleme PDF',
        jobSocialMedia: 'Sosyal Medya Kampanyası',
        jobSafetyVideo: 'Güvenlik Protokolü Videosu',
        jobSuitInterface: 'Suit Arayüz Mockup',
        jobMobileRefresh: 'Mobil Uygulama Yenileme',
        noJobs: 'Bu müşteri için aktif iş bulunamadı.',

        // New Menus
        ideas: 'Fikirler',
        finance: 'Finans',
        hr: 'İK',

        // Submenus
        ideaAdd: 'Fikir Ekle',
        ideaList: 'Fikirler',
        ideaCategoryAdd: 'Fikir Kategori Ekle',
        ideaCategories: 'Fikir Kategoriler',
        nameAdd: 'İsim Ekle',
        names: 'İsimler',
        sloganAdd: 'Slogan Ekle',
        slogans: 'Sloganlar',

        clientAdd: 'Müşteri Ekle',
        clientList: 'Müşteri Listele',

        planning: 'Planlama',
        completedJobs: 'Yapılan İşler',
        employeesGeneral: 'Çalışanlar (Genel)',
        employeesPrivate: 'Çalışanlar (Özel)',
        designListing: 'Tasarım Listeleme',
        employeeClient: 'Çalışan Müşteri',

        // Quick Filters
        filterActive: 'Aktif İşler',
        filterAll: 'Tüm İşler',
        filterMyJobs: 'Bana Atananlar',
        filterUrgent: 'Acil İşler',
        filterUrgent: 'Acil İşler',
        filterReview: 'Onay Bekleyen İşler',

        // View actions
        showMetrics: 'Özeti Göster',
        viewAll: 'Tümünü Gör',
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
        workflowManagement: 'Workflow Management',
        metricActiveJobs: 'Active Jobs',
        metricPendingReviews: 'Pending Reviews',
        metricCompleted: 'Completed (Month)',
        metricTotalHours: 'Total Hours',
        needsAttention: 'Needs attention',
        vsLastMonth: 'vs last month',
        workspacesList: ['Design Team', 'Dev Squad', 'Marketing'],
        status: {
            Completed: 'Completed',
            Review: 'Review',
            Waiting: 'Waiting',
            Urgent: 'Urgent',
            InProgress: 'In Progress'
        },
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
        // Job Titles
        jobQ3Marketing: 'Q3 Marketing Assets',
        jobHomepageRedesign: 'Homepage Redesign V2',
        jobNutritionalPDF: 'Nutritional PDF',
        jobSocialMedia: 'Social Media Campaign',
        jobSafetyVideo: 'Safety Protocols Video',
        jobSuitInterface: 'Suit Interface Mockups',
        jobMobileRefresh: 'Mobile App Refresh',
        noJobs: 'No active jobs found for this client.',

        // New Menus (EN)
        ideas: 'Ideas',
        finance: 'Finance',
        hr: 'HR',

        // Submenus
        ideaAdd: 'Add Idea',
        ideaList: 'Ideas',
        ideaCategoryAdd: 'Add Idea Category',
        ideaCategories: 'Idea Categories',
        nameAdd: 'Add Name',
        names: 'Names',
        sloganAdd: 'Add Slogan',
        slogans: 'Slogans',

        clientAdd: 'Add Client',
        clientList: 'List Clients',

        planning: 'Planning',
        completedJobs: 'Completed Jobs',
        employeesGeneral: 'Employees (General)',
        employeesPrivate: 'Employees (Private)',
        designListing: 'Design Listing',
        employeeClient: 'Employee Client',

        // Quick Filters (EN)
        filterActive: 'Active Jobs',
        filterAll: 'All Jobs',
        filterMyJobs: 'My Jobs',
        filterUrgent: 'Urgent',
        filterUrgent: 'Urgent',
        filterReview: 'Pending Review Jobs',

        // View actions
        showMetrics: 'Show Metrics',
        viewAll: 'View All Jobs',
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
            titleKey: 'jobQ3Marketing',
            requester: 'Sarah Connor',
            deadline: '2023-11-15',
            internalDeadline: '2023-11-13',
            status: 'Review', // Changed to Review
            messages: 2,
            internalMessages: 5
        },
        {
            id: '10023',
            clientId: 'c2',
            titleKey: 'jobHomepageRedesign',
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
            titleKey: 'jobNutritionalPDF',
            requester: 'Richard T.',
            deadline: '2023-11-20',
            internalDeadline: '2023-11-18',
            status: 'Review', // Changed to Review
            messages: 5,
            internalMessages: 0
        },
        {
            id: '10025',
            clientId: 'c1',
            titleKey: 'jobSocialMedia',
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
            titleKey: 'jobSafetyVideo',
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
            titleKey: 'jobSuitInterface',
            requester: 'Pepper Potts',
            deadline: '2023-11-25',
            internalDeadline: '2023-11-22',
            status: 'In Progress',
            messages: 0,
            internalMessages: 2
        },
        {
            id: '10029',
            clientId: 'c1',
            titleKey: 'jobQ3Marketing',
            requester: 'Sarah Connor',
            deadline: '2023-11-30',
            internalDeadline: '2023-11-28',
            status: 'Waiting',
            messages: 1,
            internalMessages: 4
        },
        {
            id: '10030',
            clientId: 'c2',
            titleKey: 'jobHomepageRedesign',
            requester: 'Hank Scorpio',
            deadline: '2023-12-01',
            internalDeadline: '2023-11-30',
            status: 'In Progress',
            messages: 2,
            internalMessages: 0
        },
        {
            id: '10031',
            clientId: 'c3',
            titleKey: 'jobNutritionalPDF',
            requester: 'Richard T.',
            deadline: '2023-12-05',
            internalDeadline: '2023-12-03',
            status: 'Urgent',
            messages: 0,
            internalMessages: 2
        },
        {
            id: '10032',
            clientId: 'c4',
            titleKey: 'jobSafetyVideo',
            requester: 'Albert W.',
            deadline: '2023-12-08',
            internalDeadline: '2023-12-06',
            status: 'Review', // 4th Review job
            messages: 4,
            internalMessages: 1
        },
        {
            id: '10033',
            clientId: 'c5',
            titleKey: 'jobSuitInterface',
            requester: 'Pepper Potts',
            deadline: '2023-12-10',
            internalDeadline: '2023-12-08',
            status: 'Completed',
            messages: 0,
            internalMessages: 0
        },
        {
            id: '10034',
            clientId: 'c6',
            titleKey: 'jobMobileRefresh',
            requester: 'Gary O.',
            deadline: '2023-12-12',
            internalDeadline: '2023-12-10',
            status: 'In Progress',
            messages: 1,
            internalMessages: 1
        },
    ]
};

/* -------------------------------------------------------------------------- */
/*                                COMPONENTS                                  */
/* -------------------------------------------------------------------------- */

// Status Badge Component
const StatusBadge = ({ status, label }) => {
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
            {label || status}
        </span>
    );
};

// Sidebar Component
const Sidebar = ({ activeClient, setActiveClient, lang }) => {
    const t = TRANSLATIONS[lang];

    return (
        <div className="h-screen bg-slate-900 border-r border-slate-800 flex flex-shrink-0 z-20">
            {/* Left Rail - Clients */}
            <div className="w-20 flex flex-col items-center py-6 border-r border-slate-800 bg-slate-900 gap-4">
                {/* Spacer for alignment with Right Rail 'Jobs' button */}
                {/* Right Rail Header is approx 40px + 32px margin = 72px. Gap is 16px. So 72 - 16 = 56px spacer. */}
                <div className="w-full h-[56px] flex-shrink-0" />

                {MOCK_DB.clients.map((client) => (
                    <div
                        key={client.id}
                        onClick={() => setActiveClient(client.id === activeClient ? null : client.id)}
                        className={`
              w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 relative border-2 border-indigo-500
              ${activeClient === client.id ? 'ring-2 ring-offset-2 ring-offset-slate-900 ring-indigo-500 scale-110' : 'hover:scale-105 opacity-90 hover:opacity-100'}
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
                    <p className="text-xs text-slate-500">{t.workflowManagement}</p>
                </div>

                <nav className="flex-1 space-y-1">
                    <NavItem icon={<LayoutDashboard />} label={t.dashboard} active />
                    <NavItem icon={<Briefcase />} label={t.jobs} badge="12" />
                    <NavItem icon={<Users />} label={t.timesheets} />
                    <NavItem icon={<Users />} label={t.reporting} subItems={[t.clientAdd, t.clientList]} />
                    <NavItem icon={<Lightbulb />} label={t.ideas} subItems={[
                        t.ideaAdd, t.ideaList,
                        t.ideaCategoryAdd, t.ideaCategories,
                        t.nameAdd, t.names,
                        t.sloganAdd, t.slogans
                    ]} />
                    <NavItem icon={<FileText />} label={t.users} subItems={[
                        t.planning, t.completedJobs,
                        t.employeesGeneral, t.employeesPrivate,
                        t.designListing, t.employeeClient
                    ]} />
                    <NavItem icon={<CreditCard />} label={t.finance} />
                    <NavItem icon={<UserCog />} label={t.hr} />

                    <div className="pt-6 mt-6 border-t border-slate-100">
                        <h3 className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{t.workspaces}</h3>
                        {t.workspacesList.map((item, i) => (
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

const NavItem = ({ icon, label, active = false, badge, subItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasSubItems = subItems && subItems.length > 0;

    const handleClick = (e) => {
        if (hasSubItems) {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className="flex flex-col">
            <a
                href="#"
                onClick={handleClick}
                className={`
                    group flex items-center px-2 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                    ${active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
            >
                <span className={`mr-3 ${active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-500'}`}>
                    {React.cloneElement(icon, { size: 20 })}
                </span>
                <span className="flex-1">{label}</span>

                {hasSubItems && (
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                )}

                {!hasSubItems && badge && (
                    <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-medium ${active ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-600'}`}>
                        {badge}
                    </span>
                )}
            </a>

            {/* Submenu */}
            {hasSubItems && isOpen && (
                <div className="ml-9 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                    {subItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block py-1.5 text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};


// Metric Card
const MetricCard = ({ title, value, subtext, trend, icon: Icon, trendLabel }) => (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] hover:shadow-lg transition-all duration-300 group">
        <div className="flex items-start justify-between mb-2">
            <div>
                <p className="text-xs font-medium text-slate-500 mb-0.5">{title}</p>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{value}</h3>
            </div>
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Icon size={20} strokeWidth={2} />
            </div>
        </div>
        <div className="flex items-center text-xs">
            {trend === 'up' && <span className="text-emerald-600 font-medium flex items-center">↑ 12% <span className="text-slate-400 ml-1 font-normal">{trendLabel}</span></span>}
            {trend === 'down' && <span className="text-red-500 font-medium flex items-center">↓ 2% <span className="text-slate-400 ml-1 font-normal">{trendLabel}</span></span>}
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
    const [activeFilter, setActiveFilter] = useState('active'); // default 'active'
    const [isExpanded, setIsExpanded] = useState(false);
    const t = TRANSLATIONS[lang];

    const filteredJobs = (activeClient
        ? MOCK_DB.jobs.filter(job => job.clientId === activeClient)
        : MOCK_DB.jobs).filter(job => {
            if (activeFilter === 'all') return true;
            if (activeFilter === 'active') return job.status !== 'Completed';
            if (activeFilter === 'myJobs') return job.requester === 'Sarah Connor';
            if (activeFilter === 'urgent') return job.status === 'Urgent';
            if (activeFilter === 'review') return job.status === 'Review';
            return true;
        });

    // Limit rows if not expanded (Preview Mode)
    const displayJobs = isExpanded ? filteredJobs : filteredJobs.slice(0, 7);

    // Calculate total unread messages from all clients
    const totalUnreadMessages = MOCK_DB.clients.reduce((sum, client) => sum + client.unreadMessages, 0);

    // Calculate count of Review jobs
    const reviewCount = (activeClient
        ? MOCK_DB.jobs.filter(job => job.clientId === activeClient)
        : MOCK_DB.jobs).filter(job => job.status === 'Review').length;

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
                <main className="flex-1 overflow-y-auto px-8 pt-8 pb-32">
                    <div className="w-full mx-auto flex flex-col">

                        {/* Header Section with Quick Filters */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                {[
                                    { id: 'active', label: t.filterActive },
                                    { id: 'all', label: t.filterAll },
                                    { id: 'myJobs', label: t.filterMyJobs },
                                    { id: 'urgent', label: t.filterUrgent },
                                    { id: 'review', label: t.filterReview, isSpecial: true } // Special flag for Review tab
                                ].map(tab => {
                                    // Base styles matching the "Filter" button: White bg, border, slate text
                                    const baseStyle = "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border shadow-sm";

                                    // Inactive state
                                    let style = `${baseStyle} border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900`;

                                    // Special "Review" button styling
                                    if (tab.isSpecial) {
                                        if (activeFilter === tab.id) {
                                            // Active Special: Indigo Filled (Like New Job button)
                                            style = `${baseStyle} bg-indigo-600 text-white border-transparent shadow-md shadow-indigo-200 hover:bg-indigo-700`;
                                        } else {
                                            // Inactive Special: Distinctive Indigo Tint
                                            style = `${baseStyle} bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100`;
                                        }
                                    } else {
                                        // Standard Active State
                                        if (activeFilter === tab.id) {
                                            style = `${baseStyle} border-indigo-600 text-indigo-600 bg-indigo-50/50`;
                                        }
                                    }

                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveFilter(tab.id)}
                                            className={style}
                                        >
                                            {tab.label}
                                            {tab.isSpecial && reviewCount > 0 && (
                                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${activeFilter === tab.id ? 'bg-white/20 text-white' : 'bg-indigo-200 text-indigo-800'}`}>
                                                    {reviewCount}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
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

                        {/* Metrics Grid - Collapsible */}
                        <div
                            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-0 opacity-0 mb-0' : 'max-h-[500px] opacity-100 mb-8'}`}
                        >
                            <MetricCard
                                title={t.metricActiveJobs}
                                value={MOCK_DB.stats.activeJobs}
                                trend="up"
                                trendLabel={t.vsLastMonth}
                                icon={Briefcase}
                            />
                            <MetricCard
                                title={t.metricPendingReviews}
                                value={MOCK_DB.stats.pendingReviews}
                                subtext={t.needsAttention}
                                icon={AlertCircle}
                            />
                            <MetricCard
                                title={t.metricCompleted}
                                value={MOCK_DB.stats.completedMonth}
                                trend="up"
                                trendLabel={t.vsLastMonth}
                                icon={CheckCircle2}
                            />
                            <MetricCard
                                title={t.metricTotalHours}
                                value={MOCK_DB.stats.totalHours}
                                trend="down"
                                trendLabel={t.vsLastMonth}
                                icon={Clock}
                            />
                        </div>

                        {/* Main Table Section */}
                        <div className={`bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col transition-all duration-500 ${isExpanded ? 'flex-1 h-full' : ''}`}>
                            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white">
                                <h3 className="font-bold text-lg text-slate-900">{t.activeJobs}</h3>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsExpanded(!isExpanded);
                                    }}
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline decoration-2 underline-offset-2 transition-colors"
                                >
                                    {isExpanded ? t.showMetrics + ' ↓' : t.viewAll + ' →'}
                                </button>
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
                                        {displayJobs.map((job) => {
                                            const client = MOCK_DB.clients.find(c => c.id === job.clientId);
                                            // Status lookup key logic: "In Progress" -> "InProgress"
                                            const statusKey = job.status.replace(' ', '');
                                            const statusLabel = t.status[statusKey] || job.status;
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
                                                        <p className="text-sm font-semibold text-slate-900">{t[job.titleKey]}</p>
                                                    </td>

                                                    {/* Assignee / Requester */}
                                                    <td className="px-6 py-4 text-sm text-slate-500">{job.requester}</td>

                                                    {/* Deadline */}
                                                    <td className="px-6 py-4">
                                                        <p className={`text-sm font-medium ${job.deadline === '2023-11-10' ? 'text-red-600' : 'text-slate-600'
                                                            }`}>
                                                            {new Date(job.deadline).toLocaleDateString(lang === 'TR' ? 'tr-TR' : 'en-US', { month: 'short', day: 'numeric' })}
                                                        </p>
                                                    </td>

                                                    {/* Internal Deadline */}
                                                    <td className="px-6 py-4">
                                                        <p className="text-sm font-medium text-slate-500">
                                                            {new Date(job.internalDeadline).toLocaleDateString(lang === 'TR' ? 'tr-TR' : 'en-US', { month: 'short', day: 'numeric' })}
                                                        </p>
                                                    </td>

                                                    {/* Status */}
                                                    <td className="px-6 py-4">
                                                        <StatusBadge status={job.status} label={statusLabel} />
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
                                        {displayJobs.length === 0 && (
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
