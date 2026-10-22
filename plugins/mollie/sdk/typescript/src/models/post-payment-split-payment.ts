import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostPaymentSplitPayment = {
  paymentId?: string;
};

export const postPaymentSplitPaymentSchema: Schema<PostPaymentSplitPayment> =
  s.object<PostPaymentSplitPayment>({
    paymentId: s.optional(s.string()),
  });
