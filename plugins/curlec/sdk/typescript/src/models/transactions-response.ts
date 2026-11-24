import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity2RazorpayOrdersApiSchema,
  type Entity2RazorpayOrdersApi,
} from "./entity2-razorpay-orders-api.js";
import { xTransactionSchema, type XTransaction } from "./xtransaction.js";

export type TransactionsResponse = {
  entity?: Entity2RazorpayOrdersApi;
  count?: number;
  items?: XTransaction[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionsResponseSchema: Schema<TransactionsResponse> = s.object<TransactionsResponse>(
  {
    entity: s.optional(s.lazy(() => entity2RazorpayOrdersApiSchema)),
    count: s.optional(s.int()),
    items: s.optional(s.array(s.lazy(() => xTransactionSchema))),
  },
  { additionalProperties: s.json() },
);
