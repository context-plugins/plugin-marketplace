import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget7 = {
  RekognitionServiceDetectText: "RekognitionService.DetectText",
} as const;
export type XAmzTarget7 = (typeof XAmzTarget7)[keyof typeof XAmzTarget7] | (string & {});

export const xAmzTarget7Schema: EnumSchema<XAmzTarget7> = s.enumOf<XAmzTarget7>(XAmzTarget7);
