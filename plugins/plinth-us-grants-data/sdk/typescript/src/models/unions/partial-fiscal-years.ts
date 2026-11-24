import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Fiscal years still filling. Measured the same way /data-quality measures it: a trailing year
 * holding less than 90% of the year before it has not finished arriving. The newest year is always
 * here.
 */
export type PartialFiscalYears = number[];

export const partialFiscalYearsSchema: Schema<PartialFiscalYears> = s.of<PartialFiscalYears>(
  s.union([s.array(s.int())]),
);
