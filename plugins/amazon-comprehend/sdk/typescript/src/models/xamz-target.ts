import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget = {
  Comprehend20171127BatchDetectDominantLanguage: "Comprehend_20171127.BatchDetectDominantLanguage",
} as const;
export type XAmzTarget = (typeof XAmzTarget)[keyof typeof XAmzTarget] | (string & {});

export const xAmzTargetSchema: EnumSchema<XAmzTarget> = s.enumOf<XAmzTarget>(XAmzTarget);
