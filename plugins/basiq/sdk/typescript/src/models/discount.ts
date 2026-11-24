import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eligibilitySchema, type Eligibility } from "./eligibility.js";

export type Discount = {
  /** Description of the discount. */
  description: string;
  /**
   * The type of discount. See the next section for an overview of valid values and their meaning.
   */
  discountType: string;
  /**
   * Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and
   * feeRate is mandatory.
   */
  amount?: string;
  /**
   * A discount rate calculated based on a proportion of the balance. Note that the currency of the
   * fee discount is expected to be the same as the currency of the fee itself. One of amount,
   * balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in
   * additionalInfo, assumes the application and calculation frequency are the same as the
   * corresponding fee.
   */
  balanceRate?: string;
  /**
   * A discount rate calculated based on a proportion of a transaction. Note that the currency of
   * the fee discount is expected to be the same as the currency of the fee itself. One of amount,
   * balanceRate, transactionRate, accruedRate and feeRate is mandatory.
   */
  transactionRate?: string;
  /**
   * A discount rate calculated based on a proportion of the calculated interest accrued on the
   * account. Note that the currency of the fee discount is expected to be the same as the currency
   * of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is
   * mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency
   * are the same as the corresponding fee.
   */
  accruedRate?: string;
  /**
   * A discount rate calculated based on a proportion of the fee to which this discount is attached.
   * Note that the currency of the fee discount is expected to be the same as the currency of the
   * fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
   * Unless noted in additionalInfo, assumes the application and calculation frequency are the same
   * as the corresponding fee.
   */
  feeRate?: string;
  /**
   * Generic field containing additional information relevant to the discountType specified. Whether
   * mandatory or not is dependent on the value of discountType.
   */
  additionalValue?: string;
  /** Display text providing more information on the discount. */
  additionalInfo?: string;
  /** Link to a web page with more information on this discount. */
  additionalInfoUri?: string;
  /**
   * Eligibility constraints that apply to this discount. Mandatory if discountType is
   * ELIGIBILITY_ONLY.
   */
  eligibility?: Eligibility[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discountSchema: Schema<Discount> = s.object<Discount>(
  {
    description: s.string(),
    discountType: s.string(),
    amount: s.optional(s.string()),
    balanceRate: s.optional(s.string()),
    transactionRate: s.optional(s.string()),
    accruedRate: s.optional(s.string()),
    feeRate: s.optional(s.string()),
    additionalValue: s.optional(s.string()),
    additionalInfo: s.optional(s.string()),
    additionalInfoUri: s.optional(s.string()),
    eligibility: s.optional(s.array(s.lazy(() => eligibilitySchema))),
  },
  { additionalProperties: s.json() },
);
