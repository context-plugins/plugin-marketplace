import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. A GitLab personal access token with the minimum `read_api` scope access. */
export type UserCredential4 = {
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

export const userCredential4Schema: Schema<UserCredential4> = s.object<UserCredential4>(
  {
    username: s.optional(s.string()),
    userTokenSecretVersion: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
