import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderSchema, type Order } from "./order.js";

export type Sort = {
  /** Field to sort by (e.g. `score`). */
  by?: string;
  order?: Order;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sortSchema: Schema<Sort> = s.object<Sort>(
  {
    by: s.optional(s.string()),
    order: s.optional(s.lazy(() => orderSchema)),
  },
  { additionalProperties: s.json() },
);
