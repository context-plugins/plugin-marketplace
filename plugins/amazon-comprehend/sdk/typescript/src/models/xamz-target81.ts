import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget81 = {
  Comprehend20171127StopTrainingEntityRecognizer: "Comprehend_20171127.StopTrainingEntityRecognizer",
} as const;
export type XAmzTarget81 = (typeof XAmzTarget81)[keyof typeof XAmzTarget81] | (string & {});

export const xAmzTarget81Schema: EnumSchema<XAmzTarget81> = s.enumOf<XAmzTarget81>(XAmzTarget81);
