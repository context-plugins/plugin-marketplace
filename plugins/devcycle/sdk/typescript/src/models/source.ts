import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source that created the Audience */
export const Source = {
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
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
