import { 
  Globe, 
  Cloud, 
  Zap, 
  Code, 
  MessageSquare, 
  Image 
} from "lucide-react";
import { ServiceItem } from './types';

export const servicesData: ServiceItem[] = [
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Website Design",
    description: "We design state-of-the-art, user-friendly websites with a conversion focus to drive business. It's not just the code, but what runs behind the design."
  },
  {
    icon: <Cloud className="h-6 w-6 text-primary" />,
    title: "SEO",
    description: "SEO is like magic when applied properly. We make search engines love your site, so you end up higher in the rankings for greater, long-term visibility."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "App Design",
    description: "We create apps for all platforms (mobile, web, hybrid) with a focus on user experience and what makes sense for your brand and customer engagement."
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Web Hosting",
    description: "Launch your website with a rock-solid hosting plan. We provide managed hosting that includes super-fast servers, expert support, and security."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Facebook, Google Ads",
    description: "We help ads that win the attention battle on social media channels like Facebook, Instagram, and Google to reach your customers."
  },
  {
    icon: <Image className="h-6 w-6 text-primary" />,
    title: "Graphic Design + Branding",
    description: "Stand out from the competition with a strong brand identity that connects with your audience."
  }
];