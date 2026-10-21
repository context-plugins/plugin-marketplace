import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Represents the transaction type */
export const BalanceTransactionType1 = {
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
export type BalanceTransactionType1 =
  | (typeof BalanceTransactionType1)[keyof typeof BalanceTransactionType1]
  | (string & {});

export const balanceTransactionType1Schema: EnumSchema<BalanceTransactionType1> =
  s.enumOf<BalanceTransactionType1>(BalanceTransactionType1);
