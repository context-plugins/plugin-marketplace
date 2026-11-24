import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { placeOrderData1Schema, type PlaceOrderData1 } from "./place-order-data1.js";
import { statusSchema, type Status } from "./status.js";

export type PlaceOrderResponse = {
  status?: Status;
  /** Response data for place order request */
  data?: PlaceOrderData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const placeOrderResponseSchema: Schema<PlaceOrderResponse> = s.object<PlaceOrderResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => placeOrderData1Schema)),
  },
  { additionalProperties: s.json() },
);
