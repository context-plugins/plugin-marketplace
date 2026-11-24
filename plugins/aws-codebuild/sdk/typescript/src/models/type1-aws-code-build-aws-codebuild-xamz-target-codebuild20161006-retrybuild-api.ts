import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER. */
export const Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi = {
  Oauth: "OAUTH",
  Codeconnections: "CODECONNECTIONS",
  SecretsManager: "SECRETS_MANAGER",
} as const;
export type Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi =
  | (typeof Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi)[keyof typeof Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
  | (string & {});

export const type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema: EnumSchema<Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi> =
  s.enumOf<Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>(
    Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
  );
