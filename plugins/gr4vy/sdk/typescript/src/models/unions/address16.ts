import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  forterAntiFraudOptionsCartItemBeneficiaryAddressSchema,
  type ForterAntiFraudOptionsCartItemBeneficiaryAddress,
} from "../forter-anti-fraud-options-cart-item-beneficiary-address.js";

/** Address information of the beneficiary. */
export type Address16 = ForterAntiFraudOptionsCartItemBeneficiaryAddress;

export const address16Schema: Schema<Address16> = s.of<Address16>(
  s.union([s.lazy(() => forterAntiFraudOptionsCartItemBeneficiaryAddressSchema)]),
);
