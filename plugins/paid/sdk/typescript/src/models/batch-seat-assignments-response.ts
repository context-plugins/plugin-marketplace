import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderSeatSchema, type OrderSeat } from "./order-seat.js";

export type BatchSeatAssignmentsResponse = {
  data: OrderSeat[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchSeatAssignmentsResponseSchema: Schema<BatchSeatAssignmentsResponse> =
  s.object<BatchSeatAssignmentsResponse>(
    {
      data: s.array(s.lazy(() => orderSeatSchema)),
    },
    { additionalProperties: s.json() },
  );
