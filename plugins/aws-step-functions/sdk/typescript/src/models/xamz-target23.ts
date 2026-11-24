import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget23 = {
  AwsStepFunctionsStartSyncExecution: "AWSStepFunctions.StartSyncExecution",
} as const;
export type XAmzTarget23 = (typeof XAmzTarget23)[keyof typeof XAmzTarget23] | (string & {});

export const xAmzTarget23Schema: EnumSchema<XAmzTarget23> = s.enumOf<XAmzTarget23>(XAmzTarget23);
