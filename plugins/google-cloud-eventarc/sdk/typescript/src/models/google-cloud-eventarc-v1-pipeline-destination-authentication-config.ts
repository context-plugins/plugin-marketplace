import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1Schema,
  type GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1,
} from "./google-cloud-eventarc-v1-pipeline-destination-authentication-config-oauth-token1.js";
import {
  googleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2Schema,
  type GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2,
} from "./google-cloud-eventarc-v1-pipeline-destination-authentication-config-oidc-token2.js";

/** Represents a config used to authenticate message requests. */
export type GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig = {
  /**
   * Optional. If specified, an [OAuth
   * token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached
   * as an `Authorization` header in the HTTP request. This type of authorization should generally
   * only be used when calling Google APIs hosted on *.googleapis.com.
   */
  oauthToken?: GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1;
  /**
   * Optional. This authenticate method will apply Google OIDC tokens signed by a Google Cloud
   * service account to the requests.
   */
  googleOidc?: GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineDestinationAuthenticationConfigSchema: Schema<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig> =
  s.object<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig>(
    {
      oauthToken: s.optional(
        s.lazy(() => googleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1Schema),
      ),
      googleOidc: s.optional(
        s.lazy(() => googleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2Schema),
      ),
    },
    { additionalProperties: s.json() },
  );
