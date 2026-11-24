import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A numeric value or a date value. */
export type GoogleAnalyticsAdminV1BetaNumericValue2 = {
  /** Integer value */
  int64Value?: string;
  /** Double value */
  doubleValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaNumericValue2Schema: Schema<GoogleAnalyticsAdminV1BetaNumericValue2> =
  s.object<GoogleAnalyticsAdminV1BetaNumericValue2>(
    {
      int64Value: s.optional(s.string()),
      doubleValue: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
