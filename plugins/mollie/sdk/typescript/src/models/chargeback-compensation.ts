import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChargebackCompensation = {
  paymentId?: string;
  paymentDescription?: string;
  chargebackId?: string;
  chargebackDescription?: string;
};

export const chargebackCompensationSchema: Schema<ChargebackCompensation> = s.object<ChargebackCompensation>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
  chargebackId: s.optional(s.string()),
  chargebackDescription: s.optional(s.string()),
});
