import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderLineCreateSchema, type OrderLineCreate } from "./order-line-create.js";

export type OrdersLinesRequest = {
  lines?: OrderLineCreate[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ordersLinesRequestSchema: Schema<OrdersLinesRequest> = s.object<OrdersLinesRequest>(
  {
    lines: s.optional(s.array(s.lazy(() => orderLineCreateSchema))),
  },
  { additionalProperties: s.json() },
);
