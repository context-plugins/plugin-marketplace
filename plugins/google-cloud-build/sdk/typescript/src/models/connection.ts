import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bitbucketCloudConfigSchema, type BitbucketCloudConfig } from "./bitbucket-cloud-config.js";
import {
  bitbucketDataCenterConfigSchema,
  type BitbucketDataCenterConfig,
} from "./bitbucket-data-center-config.js";
import { gitHubConfigSchema, type GitHubConfig } from "./git-hub-config.js";
import {
  googleDevtoolsCloudbuildV2GitHubEnterpriseConfigSchema,
  type GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig,
} from "./google-devtools-cloudbuild-v2-git-hub-enterprise-config.js";
import {
  googleDevtoolsCloudbuildV2GitLabConfigSchema,
  type GoogleDevtoolsCloudbuildV2GitLabConfig,
} from "./google-devtools-cloudbuild-v2-git-lab-config.js";
import { installationState1Schema, type InstallationState1 } from "./installation-state1.js";

/**
 * A connection to a SCM like GitHub, GitHub Enterprise, Bitbucket Data Center, Bitbucket Cloud or
 * GitLab.
 */
export type Connection = {
  /** Output only. Installation state of the Connection. */
  installationState?: InstallationState1;
  /** Configuration for connections to gitlab.com or an instance of GitLab Enterprise. */
  gitlabConfig?: GoogleDevtoolsCloudbuildV2GitLabConfig;
  /** Output only. Server assigned timestamp for when the connection was updated. */
  updateTime?: string;
  /**
   * Optional. If disabled is set to true, functionality is disabled for this connection. Repository
   * based API methods and webhooks processing for repositories in this connection will be disabled.
   */
  disabled?: boolean;
  /** Configuration for connections to github.com. */
  githubConfig?: GitHubConfig;
  /** Output only. Server assigned timestamp for when the connection was created. */
  createTime?: string;
  /** Configuration for connections to Bitbucket Cloud. */
  bitbucketCloudConfig?: BitbucketCloudConfig;
  /** Configuration for connections to Bitbucket Data Center. */
  bitbucketDataCenterConfig?: BitbucketDataCenterConfig;
  /**
   * This checksum is computed by the server based on the value of other fields, and may be sent on
   * update and delete requests to ensure the client has an up-to-date value before proceeding.
   */
  etag?: string;
  /** Optional. Allows clients to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Configuration for connections to an instance of GitHub Enterprise. */
  githubEnterpriseConfig?: GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig;
  /**
   * Immutable. The resource name of the connection, in the format
   * `projects/{project}/locations/{location}/connections/{connection_id}`.
   */
  name?: string;
  /** Output only. Set to true when the connection is being set up or updated in the background. */
  reconciling?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionSchema: Schema<Connection> = s.object<Connection>(
  {
    installationState: s.optional(s.lazy(() => installationState1Schema)),
    gitlabConfig: s.optional(s.lazy(() => googleDevtoolsCloudbuildV2GitLabConfigSchema)),
    updateTime: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    githubConfig: s.optional(s.lazy(() => gitHubConfigSchema)),
    createTime: s.optional(s.string()),
    bitbucketCloudConfig: s.optional(s.lazy(() => bitbucketCloudConfigSchema)),
    bitbucketDataCenterConfig: s.optional(s.lazy(() => bitbucketDataCenterConfigSchema)),
    etag: s.optional(s.string()),
    annotations: s.optional(s.record(s.string(), s.string())),
    githubEnterpriseConfig: s.optional(s.lazy(() => googleDevtoolsCloudbuildV2GitHubEnterpriseConfigSchema)),
    name: s.optional(s.string()),
    reconciling: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
