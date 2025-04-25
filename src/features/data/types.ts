export interface FeatureItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ContactInfo {
  category: string;
  value: string;
}

export interface SocialLink {
  icon: JSX.Element;
  href: string;
  delay: number;
}