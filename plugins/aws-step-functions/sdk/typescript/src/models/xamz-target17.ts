import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget17 = {
  AwsStepFunctionsGetActivityTask: "AWSStepFunctions.GetActivityTask",
} as const;
export type XAmzTarget17 = (typeof XAmzTarget17)[keyof typeof XAmzTarget17] | (string & {});

export const xAmzTarget17Schema: EnumSchema<XAmzTarget17> = s.enumOf<XAmzTarget17>(XAmzTarget17);
