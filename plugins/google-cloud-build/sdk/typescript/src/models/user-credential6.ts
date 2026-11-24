import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. An access token with the `repository` access. It can be either a workspace, project or
 * repository access token. It's recommended to use a system account to generate the credentials.
 */
export type UserCredential6 = {
  /** Output only. The username associated to this token. */
  username?: string;
  /**
   * Required. A SecretManager resource containing the user token that authorizes the Cloud Build
   * connection. Format: `projects/*&#47;secrets/*&#47;versions/*`.
   */
  userTokenSecretVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userCredential6Schema: Schema<UserCredential6> = s.object<UserCredential6>(
  {
    username: s.optional(s.string()),
    userTokenSecretVersion: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
