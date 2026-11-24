import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The classification of the discovered API operation. */
export const Classification = {
  ClassificationUnspecified: "CLASSIFICATION_UNSPECIFIED",
  Known: "KNOWN",
  Unknown: "UNKNOWN",
} as const;
export type Classification = (typeof Classification)[keyof typeof Classification] | (string & {});

export const classificationSchema: EnumSchema<Classification> = s.enumOf<Classification>(Classification);
