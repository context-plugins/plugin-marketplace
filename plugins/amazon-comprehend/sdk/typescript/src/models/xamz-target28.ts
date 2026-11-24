import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget28 = {
  Comprehend20171127DeleteEntityRecognizer: "Comprehend_20171127.DeleteEntityRecognizer",
} as const;
export type XAmzTarget28 = (typeof XAmzTarget28)[keyof typeof XAmzTarget28] | (string & {});

export const xAmzTarget28Schema: EnumSchema<XAmzTarget28> = s.enumOf<XAmzTarget28>(XAmzTarget28);
