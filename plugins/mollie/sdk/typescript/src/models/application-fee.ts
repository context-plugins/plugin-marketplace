import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplicationFee = {
  paymentId?: string;
  paymentDescription?: string;
  payingOwner?: string;
};

export const applicationFeeSchema: Schema<ApplicationFee> = s.object<ApplicationFee>({
  paymentId: s.optional(s.string()),
  paymentDescription: s.optional(s.string()),
  payingOwner: s.optional(s.string()),
});
