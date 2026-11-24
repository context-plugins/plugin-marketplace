import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the type of artifact. */
export const Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  Codepipeline: "CODEPIPELINE",
  S3: "S3",
  NoArtifacts: "NO_ARTIFACTS",
} as const;
export type Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
