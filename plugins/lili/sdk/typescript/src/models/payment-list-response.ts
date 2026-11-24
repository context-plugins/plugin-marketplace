import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentListItemResponseSchema, type PaymentListItemResponse } from "./payment-list-item-response.js";

export type PaymentListResponse = {
  paymentItemResponseList?: PaymentListItemResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentListResponseSchema: Schema<PaymentListResponse> = s.object<PaymentListResponse>(
  {
    paymentItemResponseList: s.optional(s.array(s.lazy(() => paymentListItemResponseSchema))),
  },
  { additionalProperties: s.json() },
);
