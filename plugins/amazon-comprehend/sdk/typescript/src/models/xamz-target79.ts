import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget79 = {
  Comprehend20171127ListTagsForResource: "Comprehend_20171127.ListTagsForResource",
} as const;
export type XAmzTarget79 = (typeof XAmzTarget79)[keyof typeof XAmzTarget79] | (string & {});

export const xAmzTarget79Schema: EnumSchema<XAmzTarget79> = s.enumOf<XAmzTarget79>(XAmzTarget79);
