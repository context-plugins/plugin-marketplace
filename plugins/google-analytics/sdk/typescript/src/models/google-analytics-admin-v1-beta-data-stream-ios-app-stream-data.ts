import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Data specific to iOS app streams. */
export type GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData = {
  /**
   * Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS
   * app is deleted and recreated.
   */
  firebaseAppId?: string;
  /**
   * Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"
   */
  bundleId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaDataStreamIosAppStreamDataSchema: Schema<GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData> =
  s.object<GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData>(
    {
      firebaseAppId: s.optional(s.string()),
      bundleId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
