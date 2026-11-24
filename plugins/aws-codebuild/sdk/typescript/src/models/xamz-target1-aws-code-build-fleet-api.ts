import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AwsCodeBuildFleetApi = {
  CodeBuild20161006CreateFleet: "CodeBuild_20161006.CreateFleet",
} as const;
export type XAmzTarget1AwsCodeBuildFleetApi =
  | (typeof XAmzTarget1AwsCodeBuildFleetApi)[keyof typeof XAmzTarget1AwsCodeBuildFleetApi]
  | (string & {});

export const xAmzTarget1AwsCodeBuildFleetApiSchema: EnumSchema<XAmzTarget1AwsCodeBuildFleetApi> =
  s.enumOf<XAmzTarget1AwsCodeBuildFleetApi>(XAmzTarget1AwsCodeBuildFleetApi);
