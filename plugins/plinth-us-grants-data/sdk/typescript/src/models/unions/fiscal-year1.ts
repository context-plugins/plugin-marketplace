import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FiscalYear1 = number;

export const fiscalYear1Schema: Schema<FiscalYear1> = s.of<FiscalYear1>(s.union([s.int()]));
