import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuthorSocialMediaLinks = {
  twitterHandle?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  tiktokUrl?: string;
  discordUrl?: string;
  blueskyUrl?: string;
  rssUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorSocialMediaLinksSchema: Schema<AuthorSocialMediaLinks> = s.object<AuthorSocialMediaLinks>(
  {
    twitterHandle: s.optional(s.string()),
    facebookUrl: s.optional(s.string()),
    instagramUrl: s.optional(s.string()),
    linkedinUrl: s.optional(s.string()),
    youtubeUrl: s.optional(s.string()),
    tiktokUrl: s.optional(s.string()),
    discordUrl: s.optional(s.string()),
    blueskyUrl: s.optional(s.string()),
    rssUrl: s.optional(s.string()),
    _keysMap: {
      twitterHandle: "twitter_handle",
      facebookUrl: "facebook_url",
      instagramUrl: "instagram_url",
      linkedinUrl: "linkedin_url",
      youtubeUrl: "youtube_url",
      tiktokUrl: "tiktok_url",
      discordUrl: "discord_url",
      blueskyUrl: "bluesky_url",
      rssUrl: "rss_url",
    },
  },
  { additionalProperties: s.json() },
);
