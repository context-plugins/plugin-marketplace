import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget67 = {
  Comprehend20171127StopSentimentDetectionJob: "Comprehend_20171127.StopSentimentDetectionJob",
} as const;
export type XAmzTarget67 = (typeof XAmzTarget67)[keyof typeof XAmzTarget67] | (string & {});

export const xAmzTarget67Schema: EnumSchema<XAmzTarget67> = s.enumOf<XAmzTarget67>(XAmzTarget67);
