import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget10 = {
  Comprehend20171127DetectKeyPhrases: "Comprehend_20171127.DetectKeyPhrases",
} as const;
export type XAmzTarget10 = (typeof XAmzTarget10)[keyof typeof XAmzTarget10] | (string & {});

export const xAmzTarget10Schema: EnumSchema<XAmzTarget10> = s.enumOf<XAmzTarget10>(XAmzTarget10);
