import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * API call volume range and the percentage of revenue to share with the developer when the total
 * number of API calls is within the range.
 */
export type GoogleCloudApigeeV1RevenueShareRange = {
  /** Ending value of the range. Set to 0 or `null` for the last range of values. */
  end?: string;
  /**
   * Percentage of the revenue to be shared with the developer. For example, to share 21 percent of
   * the total revenue with the developer, set this value to 21. Specify a decimal number with a
   * maximum of two digits following the decimal point.
   */
  sharePercentage?: number;
  /** Starting value of the range. Set to 0 or `null` for the initial range of values. */
  start?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RevenueShareRangeSchema: Schema<GoogleCloudApigeeV1RevenueShareRange> =
  s.object<GoogleCloudApigeeV1RevenueShareRange>(
    {
      end: s.optional(s.string()),
      sharePercentage: s.optional(s.float64()),
      start: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
