import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SegmentType = {
  TechnicalCue: "TECHNICAL_CUE",
  Shot: "SHOT",
} as const;
export type SegmentType = (typeof SegmentType)[keyof typeof SegmentType] | (string & {});

export const segmentTypeSchema: EnumSchema<SegmentType> = s.enumOf<SegmentType>(SegmentType);
