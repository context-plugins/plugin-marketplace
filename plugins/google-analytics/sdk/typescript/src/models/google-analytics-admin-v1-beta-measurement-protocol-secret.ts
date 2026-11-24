import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A secret value used for sending hits to Measurement Protocol. */
export type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret = {
  /**
   * Identifier. Resource name of this secret. This secret may be a child of any type of stream.
   * Format:
   * properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
   */
  name?: string;
  /** Required. Human-readable display name for this secret. */
  displayName?: string;
  /**
   * Output only. The measurement protocol secret value. Pass this value to the api_secret field of
   * the Measurement Protocol API when sending hits to this secret's parent property.
   */
  secretValue?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema: Schema<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret> =
  s.object<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret>(
    {
      name: s.optional(s.string()),
      displayName: s.optional(s.string()),
      secretValue: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
