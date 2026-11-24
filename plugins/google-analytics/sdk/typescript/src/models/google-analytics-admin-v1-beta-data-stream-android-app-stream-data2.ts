import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM. */
export type GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2 = {
  /**
   * Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the
   * Android app is deleted and recreated.
   */
  firebaseAppId?: string;
  /** Immutable. The package name for the app being measured. Example: "com.example.myandroidapp" */
  packageName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2Schema: Schema<GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2> =
  s.object<GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2>(
    {
      firebaseAppId: s.optional(s.string()),
      packageName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
