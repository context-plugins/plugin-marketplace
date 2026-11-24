import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A contiguous set of days: `startDate`, `startDate + 1`, ..., `endDate`. Requests are allowed up
 * to 4 date ranges.
 */
export type DateRange = {
  /**
   * The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `end_date`.
   * The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is
   * inferred based on the property's reporting time zone.
   */
  startDate?: string;
  /**
   * The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `start_date`.
   * The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is
   * inferred based on the property's reporting time zone.
   */
  endDate?: string;
  /**
   * Assigns a name to this date range. The dimension `dateRange` is valued to this name in a report
   * response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, date ranges are
   * named by their zero based index in the request: `date_range_0`, `date_range_1`, etc.
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateRangeSchema: Schema<DateRange> = s.object<DateRange>(
  {
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
