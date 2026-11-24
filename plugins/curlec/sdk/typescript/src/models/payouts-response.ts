import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity2RazorpayOrdersApiSchema,
  type Entity2RazorpayOrdersApi,
} from "./entity2-razorpay-orders-api.js";
import { payoutInternalSchema, payoutSchema, type Payout } from "./payout.js";

export type PayoutsResponse = {
  entity?: Entity2RazorpayOrdersApi;
  count?: number;
  items?: Payout[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payoutsResponseProperties: s.Shape<PayoutsResponse> = {
  entity: s.optional(s.lazy(() => entity2RazorpayOrdersApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => payoutInternalSchema))),
};

export const payoutsResponseInternalSchema: Schema<PayoutsResponse> = s.object<PayoutsResponse>(
  payoutsResponseProperties,
  { additionalProperties: s.json() },
);

export const payoutsResponseSchema: Schema<PayoutsResponse> = s.lazySchema(() =>
  s.object<PayoutsResponse>(
    {
      ...payoutsResponseProperties,
      items: s.optional(s.array(s.lazy(() => payoutSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
