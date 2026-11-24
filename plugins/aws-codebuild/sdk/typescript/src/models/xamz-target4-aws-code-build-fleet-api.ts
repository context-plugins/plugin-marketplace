import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AwsCodeBuildFleetApi = {
  CodeBuild20161006UpdateFleet: "CodeBuild_20161006.UpdateFleet",
} as const;
export type XAmzTarget4AwsCodeBuildFleetApi =
  | (typeof XAmzTarget4AwsCodeBuildFleetApi)[keyof typeof XAmzTarget4AwsCodeBuildFleetApi]
  | (string & {});

export const xAmzTarget4AwsCodeBuildFleetApiSchema: EnumSchema<XAmzTarget4AwsCodeBuildFleetApi> =
  s.enumOf<XAmzTarget4AwsCodeBuildFleetApi>(XAmzTarget4AwsCodeBuildFleetApi);
