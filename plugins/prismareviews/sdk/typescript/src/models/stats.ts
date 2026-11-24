import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { byMonthSchema, type ByMonth } from "./by-month.js";

/**
 * Review statistics for a period, by when reviews were written. A reply counts once it is
 * published.
 */
export type Stats = {
  /** Start of the period (included). */
  since: Date;
  /** End of the period (not included). */
  until: Date;
  /** The location filter, if any. */
  locationId: string | null;
  /** The platform filter, if any. */
  platform: string | null;
  /** Reviews written in the period. */
  reviews: number;
  /** Average of the 1–5 ratings, 2 decimals. `null` without rated reviews. */
  averageRating: number | null;
  /** Reviews per star, `1` to `5`. */
  ratings: Record<string, number>;
  /** Reviews with a published reply. */
  replied: number;
  /** `replied / reviews`, 0 to 1. `null` without reviews. */
  replyRate: number | null;
  /** Median time from review to reply, in hours, 1 decimal. */
  medianReplyHours: number | null;
  /** Reviews of 1 or 2 stars without a published reply. */
  unrepliedNegative: number;
  /** One entry per calendar month (UTC) with reviews, oldest first. */
  byMonth: ByMonth[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statsSchema: Schema<Stats> = s.object<Stats>(
  {
    since: s.dateTime(),
    until: s.dateTime(),
    locationId: s.nullable(s.string()),
    platform: s.nullable(s.string()),
    reviews: s.int(),
    averageRating: s.nullable(s.float64()),
    ratings: s.record(s.string(), s.int()),
    replied: s.int(),
    replyRate: s.nullable(s.float64()),
    medianReplyHours: s.nullable(s.float64()),
    unrepliedNegative: s.int(),
    byMonth: s.array(s.lazy(() => byMonthSchema)),
    _keysMap: {
      locationId: "location_id",
      averageRating: "average_rating",
      replyRate: "reply_rate",
      medianReplyHours: "median_reply_hours",
      unrepliedNegative: "unreplied_negative",
      byMonth: "by_month",
    },
  },
  { additionalProperties: s.json() },
);
