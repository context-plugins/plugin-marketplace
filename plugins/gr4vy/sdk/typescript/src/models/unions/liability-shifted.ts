import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions where liability was shifted (1) or was not
 * shifted (0).
 */
export type LiabilityShifted = string[];

export const liabilityShiftedSchema: Schema<LiabilityShifted> = s.of<LiabilityShifted>(
  s.union([s.array(s.string())]),
);
