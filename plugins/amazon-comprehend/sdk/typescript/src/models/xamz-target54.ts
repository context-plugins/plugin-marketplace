import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget54 = {
  Comprehend20171127DescribeFlywheelIteration: "Comprehend_20171127.DescribeFlywheelIteration",
} as const;
export type XAmzTarget54 = (typeof XAmzTarget54)[keyof typeof XAmzTarget54] | (string & {});

export const xAmzTarget54Schema: EnumSchema<XAmzTarget54> = s.enumOf<XAmzTarget54>(XAmzTarget54);
