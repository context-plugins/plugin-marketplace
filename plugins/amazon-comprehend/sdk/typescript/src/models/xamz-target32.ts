import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget32 = {
  Comprehend20171127DeleteFlywheel: "Comprehend_20171127.DeleteFlywheel",
} as const;
export type XAmzTarget32 = (typeof XAmzTarget32)[keyof typeof XAmzTarget32] | (string & {});

export const xAmzTarget32Schema: EnumSchema<XAmzTarget32> = s.enumOf<XAmzTarget32>(XAmzTarget32);
