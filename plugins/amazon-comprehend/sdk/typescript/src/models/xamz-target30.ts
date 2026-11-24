import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget30 = {
  Comprehend20171127ListEntityRecognizers: "Comprehend_20171127.ListEntityRecognizers",
} as const;
export type XAmzTarget30 = (typeof XAmzTarget30)[keyof typeof XAmzTarget30] | (string & {});

export const xAmzTarget30Schema: EnumSchema<XAmzTarget30> = s.enumOf<XAmzTarget30>(XAmzTarget30);
