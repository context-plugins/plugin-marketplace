import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget12 = {
  Comprehend20171127DetectSentiment: "Comprehend_20171127.DetectSentiment",
} as const;
export type XAmzTarget12 = (typeof XAmzTarget12)[keyof typeof XAmzTarget12] | (string & {});

export const xAmzTarget12Schema: EnumSchema<XAmzTarget12> = s.enumOf<XAmzTarget12>(XAmzTarget12);
