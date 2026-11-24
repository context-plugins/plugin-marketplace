import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget16 = {
  RekognitionServiceGetPersonTracking: "RekognitionService.GetPersonTracking",
} as const;
export type XAmzTarget16 = (typeof XAmzTarget16)[keyof typeof XAmzTarget16] | (string & {});

export const xAmzTarget16Schema: EnumSchema<XAmzTarget16> = s.enumOf<XAmzTarget16>(XAmzTarget16);
