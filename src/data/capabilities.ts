import type { Capability } from '../types/content';

export const capabilities: Capability[] = [
  {
    id: 'software-development',
    title: 'Software development',
    items: ['Java', 'Object-oriented programming', 'Web application development'],
    evidenceNote: 'CV and local web, Android, and backend project sources.',
  },
  {
    id: 'web-and-databases',
    title: 'Web and databases',
    items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Database design and management'],
    evidenceNote: 'CV and the Appane, Biblioteca-Sapienza, Chat-php, and Concert-Reservation sources.',
  },
  {
    id: 'android-and-java',
    title: 'Android and Java',
    items: ['Android development', 'Java', 'XML', 'Android Views', 'View Binding'],
    evidenceNote: 'CV and the LogbookPicsApp source manifest and Java/XML implementation.',
  },
  {
    id: 'cybersecurity-operations',
    title: 'Cybersecurity operations',
    items: ['Incident response', 'Threat analysis', 'IoC handling', 'OSINT investigation', 'Incident reporting'],
    evidenceNote: 'CV and professional CSIRT experience described in the CV.',
  },
  {
    id: 'security-tooling',
    title: 'Security tooling',
    items: ['Splunk', 'QRadar', 'CrowdStrike Falcon', 'Imperva WAF', 'Azure security tools', 'Microsoft Defender for Office 365', 'CAPE Sandbox', 'TheHive'],
    evidenceNote: 'CV-listed tools; current proficiency and recency require review before detailed public claims.',
  },
  {
    id: 'infrastructure-and-networking',
    title: 'Infrastructure and networking',
    items: ['Networking foundations', 'Cisco CCNA', 'Cisco IT Essentials'],
    evidenceNote: 'CV and Insiel internship context.',
  },
];

export const languages = [
  { language: 'Italian', level: 'Native language', selfAssessed: false },
  { language: 'English', level: 'B1 across listening, reading, writing, speaking, and interaction', selfAssessed: true },
];