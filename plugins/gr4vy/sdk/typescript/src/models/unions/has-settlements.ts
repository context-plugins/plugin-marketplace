import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have at least one associated settlement record. When filtering on
 * `false`, combine it with `created_at_gte` and `created_at_lte` for best performance.
 */
export type HasSettlements = boolean;

export const hasSettlementsSchema: Schema<HasSettlements> = s.of<HasSettlements>(s.union([s.boolean()]));
