import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget77 = {
  Comprehend20171127ListEntityRecognizerSummaries: "Comprehend_20171127.ListEntityRecognizerSummaries",
} as const;
export type XAmzTarget77 = (typeof XAmzTarget77)[keyof typeof XAmzTarget77] | (string & {});

export const xAmzTarget77Schema: EnumSchema<XAmzTarget77> = s.enumOf<XAmzTarget77>(XAmzTarget77);
