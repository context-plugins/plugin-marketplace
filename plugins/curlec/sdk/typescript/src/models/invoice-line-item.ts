import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type InvoiceLineItem = {
  /** Line item ID. Prefix: li_ */
  id?: string;
  /** Referenced catalog item ID (item_*). Null for ad-hoc line items. */
  itemId?: string;
  name?: string;
  description?: string;
  /** Total line amount in paise (unit_amount × quantity). */
  amount?: number;
  /** Per-unit price in paise. */
  unitAmount?: number;
  /** @default 1 */
  quantity?: number;
  /** @default "INR" */
  currency?: string;
  type?: Type1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceLineItemSchema: Schema<InvoiceLineItem> = s.object<InvoiceLineItem>(
  {
    id: s.optional(s.string()),
    itemId: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    amount: s.optional(s.int()),
    unitAmount: s.optional(s.int()),
    quantity: s.defaulted(s.int(), 1),
    currency: s.defaulted(s.string(), "INR"),
    type: s.optional(s.lazy(() => type1Schema)),
    _keysMap: {
      itemId: "item_id",
      unitAmount: "unit_amount",
    },
  },
  { additionalProperties: s.json() },
);
