import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaFirebaseLinkSchema,
  type GoogleAnalyticsAdminV1BetaFirebaseLink,
} from "./google-analytics-admin-v1-beta-firebase-link.js";

/** Response message for ListFirebaseLinks RPC */
export type GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per
   * property, so this will never be populated.
   */
  nextPageToken?: string;
  /** List of FirebaseLinks. This will have at most one value. */
  firebaseLinks?: GoogleAnalyticsAdminV1BetaFirebaseLink[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListFirebaseLinksResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse>(
    {
      nextPageToken: s.optional(s.string()),
      firebaseLinks: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaFirebaseLinkSchema))),
    },
    { additionalProperties: s.json() },
  );
