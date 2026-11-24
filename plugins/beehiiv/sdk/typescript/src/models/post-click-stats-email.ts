import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** URL stats scoped only to email recipients. Not relevant for posts published only to web */
export type PostClickStatsEmail = {
  clicks?: number;
  uniqueClicks?: number;
  /**
   * Total number of verified human email clicks on this URL. Verified clicks have passed bot
   * detection and are confirmed to be from real subscribers.
   */
  verifiedClicks?: number;
  /**
   * Unique number of verified human email clicks on this URL. Only counts the first verified click
   * per subscriber.
   */
  uniqueVerifiedClicks?: number;
  /** The percentage of email clicks on the URL compared to the total number of recipients */
  clickThroughRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postClickStatsEmailSchema: Schema<PostClickStatsEmail> = s.object<PostClickStatsEmail>(
  {
    clicks: s.optional(s.int()),
    uniqueClicks: s.optional(s.int()),
    verifiedClicks: s.optional(s.int()),
    uniqueVerifiedClicks: s.optional(s.int()),
    clickThroughRate: s.optional(s.float64()),
    _keysMap: {
      uniqueClicks: "unique_clicks",
      verifiedClicks: "verified_clicks",
      uniqueVerifiedClicks: "unique_verified_clicks",
      clickThroughRate: "click_through_rate",
    },
  },
  { additionalProperties: s.json() },
);
