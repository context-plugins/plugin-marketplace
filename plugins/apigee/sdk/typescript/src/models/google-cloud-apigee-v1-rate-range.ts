import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleTypeMoney4Schema, type GoogleTypeMoney4 } from "./google-type-money4.js";

/**
 * API call volume range and the fees charged when the total number of API calls is within the
 * range.
 */
export type GoogleCloudApigeeV1RateRange = {
  /** Ending value of the range. Set to 0 or `null` for the last range of values. */
  end?: string;
  /** Starting value of the range. Set to 0 or `null` for the initial range of values. */
  start?: string;
  /** Fee to charge when total number of API calls falls within this range. */
  fee?: GoogleTypeMoney4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RateRangeSchema: Schema<GoogleCloudApigeeV1RateRange> =
  s.object<GoogleCloudApigeeV1RateRange>(
    {
      end: s.optional(s.string()),
      start: s.optional(s.string()),
      fee: s.optional(s.lazy(() => googleTypeMoney4Schema)),
    },
    { additionalProperties: s.json() },
  );
