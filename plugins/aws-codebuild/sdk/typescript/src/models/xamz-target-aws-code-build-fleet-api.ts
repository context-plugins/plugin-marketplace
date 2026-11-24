import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAwsCodeBuildFleetApi = {
  CodeBuild20161006BatchGetFleets: "CodeBuild_20161006.BatchGetFleets",
} as const;
export type XAmzTargetAwsCodeBuildFleetApi =
  | (typeof XAmzTargetAwsCodeBuildFleetApi)[keyof typeof XAmzTargetAwsCodeBuildFleetApi]
  | (string & {});

export const xAmzTargetAwsCodeBuildFleetApiSchema: EnumSchema<XAmzTargetAwsCodeBuildFleetApi> =
  s.enumOf<XAmzTargetAwsCodeBuildFleetApi>(XAmzTargetAwsCodeBuildFleetApi);
