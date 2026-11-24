import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. This authenticate method will apply Google OIDC tokens signed by a Google Cloud service
 * account to the requests.
 */
export type GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2 = {
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

export const googleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2Schema: Schema<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2> =
  s.object<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2>(
    {
      serviceAccount: s.optional(s.string()),
      audience: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
