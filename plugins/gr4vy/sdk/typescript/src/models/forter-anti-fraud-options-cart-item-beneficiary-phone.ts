import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ForterAntiFraudOptionsCartItemBeneficiaryPhone = {
  /** The phone number of the beneficiary. */
  phone: string;
};

export const forterAntiFraudOptionsCartItemBeneficiaryPhoneSchema: Schema<ForterAntiFraudOptionsCartItemBeneficiaryPhone> =
  s.object<ForterAntiFraudOptionsCartItemBeneficiaryPhone>({
    phone: s.string(),
  });
