import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The parameter to group the analytics data points by. Defaults to 'count' if undefined. */
export const GroupBy = {
  Timeseries: "timeseries",
  Clicks: "clicks",
  Count: "count",
  Totals: "totals",
  TopUrls: "top_urls",
  TopLinks: "top_links",
  TopQrcodes: "top_qrcodes",
  TopPages: "top_pages",
  TopEvents: "top_events",
  Scans: "scans",
  Views: "views",
  Country: "country",
  City: "city",
  Region: "region",
  Devices: "devices",
  Browsers: "browsers",
  Os: "os",
  Referers: "referers",
  RefererUrls: "referer_urls",
  TrendLive: "trend_live",
  Kpis: "kpis",
  Analytics: "analytics",
  Continents: "continents",
  Countries: "countries",
  Cities: "cities",
  Leads: "leads",
  Sales: "sales",
  Composite: "composite",
  UtmSources: "utm_sources",
  UtmMediums: "utm_mediums",
  UtmCampaigns: "utm_campaigns",
  UtmContents: "utm_contents",
  UtmTerms: "utm_terms",
} as const;
export type GroupBy = (typeof GroupBy)[keyof typeof GroupBy] | (string & {});

export const groupBySchema: EnumSchema<GroupBy> = s.enumOf<GroupBy>(GroupBy);
