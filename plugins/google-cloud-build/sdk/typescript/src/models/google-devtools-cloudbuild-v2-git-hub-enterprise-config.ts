import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleDevtoolsCloudbuildV2ServiceDirectoryConfig2Schema,
  type GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2,
} from "./google-devtools-cloudbuild-v2-service-directory-config2.js";

/** Configuration for connections to an instance of GitHub Enterprise. */
export type GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig = {
  /** Required. The URI of the GitHub Enterprise host this connection is for. */
  hostUri?: string;
  /**
   * Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as
   * `projects/*&#47;secrets/*&#47;versions/*`.
   */
  webhookSecretSecretVersion?: string;
  /** Required. API Key used for authentication of webhook events. */
  apiKey?: string;
  /** Optional. The URL-friendly name of the GitHub App. */
  appSlug?: string;
  /** Optional. SSL certificate to use for requests to GitHub Enterprise. */
  sslCa?: string;
  /**
   * Optional. SecretManager resource containing the private key of the GitHub App, formatted as
   * `projects/*&#47;secrets/*&#47;versions/*`.
   */
  privateKeySecretVersion?: string;
  /**
   * Optional. Configuration for using Service Directory to privately connect to a GitHub Enterprise
   * server. This should only be set if the GitHub Enterprise server is hosted on-premises and not
   * reachable by public internet. If this field is left empty, calls to the GitHub Enterprise
   * server will be made over the public internet.
   */
  serviceDirectoryConfig?: GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2;
  /** Optional. ID of the installation of the GitHub App. */
  appInstallationId?: string;
  /** Optional. Id of the GitHub App created from the manifest. */
  appId?: string;
  /** Output only. GitHub Enterprise version installed at the host_uri. */
  serverVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleDevtoolsCloudbuildV2GitHubEnterpriseConfigSchema: Schema<GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig> =
  s.object<GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig>(
    {
      hostUri: s.optional(s.string()),
      webhookSecretSecretVersion: s.optional(s.string()),
      apiKey: s.optional(s.string()),
      appSlug: s.optional(s.string()),
      sslCa: s.optional(s.string()),
      privateKeySecretVersion: s.optional(s.string()),
      serviceDirectoryConfig: s.optional(
        s.lazy(() => googleDevtoolsCloudbuildV2ServiceDirectoryConfig2Schema),
      ),
      appInstallationId: s.optional(s.string()),
      appId: s.optional(s.string()),
      serverVersion: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
