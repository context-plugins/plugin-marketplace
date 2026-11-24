import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderLine1Schema, type OrderLine1 } from "./order-line1.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type OrderLinesResponse = {
  data: OrderLine1[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderLinesResponseSchema: Schema<OrderLinesResponse> = s.object<OrderLinesResponse>(
  {
    data: s.array(s.lazy(() => orderLine1Schema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
