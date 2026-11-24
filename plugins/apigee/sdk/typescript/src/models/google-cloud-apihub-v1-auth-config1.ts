import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authTypeSchema, type AuthType } from "./auth-type.js";
import {
  googleCloudApihubV1ApiKeyConfig1Schema,
  type GoogleCloudApihubV1ApiKeyConfig1,
} from "./google-cloud-apihub-v1-api-key-config1.js";
import {
  googleCloudApihubV1GoogleServiceAccountConfig1Schema,
  type GoogleCloudApihubV1GoogleServiceAccountConfig1,
} from "./google-cloud-apihub-v1-google-service-account-config1.js";
import {
  googleCloudApihubV1Oauth2ClientCredentialsConfig1Schema,
  type GoogleCloudApihubV1Oauth2ClientCredentialsConfig1,
} from "./google-cloud-apihub-v1-oauth2-client-credentials-config1.js";
import {
  googleCloudApihubV1UserPasswordConfig2Schema,
  type GoogleCloudApihubV1UserPasswordConfig2,
} from "./google-cloud-apihub-v1-user-password-config2.js";

/** Optional. The authentication information for this plugin instance. */
export type GoogleCloudApihubV1AuthConfig1 = {
  /** Google Service Account. */
  googleServiceAccountConfig?: GoogleCloudApihubV1GoogleServiceAccountConfig1;
  /** Oauth2.0 Client Credentials. */
  oauth2ClientCredentialsConfig?: GoogleCloudApihubV1Oauth2ClientCredentialsConfig1;
  /** Api Key Config. */
  apiKeyConfig?: GoogleCloudApihubV1ApiKeyConfig1;
  /** User Password. */
  userPasswordConfig?: GoogleCloudApihubV1UserPasswordConfig2;
  /** Required. The authentication type. */
  authType?: AuthType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AuthConfig1Schema: Schema<GoogleCloudApihubV1AuthConfig1> =
  s.object<GoogleCloudApihubV1AuthConfig1>(
    {
      googleServiceAccountConfig: s.optional(
        s.lazy(() => googleCloudApihubV1GoogleServiceAccountConfig1Schema),
      ),
      oauth2ClientCredentialsConfig: s.optional(
        s.lazy(() => googleCloudApihubV1Oauth2ClientCredentialsConfig1Schema),
      ),
      apiKeyConfig: s.optional(s.lazy(() => googleCloudApihubV1ApiKeyConfig1Schema)),
      userPasswordConfig: s.optional(s.lazy(() => googleCloudApihubV1UserPasswordConfig2Schema)),
      authType: s.optional(s.lazy(() => authTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
