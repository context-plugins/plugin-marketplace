import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargebackReversalSchema, type ChargebackReversal } from "./chargeback-reversal.js";

/** A list of chargeback reversal records for a transaction. */
export type ChargebackReversals = {
  /** The list of chargeback reversal objects. */
  items: ChargebackReversal[];
};

export const chargebackReversalsSchema: Schema<ChargebackReversals> = s.object<ChargebackReversals>({
  items: s.array(s.lazy(() => chargebackReversalSchema)),
});
