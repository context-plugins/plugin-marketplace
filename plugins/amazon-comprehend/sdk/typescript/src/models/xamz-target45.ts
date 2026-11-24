import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget45 = {
  Comprehend20171127StopDominantLanguageDetectionJob: "Comprehend_20171127.StopDominantLanguageDetectionJob",
} as const;
export type XAmzTarget45 = (typeof XAmzTarget45)[keyof typeof XAmzTarget45] | (string & {});

export const xAmzTarget45Schema: EnumSchema<XAmzTarget45> = s.enumOf<XAmzTarget45>(XAmzTarget45);
