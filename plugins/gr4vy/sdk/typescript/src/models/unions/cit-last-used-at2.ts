import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The timestamp when this payment method was last used in a transaction for client initiated
 * transactions.
 */
export type CitLastUsedAt2 = Date;

export const citLastUsedAt2Schema: Schema<CitLastUsedAt2> = s.of<CitLastUsedAt2>(s.union([s.dateTime()]));
