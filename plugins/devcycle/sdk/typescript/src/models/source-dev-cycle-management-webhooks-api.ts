import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source where webhook was created from */
export const SourceDevCycleManagementWebhooksApi = {
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
export type SourceDevCycleManagementWebhooksApi =
  | (typeof SourceDevCycleManagementWebhooksApi)[keyof typeof SourceDevCycleManagementWebhooksApi]
  | (string & {});

export const sourceDevCycleManagementWebhooksApiSchema: EnumSchema<SourceDevCycleManagementWebhooksApi> =
  s.enumOf<SourceDevCycleManagementWebhooksApi>(SourceDevCycleManagementWebhooksApi);
