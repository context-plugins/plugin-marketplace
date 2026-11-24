import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget19 = {
  Comprehend20171127DeleteDocumentClassifier: "Comprehend_20171127.DeleteDocumentClassifier",
} as const;
export type XAmzTarget19 = (typeof XAmzTarget19)[keyof typeof XAmzTarget19] | (string & {});

export const xAmzTarget19Schema: EnumSchema<XAmzTarget19> = s.enumOf<XAmzTarget19>(XAmzTarget19);
