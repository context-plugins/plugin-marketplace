import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Invoice line item. */
export type ListItem = {
  currency?: string;
  description?: string;
  details?: string;
  price?: number;
  qty?: number;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listItemSchema: Schema<ListItem> = s.object<ListItem>(
  {
    currency: s.optional(s.string()),
    description: s.optional(s.string()),
    details: s.optional(s.string()),
    price: s.optional(s.float64()),
    qty: s.optional(s.float64()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
