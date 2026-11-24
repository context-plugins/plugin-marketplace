import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget72 = {
  Comprehend20171127DescribeTopicsDetectionJob: "Comprehend_20171127.DescribeTopicsDetectionJob",
} as const;
export type XAmzTarget72 = (typeof XAmzTarget72)[keyof typeof XAmzTarget72] | (string & {});

export const xAmzTarget72Schema: EnumSchema<XAmzTarget72> = s.enumOf<XAmzTarget72>(XAmzTarget72);
