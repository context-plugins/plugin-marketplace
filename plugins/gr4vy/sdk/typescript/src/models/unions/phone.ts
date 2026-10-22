import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  forterAntiFraudOptionsCartItemBeneficiaryPhoneSchema,
  type ForterAntiFraudOptionsCartItemBeneficiaryPhone,
} from "../forter-anti-fraud-options-cart-item-beneficiary-phone.js";

/** Phone numbers associated with the beneficiary. */
export type Phone = ForterAntiFraudOptionsCartItemBeneficiaryPhone[];

export const phoneSchema: Schema<Phone> = s.of<Phone>(
  s.union([s.array(s.lazy(() => forterAntiFraudOptionsCartItemBeneficiaryPhoneSchema))]),
);
