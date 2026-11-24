import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CostUsd = number;

export const costUsdSchema: Schema<CostUsd> = s.of<CostUsd>(s.union([s.float64()]));
