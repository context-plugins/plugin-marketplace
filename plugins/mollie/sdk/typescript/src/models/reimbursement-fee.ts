import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReimbursementFee = {
  paymentId?: string;
  paymentDescription?: string;
};

export const reimbursementFeeSchema: Schema<ReimbursementFee> = s.object<ReimbursementFee>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
});
