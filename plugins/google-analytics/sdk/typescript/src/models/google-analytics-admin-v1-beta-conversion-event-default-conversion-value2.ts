import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Defines a default value/currency for a conversion event. */
export type GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2 = {
  /**
   * This value will be used to populate the value for all conversions of the specified event_name
   * where the event "value" parameter is unset.
   */
  value?: number;
  /**
   * When a conversion event for this event_name has no set currency, this currency will be applied
   * as the default. Must be in ISO 4217 currency code format. See
   * https://en.wikipedia.org/wiki/ISO_4217 for more information.
   */
  currencyCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2Schema: Schema<GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2> =
  s.object<GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2>(
    {
      value: s.optional(s.float64()),
      currencyCode: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
