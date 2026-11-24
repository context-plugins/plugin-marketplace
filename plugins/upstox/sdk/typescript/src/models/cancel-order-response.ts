import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cancelOrderData1Schema, type CancelOrderData1 } from "./cancel-order-data1.js";
import { statusSchema, type Status } from "./status.js";

export type CancelOrderResponse = {
  status?: Status;
  /** Response data for Cancel order request */
  data?: CancelOrderData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelOrderResponseSchema: Schema<CancelOrderResponse> = s.object<CancelOrderResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => cancelOrderData1Schema)),
  },
  { additionalProperties: s.json() },
);
