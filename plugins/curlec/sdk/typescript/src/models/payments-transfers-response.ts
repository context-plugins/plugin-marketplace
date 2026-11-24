import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  transferRazorpayTransfersApiInternalSchema,
  transferRazorpayTransfersApiSchema,
  type TransferRazorpayTransfersApi,
} from "./transfer-razorpay-transfers-api.js";

export type PaymentsTransfersResponse = {
  entity?: string;
  count?: number;
  items?: TransferRazorpayTransfersApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsTransfersResponseProperties: s.Shape<PaymentsTransfersResponse> = {
  entity: s.optional(s.string()),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => transferRazorpayTransfersApiInternalSchema))),
};

export const paymentsTransfersResponseInternalSchema: Schema<PaymentsTransfersResponse> =
  s.object<PaymentsTransfersResponse>(paymentsTransfersResponseProperties, {
    additionalProperties: s.json(),
  });

export const paymentsTransfersResponseSchema: Schema<PaymentsTransfersResponse> = s.lazySchema(() =>
  s.object<PaymentsTransfersResponse>(
    {
      ...paymentsTransfersResponseProperties,
      items: s.optional(s.array(s.lazy(() => transferRazorpayTransfersApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
