import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentRazorpayVirtualAccountsApiInternalSchema,
  paymentRazorpayVirtualAccountsApiSchema,
  type PaymentRazorpayVirtualAccountsApi,
} from "./payment-razorpay-virtual-accounts-api.js";

export type VirtualAccountsPaymentsResponse = {
  entity?: string;
  count?: number;
  items?: PaymentRazorpayVirtualAccountsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const virtualAccountsPaymentsResponseProperties: s.Shape<VirtualAccountsPaymentsResponse> = {
  entity: s.optional(s.string()),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => paymentRazorpayVirtualAccountsApiInternalSchema))),
};

export const virtualAccountsPaymentsResponseInternalSchema: Schema<VirtualAccountsPaymentsResponse> =
  s.object<VirtualAccountsPaymentsResponse>(virtualAccountsPaymentsResponseProperties, {
    additionalProperties: s.json(),
  });

export const virtualAccountsPaymentsResponseSchema: Schema<VirtualAccountsPaymentsResponse> = s.lazySchema(
  () =>
    s.object<VirtualAccountsPaymentsResponse>(
      {
        ...virtualAccountsPaymentsResponseProperties,
        items: s.optional(s.array(s.lazy(() => paymentRazorpayVirtualAccountsApiSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
