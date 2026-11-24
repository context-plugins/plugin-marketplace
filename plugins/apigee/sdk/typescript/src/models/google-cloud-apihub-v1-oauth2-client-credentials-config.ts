import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1Secret1Schema,
  type GoogleCloudApihubV1Secret1,
} from "./google-cloud-apihub-v1-secret1.js";

/**
 * Parameters to support Oauth 2.0 client credentials grant authentication. See
 * https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
 */
export type GoogleCloudApihubV1Oauth2ClientCredentialsConfig = {
  /** Required. The client identifier. */
  clientId?: string;
  /**
   * Required. Secret version reference containing the client secret. The
   * `secretmanager.versions.access` permission should be granted to the service account accessing
   * the secret.
   */
  clientSecret?: GoogleCloudApihubV1Secret1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Oauth2ClientCredentialsConfigSchema: Schema<GoogleCloudApihubV1Oauth2ClientCredentialsConfig> =
  s.object<GoogleCloudApihubV1Oauth2ClientCredentialsConfig>(
    {
      clientId: s.optional(s.string()),
      clientSecret: s.optional(s.lazy(() => googleCloudApihubV1Secret1Schema)),
    },
    { additionalProperties: s.json() },
  );
