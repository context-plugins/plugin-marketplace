import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceCardAudience1Schema, type BalanceCardAudience1 } from "./balance-card-audience1.js";
import { balanceCardIssuer1Schema, type BalanceCardIssuer1 } from "./balance-card-issuer1.js";
import { balanceCardRegion1Schema, type BalanceCardRegion1 } from "./balance-card-region1.js";
import { balanceFeeType1Schema, type BalanceFeeType1 } from "./balance-fee-type1.js";
import {
  balancePrepaymentPartType1Schema,
  type BalancePrepaymentPartType1,
} from "./balance-prepayment-part-type1.js";
import { balanceTransactionType1Schema, type BalanceTransactionType1 } from "./balance-transaction-type1.js";
import { paymentMethod1Schema, type PaymentMethod1 } from "./payment-method1.js";

export type SubTotals = {
  /** Number of transactions of this type */
  count?: number;
  /** Payment type of the transactions */
  method?: PaymentMethod1 | null;
  /** In case of payments transactions with card, the card issuer will be available */
  cardIssuer?: BalanceCardIssuer1;
  /** In case of payments trnsactions with card, the card audience will be available. */
  cardAudience?: BalanceCardAudience1;
  /** In case of payments transactions with card, the card region will be available. */
  cardRegion?: BalanceCardRegion1;
  /** Present when the transaction represents a fee. */
  feeType?: BalanceFeeType1;
  /** Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation. */
  prepaymentPartType?: BalancePrepaymentPartType1;
  /** Represents the transaction type */
  transactionType?: BalanceTransactionType1;
};

export const subTotalsSchema: Schema<SubTotals> = s.object<SubTotals>({
  count: s.optional(s.int()),
  method: s.optionalNullable(s.lazy(() => paymentMethod1Schema)),
  cardIssuer: s.optional(s.lazy(() => balanceCardIssuer1Schema)),
  cardAudience: s.optional(s.lazy(() => balanceCardAudience1Schema)),
  cardRegion: s.optional(s.lazy(() => balanceCardRegion1Schema)),
  feeType: s.optional(s.lazy(() => balanceFeeType1Schema)),
  prepaymentPartType: s.optional(s.lazy(() => balancePrepaymentPartType1Schema)),
  transactionType: s.optional(s.lazy(() => balanceTransactionType1Schema)),
});
