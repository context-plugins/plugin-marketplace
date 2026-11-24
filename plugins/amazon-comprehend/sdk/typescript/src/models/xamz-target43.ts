import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget43 = {
  Comprehend20171127ListDominantLanguageDetectionJobs:
    "Comprehend_20171127.ListDominantLanguageDetectionJobs",
} as const;
export type XAmzTarget43 = (typeof XAmzTarget43)[keyof typeof XAmzTarget43] | (string & {});

export const xAmzTarget43Schema: EnumSchema<XAmzTarget43> = s.enumOf<XAmzTarget43>(XAmzTarget43);
