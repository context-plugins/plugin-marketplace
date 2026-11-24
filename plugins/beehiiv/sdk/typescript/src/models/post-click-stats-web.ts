import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Stats scoped only to web views. Not relevant for posts published only to email */
export type PostClickStatsWeb = {
  clicks?: number;
  uniqueClicks?: number;
  /** The percentage of clicks on the URL compared to the total number of web views */
  clickThroughRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postClickStatsWebSchema: Schema<PostClickStatsWeb> = s.object<PostClickStatsWeb>(
  {
    clicks: s.optional(s.int()),
    uniqueClicks: s.optional(s.int()),
    clickThroughRate: s.optional(s.float64()),
    _keysMap: {
      uniqueClicks: "unique_clicks",
      clickThroughRate: "click_through_rate",
    },
  },
  { additionalProperties: s.json() },
);
