import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. A http access token with the `REPO_ADMIN` scope access. */
export type UserCredential1 = {
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

export const userCredential1Schema: Schema<UserCredential1> = s.object<UserCredential1>(
  {
    username: s.optional(s.string()),
    userTokenSecretVersion: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
