import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutomationEmailStatsClicks = {
  /** The URL the stats are for */
  url?: string;
  totalClicks?: number;
  totalUniqueClicks?: number;
  /** The percentage of clicks on the URL compared to the total number of unique opens */
  totalClickThroughRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationEmailStatsClicksSchema: Schema<AutomationEmailStatsClicks> =
  s.object<AutomationEmailStatsClicks>(
    {
      url: s.optional(s.string()),
      totalClicks: s.optional(s.int()),
      totalUniqueClicks: s.optional(s.int()),
      totalClickThroughRate: s.optional(s.float64()),
      _keysMap: {
        totalClicks: "total_clicks",
        totalUniqueClicks: "total_unique_clicks",
        totalClickThroughRate: "total_click_through_rate",
      },
    },
    { additionalProperties: s.json() },
  );
