export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'HealthWorld', href: '/healthworld' },
  { label: 'Explore', href: '/explore' },
  { label: 'Play', href: '/play' },
  { label: 'Challenges', href: '/challenges' },
  { label: 'Community', href: '/community' },
  { label: 'Leaderboard', href: '/leaderboard' },
  { label: 'AI Health', href: '/ai-health' },
  { label: 'Profile', href: '/profile' },
];

export const mobileNavItems = [
  { label: 'Home', href: '/', icon: '⌂' },
  { label: 'World', href: '/healthworld', icon: '◌' },
  { label: 'Play', href: '/play', icon: '✦' },
  { label: 'Community', href: '/community', icon: '◎' },
  { label: 'Profile', href: '/profile', icon: '◔' },
];

export const heroStats = [
  { label: 'Level', value: '12', change: '+2 this month' },
  { label: 'XP', value: '2,450', change: '550 to next level' },
  { label: 'LifeCoins', value: '1,280', change: '24 pending' },
  { label: 'Streak', value: '7 days', change: 'Healthy streak' },
];

export const missions = [
  { title: 'Hydration Reset', category: 'Daily task', xp: 100, lifecoins: 35, progress: 80, status: 'In progress' },
  { title: 'Healthy Meal Sprint', category: 'Nutrition', xp: 150, lifecoins: 50, progress: 62, status: 'In progress' },
  { title: 'Rural Wellness Walk', category: 'Fitness', xp: 220, lifecoins: 80, progress: 100, status: 'Completed' },
];

export const challengeCards = [
  { title: '7-Day Movement Boost', type: 'Daily', reward: '250 XP / 90 LC', participants: 1240 },
  { title: 'Healthy Meal Challenge', type: 'Weekly', reward: '400 XP / 120 LC', participants: 890 },
  { title: 'Community Wellness Week', type: 'Community', reward: '600 XP / 220 LC', participants: 1540 },
];

export const leaderboard = [
  { rank: 1, username: 'NnekaA', level: 18, xp: 8960, achievements: 12 },
  { rank: 2, username: 'AyoGlow', level: 16, xp: 7620, achievements: 10 },
  { rank: 3, username: 'AminaWell', level: 15, xp: 7115, achievements: 9 },
  { rank: 4, username: 'TundeFit', level: 14, xp: 6800, achievements: 8 },
  { rank: 5, username: 'Mariam_N', level: 12, xp: 6540, achievements: 9 },
];

export const achievements = [
  { title: 'First Mission', unlocked: true },
  { title: 'Quiz Master', unlocked: true },
  { title: '7-Day Streak', unlocked: true },
  { title: 'Health Explorer', unlocked: false },
  { title: 'Nutrition Explorer', unlocked: false },
  { title: 'Challenge Champion', unlocked: false },
];

export const providerList = [
  { name: 'Lagos General Hospital', category: 'Hospital', city: 'Lagos', status: 'Verified' },
  { name: 'Wellness Plus Clinic', category: 'Clinic', city: 'Abuja', status: 'Verified' },
  { name: 'PharmEase', category: 'Pharmacy', city: 'Kano', status: 'Verified' },
  { name: 'VitalCare Dental', category: 'Dental', city: 'Port Harcourt', status: 'Pending' },
  { name: 'MindLift Hub', category: 'Mental Wellness', city: 'Lagos', status: 'Verified' },
];

export const communityPosts = [
  { user: 'Mariam N.', category: 'Nutrition', title: 'Meal prep for busy weekdays', likes: 214, comments: 33 },
  { user: 'Ayo K.', category: 'Fitness', title: '3-minute stretch routine for desk workers', likes: 187, comments: 26 },
  { user: 'Kehinde A.', category: 'Mental Wellness', title: 'How I reset after a stressful week', likes: 289, comments: 41 },
];

export const worldLocations = [
  { name: 'Lagos Health District', type: 'City district', players: 228 },
  { name: 'Abuja Wellness Hub', type: 'Wellness centre', players: 104 },
  { name: 'Port Harcourt Clinic Zone', type: 'Clinic cluster', players: 81 },
  { name: 'Kano Nutrition Plaza', type: 'Nutrition hub', players: 66 },
];

export const gameCards = [
  { title: 'Health Quiz', description: 'Nutrition, first aid, wellness', badge: 'Live' },
  { title: 'Memory Match', description: 'Match health-themed cards', badge: 'New' },
  { title: 'Health Trivia', description: 'Timed answer challenge', badge: 'Trending' },
  { title: 'Reaction Dash', description: 'Fast health-themed reaction sprint', badge: 'Daily' },
];
