import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** To represent a number. */
export type GoogleAnalyticsAdminV1BetaNumericValue = {
  /** Integer value */
  int64Value?: string;
  /** Double value */
  doubleValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaNumericValueSchema: Schema<GoogleAnalyticsAdminV1BetaNumericValue> =
  s.object<GoogleAnalyticsAdminV1BetaNumericValue>(
    {
      int64Value: s.optional(s.string()),
      doubleValue: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
