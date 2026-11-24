import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  countingMethodGoogleAnalyticsPropertiesApiSchema,
  type CountingMethodGoogleAnalyticsPropertiesApi,
} from "./counting-method-google-analytics-properties-api.js";
import {
  googleAnalyticsAdminV1BetaKeyEventDefaultValue2Schema,
  type GoogleAnalyticsAdminV1BetaKeyEventDefaultValue2,
} from "./google-analytics-admin-v1-beta-key-event-default-value2.js";

/** A key event in a Google Analytics property. */
export type GoogleAnalyticsAdminV1BetaKeyEvent = {
  /**
   * Required. The method by which Key Events will be counted across multiple events within a
   * session.
   */
  countingMethod?: CountingMethodGoogleAnalyticsPropertiesApi;
  /**
   * Output only. Resource name of this key event. Format:
   * properties/{property}/keyEvents/{key_event}
   */
  name?: string;
  /** Optional. Defines a default value/currency for a key event. */
  defaultValue?: GoogleAnalyticsAdminV1BetaKeyEventDefaultValue2;
  /** Immutable. The event name for this key event. Examples: 'click', 'purchase' */
  eventName?: string;
  /** Output only. Time when this key event was created in the property. */
  createTime?: string;
  /**
   * Output only. If set to true, this key event refers to a custom event. If set to false, this key
   * event refers to a default event in GA. Default events typically have special meaning in GA.
   * Default events are usually created for you by the GA system, but in some cases can be created
   * by property admins. Custom events count towards the maximum number of custom key events that
   * may be created per property.
   */
  custom?: boolean;
  /** Output only. If set to true, this event can be deleted. */
  deletable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaKeyEventSchema: Schema<GoogleAnalyticsAdminV1BetaKeyEvent> =
  s.object<GoogleAnalyticsAdminV1BetaKeyEvent>(
    {
      countingMethod: s.optional(s.lazy(() => countingMethodGoogleAnalyticsPropertiesApiSchema)),
      name: s.optional(s.string()),
      defaultValue: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaKeyEventDefaultValue2Schema)),
      eventName: s.optional(s.string()),
      createTime: s.optional(s.string()),
      custom: s.optional(s.boolean()),
      deletable: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
