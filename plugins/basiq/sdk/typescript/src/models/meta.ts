import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { creditCardSchema, type CreditCard } from "./credit-card.js";
import { depositRateSchema, type DepositRate } from "./deposit-rate.js";
import { featureSchema, type Feature } from "./feature.js";
import { feeSchema, type Fee } from "./fee.js";
import { lendingRateSchema, type LendingRate } from "./lending-rate.js";
import { loanSchema, type Loan } from "./loan.js";
import { termDepositSchema, type TermDeposit } from "./term-deposit.js";

export type Meta = {
  fees?: Fee[] | null;
  depositRates?: DepositRate[] | null;
  lendingRates?: LendingRate[] | null;
  termDeposit?: TermDeposit[];
  loan?: Loan | null;
  creditCard?: CreditCard;
  /** Array of features available for the product. */
  features?: Feature[] | null;
  /** The addresses for the account to be used for correspondence. */
  addresses?: Address[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaSchema: Schema<Meta> = s.object<Meta>(
  {
    fees: s.optionalNullable(s.array(s.lazy(() => feeSchema))),
    depositRates: s.optionalNullable(s.array(s.lazy(() => depositRateSchema))),
    lendingRates: s.optionalNullable(s.array(s.lazy(() => lendingRateSchema))),
    termDeposit: s.optional(s.array(s.lazy(() => termDepositSchema))),
    loan: s.optionalNullable(s.lazy(() => loanSchema)),
    creditCard: s.optional(s.lazy(() => creditCardSchema)),
    features: s.optionalNullable(s.array(s.lazy(() => featureSchema))),
    addresses: s.optionalNullable(s.array(s.lazy(() => addressSchema))),
  },
  { additionalProperties: s.json() },
);
