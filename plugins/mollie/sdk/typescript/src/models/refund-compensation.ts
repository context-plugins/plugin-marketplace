import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RefundCompensation = {
  paymentId?: string;
  paymentDescription?: string;
  refundId?: string;
  refundDescription?: string;
};

export const refundCompensationSchema: Schema<RefundCompensation> = s.object<RefundCompensation>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
  refundId: s.optional(s.string()),
  refundDescription: s.optional(s.string()),
});
