import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Contains information needed for generating an [OAuth
 * token](https://developers.google.com/identity/protocols/OAuth2). This type of authorization
 * should generally only be used when calling Google APIs hosted on *.googleapis.com.
 */
export type GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken = {
  /**
   * Required. Service account email used to generate the [OAuth
   * token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this
   * API must have iam.serviceAccounts.actAs permission in the service account. See
   * https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc
   * service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to
   * create OAuth2 tokens for authenticated requests.
   */
  serviceAccount?: string;
  /**
   * Optional. OAuth scope to be used for generating OAuth access token. If not specified,
   * "https://www.googleapis.com/auth/cloud-platform" will be used.
   */
  scope?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthTokenSchema: Schema<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken> =
  s.object<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken>(
    {
      serviceAccount: s.optional(s.string()),
      scope: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
