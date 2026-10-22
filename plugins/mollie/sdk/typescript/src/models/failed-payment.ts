import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FailedPayment = {
  paymentId?: string;
  paymentDescription?: string;
};

export const failedPaymentSchema: Schema<FailedPayment> = s.object<FailedPayment>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
});
