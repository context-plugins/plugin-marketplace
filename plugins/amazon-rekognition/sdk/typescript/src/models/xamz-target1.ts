import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1 = {
  RekognitionServiceStartCelebrityRecognition: "RekognitionService.StartCelebrityRecognition",
} as const;
export type XAmzTarget1 = (typeof XAmzTarget1)[keyof typeof XAmzTarget1] | (string & {});

export const xAmzTarget1Schema: EnumSchema<XAmzTarget1> = s.enumOf<XAmzTarget1>(XAmzTarget1);
