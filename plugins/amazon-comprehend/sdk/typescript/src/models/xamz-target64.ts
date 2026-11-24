import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget64 = {
  Comprehend20171127DescribeSentimentDetectionJob: "Comprehend_20171127.DescribeSentimentDetectionJob",
} as const;
export type XAmzTarget64 = (typeof XAmzTarget64)[keyof typeof XAmzTarget64] | (string & {});

export const xAmzTarget64Schema: EnumSchema<XAmzTarget64> = s.enumOf<XAmzTarget64>(XAmzTarget64);
