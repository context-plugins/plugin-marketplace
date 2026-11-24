import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type OrderItem = {
  /** The Instacart product identifier. */
  productId?: string;
  /** The Universal Product Code of the item. */
  upc?: string;
  /** The name of the product. */
  name?: string;
  /** The ordered quantity. */
  quantity?: number;
  /** The current status of the item in the order. */
  status?: Status1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderItemSchema: Schema<OrderItem> = s.object<OrderItem>(
  {
    productId: s.optional(s.string()),
    upc: s.optional(s.string()),
    name: s.optional(s.string()),
    quantity: s.optional(s.int()),
    status: s.optional(s.lazy(() => status1Schema)),
    _keysMap: {
      productId: "product_id",
    },
  },
  { additionalProperties: s.json() },
);
