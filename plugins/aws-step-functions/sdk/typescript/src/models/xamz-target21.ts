import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget21 = {
  AwsStepFunctionsSendTaskHeartbeat: "AWSStepFunctions.SendTaskHeartbeat",
} as const;
export type XAmzTarget21 = (typeof XAmzTarget21)[keyof typeof XAmzTarget21] | (string & {});

export const xAmzTarget21Schema: EnumSchema<XAmzTarget21> = s.enumOf<XAmzTarget21>(XAmzTarget21);
