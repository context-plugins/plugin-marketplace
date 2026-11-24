import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Data specific to web streams. Must be populated if type is WEB_DATA_STREAM. */
export type GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2 = {
  /** Output only. Analytics Measurement ID. Example: "G-1A2BCD345E" */
  measurementId?: string;
  /**
   * Domain name of the web app being measured, or empty. Example: "http://www.google.com",
   * "https://www.google.com"
   */
  defaultUri?: string;
  /**
   * Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web
   * app is deleted and recreated.
   */
  firebaseAppId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaDataStreamWebStreamData2Schema: Schema<GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2> =
  s.object<GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2>(
    {
      measurementId: s.optional(s.string()),
      defaultUri: s.optional(s.string()),
      firebaseAppId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
