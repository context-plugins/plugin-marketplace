import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Grants PAID versus grants approved — the reconciliation that catches people comparing a total
 * here to a funder's own published giving figure. Read it before filing a discrepancy.
 */
export type Basis = string;

export const basisSchema: Schema<Basis> = s.of<Basis>(s.union([s.string()]));
