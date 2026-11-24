import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A contiguous range of days: startDate, startDate + 1, ..., endDate. */
export type GoogleAnalyticsAdminV1BetaAccessDateRange = {
  /**
   * The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`.
   * The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is
   * inferred based on the current time in the request's time zone.
   */
  startDate?: string;
  /**
   * The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`.
   * The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is
   * inferred based on the current time in the request's time zone.
   */
  endDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessDateRangeSchema: Schema<GoogleAnalyticsAdminV1BetaAccessDateRange> =
  s.object<GoogleAnalyticsAdminV1BetaAccessDateRange>(
    {
      startDate: s.optional(s.string()),
      endDate: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
