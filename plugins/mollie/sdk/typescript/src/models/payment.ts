import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Payment = {
  paymentId?: string;
  paymentDescription?: string;
};

export const paymentSchema: Schema<Payment> = s.object<Payment>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
});
