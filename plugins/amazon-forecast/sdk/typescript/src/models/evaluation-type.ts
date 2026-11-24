import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of evaluation. SUMMARY - The average metrics across all windows. COMPUTED - The metrics
 * for the specified window.
 */
export const EvaluationType = {
  Summary: "SUMMARY",
  Computed: "COMPUTED",
} as const;
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType] | (string & {});

export const evaluationTypeSchema: EnumSchema<EvaluationType> = s.enumOf<EvaluationType>(EvaluationType);
