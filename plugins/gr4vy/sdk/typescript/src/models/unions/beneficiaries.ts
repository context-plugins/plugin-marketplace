import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  forterAntiFraudOptionsCartItemBeneficiarySchema,
  type ForterAntiFraudOptionsCartItemBeneficiary,
} from "../forter-anti-fraud-options-cart-item-beneficiary.js";

/** List of beneficiaries who will receive this item. */
export type Beneficiaries = ForterAntiFraudOptionsCartItemBeneficiary[];

export const beneficiariesSchema: Schema<Beneficiaries> = s.of<Beneficiaries>(
  s.union([s.array(s.lazy(() => forterAntiFraudOptionsCartItemBeneficiarySchema))]),
);
