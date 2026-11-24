import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity2RazorpayOrdersApiSchema,
  type Entity2RazorpayOrdersApi,
} from "./entity2-razorpay-orders-api.js";
import { qrCodeInternalSchema, qrCodeSchema, type QrCode } from "./qr-code.js";

export type PaymentsQrCodesResponse = {
  entity?: Entity2RazorpayOrdersApi;
  /** Number of items in the current page. */
  count?: number;
  items?: QrCode[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsQrCodesResponseProperties: s.Shape<PaymentsQrCodesResponse> = {
  entity: s.optional(s.lazy(() => entity2RazorpayOrdersApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => qrCodeInternalSchema))),
};

export const paymentsQrCodesResponseInternalSchema: Schema<PaymentsQrCodesResponse> =
  s.object<PaymentsQrCodesResponse>(paymentsQrCodesResponseProperties, { additionalProperties: s.json() });

export const paymentsQrCodesResponseSchema: Schema<PaymentsQrCodesResponse> = s.lazySchema(() =>
  s.object<PaymentsQrCodesResponse>(
    {
      ...paymentsQrCodesResponseProperties,
      items: s.optional(s.array(s.lazy(() => qrCodeSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
