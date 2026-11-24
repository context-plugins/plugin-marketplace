import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget50 = {
  Comprehend20171127DescribeEventsDetectionJob: "Comprehend_20171127.DescribeEventsDetectionJob",
} as const;
export type XAmzTarget50 = (typeof XAmzTarget50)[keyof typeof XAmzTarget50] | (string & {});

export const xAmzTarget50Schema: EnumSchema<XAmzTarget50> = s.enumOf<XAmzTarget50>(XAmzTarget50);
