import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentHistoryDataSchema, type PaymentHistoryData } from "./payment-history-data.js";
import { statusSchema, type Status } from "./status.js";

export type PaymentHistoryResponse = {
  status?: Status;
  /** List of payment history records */
  data?: PaymentHistoryData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentHistoryResponseSchema: Schema<PaymentHistoryResponse> = s.object<PaymentHistoryResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => paymentHistoryDataSchema))),
  },
  { additionalProperties: s.json() },
);
