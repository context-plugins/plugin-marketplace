import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A snapshot of a MeasurementProtocolSecret resource in change history. */
export type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1 = {
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

export const googleAnalyticsAdminV1BetaMeasurementProtocolSecret1Schema: Schema<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1> =
  s.object<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1>(
    {
      name: s.optional(s.string()),
      displayName: s.optional(s.string()),
      secretValue: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
