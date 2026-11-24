import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LineItemRazorpayInvoicesApi = {
  /** Reference a catalog item. Populates name, amount, currency automatically. */
  itemId?: string;
  name?: string;
  description?: string;
  /** Price in paise. */
  amount?: number;
  /** @default 1 */
  quantity?: number;
  /** @default "INR" */
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lineItemRazorpayInvoicesApiSchema: Schema<LineItemRazorpayInvoicesApi> =
  s.object<LineItemRazorpayInvoicesApi>(
    {
      itemId: s.optional(s.string()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      amount: s.optional(s.int()),
      quantity: s.defaulted(s.int(), 1),
      currency: s.defaulted(s.string(), "INR"),
      _keysMap: {
        itemId: "item_id",
      },
    },
    { additionalProperties: s.json() },
  );
