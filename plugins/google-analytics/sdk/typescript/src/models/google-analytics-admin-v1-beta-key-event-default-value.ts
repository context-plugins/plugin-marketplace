import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Defines a default value/currency for a key event. */
export type GoogleAnalyticsAdminV1BetaKeyEventDefaultValue = {
  /**
   * Required. This will be used to populate the "value" parameter for all occurrences of this Key
   * Event (specified by event_name) where that parameter is unset.
   */
  numericValue?: number;
  /**
   * Required. When an occurrence of this Key Event (specified by event_name) has no set currency
   * this currency will be applied as the default. Must be in ISO 4217 currency code format. See
   * https://en.wikipedia.org/wiki/ISO_4217 for more information.
   */
  currencyCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaKeyEventDefaultValueSchema: Schema<GoogleAnalyticsAdminV1BetaKeyEventDefaultValue> =
  s.object<GoogleAnalyticsAdminV1BetaKeyEventDefaultValue>(
    {
      numericValue: s.optional(s.float64()),
      currencyCode: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
