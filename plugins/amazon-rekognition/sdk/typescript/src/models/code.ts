import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A code identifying the condition that was detected during the Face Liveness session. */
export const Code = {
  FaceNotVisible: "FACE_NOT_VISIBLE",
  FaceObstructionDetected: "FACE_OBSTRUCTION_DETECTED",
  LowVideoQualityDetected: "LOW_VIDEO_QUALITY_DETECTED",
  FaceNotAligned: "FACE_NOT_ALIGNED",
  EyesClosedDetected: "EYES_CLOSED_DETECTED",
  LowLightingDetected: "LOW_LIGHTING_DETECTED",
  HighLightingDetected: "HIGH_LIGHTING_DETECTED",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
