import { FeatureItem } from './types';

const featureImg1 = '/features1.png';
const featureImg2 = '/features2.png';
const featureImg3 = '/features3.png';
export const featuresData: FeatureItem[] = [
  {
    title: "Consultation",
    description: "Ready to get started building your brand's online presence? Send us your info below, and you will be assigned to one of our brand strategists. They'll reach out to you to begin determining the best plan for you and your brand.",
    imageSrc: featureImg1,
    imageAlt: "Analytics dashboard interface"
  },
  {
    title: "Delivery",
    description: "Next, we'll take action and deliver your services. No matter if it's creating a superb video ad for you, or helping you grow your Instagram account, the brand strategist assigned to you will be in contact to answer any questions the whole time.",
    imageSrc: featureImg2,
    imageAlt: "Team collaboration interface"
  },
  {
    title: "Follow up",
    description: "Here at Softin, we believe in constant communication with our clients to ensure satisfaction. We will consistently follow up to ensure you're satisfied with our services and your brand. We're always here to help take your brand to the next level.",
    imageSrc: featureImg3,
    imageAlt: "Project workflow interface"
  }
];