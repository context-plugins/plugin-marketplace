import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the S3 build logs. Valid values are: ENABLED: S3 build logs are enabled for
 * this build project. DISABLED: S3 build logs are not enabled for this build project.
 */
export const Status2AwsCodeBuildProjectsApi = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type Status2AwsCodeBuildProjectsApi =
  | (typeof Status2AwsCodeBuildProjectsApi)[keyof typeof Status2AwsCodeBuildProjectsApi]
  | (string & {});

export const status2AwsCodeBuildProjectsApiSchema: EnumSchema<Status2AwsCodeBuildProjectsApi> =
  s.enumOf<Status2AwsCodeBuildProjectsApi>(Status2AwsCodeBuildProjectsApi);
