import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TotalCostUsd = number;

export const totalCostUsdSchema: Schema<TotalCostUsd> = s.of<TotalCostUsd>(s.union([s.float64()]));
