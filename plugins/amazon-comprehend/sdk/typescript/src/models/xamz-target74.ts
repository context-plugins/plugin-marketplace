import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget74 = {
  Comprehend20171127StartTopicsDetectionJob: "Comprehend_20171127.StartTopicsDetectionJob",
} as const;
export type XAmzTarget74 = (typeof XAmzTarget74)[keyof typeof XAmzTarget74] | (string & {});

export const xAmzTarget74Schema: EnumSchema<XAmzTarget74> = s.enumOf<XAmzTarget74>(XAmzTarget74);
