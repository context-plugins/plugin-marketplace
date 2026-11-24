import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Connected app authentication. */
export type Oauth2ClientCredentials1 = {
  /**
   * Optional. A reference to a Secret Manager resource name storing the Salesforce OAuth2
   * client_secret. Mutually exclusive with the `client_secret` field.
   */
  secretManagerStoredClientSecret?: string;
  /**
   * Optional. Client secret for Salesforce OAuth2 Client Credentials. Mutually exclusive with the
   * `secret_manager_stored_client_secret` field.
   */
  clientSecret?: string;
  /** Required. Client ID for Salesforce OAuth2 Client Credentials. */
  clientId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oauth2ClientCredentials1Schema: Schema<Oauth2ClientCredentials1> =
  s.object<Oauth2ClientCredentials1>(
    {
      secretManagerStoredClientSecret: s.optional(s.string()),
      clientSecret: s.optional(s.string()),
      clientId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
