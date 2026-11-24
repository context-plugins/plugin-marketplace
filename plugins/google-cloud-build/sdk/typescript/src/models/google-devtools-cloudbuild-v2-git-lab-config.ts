import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleDevtoolsCloudbuildV2ServiceDirectoryConfig1Schema,
  type GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1,
} from "./google-devtools-cloudbuild-v2-service-directory-config1.js";
import { userCredential3Schema, type UserCredential3 } from "./user-credential3.js";
import { userCredential4Schema, type UserCredential4 } from "./user-credential4.js";

/** Configuration for connections to gitlab.com or an instance of GitLab Enterprise. */
export type GoogleDevtoolsCloudbuildV2GitLabConfig = {
  /** Optional. SSL certificate to use for requests to GitLab Enterprise. */
  sslCa?: string;
  /**
   * Required. Immutable. SecretManager resource containing the webhook secret of a GitLab
   * Enterprise project, formatted as `projects/*&#47;secrets/*&#47;versions/*`.
   */
  webhookSecretSecretVersion?: string;
  /** Required. A GitLab personal access token with the `api` scope access. */
  authorizerCredential?: UserCredential3;
  /** Output only. Version of the GitLab Enterprise server running on the `host_uri`. */
  serverVersion?: string;
  /**
   * Optional. Configuration for using Service Directory to privately connect to a GitLab Enterprise
   * server. This should only be set if the GitLab Enterprise server is hosted on-premises and not
   * reachable by public internet. If this field is left empty, calls to the GitLab Enterprise
   * server will be made over the public internet.
   */
  serviceDirectoryConfig?: GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1;
  /** Required. A GitLab personal access token with the minimum `read_api` scope access. */
  readAuthorizerCredential?: UserCredential4;
  /**
   * Optional. The URI of the GitLab Enterprise host this connection is for. If not specified, the
   * default value is https://gitlab.com.
   */
  hostUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleDevtoolsCloudbuildV2GitLabConfigSchema: Schema<GoogleDevtoolsCloudbuildV2GitLabConfig> =
  s.object<GoogleDevtoolsCloudbuildV2GitLabConfig>(
    {
      sslCa: s.optional(s.string()),
      webhookSecretSecretVersion: s.optional(s.string()),
      authorizerCredential: s.optional(s.lazy(() => userCredential3Schema)),
      serverVersion: s.optional(s.string()),
      serviceDirectoryConfig: s.optional(
        s.lazy(() => googleDevtoolsCloudbuildV2ServiceDirectoryConfig1Schema),
      ),
      readAuthorizerCredential: s.optional(s.lazy(() => userCredential4Schema)),
      hostUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
