import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The amount remaining on the balance for this gift card according to the gift card service. This
 * may be `null` if the balance could not be fetched.
 */
export type Balance = number;

export const balanceSchema: Schema<Balance> = s.of<Balance>(s.union([s.int()]));
