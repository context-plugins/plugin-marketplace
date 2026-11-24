import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of cache used by the build project. Valid values include: NO_CACHE: The build project
 * does not use any cache. S3: The build project reads and writes from and to S3. LOCAL: The build
 * project stores a cache locally on a build host that is only available to that build host.
 */
export const Type3AwsCodeBuildProjectsApi = {
  NoCache: "NO_CACHE",
  S3: "S3",
  Local: "LOCAL",
} as const;
export type Type3AwsCodeBuildProjectsApi =
  | (typeof Type3AwsCodeBuildProjectsApi)[keyof typeof Type3AwsCodeBuildProjectsApi]
  | (string & {});

export const type3AwsCodeBuildProjectsApiSchema: EnumSchema<Type3AwsCodeBuildProjectsApi> =
  s.enumOf<Type3AwsCodeBuildProjectsApi>(Type3AwsCodeBuildProjectsApi);
