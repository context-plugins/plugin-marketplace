import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FailedPaymentFee = {
  paymentId?: string;
  paymentDescription?: string;
};

export const failedPaymentFeeSchema: Schema<FailedPaymentFee> = s.object<FailedPaymentFee>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
});
