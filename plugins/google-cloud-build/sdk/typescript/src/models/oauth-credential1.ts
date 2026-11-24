import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. OAuth credential of the account that authorized the Cloud Build GitHub App. It is
 * recommended to use a robot account instead of a human user account. The OAuth token must be tied
 * to the Cloud Build GitHub App.
 */
export type OAuthCredential1 = {
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

export const oAuthCredential1Schema: Schema<OAuthCredential1> = s.object<OAuthCredential1>(
  {
    oauthTokenSecretVersion: s.optional(s.string()),
    username: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
