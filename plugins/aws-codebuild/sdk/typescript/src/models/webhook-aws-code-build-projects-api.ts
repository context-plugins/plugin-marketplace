import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildTypeSchema, type BuildType } from "./build-type.js";
import { pullRequestBuildPolicySchema, type PullRequestBuildPolicy } from "./pull-request-build-policy.js";
import { scopeConfigurationSchema, type ScopeConfiguration } from "./scope-configuration.js";
import {
  statusAwsCodeBuildProjectsApiSchema,
  type StatusAwsCodeBuildProjectsApi,
} from "./status-aws-code-build-projects-api.js";
import {
  webhookFilterAwsCodeBuildProjectsApiSchema,
  type WebhookFilterAwsCodeBuildProjectsApi,
} from "./webhook-filter-aws-code-build-projects-api.js";

export type WebhookAwsCodeBuildProjectsApi = {
  /** The URL to the webhook. */
  url?: string;
  /** The CodeBuild endpoint where webhook events are sent. */
  payloadUrl?: string;
  /** The secret token of the associated repository. A Bitbucket webhook does not support secret. */
  secret?: string;
  /**
   * A regular expression used to determine which repository branches are built when a webhook is
   * triggered. If the name of a branch matches the regular expression, then it is built. If
   * branchFilter is empty, then all branches are built. It is recommended that you use filterGroups
   * instead of branchFilter.
   */
  branchFilter?: string;
  /**
   * An array of arrays of WebhookFilter objects used to determine which webhooks are triggered. At
   * least one WebhookFilter in the array must specify EVENT as its type. For a build to be
   * triggered, at least one filter group in the filterGroups array must pass. For a filter group to
   * pass, each of its filters must pass.
   */
  filterGroups?: WebhookFilterAwsCodeBuildProjectsApi[][];
  /**
   * Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available
   * for NO_SOURCE source type projects configured for Buildkite runner builds. For more information
   * about CodeBuild-hosted Buildkite runner builds, see Tutorial: Configure a CodeBuild-hosted
   * Buildkite runner in the CodeBuild user guide.
   */
  buildType?: BuildType;
  /**
   * If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns
   * payloadUrl and secret values for the webhook. The payloadUrl and secret values in the output
   * can be used to manually create a webhook within GitHub. manualCreation is only available for
   * GitHub webhooks.
   */
  manualCreation?: boolean;
  /** A timestamp that indicates the last time a repository's secret token was modified. */
  lastModifiedSecret?: Date;
  scopeConfiguration?: ScopeConfiguration;
  /**
   * The status of the webhook. Valid values include: CREATING: The webhook is being created.
   * CREATE_FAILED: The webhook has failed to create. ACTIVE: The webhook has succeeded and is
   * active. DELETING: The webhook is being deleted.
   */
  status?: StatusAwsCodeBuildProjectsApi;
  /** A message associated with the status of a webhook. */
  statusMessage?: string;
  pullRequestBuildPolicy?: PullRequestBuildPolicy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookAwsCodeBuildProjectsApiSchema: Schema<WebhookAwsCodeBuildProjectsApi> =
  s.object<WebhookAwsCodeBuildProjectsApi>(
    {
      url: s.optional(s.string()),
      payloadUrl: s.optional(s.string()),
      secret: s.optional(s.string()),
      branchFilter: s.optional(s.string()),
      filterGroups: s.optional(s.array(s.array(s.lazy(() => webhookFilterAwsCodeBuildProjectsApiSchema)))),
      buildType: s.optional(s.lazy(() => buildTypeSchema)),
      manualCreation: s.optional(s.boolean()),
      lastModifiedSecret: s.optional(s.dateTime()),
      scopeConfiguration: s.optional(s.lazy(() => scopeConfigurationSchema)),
      status: s.optional(s.lazy(() => statusAwsCodeBuildProjectsApiSchema)),
      statusMessage: s.optional(s.string()),
      pullRequestBuildPolicy: s.optional(s.lazy(() => pullRequestBuildPolicySchema)),
    },
    { additionalProperties: s.json() },
  );
