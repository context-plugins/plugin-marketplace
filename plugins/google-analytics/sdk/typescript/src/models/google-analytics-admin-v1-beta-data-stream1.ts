import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2Schema,
  type GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2,
} from "./google-analytics-admin-v1-beta-data-stream-android-app-stream-data2.js";
import {
  googleAnalyticsAdminV1BetaDataStreamIosAppStreamData2Schema,
  type GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2,
} from "./google-analytics-admin-v1-beta-data-stream-ios-app-stream-data2.js";
import {
  googleAnalyticsAdminV1BetaDataStreamWebStreamData2Schema,
  type GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2,
} from "./google-analytics-admin-v1-beta-data-stream-web-stream-data2.js";
import { typeSchema, type Type } from "./type.js";

/** A snapshot of a DataStream resource in change history. */
export type GoogleAnalyticsAdminV1BetaDataStream1 = {
  /** Required. Immutable. The type of this DataStream resource. */
  type?: Type;
  /** Data specific to web streams. Must be populated if type is WEB_DATA_STREAM. */
  webStreamData?: GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2;
  /** Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM. */
  iosAppStreamData?: GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2;
  /**
   * Identifier. Resource name of this Data Stream. Format:
   * properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000"
   */
  name?: string;
  /** Output only. Time when this stream was originally created. */
  createTime?: string;
  /**
   * Human-readable display name for the Data Stream. Required for web data streams. The max allowed
   * display name length is 255 UTF-16 code units.
   */
  displayName?: string;
  /** Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM. */
  androidAppStreamData?: GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2;
  /** Output only. Time when stream payload fields were last updated. */
  updateTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaDataStream1Schema: Schema<GoogleAnalyticsAdminV1BetaDataStream1> =
  s.object<GoogleAnalyticsAdminV1BetaDataStream1>(
    {
      type: s.optional(s.lazy(() => typeSchema)),
      webStreamData: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaDataStreamWebStreamData2Schema)),
      iosAppStreamData: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaDataStreamIosAppStreamData2Schema)),
      name: s.optional(s.string()),
      createTime: s.optional(s.string()),
      displayName: s.optional(s.string()),
      androidAppStreamData: s.optional(
        s.lazy(() => googleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2Schema),
      ),
      updateTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
