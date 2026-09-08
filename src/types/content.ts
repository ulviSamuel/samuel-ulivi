export type Locale = 'en' | 'it';

export type Profile = {
  name: string;
  location: string;
  email: string;
  positioning: string;
  summary: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  id: string;
  period: string;
  role: string;
  organization: string;
  context: string;
  description: string;
  reviewStatus: 'verified' | 'review-required';
};

export type Education = {
  id: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  details: string;
  reviewStatus: 'verified' | 'review-required';
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  period: string;
  reviewStatus: 'verified' | 'review-required';
};

export type Capability = {
  id: string;
  title: string;
  items: string[];
  evidenceNote: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  year: string;
  context: string;
  status: string;
  role: string;
  collaborators: string;
  categories: string[];
  technologies: string[];
  features: string[];
  architecture: {
    frontend: string[];
    backend: string[];
    database: string[];
    other: string[];
  };
  challenges: string[];
  repositoryUrl: string;
  liveDemoUrl?: string;
  images: { src: string; alt: string }[];
  limitations: string[];
  reviewStatus: 'verified' | 'review-required';
  visibility: 'public-repository' | 'review-required';
};

export type Contact = {
  email: string;
  cvRequest: {
    subject: string;
    body: string;
  };
};