import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildTypeSchema, type BuildType } from "./build-type.js";
import { pullRequestBuildPolicySchema, type PullRequestBuildPolicy } from "./pull-request-build-policy.js";
import { webhookFilterSchema, type WebhookFilter } from "./webhook-filter.js";

export type UpdateWebhookInput = {
  /** The name of the CodeBuild project. */
  projectName: string;
  /**
   * A regular expression used to determine which repository branches are built when a webhook is
   * triggered. If the name of a branch matches the regular expression, then it is built. If
   * branchFilter is empty, then all branches are built. It is recommended that you use filterGroups
   * instead of branchFilter.
   */
  branchFilter?: string;
  /**
   * A boolean value that specifies whether the associated GitHub repository's secret token should
   * be updated. If you use Bitbucket for your repository, rotateSecret is ignored.
   */
  rotateSecret?: boolean;
  /**
   * An array of arrays of WebhookFilter objects used to determine if a webhook event can trigger a
   * build. A filter group must contain at least one EVENT WebhookFilter.
   */
  filterGroups?: WebhookFilter[][];
  /**
   * Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available
   * for NO_SOURCE source type projects configured for Buildkite runner builds. For more information
   * about CodeBuild-hosted Buildkite runner builds, see Tutorial: Configure a CodeBuild-hosted
   * Buildkite runner in the CodeBuild user guide.
   */
  buildType?: BuildType;
  pullRequestBuildPolicy?: PullRequestBuildPolicy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateWebhookInputSchema: Schema<UpdateWebhookInput> = s.object<UpdateWebhookInput>(
  {
    projectName: s.string(),
    branchFilter: s.optional(s.string()),
    rotateSecret: s.optional(s.boolean()),
    filterGroups: s.optional(s.array(s.array(s.lazy(() => webhookFilterSchema)))),
    buildType: s.optional(s.lazy(() => buildTypeSchema)),
    pullRequestBuildPolicy: s.optional(s.lazy(() => pullRequestBuildPolicySchema)),
  },
  { additionalProperties: s.json() },
);
