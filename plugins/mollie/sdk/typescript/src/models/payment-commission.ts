import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentCommission = {
  paymentId?: string;
  paymentDescription?: string;
  organizationId?: string;
};

export const paymentCommissionSchema: Schema<PaymentCommission> = s.object<PaymentCommission>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
  organizationId: s.optional(s.string()),
});
