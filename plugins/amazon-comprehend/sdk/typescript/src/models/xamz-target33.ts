import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget33 = {
  Comprehend20171127DescribeFlywheel: "Comprehend_20171127.DescribeFlywheel",
} as const;
export type XAmzTarget33 = (typeof XAmzTarget33)[keyof typeof XAmzTarget33] | (string & {});

export const xAmzTarget33Schema: EnumSchema<XAmzTarget33> = s.enumOf<XAmzTarget33>(XAmzTarget33);
