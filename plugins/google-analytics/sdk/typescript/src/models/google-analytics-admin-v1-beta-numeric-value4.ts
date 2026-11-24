import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Begins with this number. */
export type GoogleAnalyticsAdminV1BetaNumericValue4 = {
  /** Integer value */
  int64Value?: string;
  /** Double value */
  doubleValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaNumericValue4Schema: Schema<GoogleAnalyticsAdminV1BetaNumericValue4> =
  s.object<GoogleAnalyticsAdminV1BetaNumericValue4>(
    {
      int64Value: s.optional(s.string()),
      doubleValue: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
