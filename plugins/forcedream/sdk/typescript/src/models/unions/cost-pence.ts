import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Real-world value is numeric but may arrive as a JSON string; coerce with Number(x) semantics
 * before canonicalizing.
 */
export type CostPence = number | string;

export const costPenceSchema: Schema<CostPence> = s.of<CostPence>(s.union([s.float64(), s.string()]));
