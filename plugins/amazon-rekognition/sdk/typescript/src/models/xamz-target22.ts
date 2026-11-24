import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget22 = {
  RekognitionServiceListDatasetLabels: "RekognitionService.ListDatasetLabels",
} as const;
export type XAmzTarget22 = (typeof XAmzTarget22)[keyof typeof XAmzTarget22] | (string & {});

export const xAmzTarget22Schema: EnumSchema<XAmzTarget22> = s.enumOf<XAmzTarget22>(XAmzTarget22);
