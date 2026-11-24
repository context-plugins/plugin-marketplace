import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { order1Schema, type Order1 } from "./order1.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type OrderListResponse = {
  data: Order1[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderListResponseSchema: Schema<OrderListResponse> = s.object<OrderListResponse>(
  {
    data: s.array(s.lazy(() => order1Schema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
