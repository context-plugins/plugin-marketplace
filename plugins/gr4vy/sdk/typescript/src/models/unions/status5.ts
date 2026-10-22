import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payoutStatusSchema, type PayoutStatus } from "../payout-status.js";

/**
 * Filters the results to only the payouts that have a `status` that matches with any of the
 * provided status values.
 */
export type Status5 = PayoutStatus[];

export const status5Schema: Schema<Status5> = s.of<Status5>(
  s.union([s.array(s.lazy(() => payoutStatusSchema))]),
);
