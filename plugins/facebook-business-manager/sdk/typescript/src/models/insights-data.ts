import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { conversionSchema, type Conversion } from "./conversion.js";

export type InsightsData = {
  /** Number of times ads were shown */
  impressions?: string;
  /** Number of clicks on ads */
  clicks?: string;
  /** Total amount spent during the period */
  spend?: string;
  /** Number of unique people who saw the ads */
  reach?: string;
  /** Average cost per click */
  cpc?: string;
  /** Average cost per 1,000 impressions */
  cpm?: string;
  /** Click-through rate percentage */
  ctr?: string;
  /** Average number of times each person saw the ad */
  frequency?: string;
  /** List of actions taken by people */
  actions?: Action[];
  /** List of conversion events */
  conversions?: Conversion[];
  /** Start date of the reporting period */
  dateStart?: string;
  /** End date of the reporting period */
  dateStop?: string;
  campaignId?: string;
  campaignName?: string;
  adsetId?: string;
  adsetName?: string;
  adId?: string;
  adName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsDataSchema: Schema<InsightsData> = s.object<InsightsData>(
  {
    impressions: s.optional(s.string()),
    clicks: s.optional(s.string()),
    spend: s.optional(s.string()),
    reach: s.optional(s.string()),
    cpc: s.optional(s.string()),
    cpm: s.optional(s.string()),
    ctr: s.optional(s.string()),
    frequency: s.optional(s.string()),
    actions: s.optional(s.array(s.lazy(() => actionSchema))),
    conversions: s.optional(s.array(s.lazy(() => conversionSchema))),
    dateStart: s.optional(s.dateOnly()),
    dateStop: s.optional(s.dateOnly()),
    campaignId: s.optional(s.string()),
    campaignName: s.optional(s.string()),
    adsetId: s.optional(s.string()),
    adsetName: s.optional(s.string()),
    adId: s.optional(s.string()),
    adName: s.optional(s.string()),
    _keysMap: {
      dateStart: "date_start",
      dateStop: "date_stop",
      campaignId: "campaign_id",
      campaignName: "campaign_name",
      adsetId: "adset_id",
      adsetName: "adset_name",
      adId: "ad_id",
      adName: "ad_name",
    },
  },
  { additionalProperties: s.json() },
);
