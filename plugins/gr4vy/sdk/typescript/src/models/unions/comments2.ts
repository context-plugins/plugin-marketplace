import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  forterAntiFraudOptionsCartItemBeneficiaryCommentsSchema,
  type ForterAntiFraudOptionsCartItemBeneficiaryComments,
} from "../forter-anti-fraud-options-cart-item-beneficiary-comments.js";

/** Comments related to the beneficiary. */
export type Comments2 = ForterAntiFraudOptionsCartItemBeneficiaryComments;

export const comments2Schema: Schema<Comments2> = s.of<Comments2>(
  s.union([s.lazy(() => forterAntiFraudOptionsCartItemBeneficiaryCommentsSchema)]),
);
