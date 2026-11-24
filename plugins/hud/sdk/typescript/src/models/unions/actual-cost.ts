import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ActualCost = number;

export const actualCostSchema: Schema<ActualCost> = s.of<ActualCost>(s.union([s.float64()]));
