import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderBookDataSchema, type OrderBookData } from "./order-book-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetOrderBookResponse = {
  status?: Status;
  /** Response data for order Book */
  data?: OrderBookData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getOrderBookResponseSchema: Schema<GetOrderBookResponse> = s.object<GetOrderBookResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => orderBookDataSchema))),
  },
  { additionalProperties: s.json() },
);
