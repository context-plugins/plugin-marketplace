import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget69 = {
  Comprehend20171127ListTargetedSentimentDetectionJobs:
    "Comprehend_20171127.ListTargetedSentimentDetectionJobs",
} as const;
export type XAmzTarget69 = (typeof XAmzTarget69)[keyof typeof XAmzTarget69] | (string & {});

export const xAmzTarget69Schema: EnumSchema<XAmzTarget69> = s.enumOf<XAmzTarget69>(XAmzTarget69);
