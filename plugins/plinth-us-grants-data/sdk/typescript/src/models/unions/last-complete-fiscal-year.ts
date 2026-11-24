import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Newest fiscal year that has finished arriving — the span to quote. Null on a slice too thin to
 * measure, never guessed.
 */
export type LastCompleteFiscalYear = number;

export const lastCompleteFiscalYearSchema: Schema<LastCompleteFiscalYear> = s.of<LastCompleteFiscalYear>(
  s.union([s.int()]),
);
