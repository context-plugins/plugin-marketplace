import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the stabilization level used for your transcription. */
export const PartialResultsStability = {
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type PartialResultsStability =
  | (typeof PartialResultsStability)[keyof typeof PartialResultsStability]
  | (string & {});

export const partialResultsStabilitySchema: EnumSchema<PartialResultsStability> =
  s.enumOf<PartialResultsStability>(PartialResultsStability);
