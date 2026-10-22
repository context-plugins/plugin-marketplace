import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentFee = {
  paymentId?: string;
  paymentDescription?: string;
};

export const paymentFeeSchema: Schema<PaymentFee> = s.object<PaymentFee>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
});
