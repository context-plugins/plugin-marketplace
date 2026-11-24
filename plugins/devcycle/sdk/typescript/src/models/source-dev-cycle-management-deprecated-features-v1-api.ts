import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source that created the Feature */
export const SourceDevCycleManagementDeprecatedFeaturesV1Api = {
  Api: "api",
  Dashboard: "dashboard",
  Importer: "importer",
  GithubCodeUsages: "github.code_usages",
  GithubPrInsights: "github.pr_insights",
  GitlabCodeUsages: "gitlab.code_usages",
  GitlabPrInsights: "gitlab.pr_insights",
  BitbucketCodeUsages: "bitbucket.code_usages",
  BitbucketPrInsights: "bitbucket.pr_insights",
  Terraform: "terraform",
  Cli: "cli",
  Slack: "slack",
  Mcp: "mcp",
} as const;
export type SourceDevCycleManagementDeprecatedFeaturesV1Api =
  | (typeof SourceDevCycleManagementDeprecatedFeaturesV1Api)[keyof typeof SourceDevCycleManagementDeprecatedFeaturesV1Api]
  | (string & {});

export const sourceDevCycleManagementDeprecatedFeaturesV1ApiSchema: EnumSchema<SourceDevCycleManagementDeprecatedFeaturesV1Api> =
  s.enumOf<SourceDevCycleManagementDeprecatedFeaturesV1Api>(SourceDevCycleManagementDeprecatedFeaturesV1Api);
