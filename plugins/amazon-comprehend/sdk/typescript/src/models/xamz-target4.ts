import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4 = {
  Comprehend20171127BatchDetectSyntax: "Comprehend_20171127.BatchDetectSyntax",
} as const;
export type XAmzTarget4 = (typeof XAmzTarget4)[keyof typeof XAmzTarget4] | (string & {});

export const xAmzTarget4Schema: EnumSchema<XAmzTarget4> = s.enumOf<XAmzTarget4>(XAmzTarget4);
