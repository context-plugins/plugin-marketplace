import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget5 = {
  RekognitionServiceSearchFacesByImage: "RekognitionService.SearchFacesByImage",
} as const;
export type XAmzTarget5 = (typeof XAmzTarget5)[keyof typeof XAmzTarget5] | (string & {});

export const xAmzTarget5Schema: EnumSchema<XAmzTarget5> = s.enumOf<XAmzTarget5>(XAmzTarget5);
