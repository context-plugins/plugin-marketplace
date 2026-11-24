import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";
import {
  refundRazorpayRefundsApiInternalSchema,
  refundRazorpayRefundsApiSchema,
  type RefundRazorpayRefundsApi,
} from "./refund-razorpay-refunds-api.js";

export type RefundsResponse = {
  entity?: Entity1RazorpayDisputesApi;
  /** Number of items in the current page. */
  count?: number;
  items?: RefundRazorpayRefundsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const refundsResponseProperties: s.Shape<RefundsResponse> = {
  entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => refundRazorpayRefundsApiInternalSchema))),
};

export const refundsResponseInternalSchema: Schema<RefundsResponse> = s.object<RefundsResponse>(
  refundsResponseProperties,
  { additionalProperties: s.json() },
);

export const refundsResponseSchema: Schema<RefundsResponse> = s.lazySchema(() =>
  s.object<RefundsResponse>(
    {
      ...refundsResponseProperties,
      items: s.optional(s.array(s.lazy(() => refundRazorpayRefundsApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
