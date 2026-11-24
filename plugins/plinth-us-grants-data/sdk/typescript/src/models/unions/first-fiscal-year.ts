import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FirstFiscalYear = number;

export const firstFiscalYearSchema: Schema<FirstFiscalYear> = s.of<FirstFiscalYear>(s.union([s.int()]));
