import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChargebackReversal = {
  paymentId?: string;
  paymentDescription?: string;
  chargebackId?: string;
  chargebackDescription?: string;
};

export const chargebackReversalSchema: Schema<ChargebackReversal> = s.object<ChargebackReversal>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
  chargebackId: s.optional(s.string()),
  chargebackDescription: s.optional(s.string()),
});
