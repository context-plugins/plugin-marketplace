import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccount3Schema,
  type GoogleAnalyticsAdminV1BetaAccount3,
} from "./google-analytics-admin-v1-beta-account3.js";
import {
  googleAnalyticsAdminV1BetaConversionEvent2Schema,
  type GoogleAnalyticsAdminV1BetaConversionEvent2,
} from "./google-analytics-admin-v1-beta-conversion-event2.js";
import {
  googleAnalyticsAdminV1BetaDataRetentionSettings2Schema,
  type GoogleAnalyticsAdminV1BetaDataRetentionSettings2,
} from "./google-analytics-admin-v1-beta-data-retention-settings2.js";
import {
  googleAnalyticsAdminV1BetaDataStream1Schema,
  type GoogleAnalyticsAdminV1BetaDataStream1,
} from "./google-analytics-admin-v1-beta-data-stream1.js";
import {
  googleAnalyticsAdminV1BetaFirebaseLink2Schema,
  type GoogleAnalyticsAdminV1BetaFirebaseLink2,
} from "./google-analytics-admin-v1-beta-firebase-link2.js";
import {
  googleAnalyticsAdminV1BetaGoogleAdsLink2Schema,
  type GoogleAnalyticsAdminV1BetaGoogleAdsLink2,
} from "./google-analytics-admin-v1-beta-google-ads-link2.js";
import {
  googleAnalyticsAdminV1BetaMeasurementProtocolSecret1Schema,
  type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1,
} from "./google-analytics-admin-v1-beta-measurement-protocol-secret1.js";
import {
  googleAnalyticsAdminV1BetaProperty2Schema,
  type GoogleAnalyticsAdminV1BetaProperty2,
} from "./google-analytics-admin-v1-beta-property2.js";

/**
 * Resource contents from before the change was made. If this resource was created in this change,
 * this field will be missing.
 */
export type GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1 = {
  /** A snapshot of a MeasurementProtocolSecret resource in change history. */
  measurementProtocolSecret?: GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1;
  /** A snapshot of a Property resource in change history. */
  property?: GoogleAnalyticsAdminV1BetaProperty2;
  /** A snapshot of a DataStream resource in change history. */
  dataStream?: GoogleAnalyticsAdminV1BetaDataStream1;
  /** A snapshot of a data retention settings resource in change history. */
  dataRetentionSettings?: GoogleAnalyticsAdminV1BetaDataRetentionSettings2;
  /** A snapshot of a GoogleAdsLink resource in change history. */
  googleAdsLink?: GoogleAnalyticsAdminV1BetaGoogleAdsLink2;
  /** A snapshot of a FirebaseLink resource in change history. */
  firebaseLink?: GoogleAnalyticsAdminV1BetaFirebaseLink2;
  /** A snapshot of a ConversionEvent resource in change history. */
  conversionEvent?: GoogleAnalyticsAdminV1BetaConversionEvent2;
  /** A snapshot of an Account resource in change history. */
  account?: GoogleAnalyticsAdminV1BetaAccount3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1Schema: Schema<GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1> =
  s.object<GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1>(
    {
      measurementProtocolSecret: s.optional(
        s.lazy(() => googleAnalyticsAdminV1BetaMeasurementProtocolSecret1Schema),
      ),
      property: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaProperty2Schema)),
      dataStream: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaDataStream1Schema)),
      dataRetentionSettings: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaDataRetentionSettings2Schema)),
      googleAdsLink: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaGoogleAdsLink2Schema)),
      firebaseLink: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaFirebaseLink2Schema)),
      conversionEvent: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaConversionEvent2Schema)),
      account: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccount3Schema)),
    },
    { additionalProperties: s.json() },
  );
