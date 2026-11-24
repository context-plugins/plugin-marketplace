import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of credentials CodeBuild uses to pull images in your build. There are two valid values:
 * CODEBUILD specifies that CodeBuild uses its own credentials. This requires that you modify your
 * ECR repository policy to trust CodeBuild service principal. SERVICE_ROLE specifies that CodeBuild
 * uses your build project's service role. When you use a cross-account or private registry image,
 * you must use SERVICE_ROLE credentials. When you use an CodeBuild curated image, you must use
 * CODEBUILD credentials.
 */
export const ImagePullCredentialsType = {
  Codebuild: "CODEBUILD",
  ServiceRole: "SERVICE_ROLE",
} as const;
export type ImagePullCredentialsType =
  | (typeof ImagePullCredentialsType)[keyof typeof ImagePullCredentialsType]
  | (string & {});

export const imagePullCredentialsTypeSchema: EnumSchema<ImagePullCredentialsType> =
  s.enumOf<ImagePullCredentialsType>(ImagePullCredentialsType);
