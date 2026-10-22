import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConfidenceFormula = {
  version: number;
  weights: Record<string, number>;
};

export const confidenceFormulaSchema: Schema<ConfidenceFormula> = s.object<ConfidenceFormula>({
  version: s.int(),
  weights: s.record(s.string(), s.float64()),
});
