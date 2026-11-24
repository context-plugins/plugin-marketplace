import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the generation request. */
export const GenerationStatus = {
  Failed: "Failed",
  Complete: "Complete",
  InProgress: "InProgress",
} as const;
export type GenerationStatus = (typeof GenerationStatus)[keyof typeof GenerationStatus] | (string & {});

export const generationStatusSchema: EnumSchema<GenerationStatus> =
  s.enumOf<GenerationStatus>(GenerationStatus);
