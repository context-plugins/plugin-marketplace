import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformPaymentChargeback = {
  paymentId?: string;
  paymentDescription?: string;
  chargebackId?: string;
  chargebackDescription?: string;
};

export const platformPaymentChargebackSchema: Schema<PlatformPaymentChargeback> =
  s.object<PlatformPaymentChargeback>({
    paymentId: s.optional(s.string()),
    paymentDescription: s.optional(s.string()),
    chargebackId: s.optional(s.string()),
    chargebackDescription: s.optional(s.string()),
  });
