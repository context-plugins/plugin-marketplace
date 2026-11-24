import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderDataSchema, type OrderData } from "./order-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetOrderResponse = {
  status?: Status;
  /** Response data for order details */
  data?: OrderData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getOrderResponseSchema: Schema<GetOrderResponse> = s.object<GetOrderResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => orderDataSchema))),
  },
  { additionalProperties: s.json() },
);
