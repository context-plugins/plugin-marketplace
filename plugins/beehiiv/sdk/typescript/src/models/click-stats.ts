import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postClickStatsEmailSchema, type PostClickStatsEmail } from "./post-click-stats-email.js";
import { postClickStatsWebSchema, type PostClickStatsWeb } from "./post-click-stats-web.js";

/** Details about specific URL's click stats from a post. */
export type ClickStats = {
  /** The URL the stats are for */
  url?: string;
  /**
   * The canonical URL with all query parameters and fragments removed. Derived by stripping
   * everything after the '?' and '#' characters. Preserves the protocol, host (including casing),
   * port, and path exactly as they appear in the original URL. Guaranteed to be present whenever
   * url is present, enabling grouping of clicks by destination regardless of tracking parameters.
   */
  baseUrl?: string;
  /** URL stats scoped only to email recipients. Not relevant for posts published only to web */
  email?: PostClickStatsEmail;
  /** Stats scoped only to web views. Not relevant for posts published only to email */
  web?: PostClickStatsWeb;
  totalClicks?: number;
  totalUniqueClicks?: number;
  /**
   * The percentage of clicks on the URL compared to the total number of recipients and web views
   */
  totalClickThroughRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clickStatsSchema: Schema<ClickStats> = s.object<ClickStats>(
  {
    url: s.optional(s.string()),
    baseUrl: s.optional(s.string()),
    email: s.optional(s.lazy(() => postClickStatsEmailSchema)),
    web: s.optional(s.lazy(() => postClickStatsWebSchema)),
    totalClicks: s.optional(s.int()),
    totalUniqueClicks: s.optional(s.int()),
    totalClickThroughRate: s.optional(s.float64()),
    _keysMap: {
      baseUrl: "base_url",
      totalClicks: "total_clicks",
      totalUniqueClicks: "total_unique_clicks",
      totalClickThroughRate: "total_click_through_rate",
    },
  },
  { additionalProperties: s.json() },
);
