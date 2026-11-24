import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget16 = {
  Comprehend20171127DescribeDataset: "Comprehend_20171127.DescribeDataset",
} as const;
export type XAmzTarget16 = (typeof XAmzTarget16)[keyof typeof XAmzTarget16] | (string & {});

export const xAmzTarget16Schema: EnumSchema<XAmzTarget16> = s.enumOf<XAmzTarget16>(XAmzTarget16);
