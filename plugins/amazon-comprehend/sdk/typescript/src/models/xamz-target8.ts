import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget8 = {
  Comprehend20171127DetectDominantLanguage: "Comprehend_20171127.DetectDominantLanguage",
} as const;
export type XAmzTarget8 = (typeof XAmzTarget8)[keyof typeof XAmzTarget8] | (string & {});

export const xAmzTarget8Schema: EnumSchema<XAmzTarget8> = s.enumOf<XAmzTarget8>(XAmzTarget8);
