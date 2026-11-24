import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { wmxSitemapSchema, type WmxSitemap } from "./wmx-sitemap.js";

/** List of sitemaps. */
export type SitemapsListResponse = {
  /**
   * Contains detailed information about a specific URL submitted as a
   * [sitemap](https://support.google.com/webmasters/answer/156184).
   */
  sitemap?: WmxSitemap[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sitemapsListResponseSchema: Schema<SitemapsListResponse> = s.object<SitemapsListResponse>(
  {
    sitemap: s.optional(s.array(s.lazy(() => wmxSitemapSchema))),
  },
  { additionalProperties: s.json() },
);
