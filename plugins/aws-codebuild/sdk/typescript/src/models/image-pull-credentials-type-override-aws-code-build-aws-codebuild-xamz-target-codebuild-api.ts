import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of credentials CodeBuild uses to pull images in your batch build. There are two valid
 * values: CODEBUILD Specifies that CodeBuild uses its own credentials. This requires that you
 * modify your ECR repository policy to trust CodeBuild's service principal. SERVICE_ROLE Specifies
 * that CodeBuild uses your build project's service role. When using a cross-account or private
 * registry image, you must use SERVICE_ROLE credentials. When using an CodeBuild curated image, you
 * must use CODEBUILD credentials.
 */
export const ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  Codebuild: "CODEBUILD",
  ServiceRole: "SERVICE_ROLE",
} as const;
export type ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const imagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
