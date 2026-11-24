import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discountSchema, type Discount } from "./discount.js";
import { feeTypeSchema, type FeeType } from "./fee-type.js";

export type Fee = {
  /** (mandatory) - Name of the fee. */
  name: string;
  /** (mandatory) - The type of fee. */
  feeType: FeeType;
  /** (conditional) - The amount charged for the fee. */
  amount?: string;
  /**
   * A fee rate calculated based on a proportion of the balance. One of amount, balanceRate,
   * transactionRate and accruedRate is mandatory unless the feeType "VARIABLE" is supplied.
   */
  balanceRate?: string;
  /**
   * A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate,
   * transactionRate and accruedRate is mandatory unless the feeType "VARIABLE" is supplied.
   */
  transactionRate?: string;
  /**
   * A fee rate calculated based on a proportion of the calculated interest accrued on the account.
   * One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the feeType
   * "VARIABLE" is supplied.
   */
  accruedRate?: string;
  /** (optional) - The indicative frequency with which the fee is calculated on the account. */
  accrualFrequency?: string;
  /** The currency the fee will be charged in. Assumes AUD if absent. */
  currency?: string;
  /** Display text providing more information on the fee. */
  additionalValue?: string;
  /** Display text providing more information on the fee. */
  additionalInfo?: string;
  /** Link to a web page with more information on this fee. */
  additionalInfoUri?: string;
  discounts?: Discount[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const feeSchema: Schema<Fee> = s.object<Fee>(
  {
    name: s.string(),
    feeType: feeTypeSchema,
    amount: s.optional(s.string()),
    balanceRate: s.optional(s.string()),
    transactionRate: s.optional(s.string()),
    accruedRate: s.optional(s.string()),
    accrualFrequency: s.optional(s.string()),
    currency: s.optional(s.string()),
    additionalValue: s.optional(s.string()),
    additionalInfo: s.optional(s.string()),
    additionalInfoUri: s.optional(s.string()),
    discounts: s.optionalNullable(s.array(s.lazy(() => discountSchema))),
  },
  { additionalProperties: s.json() },
);
