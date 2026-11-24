import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget31 = {
  Comprehend20171127CreateFlywheel: "Comprehend_20171127.CreateFlywheel",
} as const;
export type XAmzTarget31 = (typeof XAmzTarget31)[keyof typeof XAmzTarget31] | (string & {});

export const xAmzTarget31Schema: EnumSchema<XAmzTarget31> = s.enumOf<XAmzTarget31>(XAmzTarget31);
