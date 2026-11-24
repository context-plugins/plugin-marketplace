import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item = {
  /** The retailer's unique product identifier linking this item to its parent product. */
  productCode: string;
  /** The retailer's unique store identifier where this item is sold. */
  storeCode: string;
  /** The current selling price of the item at this store. */
  price?: number;
  /** The promotional or sale price, if applicable. */
  salePrice?: number;
  /** The start date of the sale period. */
  saleStartDate?: string;
  /** The end date of the sale period. */
  saleEndDate?: string;
  /** Whether the item is currently available for purchase at this store. */
  available?: boolean;
  /** The current inventory count at this store. */
  inventoryCount?: number;
  /** The store aisle where the item is located. */
  aisle?: string;
  /** The shelf location within the aisle. */
  shelf?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const itemProperties: s.Shape<Item> = {
  productCode: s.string(),
  storeCode: s.string(),
  price: s.optional(s.float64()),
  salePrice: s.optional(s.float64()),
  saleStartDate: s.optional(s.dateOnly()),
  saleEndDate: s.optional(s.dateOnly()),
  available: s.optional(s.boolean()),
  inventoryCount: s.optional(s.int()),
  aisle: s.optional(s.string()),
  shelf: s.optional(s.string()),
  _keysMap: {
    productCode: "product_code",
    storeCode: "store_code",
    salePrice: "sale_price",
    saleStartDate: "sale_start_date",
    saleEndDate: "sale_end_date",
    inventoryCount: "inventory_count",
  },
};

export const itemInternalSchema: Schema<Item> = s.object<Item>(itemProperties, {
  additionalProperties: s.json(),
});

export const itemSchema: Schema<Item> = s.lazySchema(() =>
  s.object<Item>(
    {
      ...itemProperties,
      price: s.optional(s.float64().check(s.gte(0))),
      salePrice: s.optional(s.float64().check(s.gte(0))),
      inventoryCount: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
