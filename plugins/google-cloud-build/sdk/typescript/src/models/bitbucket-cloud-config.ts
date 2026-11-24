import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userCredential5Schema, type UserCredential5 } from "./user-credential5.js";
import { userCredential6Schema, type UserCredential6 } from "./user-credential6.js";

/** Configuration for connections to Bitbucket Cloud. */
export type BitbucketCloudConfig = {
  /**
   * Required. An access token with the `webhook`, `repository`, `repository:admin` and
   * `pullrequest` scope access. It can be either a workspace, project or repository access token.
   * It's recommended to use a system account to generate these credentials.
   */
  authorizerCredential?: UserCredential5;
  /**
   * Required. An access token with the `repository` access. It can be either a workspace, project
   * or repository access token. It's recommended to use a system account to generate the
   * credentials.
   */
  readAuthorizerCredential?: UserCredential6;
  /** Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. */
  workspace?: string;
  /**
   * Required. SecretManager resource containing the webhook secret used to verify webhook events,
   * formatted as `projects/*&#47;secrets/*&#47;versions/*`.
   */
  webhookSecretSecretVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bitbucketCloudConfigSchema: Schema<BitbucketCloudConfig> = s.object<BitbucketCloudConfig>(
  {
    authorizerCredential: s.optional(s.lazy(() => userCredential5Schema)),
    readAuthorizerCredential: s.optional(s.lazy(() => userCredential6Schema)),
    workspace: s.optional(s.string()),
    webhookSecretSecretVersion: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
