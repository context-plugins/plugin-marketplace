import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReturnedRefund = {
  paymentId?: string;
  paymentDescription?: string;
  refundId?: string;
  refundDescription?: string;
};

export const returnedRefundSchema: Schema<ReturnedRefund> = s.object<ReturnedRefund>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
  refundId: s.optional(s.string()),
  refundDescription: s.optional(s.string()),
});
