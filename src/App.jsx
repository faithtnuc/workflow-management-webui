import React, { useState } from 'react';
import {
    LayoutDashboard,
    Briefcase,
    Clock,
    FileText,
    Users,
    Settings,
    Search,
    Bell,
    MoreHorizontal,
    MessageSquare,
    ChevronDown,
    Filter,
    Plus
} from 'lucide-react';

// --- THEME ---
const THEME = {
    brand: {
        primary: 'text-indigo-600',
        bg: 'bg-indigo-600',
        light: 'bg-indigo-50',
        border: 'border-indigo-200',
        hover: 'hover:bg-indigo-700',
    },
    accent: {
        text: 'text-violet-600',
        bg: 'bg-violet-600',
    },
    success: {
        text: 'text-emerald-600',
        bg: 'bg-emerald-100',
        dot: 'bg-emerald-500',
    },
    warning: {
        text: 'text-amber-600',
        bg: 'bg-amber-100',
        dot: 'bg-amber-500',
    },
    danger: {
        text: 'text-rose-600',
        bg: 'bg-rose-100',
        dot: 'bg-rose-500',
    },
    info: {
        text: 'text-blue-600',
        bg: 'bg-blue-100',
        dot: 'bg-blue-500',
    },
    background: {
        main: 'bg-slate-50',
        card: 'bg-white',
        sidebar: 'bg-slate-900',
    },
    text: {
        main: 'text-slate-900',
        secondary: 'text-slate-500',
        muted: 'text-slate-400',
    }
};

// --- MOCK DATA ---
const MOCK_DATA = {
    user: {
        name: 'Alex Morgan',
        role: 'Senior Agency Manager',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    clients: [
        { id: 'c1', name: 'Acme Corp', logo: 'https://ui-avatars.com/api/?name=AC&background=6366f1&color=fff' },
        { id: 'c2', name: 'Globex', logo: 'https://ui-avatars.com/api/?name=GL&background=8b5cf6&color=fff' },
        { id: 'c3', name: 'Soylent', logo: 'https://ui-avatars.com/api/?name=SY&background=ec4899&color=fff' },
        { id: 'c4', name: 'Initech', logo: 'https://ui-avatars.com/api/?name=IN&background=10b981&color=fff' },
    ],
    stats: [
        { label: 'Active Jobs', value: '24', change: '+12%', trend: 'up' },
        { label: 'Pending Reviews', value: '7', change: '-2', trend: 'down' },
        { label: 'Completed (Month)', value: '142', change: '+18%', trend: 'up' },
        { label: 'Total Hours', value: '1,284', change: '+5%', trend: 'up' },
    ],
    jobs: [
        {
            id: '#10022',
            client: { name: 'Acme Corp', logo: 'https://ui-avatars.com/api/?name=AC&background=6366f1&color=fff' },
            title: 'Q3 Marketing Directives',
            requester: 'Sarah Connor',
            deadline: '2023-11-15',
            status: 'In Progress',
            messages: 3
        },
        {
            id: '#10023',
            client: { name: 'Globex', logo: 'https://ui-avatars.com/api/?name=GL&background=8b5cf6&color=fff' },
            title: 'Homepage Redesign V2',
            requester: 'Hank Scorpio',
            deadline: '2023-11-12',
            status: 'Waiting',
            messages: 0
        },
        {
            id: '#10024',
            client: { name: 'Soylent', logo: 'https://ui-avatars.com/api/?name=SY&background=ec4899&color=fff' },
            title: 'Nutrient Analysis Report',
            requester: 'Richard Thornburg',
            deadline: '2023-11-20',
            status: 'Review',
            messages: 5
        },
        {
            id: '#10025',
            client: { name: 'Initech', logo: 'https://ui-avatars.com/api/?name=IN&background=10b981&color=fff' },
            title: 'TPS Cover Sheet Update',
            requester: 'Bill Lumbergh',
            deadline: '2023-11-10',
            status: 'Urgent',
            messages: 12
        },
        {
            id: '#10026',
            client: { name: 'Acme Corp', logo: 'https://ui-avatars.com/api/?name=AC&background=6366f1&color=fff' },
            title: 'Holiday Campaign Assets',
            requester: 'Wile E. Coyote',
            deadline: '2023-12-01',
            status: 'In Progress',
            messages: 1
        },
    ]
};

const STATUS_Map = {
    'In Progress': { color: THEME.info.text, bg: THEME.info.bg, dot: THEME.info.dot },
    'Waiting': { color: THEME.warning.text, bg: THEME.warning.bg, dot: THEME.warning.dot },
    'Review': { color: THEME.accent.text, bg: 'bg-violet-100', dot: 'bg-violet-500' },
    'Urgent': { color: THEME.danger.text, bg: THEME.danger.bg, dot: THEME.danger.dot },
    'Completed': { color: THEME.success.text, bg: THEME.success.bg, dot: THEME.success.dot },
};


// --- COMPONENTS ---

const StatusBadge = ({ status }) => {
    const style = STATUS_Map[status] || STATUS_Map['In Progress'];
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.color}`}>
            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${style.dot}`}></span>
            {status}
        </span>
    );
};

const Sidebar = ({ activeClient, onClientSelect }) => {
    return (
        <div className="flex h-screen sticky top-0">
            {/* Left Rail - Clients */}
            <div className="w-16 bg-slate-900 flex flex-col items-center py-6 border-r border-slate-800 space-y-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg shadow-indigo-500/30">
                    F
                </div>
                {MOCK_DATA.clients.map((client) => (
                    <button
                        key={client.id}
                        onClick={() => onClientSelect(client.id)}
                        className={`w-10 h-10 rounded-full overflow-hidden transition-all duration-200 border-2 ${activeClient === client.id ? 'border-indigo-500 shadow-md shadow-indigo-500/20 scale-110' : 'border-transparent hover:border-slate-600 opacity-70 hover:opacity-100'}`}
                    >
                        <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
                    </button>
                ))}
                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                    <Plus size={20} />
                </button>
            </div>

            {/* Right Rail - Navigation */}
            <div className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
                <div className="h-16 flex items-center px-6 font-semibold text-slate-900 border-b border-slate-100">
                    General
                </div>
                <nav className="flex-1 px-3 py-4 space-y-1">
                    {[
                        { name: 'Dashboard', icon: LayoutDashboard, active: true },
                        { name: 'Jobs', icon: Briefcase },
                        { name: 'Timesheets', icon: Clock },
                        { name: 'Reporting', icon: FileText },
                        { name: 'Users', icon: Users },
                        { name: 'Settings', icon: Settings },
                    ].map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${item.active
                                    ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                        >
                            <item.icon
                                className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200 ${item.active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-500'}`}
                            />
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <div className="bg-indigo-50 rounded-xl p-4">
                        <h4 className="text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-1">Pro Plan</h4>
                        <p className="text-xs text-indigo-700 mb-3">Your team has 4 active projects.</p>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium py-2 rounded-lg transition-colors shadow-sm shadow-indigo-200">
                            Upgrade Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
            {/* Search */}
            <div className="flex-1 max-w-lg">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200"
                        placeholder="Search jobs, clients, or tags..."
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
                </button>
                <div className="h-6 w-px bg-slate-200 mx-2"></div>
                <div className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-transparent group-hover:ring-indigo-100 transition-all">
                        <img src={MOCK_DATA.user.avatar} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden md:block text-sm">
                        <p className="font-medium text-slate-700 group-hover:text-slate-900">{MOCK_DATA.user.name}</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                </div>
            </div>
        </header>
    );
};

const MetricCard = ({ label, value, change, trend }) => {
    const isUp = trend === 'up';
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-slate-500">{label}</h3>
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${isUp ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                    {change}
                </span>
            </div>
            <p className="text-3xl font-semibold text-slate-900 tracking-tight">{value}</p>
        </div>
    );
};

const JobRow = ({ job }) => {
    return (
        <tr className="hover:bg-slate-50 transition-colors duration-150 group">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                {job.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6">
                        <img className="h-6 w-6 rounded-full" src={job.client.logo} alt="" />
                    </div>
                    <div className="ml-3">
                        <div className="text-sm font-medium text-slate-900">{job.client.name}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-900 font-medium">{job.title}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-500">{job.requester}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-500">{job.deadline}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={job.status} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
                <div className={`relative inline-flex items-center justify-center ${job.messages > 0 ? 'text-indigo-600' : 'text-slate-300'}`}>
                    <MessageSquare className="h-4 w-4" />
                    {job.messages > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] font-bold px-1 rounded-full min-w-[14px] h-[14px] flex items-center justify-center">
                            {job.messages}
                        </span>
                    )}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-slate-300 hover:text-slate-600 transition-colors">
                    <MoreHorizontal className="h-5 w-5" />
                </button>
            </td>
        </tr>
    );
};

// --- MAIN APP COMPONENT ---

function App() {
    const [activeClient, setActiveClient] = useState('c1');

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans">
            <Sidebar activeClient={activeClient} onClientSelect={setActiveClient} />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Header />

                <main className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* Page Title */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
                                <p className="mt-1 text-sm text-slate-500">Overview of all active agency workflows.</p>
                            </div>
                            <div className="flex space-x-3">
                                <button className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                                    <Filter className="h-4 w-4 mr-2 text-slate-400" />
                                    Filter
                                </button>
                                <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                                    <Plus className="h-4 w-4 mr-2" />
                                    New Job
                                </button>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {MOCK_DATA.stats.map((stat, idx) => (
                                <MetricCard key={idx} {...stat} />
                            ))}
                        </div>

                        {/* Job Table - Hero Component */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                                <h3 className="text-base font-semibold text-slate-900">Active Jobs</h3>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    View all
                                </a>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            {['ID', 'Client', 'Job Title', 'Requester', 'Deadline', 'Status', 'Messages', ''].map((header, i) => (
                                                <th
                                                    key={i}
                                                    scope="col"
                                                    className={`px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider ${header === 'Messages' ? 'text-center' : ''}`}
                                                >
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-200">
                                        {MOCK_DATA.jobs.map((job) => (
                                            <JobRow key={job.id} job={job} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                                <div className="text-sm text-slate-500">
                                    Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> results
                                </div>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50">Previous</button>
                                    <button className="px-3 py-1 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50">Next</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
