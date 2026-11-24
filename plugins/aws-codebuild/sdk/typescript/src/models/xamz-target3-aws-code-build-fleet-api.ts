import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AwsCodeBuildFleetApi = {
  CodeBuild20161006ListFleets: "CodeBuild_20161006.ListFleets",
} as const;
export type XAmzTarget3AwsCodeBuildFleetApi =
  | (typeof XAmzTarget3AwsCodeBuildFleetApi)[keyof typeof XAmzTarget3AwsCodeBuildFleetApi]
  | (string & {});

export const xAmzTarget3AwsCodeBuildFleetApiSchema: EnumSchema<XAmzTarget3AwsCodeBuildFleetApi> =
  s.enumOf<XAmzTarget3AwsCodeBuildFleetApi>(XAmzTarget3AwsCodeBuildFleetApi);
