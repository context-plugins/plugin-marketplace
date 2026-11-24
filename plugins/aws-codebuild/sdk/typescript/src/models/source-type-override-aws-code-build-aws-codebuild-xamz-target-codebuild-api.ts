import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source input type that overrides the source input defined in the batch build project. */
export const SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
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
export type SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const sourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
