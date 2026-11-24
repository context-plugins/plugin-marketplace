import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExpiryEventsConfiguration = {
  /**
   * Specifies the number of days prior to certificate expiration when ACM starts generating
   * EventBridge events. ACM sends one event per day per certificate until the certificate expires.
   * By default, accounts receive events starting 45 days before certificate expiration.
   */
  daysBeforeExpiry?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expiryEventsConfigurationSchema: Schema<ExpiryEventsConfiguration> =
  s.object<ExpiryEventsConfiguration>(
    {
      daysBeforeExpiry: s.optional(s.int()),
      _keysMap: {
        daysBeforeExpiry: "DaysBeforeExpiry",
      },
    },
    { additionalProperties: s.json() },
  );
