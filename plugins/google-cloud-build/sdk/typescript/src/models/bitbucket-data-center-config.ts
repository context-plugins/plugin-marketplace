import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleDevtoolsCloudbuildV2ServiceDirectoryConfig4Schema,
  type GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4,
} from "./google-devtools-cloudbuild-v2-service-directory-config4.js";
import { userCredential1Schema, type UserCredential1 } from "./user-credential1.js";
import { userCredential2Schema, type UserCredential2 } from "./user-credential2.js";

/** Configuration for connections to Bitbucket Data Center. */
export type BitbucketDataCenterConfig = {
  /**
   * Required. Immutable. SecretManager resource containing the webhook secret used to verify
   * webhook events, formatted as `projects/*&#47;secrets/*&#47;versions/*`.
   */
  webhookSecretSecretVersion?: string;
  /** Output only. Version of the Bitbucket Data Center running on the `host_uri`. */
  serverVersion?: string;
  /**
   * Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data
   * Center. This should only be set if the Bitbucket Data Center is hosted on-premises and not
   * reachable by public internet. If this field is left empty, calls to the Bitbucket Data Center
   * will be made over the public internet.
   */
  serviceDirectoryConfig?: GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4;
  /** Required. The URI of the Bitbucket Data Center instance or cluster this connection is for. */
  hostUri?: string;
  /** Optional. SSL certificate to use for requests to the Bitbucket Data Center. */
  sslCa?: string;
  /** Required. A http access token with the `REPO_ADMIN` scope access. */
  authorizerCredential?: UserCredential1;
  /** Required. A http access token with the `REPO_READ` access. */
  readAuthorizerCredential?: UserCredential2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bitbucketDataCenterConfigSchema: Schema<BitbucketDataCenterConfig> =
  s.object<BitbucketDataCenterConfig>(
    {
      webhookSecretSecretVersion: s.optional(s.string()),
      serverVersion: s.optional(s.string()),
      serviceDirectoryConfig: s.optional(
        s.lazy(() => googleDevtoolsCloudbuildV2ServiceDirectoryConfig4Schema),
      ),
      hostUri: s.optional(s.string()),
      sslCa: s.optional(s.string()),
      authorizerCredential: s.optional(s.lazy(() => userCredential1Schema)),
      readAuthorizerCredential: s.optional(s.lazy(() => userCredential2Schema)),
    },
    { additionalProperties: s.json() },
  );
