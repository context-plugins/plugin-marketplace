import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BudgetPence = number | string;

export const budgetPenceSchema: Schema<BudgetPence> = s.of<BudgetPence>(s.union([s.float64(), s.string()]));
