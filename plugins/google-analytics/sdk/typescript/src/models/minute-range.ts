import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A contiguous set of minutes: `startMinutesAgo`, `startMinutesAgo + 1`, ..., `endMinutesAgo`.
 * Requests are allowed up to 2 minute ranges.
 */
export type MinuteRange = {
  /**
   * The inclusive start minute for the query as a number of minutes before now. For example,
   * `"startMinutesAgo": 29` specifies the report should include event data from 29 minutes ago and
   * after. Cannot be after `endMinutesAgo`. If unspecified, `startMinutesAgo` is defaulted to 29.
   * Standard Analytics properties can request up to the last 30 minutes of event data
   * (`startMinutesAgo <= 29`), and 360 Analytics properties can request up to the last 60 minutes
   * of event data (`startMinutesAgo <= 59`).
   */
  startMinutesAgo?: number;
  /**
   * The inclusive end minute for the query as a number of minutes before now. Cannot be before
   * `startMinutesAgo`. For example, `"endMinutesAgo": 15` specifies the report should include event
   * data from prior to 15 minutes ago. If unspecified, `endMinutesAgo` is defaulted to 0. Standard
   * Analytics properties can request any minute in the last 30 minutes of event data
   * (`endMinutesAgo <= 29`), and 360 Analytics properties can request any minute in the last 60
   * minutes of event data (`endMinutesAgo <= 59`).
   */
  endMinutesAgo?: number;
  /**
   * Assigns a name to this minute range. The dimension `dateRange` is valued to this name in a
   * report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, minute
   * ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc.
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const minuteRangeSchema: Schema<MinuteRange> = s.object<MinuteRange>(
  {
    startMinutesAgo: s.optional(s.int()),
    endMinutesAgo: s.optional(s.int()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
