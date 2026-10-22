import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SplitPayment = {
  paymentId?: string;
  paymentDescription?: string;
  paymentOnwer?: string;
};

export const splitPaymentSchema: Schema<SplitPayment> = s.object<SplitPayment>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
  paymentOnwer: s.optional(s.string()),
});
