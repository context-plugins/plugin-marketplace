import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaCustomDimensionSchema,
  type GoogleAnalyticsAdminV1BetaCustomDimension,
} from "./google-analytics-admin-v1-beta-custom-dimension.js";

/** Response message for ListCustomDimensions RPC. */
export type GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** List of CustomDimensions. */
  customDimensions?: GoogleAnalyticsAdminV1BetaCustomDimension[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListCustomDimensionsResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      customDimensions: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaCustomDimensionSchema))),
    },
    { additionalProperties: s.json() },
  );
