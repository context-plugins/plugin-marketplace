import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget42 = {
  Comprehend20171127DescribeDominantLanguageDetectionJob:
    "Comprehend_20171127.DescribeDominantLanguageDetectionJob",
} as const;
export type XAmzTarget42 = (typeof XAmzTarget42)[keyof typeof XAmzTarget42] | (string & {});

export const xAmzTarget42Schema: EnumSchema<XAmzTarget42> = s.enumOf<XAmzTarget42>(XAmzTarget42);
