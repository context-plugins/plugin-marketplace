import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Feature = {
  GoogleTagging: "google_tagging",
  ObjectDetection: "object_detection",
  AiVision: "ai_vision",
} as const;
export type Feature = (typeof Feature)[keyof typeof Feature] | (string & {});

export const featureSchema: EnumSchema<Feature> = s.enumOf<Feature>(Feature);
