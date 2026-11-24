import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebResources = {
  careers?: string | null;
  about?: string | null;
  blog?: string | null;
  events?: string | null;
  sitemap?: string | null;
  updates?: string | null;
  linkedin?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  medium?: string | null;
  reddit?: string | null;
  threads?: string | null;
  tiktok?: string | null;
  x?: string | null;
  wellfound?: string | null;
  youtube?: string | null;
  wikipedia?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webResourcesSchema: Schema<WebResources> = s.object<WebResources>(
  {
    careers: s.optionalNullable(s.string()),
    about: s.optionalNullable(s.string()),
    blog: s.optionalNullable(s.string()),
    events: s.optionalNullable(s.string()),
    sitemap: s.optionalNullable(s.string()),
    updates: s.optionalNullable(s.string()),
    linkedin: s.optionalNullable(s.string()),
    facebook: s.optionalNullable(s.string()),
    instagram: s.optionalNullable(s.string()),
    medium: s.optionalNullable(s.string()),
    reddit: s.optionalNullable(s.string()),
    threads: s.optionalNullable(s.string()),
    tiktok: s.optionalNullable(s.string()),
    x: s.optionalNullable(s.string()),
    wellfound: s.optionalNullable(s.string()),
    youtube: s.optionalNullable(s.string()),
    wikipedia: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
