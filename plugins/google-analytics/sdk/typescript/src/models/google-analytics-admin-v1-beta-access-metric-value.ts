import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The value of a metric. */
export type GoogleAnalyticsAdminV1BetaAccessMetricValue = {
  /** The measurement value. For example, this value may be '13'. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessMetricValueSchema: Schema<GoogleAnalyticsAdminV1BetaAccessMetricValue> =
  s.object<GoogleAnalyticsAdminV1BetaAccessMetricValue>(
    {
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
