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
    UserCog,
    X,
    Paperclip,
    Send,
    Calendar,
    Download,
    User,
    List,
    MoreVertical,
    Printer,
    Monitor,
    Box,
    Video,
    Smartphone,
    PenTool
} from 'lucide-react';

import { THEME } from './data/theme';
import { TRANSLATIONS } from './data/translations';
import { MOCK_DB } from './db/index';

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
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-400 cursor-pointer transition-colors hover:bg-slate-800">
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




// Job Detail Drawer Component (Editor)
const JobDrawer = ({ job, onClose, isOpen, lang }) => {
    const [activeTab, setActiveTab] = useState('client'); // 'client' | 'internal'
    const [formState, setFormState] = useState({
        status: 'In Progress',
        requirements: [],
        internalDeadline: '',
        description: '',
        title: ''
    });
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    const t = TRANSLATIONS[lang];

    // Reset local state when job changes
    React.useEffect(() => {
        if (job) {
            setFormState({
                status: job.status,
                requirements: job.requirements || [],
                internalDeadline: job.internalDeadline || '',
                description: lang === 'TR' ? (job.descriptionTR || job.description) : job.description,
                title: lang === 'TR' ? (t[job.titleKey] || job.titleKey) : (t[job.titleKey] || job.titleKey) // Use translated title as init value
            });
        }
    }, [job, lang, t]);

    if (!job) return null;

    // Check for changes
    const hasChanges = () => {
        const initialDesc = lang === 'TR' ? (job.descriptionTR || job.description) : job.description;
        // const initialTitle = t[job.titleKey] || job.titleKey; // Title editing might be tricky if it's a key. Let's assume we edit the text directly for now suitable for the "mock" nature. 
        // Note: Real app would probably not let you edit a key-based title easily without strictly updating the key or having a custom title field. 
        // For this mock, let's track description, status, requirements, deadline. 

        const isDescChanged = formState.description !== initialDesc;
        const isStatusChanged = formState.status !== job.status;
        const isReqChanged = JSON.stringify(formState.requirements.sort()) !== JSON.stringify((job.requirements || []).sort());
        const isDeadlineChanged = formState.internalDeadline !== (job.internalDeadline || '');

        return isDescChanged || isStatusChanged || isReqChanged || isDeadlineChanged;
    };

    const handleSave = () => {
        // Mock Update
        job.status = formState.status;
        job.requirements = formState.requirements;
        job.internalDeadline = formState.internalDeadline;

        if (lang === 'TR') {
            job.descriptionTR = formState.description;
        } else {
            job.description = formState.description;
        }

        onClose();
    };

    const handleCancel = () => {
        if (hasChanges()) {
            if (confirm(t.msgNoChanges ? 'Discard changes?' : 'Changes will be lost.')) { // fallback if translation missing, though we added it
                onClose();
            }
        } else {
            onClose();
        }
    };

    // Requirements Configuration
    const REQ_TYPES = [
        { id: 'Software', icon: Monitor, label: t.reqSoftware },
        { id: 'Print', icon: Printer, label: t.reqPrint },
        { id: '3D', icon: Box, label: t.req3D },
        { id: 'Video', icon: Video, label: t.reqVideo },
        { id: 'Mobile', icon: Smartphone, label: t.reqMobile },
        { id: 'Design', icon: PenTool, label: t.reqDesign },
    ];

    if (!job) return null;

    // Helper to check if req is active
    const isReqActive = (reqId) => {
        return formState.requirements.some(r => r.includes(reqId));
    };

    const toggleRequirement = (reqId) => {
        setFormState(prev => {
            const newReqs = prev.requirements.includes(reqId)
                ? prev.requirements.filter(r => r !== reqId)
                : [...prev.requirements, reqId];
            return { ...prev, requirements: newReqs };
        });
    };

    const handleStatusChange = (newStatus) => {
        setFormState(prev => ({ ...prev, status: newStatus }));
        setIsStatusOpen(false);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleCancel}
            />

            {/* Drawer - Wider (75%) */}
            <div className={`fixed inset-y-0 right-0 w-[75%] max-w-5xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>

                {/* Header (Action Bar) */}
                <div className="h-16 border-b border-slate-200 flex items-center justify-between px-8 bg-white flex-shrink-0 z-10 w-full">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <span>{t.drawerBreadcrumb}</span>
                                <span>/</span>
                                <span>#{job.id}</span>
                            </div>
                            {/* Breadcrumb style above, Title below */}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Status Dropdown */}
                        <div className="relative mr-4">
                            <div
                                onClick={() => setIsStatusOpen(!isStatusOpen)}
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <StatusBadge status={formState.status} label={t['status' + formState.status.replace(/\s/g, '')]} />
                            </div>

                            {isStatusOpen && (
                                <div className="absolute top-full mt-2 right-0 w-40 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-50 animate-in fade-in slide-in-from-top-1">
                                    {['Pending', 'In Progress', 'Review', 'Completed', 'Urgent'].map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => handleStatusChange(s)}
                                            className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-between group"
                                        >
                                            {t['status' + s.replace(/\s/g, '')]}
                                            {formState.status === s && <CheckCircle2 size={14} className="text-indigo-600" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="h-8 w-px bg-slate-200 mx-2"></div>

                        {/* Action Icons */}
                        <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title={t.tooltipClientProfile}>
                            <User size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title={t.tooltipOtherJobs}>
                            <List size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title={t.tooltipMoreActions}>
                            <MoreVertical size={18} />
                        </button>

                        <div className="h-8 w-px bg-slate-200 mx-2"></div>

                        <button
                            onClick={handleCancel}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            title={t.tooltipClose}
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="flex-1 flex overflow-hidden">

                    {/* Left Column: The Work (60%) */}
                    <div className="w-[60%] flex flex-col overflow-y-auto border-r border-slate-200 bg-white">
                        <div className="p-8 space-y-8">

                            {/* Title (Editable) */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t.drawerJobTitle}</label>
                                <input
                                    type="text"
                                    value={formState.title} // Used formState
                                    onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                                    className="w-full text-2xl font-bold text-slate-900 border-none p-0 focus:ring-0 placeholder:text-slate-300"
                                />
                            </div>

                            {/* Deadline Management */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 rounded-xl border border-slate-200 bg-slate-100">
                                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                        <Calendar size={14} /> {t.drawerClientDeadline}
                                    </label>
                                    <input
                                        type="date"
                                        readOnly
                                        defaultValue={job.deadline}
                                        className="w-full bg-transparent border-none text-slate-500 text-sm font-medium focus:ring-0 p-0 cursor-not-allowed"
                                    />
                                </div>
                                <div className="p-4 rounded-xl border-l-4 border-l-red-500 border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors">
                                    <label className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
                                        <AlertCircle size={14} /> {t.drawerAgencyDeadline}
                                    </label>
                                    <input
                                        type="date"
                                        value={formState.internalDeadline}
                                        onChange={(e) => setFormState({ ...formState, internalDeadline: e.target.value })}
                                        className="w-full bg-transparent border-none text-red-900 text-sm font-bold focus:ring-0 p-0"
                                    />
                                </div>
                            </div>

                            {/* Description (Textarea) */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t.drawerDescription}</label>
                                <textarea
                                    rows={6}
                                    className="block p-4 w-full text-sm text-slate-900 bg-slate-50 rounded-xl border border-slate-200 focus:ring-indigo-500 focus:border-indigo-500 leading-relaxed resize-none transition-shadow"
                                    value={formState.description}
                                    onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                                    placeholder={t.drawerPlaceholderDesc}
                                ></textarea>
                            </div>

                            {/* Requirements (Toggle Grid) */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{t.drawerRequirements}</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {REQ_TYPES.map((req) => {
                                        const active = isReqActive(req.id);
                                        const Icon = req.icon;
                                        return (
                                            <div
                                                key={req.id}
                                                onClick={() => toggleRequirement(req.id)}
                                                className={`
                                                    relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all cursor-pointer select-none group
                                                    ${active
                                                        ? 'border-indigo-500 bg-indigo-50/30'
                                                        : 'border-slate-100 bg-white hover:border-indigo-200 hover:bg-slate-50'
                                                    }
                                                `}
                                            >
                                                {/* Toggle Switch Visual */}
                                                <div className={`absolute top-3 right-3 w-8 h-4 rounded-full transition-colors ${active ? 'bg-indigo-500' : 'bg-slate-200'}`}>
                                                    <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${active ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                                </div>

                                                <Icon size={24} className={`mb-3 ${active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-400'}`} strokeWidth={1.5} />
                                                <span className={`text-xs font-bold ${active ? 'text-indigo-900' : 'text-slate-500'}`}>{req.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Communication (40%) */}
                    <div className="w-[40%] flex flex-col bg-[#F8FAFC]">

                        {/* Custom Tabs */}
                        <div className="flex p-2 gap-2 bg-white border-b border-slate-200">
                            <button
                                onClick={() => setActiveTab('client')}
                                className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'client' ? 'bg-blue-100 text-blue-700 shadow-sm' : 'text-slate-400 hover:bg-slate-50'}`}
                            >
                                <Users size={16} /> {t.tabClientChat}
                            </button>
                            <button
                                onClick={() => setActiveTab('internal')}
                                className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'internal' ? 'bg-orange-100 text-orange-700 shadow-sm' : 'text-slate-400 hover:bg-slate-50'}`}
                            >
                                <UserCog size={16} /> {t.tabInternalTeam}
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {/* Filter logs based on visibility */}
                            {(() => {
                                const logs = lang === 'TR' ? (job.activityLogTR || job.activityLog) : job.activityLog;
                                return logs && logs
                                    .filter(log => activeTab === 'internal' ? true : log.visibility !== 'internal') // Internal sees all, Client sees only client/public
                                    .map((log) => (
                                        <div key={log.id} className="flex gap-3 items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                                            {log.type === 'log' ? (
                                                <div className="w-full flex justify-center my-2">
                                                    <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                                                        {log.user} {log.text.toLowerCase()} • {log.timestamp}
                                                    </span>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm flex-shrink-0 ${log.visibility === 'internal' ? 'bg-orange-400' : 'bg-blue-500'}`}>
                                                        {log.user.charAt(0)}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-baseline justify-between mb-1 ml-1">
                                                            <span className="text-xs font-bold text-slate-900">{log.user}</span>
                                                            <span className="text-[10px] text-slate-400">{log.timestamp}</span>
                                                        </div>
                                                        <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${log.visibility === 'internal'
                                                            ? 'bg-orange-50 text-orange-900 rounded-tl-none border border-orange-100'
                                                            : 'bg-white text-slate-700 rounded-tl-none border border-slate-200'
                                                            }`}>
                                                            {log.text}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ));
                            })()}

                            {((!job.activityLog || job.activityLog.length === 0) && (!job.activityLogTR || job.activityLogTR.length === 0)) && (
                                <div className="flex flex-col items-center justify-center h-40 text-slate-400">
                                    <MessageSquare size={32} className="mb-2 opacity-20" />
                                    <span className="text-sm">{t.noActivity}</span>
                                </div>
                            )}


                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-200">
                            <div className={`relative rounded-xl border transition-colors focus-within:ring-2 focus-within:ring-offset-1 ${activeTab === 'internal' ? 'border-orange-200 bg-orange-50/50 focus-within:ring-orange-400' : 'border-blue-200 bg-blue-50/50 focus-within:ring-blue-400'}`}>
                                <input
                                    type="text"
                                    placeholder={activeTab === 'internal' ? t.msgPlaceholderInternal : t.msgPlaceholderClient}
                                    className="w-full pl-4 pr-12 py-3 bg-transparent border-none text-sm focus:outline-none placeholder:text-slate-400 text-slate-700"
                                />
                                <button className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-colors ${activeTab === 'internal' ? 'text-orange-600 hover:bg-orange-100' : 'text-blue-600 hover:bg-blue-100'}`}>
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>

                        {/* File Drop - Compact */}
                        <div className="px-4 pb-4 bg-white">
                            <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 flex items-center justify-center gap-3 text-slate-400 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all cursor-pointer">
                                <Paperclip size={18} />
                                <span className="text-xs font-semibold">{t.dropFiles}</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Actions */}
                <div className="h-20 border-t border-slate-200 bg-white flex items-center justify-end px-8 gap-4 flex-shrink-0 z-20">
                    <div className="text-xs text-slate-400 mr-auto flex items-center gap-2">
                        {!hasChanges() && (
                            <>
                                <CheckCircle2 size={14} />
                                {t.msgNoChanges}
                            </>
                        )}
                        {hasChanges() && (
                            <span className="text-indigo-600 font-medium animate-pulse">
                                Unsaved changes
                            </span>
                        )}
                    </div>

                    <button
                        onClick={handleCancel}
                        className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                    >
                        {t.btnCancel}
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!hasChanges()}
                        className={`
                            px-8 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all
                            ${hasChanges()
                                ? 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-300 hover:-translate-y-0.5 cursor-pointer'
                                : 'bg-slate-300 shadow-none cursor-not-allowed opacity-70'
                            }
                        `}
                    >
                        {t.btnSave}
                    </button>
                </div>

            </div>
        </>
    );
};

/* -------------------------------------------------------------------------- */
/*                               MAIN LAYOUT                                  */
/* -------------------------------------------------------------------------- */

const App = () => {
    const [activeClient, setActiveClient] = useState(null);
    const [lang, setLang] = useState('TR');
    const [activeFilter, setActiveFilter] = useState('active'); // default 'active'
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null); // Drawer state
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
        <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-700 relative overflow-hidden">
            <JobDrawer
                job={selectedJob}
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                lang={lang}
            />

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
                                                <tr
                                                    key={job.id}
                                                    onClick={() => setSelectedJob(job)}
                                                    className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                                                >
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
