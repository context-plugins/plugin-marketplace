import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget59 = {
  Comprehend20171127StopKeyPhrasesDetectionJob: "Comprehend_20171127.StopKeyPhrasesDetectionJob",
} as const;
export type XAmzTarget59 = (typeof XAmzTarget59)[keyof typeof XAmzTarget59] | (string & {});

export const xAmzTarget59Schema: EnumSchema<XAmzTarget59> = s.enumOf<XAmzTarget59>(XAmzTarget59);
