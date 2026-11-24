import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaDataStreamSchema,
  type GoogleAnalyticsAdminV1BetaDataStream,
} from "./google-analytics-admin-v1-beta-data-stream.js";

/** Response message for ListDataStreams RPC. */
export type GoogleAnalyticsAdminV1BetaListDataStreamsResponse = {
  /** List of DataStreams. */
  dataStreams?: GoogleAnalyticsAdminV1BetaDataStream[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListDataStreamsResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListDataStreamsResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListDataStreamsResponse>(
    {
      dataStreams: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaDataStreamSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
