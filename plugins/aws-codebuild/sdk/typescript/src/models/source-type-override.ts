import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A source input type, for this build, that overrides the source input defined in the build
 * project.
 */
export const SourceTypeOverride = {
  Codecommit: "CODECOMMIT",
  Codepipeline: "CODEPIPELINE",
  Github: "GITHUB",
  Gitlab: "GITLAB",
  GitlabSelfManaged: "GITLAB_SELF_MANAGED",
  S3: "S3",
  Bitbucket: "BITBUCKET",
  GithubEnterprise: "GITHUB_ENTERPRISE",
  NoSource: "NO_SOURCE",
} as const;
export type SourceTypeOverride = (typeof SourceTypeOverride)[keyof typeof SourceTypeOverride] | (string & {});

export const sourceTypeOverrideSchema: EnumSchema<SourceTypeOverride> =
  s.enumOf<SourceTypeOverride>(SourceTypeOverride);
