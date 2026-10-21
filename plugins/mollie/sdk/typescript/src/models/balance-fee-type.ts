import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BalanceFeeType = {
  PaymentFee: "payment-fee",
  DirectDebitFailureFee: "direct-debit-failure-fee",
  UnauthorizedDirectDebitFee: "unauthorized-direct-debit-fee",
  BankChargedDirectDebitFailureFee: "bank-charged-direct-debit-failure-fee",
  PartnerCommission: "partner-commission",
  ApplicationFee: "application-fee",
  CaptureFee: "capture-fee",
  RefundFee: "refund-fee",
  ChargebackFee: "chargeback-fee",
  PaymentNotificationFee: "payment-notification-fee",
  TransferNotificationFee: "transfer-notification-fee",
  PayoutFee: "payout-fee",
  FeeDiscount: "fee-discount",
  FeeReimbursement: "fee-reimbursement",
  PlatformVolumeFee: "platform-volume-fee",
  PlatformConnectedOrganizationsFee: "platform-connected-organizations-fee",
  BalanceChargeFee: "balance-charge-fee",
  _3DsAuthenticationAttemptFee: "3ds-authentication-attempt-fee",
  TerminalMonthlyFee: "terminal-monthly-fee",
  AcceptanceRiskFee: "acceptance-risk-fee",
  TopUpFee: "top-up-fee",
  PaymentGatewayFee: "payment-gateway-fee",
  MastercardSpecialtyMerchantProgramProcessingFee: "mastercard-specialty-merchant-program-processing-fee",
  MastercardSpecialtyMerchantProgramRegistrationFee: "mastercard-specialty-merchant-program-registration-fee",
  VisaIntegrityRiskProgramProcessingFee: "visa-integrity-risk-program-processing-fee",
  VisaIntegrityRiskProgramRegistrationFee: "visa-integrity-risk-program-registration-fee",
  MinimumInvoiceAmountFee: "minimum-invoice-amount-fee",
} as const;
export type BalanceFeeType = (typeof BalanceFeeType)[keyof typeof BalanceFeeType] | (string & {});

export const balanceFeeTypeSchema: EnumSchema<BalanceFeeType> = s.enumOf<BalanceFeeType>(BalanceFeeType);
