import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderBookData2Schema, type OrderBookData2 } from "./order-book-data2.js";
import { statusSchema, type Status } from "./status.js";

export type GetOrderDetailsResponse = {
  status?: Status;
  /** Response data for order details */
  data?: OrderBookData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getOrderDetailsResponseSchema: Schema<GetOrderDetailsResponse> =
  s.object<GetOrderDetailsResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => orderBookData2Schema)),
    },
    { additionalProperties: s.json() },
  );
