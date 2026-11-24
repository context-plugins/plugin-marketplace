import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCodeBuildSandboxeApi = {
  CodeBuild20161006ListSandboxes: "CodeBuild_20161006.ListSandboxes",
} as const;
export type XAmzTarget1AwsCodeBuildSandboxeApi =
  | (typeof XAmzTarget1AwsCodeBuildSandboxeApi)[keyof typeof XAmzTarget1AwsCodeBuildSandboxeApi]
  | (string & {});

export const xAmzTarget1AwsCodeBuildSandboxeApiSchema: EnumSchema<XAmzTarget1AwsCodeBuildSandboxeApi> =
  s.enumOf<XAmzTarget1AwsCodeBuildSandboxeApi>(XAmzTarget1AwsCodeBuildSandboxeApi);
