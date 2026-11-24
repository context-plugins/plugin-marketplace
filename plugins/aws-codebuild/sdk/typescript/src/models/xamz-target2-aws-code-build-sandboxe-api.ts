import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCodeBuildSandboxeApi = {
  CodeBuild20161006ListSandboxesForProject: "CodeBuild_20161006.ListSandboxesForProject",
} as const;
export type XAmzTarget2AwsCodeBuildSandboxeApi =
  | (typeof XAmzTarget2AwsCodeBuildSandboxeApi)[keyof typeof XAmzTarget2AwsCodeBuildSandboxeApi]
  | (string & {});

export const xAmzTarget2AwsCodeBuildSandboxeApiSchema: EnumSchema<XAmzTarget2AwsCodeBuildSandboxeApi> =
  s.enumOf<XAmzTarget2AwsCodeBuildSandboxeApi>(XAmzTarget2AwsCodeBuildSandboxeApi);
