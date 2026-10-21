import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The specific event name. */
export const Name = {
  TransactionUpdatedStatus: "transaction-updated-status",
  TransactionSyncEvent: "transaction-sync-event",
  TransactionSyncFailedEvent: "transaction-sync-failed-event",
  NetworkTokenSkipped: "network-token-skipped",
  TransactionModifiedEvent: "transaction-modified-event",
  TransactionApiRequest: "transaction-api-request",
  TransactionApiResponse: "transaction-api-response",
  BinLookupRequest: "bin-lookup-request",
  ThreeDSecureSuccess: "three-d-secure-success",
  ThreeDSecureRequestError: "three-d-secure-request-error",
  ThreeDSecurePreparationRequest: "three-d-secure-preparation-request",
  ThreeDSecureAuthenticationRequest: "three-d-secure-authentication-request",
  ThreeDSecureResultRequest: "three-d-secure-result-request",
  AntiFraudDecision: "anti-fraud-decision",
  AntiFraudDecisionError: "anti-fraud-decision-error",
  AntiFraudDecisionSkipped: "anti-fraud-decision-skipped",
  AntiFraudWebhook: "anti-fraud-webhook",
  AntiFraudTransactionStatusUpdate: "anti-fraud-transaction-status-update",
  AntiFraudTransactionStatusUpdateError: "anti-fraud-transaction-status-update-error",
  AntiFraudDecisionUpdate: "anti-fraud-decision-update",
  AntiFraudDecisionUpdateError: "anti-fraud-decision-update-error",
  GiftCardRedemptionSucceeded: "gift-card-redemption-succeeded",
  GiftCardRedemptionFailed: "gift-card-redemption-failed",
  GiftCardRefundSucceeded: "gift-card-refund-succeeded",
  GiftCardRefundFailed: "gift-card-refund-failed",
  GiftCardReversalSucceeded: "gift-card-reversal-succeeded",
  ReauthorizationAttempted: "reauthorization-attempted",
  ReauthorizationCreated: "reauthorization-created",
  PaymentConnectorResponseTransactionAuthorizationSucceeded:
    "payment-connector-response-transaction-authorization-succeeded",
  PaymentConnectorResponseTransactionCaptureSucceeded:
    "payment-connector-response-transaction-capture-succeeded",
  PaymentConnectorResponseTransactionAuthorizationFailed:
    "payment-connector-response-transaction-authorization-failed",
  PaymentConnectorResponseTransactionDeclined: "payment-connector-response-transaction-declined",
  PaymentConnectorResponseTransactionCaptureFailed: "payment-connector-response-transaction-capture-failed",
  PaymentConnectorResponseTransactionCaptureDeclined:
    "payment-connector-response-transaction-capture-declined",
  PaymentConnectorResponseTransactionCancelSucceeded:
    "payment-connector-response-transaction-cancel-succeeded",
  PaymentConnectorResponseTransactionCancelPending: "payment-connector-response-transaction-cancel-pending",
  PaymentConnectorResponseTransactionCancelFailed: "payment-connector-response-transaction-cancel-failed",
  PaymentConnectorResponseTransactionVoidSucceeded: "payment-connector-response-transaction-void-succeeded",
  PaymentConnectorResponseTransactionAuthorizationIncrementSucceeded:
    "payment-connector-response-transaction-authorization-increment-succeeded",
  PaymentConnectorResponseTransactionAuthorizationIncrementFailed:
    "payment-connector-response-transaction-authorization-increment-failed",
  PaymentConnectorResponseTransactionVoidDeclined: "payment-connector-response-transaction-void-declined",
  PaymentConnectorResponseTransactionVoidFailed: "payment-connector-response-transaction-void-failed",
  PaymentConnectorResponseTransactionCaptureReversalSucceeded:
    "payment-connector-response-transaction-capture-reversal-succeeded",
  PaymentConnectorResponseTransactionCaptureReversalDeclined:
    "payment-connector-response-transaction-capture-reversal-declined",
  PaymentConnectorResponseTransactionCaptureReversalFailed:
    "payment-connector-response-transaction-capture-reversal-failed",
  PaymentConnectorResponseTransactionCaptureReversalDelayed:
    "payment-connector-response-transaction-capture-reversal-delayed",
  PaymentConnectorExternalTransactionRequest: "payment-connector-external-transaction-request",
  PaymentConnectorReportTransactionSettled: "payment-connector-report-transaction-settled",
  PaymentConnectorReportRefundSettled: "payment-connector-report-refund-settled",
  PaymentConnectorReportChargebackPosted: "payment-connector-report-chargeback-posted",
  PaymentConnectorReportChargebackReversalPosted: "payment-connector-report-chargeback-reversal-posted",
  PaymentConnectorTransactionWebhookProcessed: "payment-connector-transaction-webhook-processed",
  RefundIngested: "refund-ingested",
  DigitalWalletApplePayTokenDecrypted: "digital-wallet-apple-pay-token-decrypted",
  DigitalWalletGooglePayTokenDecrypted: "digital-wallet-google-pay-token-decrypted",
  DigitalWalletClickToPayTokenDecrypted: "digital-wallet-click-to-pay-token-decrypted",
  DigitalWalletPazeTokenDecrypted: "digital-wallet-paze-token-decrypted",
  NetworkTokenProvisionSucceeded: "network-token-provision-succeeded",
  NetworkTokenProvisionFailed: "network-token-provision-failed",
  NetworkTokenCryptogramProvisionSucceeded: "network-token-cryptogram-provision-succeeded",
  NetworkTokenCryptogramProvisionFailed: "network-token-cryptogram-provision-failed",
  TheGivingBlockTransactionConversionSucceeded: "the-giving-block-transaction-conversion-succeeded",
  RealTimeAccountUpdate: "real-time-account-update",
  PlaidRequestEvent: "plaid-request-event",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
