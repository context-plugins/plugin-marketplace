import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LineItem = {
  name?: string;
  quantity?: number;
  unitAmount?: number;
  unit?: string;
  hsnCode?: string;
  productCode?: string;
  totalAmount?: number;
  taxes?: Record<string, unknown>[];
  subItems?: Record<string, unknown>[];
  tags?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lineItemSchema: Schema<LineItem> = s.object<LineItem>(
  {
    name: s.optional(s.string()),
    quantity: s.optional(s.float64()),
    unitAmount: s.optional(s.int()),
    unit: s.optional(s.string()),
    hsnCode: s.optional(s.string()),
    productCode: s.optional(s.string()),
    totalAmount: s.optional(s.int()),
    taxes: s.optional(s.array(s.record(s.string(), s.unknown()))),
    subItems: s.optional(s.array(s.record(s.string(), s.unknown()))),
    tags: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      unitAmount: "unit_amount",
      hsnCode: "hsn_code",
      productCode: "product_code",
      totalAmount: "total_amount",
      subItems: "sub_items",
    },
  },
  { additionalProperties: s.json() },
);
