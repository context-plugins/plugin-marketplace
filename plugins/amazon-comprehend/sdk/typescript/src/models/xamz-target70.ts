import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget70 = {
  Comprehend20171127StartTargetedSentimentDetectionJob:
    "Comprehend_20171127.StartTargetedSentimentDetectionJob",
} as const;
export type XAmzTarget70 = (typeof XAmzTarget70)[keyof typeof XAmzTarget70] | (string & {});

export const xAmzTarget70Schema: EnumSchema<XAmzTarget70> = s.enumOf<XAmzTarget70>(XAmzTarget70);
