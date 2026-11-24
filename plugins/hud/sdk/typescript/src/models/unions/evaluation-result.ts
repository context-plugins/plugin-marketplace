import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EvaluationResult = Record<string, unknown>;

export const evaluationResultSchema: Schema<EvaluationResult> = s.of<EvaluationResult>(
  s.union([s.record(s.string(), s.unknown())]),
);
