
// Import Logos - Paths adjusted for src/db location (one level deeper than App.jsx)
import logoSienna from '../assets/logos/logo_sienna.svg';
import logoAbramind from '../assets/logos/logo_abramind.svg';
import logoMaison from '../assets/logos/logo_maison.svg';
import logoPhyllant from '../assets/logos/logo_phyllant.svg';
import logoPithema from '../assets/logos/logo_pithema.svg';
import logoProwa from '../assets/logos/logo_prowa.svg';
import logoParflux from '../assets/logos/logo_parflux.svg';

export const MOCK_DB = {
    user: {
        name: 'Mert Tunç',
        role: 'Senior Producer',
        avatar: logoParflux,
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
            status: 'Review',
            messages: 2,
            internalMessages: 5,
            description: "Comprehensive marketing campaign strategy for Q3, including social media ramp-up and influencer partnerships.",
            descriptionTR: "Q3 için kapsamlı pazarlama kampanyası stratejisi, sosyal medya artışı ve etkileyici ortaklıkları dahil.",
            requesterEmail: 'sarah.connor@sienna.com',
            createdAt: '2023-10-20',
            assignee: 'Mert Tunç',
            isClientVisible: true,
            requirements: ["Strategy", "Social Media", "Copywriting"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Sarah Connor', timestamp: '2023-10-20 09:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Initial draft is ready for review. I focused on the "modern" look.', user: 'Mert Tunç', timestamp: '2023-10-25 14:30', visibility: 'internal' },
                { id: 3, type: 'comment', text: 'Looks good, minor tweaks on the budget section needed. Can we make the font larger?', user: 'Sarah Connor', timestamp: '2023-10-26 10:15', visibility: 'client' },
                { id: 4, type: 'comment', text: 'Sure, I will update the typography and send a new version by EOD.', user: 'Mert Tunç', timestamp: '2023-10-26 11:00', visibility: 'client' },
                { id: 5, type: 'comment', text: 'Internal Note: Check if we have the license for that font.', user: 'Mert Tunç', timestamp: '2023-10-26 11:05', visibility: 'internal' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Sarah Connor', timestamp: '2023-10-20 09:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'İlk taslak inceleme için hazır. "Modern" görünüme odaklandım.', user: 'Mert Tunç', timestamp: '2023-10-25 14:30', visibility: 'internal' },
                { id: 3, type: 'comment', text: 'Güzel görünüyor, bütçe bölümünde ufak değişiklikler gerekiyor. Fontu büyütebilir miyiz?', user: 'Sarah Connor', timestamp: '2023-10-26 10:15', visibility: 'client' },
                { id: 4, type: 'comment', text: 'Tabii, tipografiyi güncelleyip gün sonuna kadar yeni bir versiyon göndereceğim.', user: 'Mert Tunç', timestamp: '2023-10-26 11:00', visibility: 'client' },
                { id: 5, type: 'comment', text: 'Dahili Not: O fontun lisansına sahip olup olmadığımızı kontrol et.', user: 'Mert Tunç', timestamp: '2023-10-26 11:05', visibility: 'internal' }
            ],
            files: [
                { id: 'f1', name: 'Q3_Strategy_Brief.pdf', type: 'pdf', size: '2.4 MB', url: '#' },
                { id: 'f2', name: 'Sienna_Assets_V1.zip', type: 'archive', size: '156 MB', url: '#' },
                { id: 'f3', name: 'Moodboard_Q3.jpg', type: 'image', size: '4.1 MB', url: '#' }
            ]
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
            internalMessages: 1,
            description: "Complete redesign of the corporate homepage to align with the new branding guidelines. Focus on conversion optimization and mobile responsiveness.",
            descriptionTR: "Yeni marka yönergelerine uyum sağlamak için kurumsal ana sayfanın tam tasarımı. Dönüşüm optimizasyonu ve mobil uyumluluğa odaklanın.",
            requesterEmail: 'hank.scorpio@abramind.com',
            createdAt: '2023-10-01',
            assignee: 'Mert Tunç',
            isClientVisible: false,
            requirements: ["UX/UI Design", "Frontend Dev", "SEO", "Accessibility"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Hank Scorpio', timestamp: '2023-10-01 11:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Wireframes approved. Moving to high-fidelity designs.', user: 'Mert Tunç', timestamp: '2023-10-05 16:45', visibility: 'client' },
                { id: 3, type: 'comment', text: 'Internal note: Client is sensitive about the color palette.', user: 'Mert Tunç', timestamp: '2023-10-05 16:50', visibility: 'internal' },
                { id: 4, type: 'comment', text: 'I really like the new direction! Can we make the logo pop more?', user: 'Hank Scorpio', timestamp: '2023-10-06 09:30', visibility: 'client' },
                { id: 5, type: 'comment', text: 'Absolutely, I will add more contrast to the header area.', user: 'Mert Tunç', timestamp: '2023-10-06 10:00', visibility: 'client' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Hank Scorpio', timestamp: '2023-10-01 11:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Tel kafesler onaylandı. Yüksek sadakatli tasarımlara geçiliyor.', user: 'Mert Tunç', timestamp: '2023-10-05 16:45', visibility: 'client' },
                { id: 3, type: 'comment', text: 'Dahili not: Müşteri renk paleti konusunda hassas.', user: 'Mert Tunç', timestamp: '2023-10-05 16:50', visibility: 'internal' },
                { id: 4, type: 'comment', text: 'Yeni yönü gerçekten beğendim! Logoyu daha belirgin yapabilir miyiz?', user: 'Hank Scorpio', timestamp: '2023-10-06 09:30', visibility: 'client' },
                { id: 5, type: 'comment', text: 'Kesinlikle, başlık alanına daha fazla kontrast ekleyeceğim.', user: 'Mert Tunç', timestamp: '2023-10-06 10:00', visibility: 'client' }
            ],
            files: [
                { id: 'f1', name: 'Homepage_Wireframes_v2.fig', type: 'design', size: '12 MB', url: '#' },
                { id: 'f2', name: 'Abramind_Logo_Pack.zip', type: 'archive', size: '45 MB', url: '#' }
            ]
        },
        {
            id: '10024',
            clientId: 'c3',
            titleKey: 'jobNutritionalPDF',
            requester: 'Richard T.',
            deadline: '2023-11-20',
            internalDeadline: '2023-11-18',
            status: 'Review',
            messages: 5,
            internalMessages: 0,
            description: "Design and layout for the new nutritional guide PDF. Needs to be print-ready and accessible for digital distribution.",
            descriptionTR: "Yeni beslenme rehberi PDF'si için tasarım ve düzen. Baskıya hazır ve dijital dağıtım için erişilebilir olmalı.",
            requesterEmail: 'richard.t@maison.com',
            createdAt: '2023-10-28',
            assignee: 'Fatih Tunç',
            isClientVisible: true,
            requirements: ["Graphic Design", "Print Layout", "Illustration"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Richard T.', timestamp: '2023-10-28 08:30', visibility: 'internal' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Richard T.', timestamp: '2023-10-28 08:30', visibility: 'internal' }
            ]
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
            internalMessages: 0,
            description: "November social media content calendar and assets creation.",
            descriptionTR: "Kasım ayı sosyal medya içerik takvimi ve varlık oluşturma.",
            requesterEmail: 'john.doe@sienna.com',
            createdAt: '2023-11-01',
            assignee: 'Emily Zhang',
            isClientVisible: true,
            requirements: ["Social Media", "Graphic Design"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'John Doe', timestamp: '2023-11-01 10:00', visibility: 'internal' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'John Doe', timestamp: '2023-11-01 10:00', visibility: 'internal' }
            ]
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
            internalMessages: 3,
            description: "Internal safety training video editing and voiceover synchronization.",
            descriptionTR: "Dahili güvenlik eğitimi videosu düzenleme ve ses senkronizasyonu.",
            requesterEmail: 'albert.w@phyllant.com',
            createdAt: '2023-11-05',
            assignee: 'James Chen',
            isClientVisible: true,
            requirements: ["Video Editing", "Voiceover", "Motion Graphics"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Albert W.', timestamp: '2023-11-05 09:15', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Raw footage uploaded to server.', user: 'Alex Jensen', timestamp: '2023-11-06 11:30', visibility: 'internal' },
                { id: 3, type: 'comment', text: 'Please check the audio levels in scene 3.', user: 'Albert W.', timestamp: '2023-11-06 14:20', visibility: 'client' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Albert W.', timestamp: '2023-11-05 09:15', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Ham görüntüler sunucuya yüklendi.', user: 'Alex Jensen', timestamp: '2023-11-06 11:30', visibility: 'internal' },
                { id: 3, type: 'comment', text: 'Lütfen 3. sahnedeki ses seviyelerini kontrol edin.', user: 'Albert W.', timestamp: '2023-11-06 14:20', visibility: 'client' }
            ],
            files: [
                { id: 'f1', name: 'Safety_Script_Final.pdf', type: 'pdf', size: '1.2 MB', url: '#' },
                { id: 'f2', name: 'Raw_Footage_Scene1.mp4', type: 'video', size: '450 MB', url: '#' },
                { id: 'f3', name: 'phyllant_intro_animation.mov', type: 'video', size: '85 MB', url: '#' }
            ]
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
            internalMessages: 2,
            description: "UI design for the HUD interface of the Mark 85 suit.",
            descriptionTR: "Mark 85 zırhının HUD arayüzü için UI tasarımı.",
            requesterEmail: 'pepper.potts@pithema.com',
            createdAt: '2023-11-15',
            assignee: 'Sarah Miller',
            isClientVisible: false,
            requirements: ["UI Design", "Holography", "Interaction Design"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Pepper Potts', timestamp: '2023-11-15 08:30', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Tony wants the blue to be more "electric".', user: 'Pepper Potts', timestamp: '2023-11-16 10:00', visibility: 'internal' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Pepper Potts', timestamp: '2023-11-15 08:30', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Tony mavinin daha "elektrikli" olmasını istiyor.', user: 'Pepper Potts', timestamp: '2023-11-16 10:00', visibility: 'internal' }
            ]
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
            internalMessages: 4,
            description: "Follow-up marketing materials for Q3 campaign.",
            descriptionTR: "Q3 kampanyası için takip pazarlama materyalleri.",
            requesterEmail: 'sarah.connor@sienna.com',
            createdAt: '2023-11-20',
            assignee: 'Elif Kaya',
            isClientVisible: true,
            requirements: ["Strategy", "Copywriting"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Sarah Connor', timestamp: '2023-11-20 09:45', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'We need to align this with the main campaign.', user: 'Mert Tunç', timestamp: '2023-11-21 15:00', visibility: 'internal' },
                { id: 3, type: 'comment', text: 'Can we get a timeline on this?', user: 'Sarah Connor', timestamp: '2023-11-22 11:20', visibility: 'client' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Sarah Connor', timestamp: '2023-11-20 09:45', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Bunu ana kampanya ile hizalamamız gerekiyor.', user: 'Mert Tunç', timestamp: '2023-11-21 15:00', visibility: 'internal' },
                { id: 3, type: 'comment', text: 'Bunun için bir zaman çizelgesi alabilir miyiz?', user: 'Sarah Connor', timestamp: '2023-11-22 11:20', visibility: 'client' }
            ]
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
            internalMessages: 0,
            description: "Phase 2 of homepage redesign: Implementation.",
            descriptionTR: "Ana sayfa tasarımının 2. aşaması: Uygulama.",
            requesterEmail: 'hank.scorpio@abramind.com',
            createdAt: '2023-11-25',
            assignee: 'Cemre Demir',
            isClientVisible: true,
            requirements: ["Frontend Dev", "Testing"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Hank Scorpio', timestamp: '2023-11-25 10:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Staging environment is ready.', user: 'Mert Tunç', timestamp: '2023-11-28 14:00', visibility: 'internal' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Hank Scorpio', timestamp: '2023-11-25 10:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Evreleme ortamı hazır.', user: 'Mert Tunç', timestamp: '2023-11-28 14:00', visibility: 'internal' }
            ]
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
            internalMessages: 2,
            description: "Revisions for the nutritional guide based on legal review.",
            descriptionTR: "Yasal incelemeye dayalı beslenme rehberi revizyonları.",
            requesterEmail: 'richard.t@maison.com',
            createdAt: '2023-12-01',
            assignee: 'Fatih Tunç',
            isClientVisible: true,
            requirements: ["Graphic Design", "Print Layout"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Richard T.', timestamp: '2023-12-01 09:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Legal team comments attached.', user: 'Richard T.', timestamp: '2023-12-02 11:15', visibility: 'internal' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Richard T.', timestamp: '2023-12-01 09:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Hukuk ekibi yorumları eklendi.', user: 'Richard T.', timestamp: '2023-12-02 11:15', visibility: 'internal' }
            ]
        },
        {
            id: '10032',
            clientId: 'c4',
            titleKey: 'jobSafetyVideo',
            requester: 'Albert W.',
            deadline: '2023-12-08',
            internalDeadline: '2023-12-06',
            status: 'Review',
            messages: 4,
            internalMessages: 1,
            description: "Final cut review of the safety video.",
            descriptionTR: "Güvenlik videosunun son kurgu incelemesi.",
            requesterEmail: 'albert.w@phyllant.com',
            createdAt: '2023-12-04',
            assignee: 'Mert Tunç',
            isClientVisible: true,
            requirements: ["Video Editing"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Albert W.', timestamp: '2023-12-04 08:45', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Final render looks clean.', user: 'Mert Tunç', timestamp: '2023-12-06 16:30', visibility: 'internal' },
                { id: 3, type: 'comment', text: 'Approved for distribution.', user: 'Albert W.', timestamp: '2023-12-07 09:20', visibility: 'client' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Albert W.', timestamp: '2023-12-04 08:45', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Son render temiz görünüyor.', user: 'Mert Tunç', timestamp: '2023-12-06 16:30', visibility: 'internal' },
                { id: 3, type: 'comment', text: 'Dağıtım için onaylandı.', user: 'Albert W.', timestamp: '2023-12-07 09:20', visibility: 'client' }
            ]
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
            internalMessages: 0,
            description: "Final polish of the HUD elements.",
            descriptionTR: "HUD öğelerinin son cilası.",
            requesterEmail: 'pepper.potts@pithema.com',
            createdAt: '2023-12-05',
            assignee: 'Fatih Tunç',
            isClientVisible: false,
            requirements: ["UI Design", "Motion Graphics"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Pepper Potts', timestamp: '2023-12-05 10:30', visibility: 'internal' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Pepper Potts', timestamp: '2023-12-05 10:30', visibility: 'internal' }
            ]
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
            internalMessages: 1,
            description: "Refreshing the mobile app icons and splash screen.",
            descriptionTR: "Mobil uygulama simgelerini ve açılış ekranını yenileme.",
            requesterEmail: 'gary.o@prowa.com',
            createdAt: '2023-12-08',
            assignee: 'Elif Kaya',
            isClientVisible: true,
            requirements: ["Iconography", "Mobile Design"],
            activityLog: [
                { id: 1, type: 'log', text: 'Job created', user: 'Gary O.', timestamp: '2023-12-08 11:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'New icons are ready for review.', user: 'Mert Tunç', timestamp: '2023-12-10 14:45', visibility: 'internal' }
            ],
            activityLogTR: [
                { id: 1, type: 'log', text: 'İş oluşturuldu', user: 'Gary O.', timestamp: '2023-12-08 11:00', visibility: 'internal' },
                { id: 2, type: 'comment', text: 'Yeni simgeler inceleme için hazır.', user: 'Mert Tunç', timestamp: '2023-12-10 14:45', visibility: 'internal' }
            ]
        },
    ],
    // Mock Users for Assignee Selector
    users: [
        { id: 'u1', name: 'Mert Tunç', role: 'Senior Producer', avatar: logoParflux },
        { id: 'u2', name: 'Fatih Tunç', role: 'Developer', avatar: logoParflux },
        { id: 'u3', name: 'Cemre Demir', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=3' },
        { id: 'u4', name: 'Elif Kaya', role: 'Copywriter', avatar: 'https://i.pravatar.cc/150?u=4' },
    ]
};
