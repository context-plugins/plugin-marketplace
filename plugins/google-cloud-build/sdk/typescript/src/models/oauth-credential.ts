import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Represents an OAuth token of the account that authorized the Connection, and associated metadata.
 */
export type OAuthCredential = {
  /**
   * Optional. A SecretManager resource containing the OAuth token that authorizes the Cloud Build
   * connection. Format: `projects/*&#47;secrets/*&#47;versions/*`.
   */
  oauthTokenSecretVersion?: string;
  /** Output only. The username associated to this token. */
  username?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oAuthCredentialSchema: Schema<OAuthCredential> = s.object<OAuthCredential>(
  {
    oauthTokenSecretVersion: s.optional(s.string()),
    username: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
