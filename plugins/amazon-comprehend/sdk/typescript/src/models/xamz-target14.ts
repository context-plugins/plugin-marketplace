import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget14 = {
  Comprehend20171127DetectTargetedSentiment: "Comprehend_20171127.DetectTargetedSentiment",
} as const;
export type XAmzTarget14 = (typeof XAmzTarget14)[keyof typeof XAmzTarget14] | (string & {});

export const xAmzTarget14Schema: EnumSchema<XAmzTarget14> = s.enumOf<XAmzTarget14>(XAmzTarget14);
