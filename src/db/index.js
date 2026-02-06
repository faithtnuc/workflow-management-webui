
// Import Logos - Paths adjusted for src/db location (one level deeper than App.jsx)
import logoSienna from '../assets/logos/logo_sienna.svg';
import logoAbramind from '../assets/logos/logo_abramind.svg';
import logoMaison from '../assets/logos/logo_maison.svg';
import logoPhyllant from '../assets/logos/logo_phyllant.svg';
import logoPithema from '../assets/logos/logo_pithema.svg';
import logoProwa from '../assets/logos/logo_prowa.svg';

export const MOCK_DB = {
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
