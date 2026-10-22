import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const BalanceTransactionType3 = {
  ApiPaymentRollingReserveRelease: "api-payment-rolling-reserve-release",
  ApplicationFee: "application-fee",
  BalanceChargeFee: "balance-charge-fee",
  BalanceCorrection: "balance-correction",
  BalanceReserve: "balance-reserve",
  BalanceReserveReturn: "balance-reserve-return",
  BalanceTopup: "balance-topup",
  BankChargedFailureFee: "bank-charged-failure-fee",
  CanceledTransfer: "canceled-transfer",
  Capture: "capture",
  CashCollateralIssuance: "cash-collateral-issuance",
  CashCollateralRelease: "cash-collateral-release",
  Chargeback: "chargeback",
  ChargebackCompensation: "chargeback-compensation",
  ChargebackReversal: "chargeback-reversal",
  FailedPayment: "failed-payment",
  FailedPaymentFee: "failed-payment-fee",
  FailedPlatformSplitPayment: "failed-platform-split-payment",
  FailedSplitPaymentCompensation: "failed-split-payment-compensation",
  FeePrepayment: "fee-prepayment",
  HeldRollingReserve: "held-rolling-reserve",
  IncomingTransfer: "incoming-transfer",
  InvoiceCompensation: "invoice-compensation",
  InvoiceRoundingCompensation: "invoice-rounding-compensation",
  Loan: "loan",
  Movement: "movement",
  OutgoingCustomAmountTransfer: "outgoing-custom-amount-transfer",
  OutgoingTransfer: "outgoing-transfer",
  Payment: "payment",
  PaymentFee: "payment-fee",
  PendingRollingReserve: "pending-rolling-reserve",
  PlatformPaymentChargeback: "platform-payment-chargeback",
  PlatformPaymentRefund: "platform-payment-refund",
  PostPaymentSplitPayment: "post-payment-split-payment",
  Refund: "refund",
  RefundCompensation: "refund-compensation",
  ReleasedRollingReserve: "released-rolling-reserve",
  Repayment: "repayment",
  ReturnedPlatformPaymentRefund: "returned-platform-payment-refund",
  ReturnedRefund: "returned-refund",
  ReturnedRefundCompensation: "returned-refund-compensation",
  ReturnedTransfer: "returned-transfer",
  ReversedChargebackCompensation: "reversed-chargeback-compensation",
  ReversedPlatformPaymentChargeback: "reversed-platform-payment-chargeback",
  RollingReserveHold: "rolling-reserve-hold",
  RollingReserveRelease: "rolling-reserve-release",
  SplitPayment: "split-payment",
  SplitTransaction: "split-transaction",
  ToBeReleasedRollingReserve: "to-be-released-rolling-reserve",
  Topup: "topup",
} as const;
export type BalanceTransactionType3 =
  | (typeof BalanceTransactionType3)[keyof typeof BalanceTransactionType3]
  | (string & {});

export const balanceTransactionType3Schema: EnumSchema<BalanceTransactionType3> =
  s.enumOf<BalanceTransactionType3>(BalanceTransactionType3);
