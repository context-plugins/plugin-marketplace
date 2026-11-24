import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget19 = {
  AwsStepFunctionsListTagsForResource: "AWSStepFunctions.ListTagsForResource",
} as const;
export type XAmzTarget19 = (typeof XAmzTarget19)[keyof typeof XAmzTarget19] | (string & {});

export const xAmzTarget19Schema: EnumSchema<XAmzTarget19> = s.enumOf<XAmzTarget19>(XAmzTarget19);
