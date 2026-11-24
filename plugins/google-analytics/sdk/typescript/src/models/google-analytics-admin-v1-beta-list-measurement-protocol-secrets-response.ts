import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema,
  type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
} from "./google-analytics-admin-v1-beta-measurement-protocol-secret.js";

/** Response message for ListMeasurementProtocolSecret RPC */
export type GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse = {
  /** A list of secrets for the parent stream specified in the request. */
  measurementProtocolSecrets?: GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse>(
    {
      measurementProtocolSecrets: s.optional(
        s.array(s.lazy(() => googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema)),
      ),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
