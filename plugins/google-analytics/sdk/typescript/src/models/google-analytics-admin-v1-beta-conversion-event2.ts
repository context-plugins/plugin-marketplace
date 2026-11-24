import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countingMethodSchema, type CountingMethod } from "./counting-method.js";
import {
  googleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2Schema,
  type GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2,
} from "./google-analytics-admin-v1-beta-conversion-event-default-conversion-value2.js";

/** A snapshot of a ConversionEvent resource in change history. */
export type GoogleAnalyticsAdminV1BetaConversionEvent2 = {
  /**
   * Output only. If set to true, this conversion event refers to a custom event. If set to false,
   * this conversion event refers to a default event in GA. Default events typically have special
   * meaning in GA. Default events are usually created for you by the GA system, but in some cases
   * can be created by property admins. Custom events count towards the maximum number of custom
   * conversion events that may be created per property.
   */
  custom?: boolean;
  /** Immutable. The event name for this conversion event. Examples: 'click', 'purchase' */
  eventName?: string;
  /** Output only. Time when this conversion event was created in the property. */
  createTime?: string;
  /** Optional. Defines a default value/currency for a conversion event. */
  defaultConversionValue?: GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2;
  /**
   * Optional. The method by which conversions will be counted across multiple events within a
   * session. If this value is not provided, it will be set to `ONCE_PER_EVENT`.
   */
  countingMethod?: CountingMethod;
  /** Output only. If set, this event can currently be deleted with DeleteConversionEvent. */
  deletable?: boolean;
  /**
   * Identifier. Resource name of this conversion event. Format:
   * properties/{property}/conversionEvents/{conversion_event}
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaConversionEvent2Schema: Schema<GoogleAnalyticsAdminV1BetaConversionEvent2> =
  s.object<GoogleAnalyticsAdminV1BetaConversionEvent2>(
    {
      custom: s.optional(s.boolean()),
      eventName: s.optional(s.string()),
      createTime: s.optional(s.string()),
      defaultConversionValue: s.optional(
        s.lazy(() => googleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2Schema),
      ),
      countingMethod: s.optional(s.lazy(() => countingMethodSchema)),
      deletable: s.optional(s.boolean()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
