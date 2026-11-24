import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AwsCodeBuildFleetApi = {
  CodeBuild20161006DeleteFleet: "CodeBuild_20161006.DeleteFleet",
} as const;
export type XAmzTarget2AwsCodeBuildFleetApi =
  | (typeof XAmzTarget2AwsCodeBuildFleetApi)[keyof typeof XAmzTarget2AwsCodeBuildFleetApi]
  | (string & {});

export const xAmzTarget2AwsCodeBuildFleetApiSchema: EnumSchema<XAmzTarget2AwsCodeBuildFleetApi> =
  s.enumOf<XAmzTarget2AwsCodeBuildFleetApi>(XAmzTarget2AwsCodeBuildFleetApi);
