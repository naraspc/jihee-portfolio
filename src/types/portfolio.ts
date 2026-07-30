export interface TimelineItem {
  organization: string;
  period: string;
  title: string;
  description: string[];
}

export interface Project {
  id: string;
  year: string;
  title: string;
  category: string;
  description: string;
  client?: string;
  duration?: string;
  contribution?: string;
  tools: string[];
  images: string[];
}
