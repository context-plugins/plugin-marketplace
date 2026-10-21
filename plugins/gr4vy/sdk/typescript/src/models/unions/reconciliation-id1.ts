import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions where the `reconciliation_id` matches the provided value. */
export type ReconciliationId1 = string;

export const reconciliationId1Schema: Schema<ReconciliationId1> = s.of<ReconciliationId1>(
  s.union([s.string()]),
);
