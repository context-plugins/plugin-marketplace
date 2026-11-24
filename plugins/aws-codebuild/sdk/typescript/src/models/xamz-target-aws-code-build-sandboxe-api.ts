import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCodeBuildSandboxeApi = {
  CodeBuild20161006BatchGetSandboxes: "CodeBuild_20161006.BatchGetSandboxes",
} as const;
export type XAmzTargetAwsCodeBuildSandboxeApi =
  | (typeof XAmzTargetAwsCodeBuildSandboxeApi)[keyof typeof XAmzTargetAwsCodeBuildSandboxeApi]
  | (string & {});

export const xAmzTargetAwsCodeBuildSandboxeApiSchema: EnumSchema<XAmzTargetAwsCodeBuildSandboxeApi> =
  s.enumOf<XAmzTargetAwsCodeBuildSandboxeApi>(XAmzTargetAwsCodeBuildSandboxeApi);
