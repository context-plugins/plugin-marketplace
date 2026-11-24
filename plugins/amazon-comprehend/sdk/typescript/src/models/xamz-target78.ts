import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget78 = {
  Comprehend20171127ListFlywheelIterationHistory: "Comprehend_20171127.ListFlywheelIterationHistory",
} as const;
export type XAmzTarget78 = (typeof XAmzTarget78)[keyof typeof XAmzTarget78] | (string & {});

export const xAmzTarget78Schema: EnumSchema<XAmzTarget78> = s.enumOf<XAmzTarget78>(XAmzTarget78);
