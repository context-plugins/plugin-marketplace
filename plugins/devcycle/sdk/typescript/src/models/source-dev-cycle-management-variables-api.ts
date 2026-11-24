import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The system that was used for the creation of the Variable. */
export const SourceDevCycleManagementVariablesApi = {
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
export type SourceDevCycleManagementVariablesApi =
  | (typeof SourceDevCycleManagementVariablesApi)[keyof typeof SourceDevCycleManagementVariablesApi]
  | (string & {});

export const sourceDevCycleManagementVariablesApiSchema: EnumSchema<SourceDevCycleManagementVariablesApi> =
  s.enumOf<SourceDevCycleManagementVariablesApi>(SourceDevCycleManagementVariablesApi);
