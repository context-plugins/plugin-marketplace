import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationFeeSchema, type ApplicationFee } from "./application-fee.js";
import {
  canceledOutgoingTransferSchema,
  type CanceledOutgoingTransfer,
} from "./canceled-outgoing-transfer.js";
import { captureCommisionSchema, type CaptureCommision } from "./capture-commision.js";
import {
  captureRollingReserveReleaseSchema,
  type CaptureRollingReserveRelease,
} from "./capture-rolling-reserve-release.js";
import { captureSchema, type Capture } from "./capture.js";
import { chargebackCompensationSchema, type ChargebackCompensation } from "./chargeback-compensation.js";
import { chargebackReversalSchema, type ChargebackReversal } from "./chargeback-reversal.js";
import { chargebackSchema, type Chargeback } from "./chargeback.js";
import { failedPaymentFeeSchema, type FailedPaymentFee } from "./failed-payment-fee.js";
import { failedPaymentSchema, type FailedPayment } from "./failed-payment.js";
import { invoiceCompensationSchema, type InvoiceCompensation } from "./invoice-compensation.js";
import { managedFeeSchema, type ManagedFee } from "./managed-fee.js";
import { outgoingTransferSchema, type OutgoingTransfer } from "./outgoing-transfer.js";
import { paymentCommissionSchema, type PaymentCommission } from "./payment-commission.js";
import { paymentFeeSchema, type PaymentFee } from "./payment-fee.js";
import { paymentSchema, type Payment } from "./payment.js";
import {
  platformPaymentChargebackSchema,
  type PlatformPaymentChargeback,
} from "./platform-payment-chargeback.js";
import { platformPaymentRefundSchema, type PlatformPaymentRefund } from "./platform-payment-refund.js";
import { postPaymentSplitPaymentSchema, type PostPaymentSplitPayment } from "./post-payment-split-payment.js";
import { refundCompensationSchema, type RefundCompensation } from "./refund-compensation.js";
import { refundSchema, type Refund } from "./refund.js";
import { reimbursementFeeSchema, type ReimbursementFee } from "./reimbursement-fee.js";
import { returnedManagedFeeSchema, type ReturnedManagedFee } from "./returned-managed-fee.js";
import {
  returnedPlatformPaymentRefundSchema,
  type ReturnedPlatformPaymentRefund,
} from "./returned-platform-payment-refund.js";
import {
  returnedRefundCompensationSchema,
  type ReturnedRefundCompensation,
} from "./returned-refund-compensation.js";
import { returnedRefundSchema, type ReturnedRefund } from "./returned-refund.js";
import { returnedTransferSchema, type ReturnedTransfer } from "./returned-transfer.js";
import {
  reversedChargebackCompensationSchema,
  type ReversedChargebackCompensation,
} from "./reversed-chargeback-compensation.js";
import {
  reversedPlatformPaymentChargebackSchema,
  type ReversedPlatformPaymentChargeback,
} from "./reversed-platform-payment-chargeback.js";
import { splitPaymentSchema, type SplitPayment } from "./split-payment.js";
import { unauthorizedDirectDebitSchema, type UnauthorizedDirectDebit } from "./unauthorized-direct-debit.js";

/**
 * Depending on the type of the balance transaction, we will try to give more context about the
 * specific event that triggered it. For example, the context object for a payment transaction will
 * look like `{"paymentId": "tr_5B8cwPMGnU6qLbRvo7qEZo", "paymentDescription": "Description"}`.
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
 * * Type `reversed-platform-payment-chargeback`: `paymentId` `chargebackId`, `paymentDescription`,
 *   `chargebackDescription`
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
export type Context = {
  payment?: Payment | null;
  capture?: Capture | null;
  captureCommision?: CaptureCommision | null;
  captureRollingReserveRelease?: CaptureRollingReserveRelease | null;
  unauthorizedDirectDebit?: UnauthorizedDirectDebit | null;
  failedPayment?: FailedPayment | null;
  refund?: Refund | null;
  refundCompensation?: RefundCompensation | null;
  returnedRefund?: ReturnedRefund | null;
  returnedRefundCompensation?: ReturnedRefundCompensation | null;
  chargeback?: Chargeback | null;
  chargebackReversal?: ChargebackReversal | null;
  chargebackCompensation?: ChargebackCompensation | null;
  reversedChargebackCompensation?: ReversedChargebackCompensation | null;
  outgoingTransfer?: OutgoingTransfer | null;
  canceledOutgoingTransfer?: CanceledOutgoingTransfer | null;
  returnedTransfer?: ReturnedTransfer | null;
  invoiceCompensation?: InvoiceCompensation | null;
  applicationFee?: ApplicationFee | null;
  splitPayment?: SplitPayment | null;
  platformPaymentRefund?: PlatformPaymentRefund | null;
  returnedPlatformPaymentRefund?: ReturnedPlatformPaymentRefund | null;
  platformPaymentChargeback?: PlatformPaymentChargeback | null;
  reversedPlatformPaymentChargeback?: ReversedPlatformPaymentChargeback | null;
  paymentCommission?: PaymentCommission | null;
  reimbursementFee?: ReimbursementFee | null;
  failedPaymentFee?: FailedPaymentFee | null;
  paymentFee?: PaymentFee | null;
  managedFee?: ManagedFee | null;
  returnedManagedFee?: ReturnedManagedFee | null;
  postPaymentSplitPayment?: PostPaymentSplitPayment | null;
};

export const contextSchema: Schema<Context> = s.object<Context>({
  payment: s.optionalNullable(s.lazy(() => paymentSchema)),
  capture: s.optionalNullable(s.lazy(() => captureSchema)),
  captureCommision: s.optionalNullable(s.lazy(() => captureCommisionSchema)),
  captureRollingReserveRelease: s.optionalNullable(s.lazy(() => captureRollingReserveReleaseSchema)),
  unauthorizedDirectDebit: s.optionalNullable(s.lazy(() => unauthorizedDirectDebitSchema)),
  failedPayment: s.optionalNullable(s.lazy(() => failedPaymentSchema)),
  refund: s.optionalNullable(s.lazy(() => refundSchema)),
  refundCompensation: s.optionalNullable(s.lazy(() => refundCompensationSchema)),
  returnedRefund: s.optionalNullable(s.lazy(() => returnedRefundSchema)),
  returnedRefundCompensation: s.optionalNullable(s.lazy(() => returnedRefundCompensationSchema)),
  chargeback: s.optionalNullable(s.lazy(() => chargebackSchema)),
  chargebackReversal: s.optionalNullable(s.lazy(() => chargebackReversalSchema)),
  chargebackCompensation: s.optionalNullable(s.lazy(() => chargebackCompensationSchema)),
  reversedChargebackCompensation: s.optionalNullable(s.lazy(() => reversedChargebackCompensationSchema)),
  outgoingTransfer: s.optionalNullable(s.lazy(() => outgoingTransferSchema)),
  canceledOutgoingTransfer: s.optionalNullable(s.lazy(() => canceledOutgoingTransferSchema)),
  returnedTransfer: s.optionalNullable(s.lazy(() => returnedTransferSchema)),
  invoiceCompensation: s.optionalNullable(s.lazy(() => invoiceCompensationSchema)),
  applicationFee: s.optionalNullable(s.lazy(() => applicationFeeSchema)),
  splitPayment: s.optionalNullable(s.lazy(() => splitPaymentSchema)),
  platformPaymentRefund: s.optionalNullable(s.lazy(() => platformPaymentRefundSchema)),
  returnedPlatformPaymentRefund: s.optionalNullable(s.lazy(() => returnedPlatformPaymentRefundSchema)),
  platformPaymentChargeback: s.optionalNullable(s.lazy(() => platformPaymentChargebackSchema)),
  reversedPlatformPaymentChargeback: s.optionalNullable(
    s.lazy(() => reversedPlatformPaymentChargebackSchema),
  ),
  paymentCommission: s.optionalNullable(s.lazy(() => paymentCommissionSchema)),
  reimbursementFee: s.optionalNullable(s.lazy(() => reimbursementFeeSchema)),
  failedPaymentFee: s.optionalNullable(s.lazy(() => failedPaymentFeeSchema)),
  paymentFee: s.optionalNullable(s.lazy(() => paymentFeeSchema)),
  managedFee: s.optionalNullable(s.lazy(() => managedFeeSchema)),
  returnedManagedFee: s.optionalNullable(s.lazy(() => returnedManagedFeeSchema)),
  postPaymentSplitPayment: s.optionalNullable(s.lazy(() => postPaymentSplitPaymentSchema)),
  _keysMap: {
    captureCommision: "capture-commision",
    captureRollingReserveRelease: "capture-rolling-reserve-release",
    unauthorizedDirectDebit: "unauthorized-direct-debit",
    failedPayment: "failed-payment",
    refundCompensation: "refund-compensation",
    returnedRefund: "returned-refund",
    returnedRefundCompensation: "returned-refund-compensation",
    chargebackReversal: "chargeback-reversal",
    chargebackCompensation: "chargeback-compensation",
    reversedChargebackCompensation: "reversed-chargeback-compensation",
    outgoingTransfer: "outgoing-transfer",
    canceledOutgoingTransfer: "canceled-outgoing-transfer",
    returnedTransfer: "returned-transfer",
    invoiceCompensation: "invoice-compensation",
    applicationFee: "application-fee",
    splitPayment: "split-payment",
    platformPaymentRefund: "platform-payment-refund",
    returnedPlatformPaymentRefund: "returned-platform-payment-refund",
    platformPaymentChargeback: "platform-payment-chargeback",
    reversedPlatformPaymentChargeback: "reversed-platform-payment-chargeback",
    paymentCommission: "payment-commission",
    reimbursementFee: "reimbursement-fee",
    failedPaymentFee: "failed-payment-fee",
    paymentFee: "payment-fee",
    managedFee: "managed-fee",
    returnedManagedFee: "returned-managed-fee",
    postPaymentSplitPayment: "post-payment-split-payment",
  },
});
