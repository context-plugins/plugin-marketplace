import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Fiscal year of the FILING, not the payment date. */
export type FiscalYear = number;

export const fiscalYearSchema: Schema<FiscalYear> = s.of<FiscalYear>(s.union([s.int()]));
