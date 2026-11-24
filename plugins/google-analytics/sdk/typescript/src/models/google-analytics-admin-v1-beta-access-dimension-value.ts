import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The value of a dimension. */
export type GoogleAnalyticsAdminV1BetaAccessDimensionValue = {
  /** The dimension value. For example, this value may be 'France' for the 'country' dimension. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessDimensionValueSchema: Schema<GoogleAnalyticsAdminV1BetaAccessDimensionValue> =
  s.object<GoogleAnalyticsAdminV1BetaAccessDimensionValue>(
    {
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
