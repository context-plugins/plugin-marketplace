import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SiteDetail = {
  siteId: number;
  /** The site url as stored. */
  name: string;
  /** Same token as in SiteSummary.hash. */
  hash: string;
  timezone: string;
  weekStart: number;
  hobby: boolean;
  scriptUrl: string;
  /** The ready-to-paste script tag. */
  snippet: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const siteDetailSchema: Schema<SiteDetail> = s.object<SiteDetail>(
  {
    siteId: s.int(),
    name: s.string(),
    hash: s.string(),
    timezone: s.string(),
    weekStart: s.int(),
    hobby: s.boolean(),
    scriptUrl: s.string(),
    snippet: s.string(),
    _keysMap: {
      siteId: "site_id",
      weekStart: "week_start",
      scriptUrl: "script_url",
    },
  },
  { additionalProperties: s.json() },
);
