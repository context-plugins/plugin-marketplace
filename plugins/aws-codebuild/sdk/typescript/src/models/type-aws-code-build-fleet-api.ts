import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of proxy rule. */
export const TypeAwsCodeBuildFleetApi = {
  Domain: "DOMAIN",
  Ip: "IP",
} as const;
export type TypeAwsCodeBuildFleetApi =
  | (typeof TypeAwsCodeBuildFleetApi)[keyof typeof TypeAwsCodeBuildFleetApi]
  | (string & {});

export const typeAwsCodeBuildFleetApiSchema: EnumSchema<TypeAwsCodeBuildFleetApi> =
  s.enumOf<TypeAwsCodeBuildFleetApi>(TypeAwsCodeBuildFleetApi);
