import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of repository that contains the source code to be built. Valid values include:
 * BITBUCKET: The source code is in a Bitbucket repository. CODECOMMIT: The source code is in an
 * CodeCommit repository. CODEPIPELINE: The source code settings are specified in the source action
 * of a pipeline in CodePipeline. GITHUB: The source code is in a GitHub repository.
 * GITHUB_ENTERPRISE: The source code is in a GitHub Enterprise Server repository. GITLAB: The
 * source code is in a GitLab repository. GITLAB_SELF_MANAGED: The source code is in a self-managed
 * GitLab repository. NO_SOURCE: The project does not
 */
export const TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi = {
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
export type TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi =
  | (typeof TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi)[keyof typeof TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
  | (string & {});

export const typeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema: EnumSchema<TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi> =
  s.enumOf<TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>(
    TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
  );
