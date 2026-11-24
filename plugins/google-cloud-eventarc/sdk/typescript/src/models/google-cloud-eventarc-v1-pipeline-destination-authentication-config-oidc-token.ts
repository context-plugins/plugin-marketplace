import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Represents a config used to authenticate with a Google OIDC token using a Google Cloud service
 * account. Use this authentication method to invoke your Cloud Run and Cloud Functions destinations
 * or HTTP endpoints that support Google OIDC.
 */
export type GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken = {
  /**
   * Required. Service account email used to generate the OIDC Token. The principal who calls this
   * API must have iam.serviceAccounts.actAs permission in the service account. See
   * https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc
   * service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow the Pipeline
   * to create OpenID tokens for authenticated requests.
   */
  serviceAccount?: string;
  /**
   * Optional. Audience to be used to generate the OIDC Token. The audience claim identifies the
   * recipient that the JWT is intended for. If unspecified, the destination URI will be used.
   */
  audience?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcTokenSchema: Schema<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken> =
  s.object<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken>(
    {
      serviceAccount: s.optional(s.string()),
      audience: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
