import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderSeatSchema, type OrderSeat } from "./order-seat.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type OrderSeatListResponse = {
  data: OrderSeat[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderSeatListResponseSchema: Schema<OrderSeatListResponse> = s.object<OrderSeatListResponse>(
  {
    data: s.array(s.lazy(() => orderSeatSchema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
