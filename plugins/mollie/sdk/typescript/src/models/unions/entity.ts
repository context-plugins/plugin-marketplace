import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entityCaptureResponseSchema, type EntityCaptureResponse } from "../entity-capture-response.js";
import { entityChargebackSchema, type EntityChargeback } from "../entity-chargeback.js";
import {
  entityDraftTransferResponseSchema,
  type EntityDraftTransferResponse,
} from "../entity-draft-transfer-response.js";
import { entityPaymentLinkSchema, type EntityPaymentLink } from "../entity-payment-link.js";
import { entityPayoutResponseSchema, type EntityPayoutResponse } from "../entity-payout-response.js";
import { entityRefundResponseSchema, type EntityRefundResponse } from "../entity-refund-response.js";
import { entityTransferResponseSchema, type EntityTransferResponse } from "../entity-transfer-response.js";
import { paymentResponseSchema, type PaymentResponse } from "../payment-response.js";
import { salesInvoiceResponseSchema, type SalesInvoiceResponse } from "../sales-invoice-response.js";

export type Entity =
  | PaymentResponse
  | EntityRefundResponse
  | EntityChargeback
  | EntityCaptureResponse
  | EntityPaymentLink
  | EntityPayoutResponse
  | SalesInvoiceResponse
  | EntityTransferResponse
  | EntityDraftTransferResponse;

export const entitySchema: Schema<Entity> = s.of<Entity>(
  s.union([
    s.lazy(() => paymentResponseSchema),
    s.lazy(() => entityRefundResponseSchema),
    s.lazy(() => entityChargebackSchema),
    s.lazy(() => entityCaptureResponseSchema),
    s.lazy(() => entityPaymentLinkSchema),
    s.lazy(() => entityPayoutResponseSchema),
    s.lazy(() => salesInvoiceResponseSchema),
    s.lazy(() => entityTransferResponseSchema),
    s.lazy(() => entityDraftTransferResponseSchema),
  ]),
);
