import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Deprecated: Salesforce is retiring Username-Password authentication. Use
 * `oauth2_client_credentials` instead.
 */
export type UserCredentials2 = {
  /** Required. Username for the Salesforce connection. */
  username?: string;
  /**
   * Optional. Password for the Salesforce connection. Mutually exclusive with the
   * `secret_manager_stored_password` field.
   */
  password?: string;
  /**
   * Optional. A reference to a Secret Manager resource name storing the Salesforce connection's
   * password. Mutually exclusive with the `password` field.
   */
  secretManagerStoredPassword?: string;
  /**
   * Optional. A reference to a Secret Manager resource name storing the Salesforce connection's
   * security token. Mutually exclusive with the `security_token` field.
   */
  secretManagerStoredSecurityToken?: string;
  /**
   * Optional. Security token for the Salesforce connection. Mutually exclusive with the
   * `secret_manager_stored_security_token` field.
   */
  securityToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userCredentials2Schema: Schema<UserCredentials2> = s.object<UserCredentials2>(
  {
    username: s.optional(s.string()),
    password: s.optional(s.string()),
    secretManagerStoredPassword: s.optional(s.string()),
    secretManagerStoredSecurityToken: s.optional(s.string()),
    securityToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
