import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SsoAccountResource = {
  id: string;
  name: string;
  logo: string;
  cover: string;
  tagline: string;
  description: string;
  slug: string;
  url: string;
  phone: string;
  email: string;
  website: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  snapchat: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  createdAt: string;
  updatedAt: string;
  lastCampaignId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ssoAccountResourceSchema: Schema<SsoAccountResource> = s.object<SsoAccountResource>(
  {
    id: s.string(),
    name: s.string(),
    logo: s.string(),
    cover: s.string(),
    tagline: s.string(),
    description: s.string(),
    slug: s.string(),
    url: s.string(),
    phone: s.string(),
    email: s.string(),
    website: s.string(),
    facebook: s.string(),
    linkedin: s.string(),
    twitter: s.string(),
    snapchat: s.string(),
    instagram: s.string(),
    tiktok: s.string(),
    youtube: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    lastCampaignId: s.string(),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      lastCampaignId: "last_campaign_id",
    },
  },
  { additionalProperties: s.json() },
);
