import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  forterAntiFraudOptionsCartItemBeneficiaryPersonalDetails2Schema,
  type ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails2,
} from "./forter-anti-fraud-options-cart-item-beneficiary-personal-details2.js";
import { address16Schema, type Address16 } from "./unions/address16.js";
import { comments2Schema, type Comments2 } from "./unions/comments2.js";
import { phoneSchema, type Phone } from "./unions/phone.js";

export type ForterAntiFraudOptionsCartItemBeneficiary = {
  /** Personal details of the beneficiary. */
  personalDetails: ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails2;
  /** Address information of the beneficiary. */
  address?: Address16;
  /** Phone numbers associated with the beneficiary. */
  phone?: Phone;
  /** Comments related to the beneficiary. */
  comments?: Comments2;
};

export const forterAntiFraudOptionsCartItemBeneficiarySchema: Schema<ForterAntiFraudOptionsCartItemBeneficiary> =
  s.object<ForterAntiFraudOptionsCartItemBeneficiary>({
    personalDetails: forterAntiFraudOptionsCartItemBeneficiaryPersonalDetails2Schema,
    address: s.optional(s.lazy(() => address16Schema)),
    phone: s.optional(s.lazy(() => phoneSchema)),
    comments: s.optional(s.lazy(() => comments2Schema)),
    _keysMap: {
      personalDetails: "personal_details",
    },
  });
