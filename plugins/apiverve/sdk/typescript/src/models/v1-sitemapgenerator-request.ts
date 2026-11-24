import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SitemapgeneratorRequest = {
  /** Array of URLs (strings or objects with url, priority, changeFreq, lastMod) */
  urls: string;
  /** Base URL to prepend to relative paths */
  baseUrl?: string;
  /** Default change frequency */
  changeFreq?: string;
  /** Default priority */
  priority?: number;
  /** Include lastmod dates in sitemap */
  includeLastMod?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SitemapgeneratorRequestSchema: Schema<V1SitemapgeneratorRequest> =
  s.object<V1SitemapgeneratorRequest>(
    {
      urls: s.string(),
      baseUrl: s.optional(s.string()),
      changeFreq: s.optional(s.string()),
      priority: s.optional(s.float64()),
      includeLastMod: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
