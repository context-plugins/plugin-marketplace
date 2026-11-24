import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source that created the Metric */
export const Source2 = {
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
export type Source2 = (typeof Source2)[keyof typeof Source2] | (string & {});

export const source2Schema: EnumSchema<Source2> = s.enumOf<Source2>(Source2);
