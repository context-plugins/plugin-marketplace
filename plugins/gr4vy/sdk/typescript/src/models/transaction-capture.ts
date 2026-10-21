import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { captureStatus2Schema, type CaptureStatus2 } from "./capture-status2.js";
import { transaction3Schema, type Transaction3 } from "./transaction3.js";
import { Type75, type75Schema } from "./type75.js";
import { billingDetails15Schema, type BillingDetails15 } from "./unions/billing-details15.js";
import { captureIdSchema, type CaptureId } from "./unions/capture-id.js";
import { code2Schema, type Code2 } from "./unions/code2.js";
import { externalIdentifier33Schema, type ExternalIdentifier33 } from "./unions/external-identifier33.js";
import {
  paymentServiceCaptureIdSchema,
  type PaymentServiceCaptureId,
} from "./unions/payment-service-capture-id.js";
import { rawResponseCodeSchema, type RawResponseCode } from "./unions/raw-response-code.js";
import {
  rawResponseDescriptionSchema,
  type RawResponseDescription,
} from "./unions/raw-response-description.js";
import { shippingDetails12Schema, type ShippingDetails12 } from "./unions/shipping-details12.js";
import { tracking1Schema, type Tracking1 } from "./unions/tracking1.js";

export type TransactionCapture = {
  /** Always `transaction-capture`. @default Type75.TransactionCapture */
  type?: Type75;
  /** The status of the capture call. */
  status: CaptureStatus2;
  /** The standardized error code set by Gr4vy. */
  code: Code2;
  /**
   * This is the response code received from the payment service. This can be set to any value and
   * is not standardized across different payment services.
   */
  rawResponseCode: RawResponseCode;
  /**
   * This is the response description received from the payment service. This can be set to any
   * value and is not standardized across different payment services.
   */
  rawResponseDescription: RawResponseDescription;
  /** The transaction associated to this capture. */
  transaction: Transaction3;
  /** The ID of the capture resource created for this capture. */
  captureId?: CaptureId;
  /** The payment service's unique ID for the capture. */
  paymentServiceCaptureId?: PaymentServiceCaptureId;
  /** The external identifier for the capture. */
  externalIdentifier?: ExternalIdentifier33;
  /** The billing details associated with the capture. */
  billingDetails?: BillingDetails15;
  /** The shipping details associated with the catpure. */
  shippingDetails?: ShippingDetails12;
  /** The shipment tracking details associated with the capture. */
  tracking?: Tracking1;
};

export const transactionCaptureSchema: Schema<TransactionCapture> = s.object<TransactionCapture>({
  type: s.defaulted(type75Schema, Type75.TransactionCapture),
  status: captureStatus2Schema,
  code: code2Schema,
  rawResponseCode: rawResponseCodeSchema,
  rawResponseDescription: rawResponseDescriptionSchema,
  transaction: transaction3Schema,
  captureId: s.optional(s.lazy(() => captureIdSchema)),
  paymentServiceCaptureId: s.optional(s.lazy(() => paymentServiceCaptureIdSchema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier33Schema)),
  billingDetails: s.optional(s.lazy(() => billingDetails15Schema)),
  shippingDetails: s.optional(s.lazy(() => shippingDetails12Schema)),
  tracking: s.optional(s.lazy(() => tracking1Schema)),
  _keysMap: {
    rawResponseCode: "raw_response_code",
    rawResponseDescription: "raw_response_description",
    captureId: "capture_id",
    paymentServiceCaptureId: "payment_service_capture_id",
    externalIdentifier: "external_identifier",
    billingDetails: "billing_details",
    shippingDetails: "shipping_details",
  },
});
