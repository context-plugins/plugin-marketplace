import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullable1Schema, type AmountNullable1 } from "./amount-nullable1.js";
import { amount1Schema, type Amount1 } from "./amount1.js";
import { amount2Schema, type Amount2 } from "./amount2.js";
import { balanceTransactionType3Schema, type BalanceTransactionType3 } from "./balance-transaction-type3.js";
import { contextSchema, type Context } from "./context.js";
import { deductionDetailsSchema, type DeductionDetails } from "./deduction-details.js";

export type EntityBalanceTransaction = {
  /**
   * Indicates the response contains a balance transaction object. Will always contain the string
   * `balance-transaction` for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this balance transaction. */
  id: string;
  /**
   * The type of transaction, for example `payment` or `refund`. Values include the below examples,
   * although this list is not definitive.
   *
   * * Regular payment processing: `payment` `capture` `unauthorized-direct-debit` `failed-payment`
   * * Refunds and chargebacks: `refund` `returned-refund` `chargeback` `chargeback-reversal`
   * * Settlements: `outgoing-transfer` `canceled-outgoing-transfer` `returned-transfer`
   * * Invoicing: `invoice-compensation` `balance-correction`
   * * Mollie Connect: `application-fee` `split-payment` `platform-payment-refund`
   *   `platform-payment-chargeback`
   */
  type: BalanceTransactionType3;
  /**
   * The final amount that was moved to or from the balance. If the transaction moves funds away
   * from the balance, for example when it concerns a refund, the amount will be negative.
   */
  resultAmount: Amount1;
  /**
   * The amount that was to be moved to or from the balance, excluding deductions. If the
   * transaction moves funds away from the balance, for example when it concerns a refund, the
   * amount will be negative.
   */
  initialAmount: Amount2;
  /**
   * The total amount of deductions withheld from the movement. For example, if we charge a €0.29
   * fee on a €10 payment, the deductions amount will be `{"currency":"EUR", "value":"-0.29"}`.
   *
   * When moving funds to a balance, we always round the deduction to a 'real' amount. Any
   * differences between these real-time rounded amounts and the final invoice will be compensated
   * when the invoice is generated.
   */
  deductions?: AmountNullable1 | null;
  /**
   * A detailed breakdown of the deductions withheld from the movement. Each field represents a
   * specific type of deduction applied to the transaction. Only the applicable fields will be
   * present.
   */
  deductionDetails?: DeductionDetails | null;
  /**
   * Depending on the type of the balance transaction, we will try to give more context about the
   * specific event that triggered it. For example, the context object for a payment transaction
   * will look like `{"paymentId": "tr_5B8cwPMGnU6qLbRvo7qEZo", "paymentDescription":
   * "Description"}`.
   *
   * Below is a complete list of the context values that each type of transaction will have.
   *
   * * Type `payment`: `paymentId`, `paymentDescription`
   * * Type `capture`: `paymentId` `captureId`, `paymentDescription`, `captureDescription`
   * * Type `capture-commission`: `paymentId`, `paymentDescription`, `organizationId`
   * * Type `capture-rolling-reserve-release`: `paymentId`, `paymentDescription`, `captureId`,
   *   `captureDescription`
   * * Type `unauthorized-direct-debit`: `paymentId`, `paymentDescription`
   * * Type `failed-payment`: `paymentId`, `paymentDescription`
   * * Type `refund`: `paymentId` `refundId`, `paymentDescription`, `refundDescription`
   * * Type `refund-compensation`: `paymentId` `refundId`, `paymentDescription`, `refundDescription`
   * * Type `returned-refund`: `paymentId` `refundId`, `paymentDescription`, `refundDescription`
   * * Type `returned-refund-compensation`: `paymentId` `refundId`, `paymentDescription`,
   *   `refundDescription`
   * * Type `chargeback`: `paymentId` `chargebackId`, `paymentDescription`, `chargebackDescription`
   * * Type `chargeback-reversal`: `paymentId`, `chargebackId`, `paymentDescription`,
   *   `chargebackDescription`
   * * Type `chargeback-compensation`: `paymentId`, `chargebackId`, `paymentDescription`,
   *   `chargebackDescription`
   * * Type `reversed-chargeback-compensation`: `paymentId`, `chargebackId`, `paymentDescription`,
   *   `chargebackDescription`
   * * Type `outgoing-transfer`: `settlementId` `transferId`
   * * Type `canceled-outgoing-transfer`: `settlementId` `transferId`
   * * Type `returned-transfer`: `settlementId` `transferId`
   * * Type `invoice-compensation`: `invoiceId`
   * * Type `balance-correction`: none
   * * Type `application-fee`: `paymentId`, `paymentDescription`, `payingOwner`
   * * Type `split-payment`: `paymentId`, `paymentDescription`, `paymentOwner`
   * * Type `platform-payment-refund`: `paymentId` `refundId`, `paymentDescription`,
   *   `refundDescription`
   * * Type `returned-platform-payment-refund`: `paymentId` `refundId`, `paymentDescription`,
   *   `refundDescription`
   * * Type `platform-payment-chargeback`: `paymentId` `chargebackId`, `paymentDescription`,
   *   `chargebackDescription`
   * * Type `reversed-platform-payment-chargeback`: `paymentId` `chargebackId`,
   *   `paymentDescription`, `chargebackDescription`
   * * Type `payment-commission`: `paymentId`, `paymentDescription`, `organizationId`
   * * Type `reimbursement-fee`: `paymentId`, `paymentDescription`
   * * Type `failed-payment-fee`: `paymentId`, `paymentDescription`
   * * Type `payment-fee`: `paymentId`, `paymentDescription`
   * * Type `cash-advance-loan`: none
   * * Type `platform-connected-organizations-fee`: none
   * * Type `managed-fee`: `feeType`, `<name of the fee>Id`
   * * Type `returned-managed-fee`: `feeType`, `<name of the fee>Id`
   * * Type `topup`: none
   * * Type `balance-reserve`: none
   * * Type `balance-reserve-return`: none
   * * Type `movement`: none
   * * Type `post-payment-split-payment`: `paymentId`
   * * Type `cash-collateral-issuance`: none
   * * Type `cash-collateral-release`: none
   */
  context?: Context | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
};

export const entityBalanceTransactionSchema: Schema<EntityBalanceTransaction> =
  s.object<EntityBalanceTransaction>({
    resource: s.string(),
    id: s.string(),
    type: balanceTransactionType3Schema,
    resultAmount: amount1Schema,
    initialAmount: amount2Schema,
    deductions: s.optionalNullable(s.lazy(() => amountNullable1Schema)),
    deductionDetails: s.optionalNullable(s.lazy(() => deductionDetailsSchema)),
    context: s.optionalNullable(s.lazy(() => contextSchema)),
    createdAt: s.string(),
  });
