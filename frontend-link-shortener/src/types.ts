export interface Link {
  id: string;
  originalUrl: string;
  shortUrl: string;
}

export type LinkType = Omit<Link, 'id' | 'shortUrl'>;