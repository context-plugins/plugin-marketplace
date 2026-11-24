import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of build output artifact. Valid values include: CODEPIPELINE: The build project has
 * build output generated through CodePipeline. The CODEPIPELINE type is not supported for
 * secondaryArtifacts. NO_ARTIFACTS: The build project does not produce any build output. S3: The
 * build project stores build output in Amazon S3.
 */
export const Type2AwsCodeBuildProjectsApi = {
  Codepipeline: "CODEPIPELINE",
  S3: "S3",
  NoArtifacts: "NO_ARTIFACTS",
} as const;
export type Type2AwsCodeBuildProjectsApi =
  | (typeof Type2AwsCodeBuildProjectsApi)[keyof typeof Type2AwsCodeBuildProjectsApi]
  | (string & {});

export const type2AwsCodeBuildProjectsApiSchema: EnumSchema<Type2AwsCodeBuildProjectsApi> =
  s.enumOf<Type2AwsCodeBuildProjectsApi>(Type2AwsCodeBuildProjectsApi);
