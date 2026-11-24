import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget80 = {
  Comprehend20171127StopTrainingDocumentClassifier: "Comprehend_20171127.StopTrainingDocumentClassifier",
} as const;
export type XAmzTarget80 = (typeof XAmzTarget80)[keyof typeof XAmzTarget80] | (string & {});

export const xAmzTarget80Schema: EnumSchema<XAmzTarget80> = s.enumOf<XAmzTarget80>(XAmzTarget80);
